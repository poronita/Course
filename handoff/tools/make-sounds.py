#!/usr/bin/env python3
"""
make-sounds.py - synthesises the placeholder sound library for Image Swiss Knife.

Everything is generated from scratch with numpy (oscillators, filtered noise,
additive/modal synthesis, a small formant voice for the mascot "Pip") and encoded
to mono Ogg Vorbis with the ffmpeg binary.  Nothing is sampled, so there is no
licence risk.  Output is deterministic: every sound is seeded from a stable hash
(CRC32) of its catalogue id, and ffmpeg is run in bit-exact mode.

Usage
    python3 tools/make-sounds.py            # generate all sounds + manifest + README
    python3 tools/make-sounds.py --check    # decode every file and assert quality, write _report.txt
    python3 tools/make-sounds.py --only vx-giggle1 ui-tap    # generate a subset
    python3 tools/make-sounds.py --jobs 4   # parallel workers (default: cpu count)

Inputs : catalogue/catalogue.json   (array `all`, each with id / name / desc / sfx / cat)
Outputs: assets/sounds/<id>.ogg, sounds.json, README.md, _report.txt (with --check)

sfx format is "family:variant:seconds"; the seconds value is the target duration
of the file (the check requires the encoded file to be within 15 percent of it).
"""
import argparse
import json
import math
import os
import subprocess
import sys
import zlib
from concurrent.futures import ProcessPoolExecutor
from functools import lru_cache
from pathlib import Path

import numpy as np

PI2 = 2.0 * np.pi
ROOT = Path(__file__).resolve().parent.parent
CATALOGUE = ROOT / "catalogue" / "catalogue.json"
OUT = ROOT / "assets" / "sounds"
VERSION = "1.0.0"
LICENCE = "CC0 1.0 (synthesised in this repo, no samples used)"

SR_DEFAULT = 24000
SR_HIGH = 32000           # voice + chime families get the higher rate
HIGH_FAMILIES = {"voice", "chime"}
BITRATE = {24000: "40k", 32000: "48k"}
DUR_TOL = 0.15            # +/- 15 percent
LOOP_FAMILIES = {("tick", "soft"), ("air", "loop")}

# Per-id style hints, used only where the same family:variant serves very different
# jobs in the catalogue (the sound must still match the brief in `desc`).
HINTS = {
    "ac-cmp-roller": {"style": "chug"},
    "ac-cnv-blender": {"style": "whirr"},
    "ac-prv-vacuum": {"style": "whine"},
    "tr-drop-bounce": {"style": "bounce"},
    "gm-chest-shake": {"style": "rattle"},
    "vx-drop": {"style": "boing"},
    "ac-crp-chisel": {"style": "chisel"},
    "gm-locked": {"style": "knock"},
    "er-facepalm": {"style": "slap"},
    "ce-mic-drop": {"style": "micdrop"},
    "ac-crp-wall": {"style": "wall"},
    "vx-sleepy": {"tail": "snore"},
    "dl-mailbox": {"style": "mailbox"},
    "ac-vid-surf": {"style": "wave"},
    "ac-bat-sort": {"style": "bins"},
}


# ----------------------------------------------------------------------------
# context object: per-id determinism + small per-id variation
# ----------------------------------------------------------------------------
class V:
    def __init__(self, sid, family, variant, dur):
        self.id = sid
        self.family = family
        self.variant = variant
        self.dur = float(dur)
        self.sr = SR_HIGH if family in HIGH_FAMILIES else SR_DEFAULT
        self.n = nsamp(self.sr, self.dur)
        self.t = np.arange(self.n) / self.sr
        self.seed = zlib.crc32(sid.encode("utf-8")) & 0xFFFFFFFF
        self.rng = np.random.default_rng(self.seed)
        r = self.rng
        self.pitch = 1.0 + r.uniform(-0.05, 0.05)       # +/- 5 percent
        self.tj = 1.0 + r.uniform(-0.06, 0.06)          # timing jitter factor
        self._k = [int(r.integers(0, 1 << 30)) for _ in range(4)]
        self.hint = HINTS.get(sid, {})
        self.loop = (family, variant) in LOOP_FAMILIES

    def pick(self, n, salt=0):
        return self._k[salt % 4] % n

    def jit(self, amt=0.05):
        return 1.0 + self.rng.uniform(-amt, amt)


def nsamp(sr, sec):
    return max(1, int(round(sec * sr)))


# ----------------------------------------------------------------------------
# DSP toolbox (numpy only)
# ----------------------------------------------------------------------------
def crv(pts, log=False):
    """Return f(t) interpolating (time, value) points; log=True interpolates in log domain."""
    xs = np.array([p[0] for p in pts], dtype=float)
    ys = np.array([p[1] for p in pts], dtype=float)
    if log:
        ly = np.log(ys)
        return lambda t: np.exp(np.interp(t, xs, ly))
    return lambda t: np.interp(t, xs, ys)


def as_fn(x, log=True):
    if callable(x):
        return x
    if isinstance(x, (list, tuple)):
        return crv(x, log)
    return lambda t: np.full_like(np.asarray(t, dtype=float), float(x))


def spec_shape(x, gain_fn, sr, frame=512):
    """Time-varying spectral shaping (STFT, 75 percent overlap Hann/Hann OLA).
    gain_fn(freqs[1,B], times[F,1]) -> gain [F,B]. Vectorised; used for every filter sweep."""
    n = len(x)
    hop = frame // 4
    pad = frame
    xp = np.concatenate([np.zeros(pad), x, np.zeros(pad + frame)])
    nf = (len(xp) - frame) // hop + 1
    idx = np.arange(frame)[None, :] + hop * np.arange(nf)[:, None]
    win = np.hanning(frame + 1)[:-1]
    S = np.fft.rfft(xp[idx] * win, axis=1)
    freqs = np.fft.rfftfreq(frame, 1.0 / sr)[None, :]
    centers = ((hop * np.arange(nf) + frame / 2.0 - pad) / sr)[:, None]
    G = np.broadcast_to(gain_fn(freqs, centers), S.shape)
    fr = np.fft.irfft(S * G, frame, axis=1) * win
    y = np.zeros(len(xp))
    for k in range(4):
        seg = fr[k::4].reshape(-1)
        y[hop * k: hop * k + len(seg)] += seg
    return y[pad: pad + n] / 1.5


def bandpass(x, sr, fc, bw=0.6):
    f = as_fn(fc)
    return spec_shape(x, lambda fr, t: np.exp(-0.5 * (np.log2(np.maximum(fr, 1.0) / f(t)) / bw) ** 2), sr)


def lowpass(x, sr, fc, order=2):
    f = as_fn(fc)
    return spec_shape(x, lambda fr, t: 1.0 / np.sqrt(1.0 + (fr / f(t)) ** (2 * order)), sr)


def highpass(x, sr, fc, order=2):
    f = as_fn(fc)
    return spec_shape(x, lambda fr, t: (fr / f(t)) ** order / np.sqrt(1.0 + (fr / f(t)) ** (2 * order)), sr)


def biquad(x, b0, b1, b2, a1, a2):
    """Direct-form-I biquad (python loop; only used on short event buffers)."""
    y = np.zeros(len(x))
    x1 = x2 = y1 = y2 = 0.0
    for i, xi in enumerate(x.tolist()):
        yi = b0 * xi + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2
        y[i] = yi
        x2, x1, y2, y1 = x1, xi, y1, yi
    return y


def resonator(x, sr, f, decay):
    """2-pole resonator ringing at f Hz with time constant `decay` seconds (loop; short buffers only)."""
    r = math.exp(-1.0 / (decay * sr))
    w = PI2 * f / sr
    a1, a2 = -2 * r * math.cos(w), r * r
    y = biquad(x, 1.0 - r, 0.0, 0.0, a1, a2)
    return y / (np.abs(y).max() + 1e-12) * np.abs(x).max()


def pk_(x):
    return x / (np.abs(x).max() + 1e-9)


def smooth_noise(rng, n, sr, fc):
    y = lowpass(rng.standard_normal(n), sr, fc, 2)
    return y / (y.std() + 1e-12)


def smoothstep(u):
    u = np.clip(u, 0.0, 1.0)
    return u * u * (3 - 2 * u)


def place(buf, ev, t0, sr, g=1.0):
    i = int(round(t0 * sr))
    if i >= len(buf) or len(ev) == 0:
        return
    if i < 0:
        ev = ev[-i:]
        i = 0
    m = min(len(ev), len(buf) - i)
    buf[i:i + m] += ev[:m] * g


def place_wrap(buf, ev, t0, sr, g=1.0):
    """Circular placement (for seamless loops built from discrete events)."""
    n = len(buf)
    i = int(round(t0 * sr)) % n
    ev = ev * g
    while len(ev):
        m = min(len(ev), n - i)
        buf[i:i + m] += ev[:m]
        ev = ev[m:]
        i = 0


def mtof(m):
    return 440.0 * 2.0 ** ((np.asarray(m, dtype=float) - 69.0) / 12.0)


PENTA = [0, 2, 4, 7, 9]
MAJOR = [0, 2, 4, 5, 7, 9, 11]


def scale_note(root, scale, i):
    o, k = divmod(i, len(scale))
    return root + 12 * o + scale[k]


@lru_cache(maxsize=32)
def _ir(sr, rt):
    rng = np.random.default_rng(777)
    L = int(sr * rt * 1.1)
    t = np.arange(L) / sr
    ir = rng.standard_normal(L) * np.exp(-t * 6.9 / rt)
    ir = lowpass(ir, sr, 4500, 2) * smoothstep(t / 0.004)
    return ir / np.sqrt(np.sum(ir ** 2))


def reverb(x, sr, rt=0.3, wet=0.2):
    ir = _ir(sr, rt)
    size = 1 << int(np.ceil(np.log2(len(x) + len(ir))))
    y = np.fft.irfft(np.fft.rfft(x, size) * np.fft.rfft(ir, size), size)[:len(x)]
    y *= np.sqrt(np.mean(x ** 2) / (np.mean(y ** 2) + 1e-12)) if np.mean(y ** 2) > 0 else 1
    return x * (1 - 0.5 * wet) + y * wet


def flange(x, sr, d0, d1, rate, ph0=0.0, mix=0.8):
    n = len(x)
    t = np.arange(n) / sr
    lag = (d0 + d1 * (0.5 + 0.5 * np.sin(PI2 * (rate * t if not callable(rate) else rate(t)) + ph0))) * sr
    pos = np.arange(n) - lag
    i0 = np.floor(pos).astype(int)
    fr = pos - i0
    a = np.where(i0 >= 0, x[np.clip(i0, 0, n - 1)], 0.0)
    b = np.where(i0 + 1 >= 0, x[np.clip(i0 + 1, 0, n - 1)], 0.0)
    return x + mix * (a * (1 - fr) + b * fr)


# ---- event / instrument builders -------------------------------------------------
class Ev(np.ndarray):
    """Short event buffer: adding two events of different length zero-pads the shorter one."""

    def __add__(self, o):
        o = np.asarray(o)
        if o.ndim == 1 and o.shape != self.shape:
            a = np.zeros(max(len(self), len(o)))
            a[:len(self)] += np.asarray(self)
            a[:len(o)] += o
            return a.view(Ev)
        return super().__add__(o)

    __radd__ = __add__
    __iadd__ = __add__


def event(fn):
    def wrap(*a, **k):
        return np.asarray(fn(*a, **k)).view(Ev)
    wrap.__name__ = fn.__name__
    return wrap


@event
def ev_modal(sr, dur, freqs, amps, decs, phase=0.0):
    n = nsamp(sr, dur)
    t = np.arange(n) / sr
    y = np.zeros(n)
    for f, a, d in zip(freqs, amps, decs):
        if f < 0.45 * sr:
            y += a * np.sin(PI2 * f * t + phase) * np.exp(-t / d)
    return y * np.minimum(1.0, t / 0.0006)


@event
def ev_noise(rng, sr, dur, fc=None, bw=0.8, atk=0.002, dec=None, hp=None):
    n = nsamp(sr, dur)
    x = rng.standard_normal(n)
    if fc is not None:
        x = bandpass(x, sr, fc, bw)
        x /= (x.std() + 1e-12)
    if hp:
        x = highpass(x, sr, hp)
    t = np.arange(n) / sr
    dec = dec or dur / 4.0
    return x * np.minimum(1.0, t / atk) * np.exp(-t / dec)


@event
def ev_thump(sr, dur, f0, f1, dec, glide=0.3):
    n = nsamp(sr, dur)
    t = np.arange(n) / sr
    f = f1 + (f0 - f1) * np.exp(-t / (dec * glide))
    return np.sin(np.cumsum(f) * PI2 / sr) * np.exp(-t / dec) * np.minimum(1.0, t / 0.001)


@event
def ev_bloop(sr, dur, f0, f1, dec, wob=0.0):
    n = nsamp(sr, dur)
    t = np.arange(n) / sr
    f = f0 * (f1 / f0) ** np.clip(t / (dur * 0.6), 0, 1)
    if wob:
        f = f * (1 + wob * np.sin(PI2 * 28 * t))
    return np.sin(np.cumsum(f) * PI2 / sr) * np.exp(-t / dec) * np.minimum(1.0, t / 0.002)


@event
def ev_wood(sr, rng, f, dec=0.012, bright=1.0, noise=0.3):
    dur = dec * 7
    y = ev_modal(sr, dur, [f, f * 2.43, f * 4.1], [1.0, 0.5 * bright, 0.25 * bright], [dec, dec * 0.7, dec * 0.45])
    if noise:
        y += noise * ev_noise(rng, sr, dur, fc=f * 2.2, bw=1.0, dec=dec * 0.4)
    return y


@event
def ev_metal(sr, rng, f, dec=0.03, noise=0.25):
    dur = dec * 7
    y = ev_modal(sr, dur, [f, f * 1.504, f * 2.38, f * 3.17], [1.0, 0.7, 0.5, 0.3], [dec, dec * 0.8, dec * 0.6, dec * 0.4])
    if noise:
        y += noise * ev_noise(rng, sr, dur, fc=f * 1.7, bw=0.9, dec=dec * 0.3)
    return y


BELL = [(1.0, 1.0, 1.0), (2.0, 0.40, 0.7), (2.76, 0.30, 0.55), (5.4, 0.12, 0.3), (8.9, 0.05, 0.2)]
GLASS = [(1.0, 1.0, 1.0), (2.32, 0.35, 0.6), (4.25, 0.18, 0.4), (6.63, 0.08, 0.25)]


@event
def ev_bell(sr, f, dur, dec, parts=BELL, shimmer=0.0):
    n = nsamp(sr, dur)
    t = np.arange(n) / sr
    y = np.zeros(n)
    for r, a, dm in parts:
        fr = f * r
        if fr < 0.45 * sr:
            y += a * np.sin(PI2 * fr * t) * np.exp(-t / (dec * dm))
            if shimmer:
                y += 0.5 * a * np.sin(PI2 * fr * (1 + shimmer) * t + 1.3) * np.exp(-t / (dec * dm))
    return y * np.minimum(1.0, t / 0.002)


@event
def ev_pluck(sr, f, dur, dec=None, bright=1.0):
    n = nsamp(sr, dur)
    t = np.arange(n) / sr
    dec = dec or dur * 0.3
    e = np.exp(-t / dec) * np.minimum(1.0, t / 0.003)
    y = np.sin(PI2 * f * t) + 0.5 * np.sin(PI2 * f * 1.0045 * t + 1.0)
    y += bright * 0.30 * np.sin(PI2 * 2 * f * t) * np.exp(-t / (dec * 0.5)) if 2 * f < 0.45 * sr else 0
    y += bright * 0.10 * np.sin(PI2 * 3 * f * t + 0.4) * np.exp(-t / (dec * 0.3)) if 3 * f < 0.45 * sr else 0
    return y * e


@event
def ev_brass(sr, f, dur, vib=0.0045, attack=0.03, release=0.06, bright=1.0, decay=None):
    n = nsamp(sr, dur)
    t = np.arange(n) / sr
    env = smoothstep(t / attack) * smoothstep((dur - t) / release)
    if decay:
        env = env * (0.65 + 0.35 * np.exp(-t / decay))
    fc = f * (2.0 + 5.0 * bright * smoothstep(t / (attack * 2.5)))
    vf = 1 + vib * smoothstep((t - 0.10) / 0.15) * np.sin(PI2 * 5.6 * t)
    y = np.zeros(n)
    for det, g in ((0.9983, 0.5), (1.0017, 0.5)):
        ph = np.cumsum(f * det * vf) * PI2 / sr
        for h in range(1, 40):
            if h * f * det > 0.45 * sr:
                break
            y += g * np.sin(h * ph) / h * (1.0 / (1.0 + (h * f / fc) ** 4))
    return y * env


# ----------------------------------------------------------------------------
# families
# ----------------------------------------------------------------------------
def white(v):
    return v.rng.standard_normal(v.n)


def swell(t, dur, pk=0.45, power=1.4):
    up = np.clip(t / (pk * dur), 0, 1)
    dn = np.clip((dur - t) / ((1 - pk) * dur), 0, 1)
    return np.minimum(up, dn) ** power


# ---------------------------------------------------------------- air
def f_air(variant, dur, v):
    sr, n, t, rng = v.sr, v.n, v.t, v.rng
    if variant == "deflate":
        f0 = crv([(0, 240), (0.12 * dur, 210), (dur, 62)], log=True)(t) * v.pitch
        f0 = f0 * (1 + 0.16 * smooth_noise(rng, n, sr, 16))
        am = np.clip(0.55 + 0.5 * smooth_noise(rng, n, sr, 30), 0, 1)
        ph = np.cumsum(f0) * PI2 / sr
        src = np.zeros(n)
        for h in range(1, 26):
            src += np.sin(h * ph + h * 0.3) * h ** -0.6
        src /= 4.0
        noise = rng.standard_normal(n)
        body = (src * 0.9 + 0.55 * noise) * am
        body = lowpass(body, sr, crv([(0, 3200), (dur, 520)], log=True), 2)
        hiss = highpass(noise, sr, 2800) * 0.22 * crv([(0, 1), (0.25 * dur, 0.15), (dur, 0.05)])(t)
        env = smoothstep(t / 0.008) * (1 - smoothstep((t - 0.55 * dur) / (0.45 * dur))) ** 0.8
        return (body * 1.2 + hiss) * env
    if variant == "flame":
        noise = white(v)
        grow = crv([(0, 0.3), (0.5 * dur, 1.0), (dur, 0.35)])(t)
        flick = np.clip(0.75 + 0.35 * smooth_noise(rng, n, sr, 9), 0.2, 1.4)
        bed = lowpass(noise, sr, crv([(0, 450), (0.5 * dur, 1500), (dur, 600)], log=True), 2)
        bed = bed / bed.std() * grow * flick
        rate = 60 * grow ** 2
        imp = (rng.random(n) < rate / sr) * rng.uniform(0.3, 1.0, n) * rng.choice([-1, 1], n)
        crack = pk_(bandpass(imp, sr, 2600 * v.pitch, 1.1)) * 2.2 * grow
        sw = bandpass(noise, sr, crv([(0, 300), (0.3 * dur, 1300), (dur, 500)], log=True), 0.8)
        sw = sw / sw.std() * swell(t, dur, 0.28, 1.2) * 0.9
        whump = ev_thump(sr, 0.25, 110 * v.pitch, 48, 0.09)
        out = 0.55 * bed + 0.6 * crack + sw * 0.5
        place(out, whump, 0.0, sr, 1.3)
        return out * smoothstep(t / 0.004) * (1 - smoothstep((t - 0.7 * dur) / (0.3 * dur)))
    if variant == "loop":
        L = int(0.06 * sr)
        ne = n + L
        te = np.arange(ne) / sr
        c1 = max(1, round(dur * 1.5))
        c2 = max(1, round(dur * 2.5))
        noise = rng.standard_normal(ne)
        fc = (780 * v.pitch) * (1 + 0.32 * np.sin(PI2 * c1 * te / dur + 0.7)) * (1 + 0.1 * np.sin(PI2 * c2 * te / dur))
        fcf = lambda tt: np.interp(tt, te, fc)
        air = bandpass(noise, sr, fcf, 0.85)
        air = air / air.std() * (0.8 + 0.2 * np.sin(PI2 * c2 * te / dur + 1.9))
        shim = highpass(bandpass(rng.standard_normal(ne), sr, 3200, 0.8), sr, 1800)
        shim = shim / shim.std() * 0.22 * (0.6 + 0.4 * np.sin(PI2 * c1 * te / dur + 3.0))
        hum = np.zeros(ne)
        for fr, g, p in ((165, 0.12, 0.3), (247.5, 0.07, 1.1), (330.5, 0.04, 2.0)):
            fq = round(fr * v.pitch * dur) / dur
            hum += g * np.sin(PI2 * fq * te + p) * (1 + 0.3 * np.sin(PI2 * c1 * te / dur + p))
        x = air + shim + hum * 2.0
        y = x[:n].copy()
        th = np.linspace(0, np.pi / 2, L)
        y[:L] = x[:L] * np.sin(th) + x[n:n + L] * np.cos(th)       # equal-power crossfade
        return y
    raise KeyError(variant)


# ---------------------------------------------------------------- arp
def f_arp(variant, dur, v):
    sr, n, rng = v.sr, v.n, v.rng
    roots = [60, 62, 64, 65, 67, 59]
    root = roots[v.pick(len(roots))] + (0 if dur > 0.2 else 7)
    pat = v.pick(3, 1)
    scale = [MAJOR, PENTA, [0, 4, 7, 9]][pat] if dur > 0.2 else [0, 4, 7, 12]
    nn = int(np.clip(round(dur / 0.085), 2, 14))
    if dur <= 0.2:
        nn = 2
    gap = np.clip(dur * 0.62 / max(nn - 1, 1), 0.04, 0.11) * v.tj
    if dur <= 0.2:
        gap = dur * 0.42
    buf = np.zeros(n)
    for i in range(nn):
        m = scale_note(root, scale if dur > 0.2 else [0, 4, 7, 12], i if dur > 0.2 else (0 if i == 0 else 2))
        f = float(mtof(m)) * v.pitch
        t0 = i * gap + rng.uniform(-0.002, 0.002) * (i > 0)
        last = i == nn - 1
        ring = (dur - t0) if last else min(0.35, dur - t0)
        ev = ev_pluck(sr, f, max(ring, 0.05), dec=min((0.28 if last else 0.14) * min(1.0, 0.5 + dur) + 0.03, max(ring, 0.05) * 0.42))
        place(buf, ev, max(t0, 0.0), sr, 0.8 + 0.2 * i / max(nn - 1, 1))
    if dur > 0.2:
        buf = reverb(buf, sr, 0.35, 0.22)
        # airy sparkle on top of the last note
        sp = ev_bell(sr, float(mtof(root + 24)) * v.pitch, min(0.5, dur), 0.12, GLASS)
        place(buf, sp, (nn - 1) * gap, sr, 0.18)
    return buf


# ---------------------------------------------------------------- beep
def f_beep(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t

    def tone(f0, f1, d, wave="tri", g=1.0):
        m = nsamp(sr, d)
        tt = np.arange(m) / sr
        f = f0 * (f1 / f0) ** np.clip(tt / d, 0, 1)
        ph = np.cumsum(f) * PI2 / sr
        if wave == "tri":
            y = np.sin(ph) + 0.11 * np.sin(3 * ph + 3.14159) + 0.04 * np.sin(5 * ph)
        elif wave == "hollow":
            y = np.sin(ph) + 0.33 * np.sin(3 * ph) + 0.2 * np.sin(5 * ph) + 0.08 * np.sin(7 * ph)
        else:  # pulse (25-40 percent) bandlimited, 8-bit flavour
            duty = 0.3 + 0.1 * (v.pick(2, 2))
            y = np.zeros(m)
            for h in range(1, 14):
                if h * f1 > 0.4 * sr and h * f0 > 0.4 * sr:
                    break
                y += np.sin(np.pi * h * duty) / h * np.cos(h * ph - np.pi * h * duty)
            y *= 0.9
        e = smoothstep(tt / 0.004) * smoothstep((d - tt) / min(0.03, d * 0.4)) * np.exp(-tt / (d * 1.6))
        return y * e * g

    buf = np.zeros(n)
    if variant == "down":
        if dur <= 0.15:
            place(buf, tone(720 * v.pitch, 430 * v.pitch, dur * 0.95), 0, sr)
        else:
            hollow = dur >= 0.35
            base = (400 if hollow else 330) * v.pitch
            nd = dur * (0.34 if hollow else 0.36)
            place(buf, tone(base, base * 0.93, nd, "hollow" if hollow else "tri"), 0, sr)
            place(buf, tone(base * 0.84, base * 0.78, nd * 1.2, "hollow" if hollow else "tri"), dur * (0.4 if hollow else 0.42), sr, 0.9)
        return lowpass(buf, sr, 3500)
    if variant == "retro":
        root = [72, 74, 76, 69][v.pick(4)]
        k = int(np.clip(round(dur / 0.11), 1, 4))
        if dur <= 0.15:
            place(buf, tone(float(mtof(root)) * v.pitch, float(mtof(root + 7)) * v.pitch, dur * 0.9, "pulse"), 0, sr)
        else:
            step = dur / (k + 0.4)
            for i in range(k):
                m = scale_note(root - 5, PENTA, i * 2 if k > 1 else 0)
                place(buf, tone(float(mtof(m)) * v.pitch, float(mtof(m)) * v.pitch * 1.01, step * 0.85, "pulse"), i * step, sr, 0.8 + 0.07 * i)
            if dur >= 0.45:   # tiny disk/scan buzz underneath
                bz = ev_noise(rng, sr, dur * 0.25, fc=900, bw=0.8, dec=dur * 0.1)
                place(buf, bz, 0, sr, 0.14)
        return lowpass(buf, sr, 4800)
    if variant == "radar":
        sweep_f = (380 + 160 * np.sin(PI2 * (1.2 / dur) * t + 0.3 * v.pick(5))) * v.pitch
        hum = np.sin(np.cumsum(sweep_f) * PI2 / sr) * 0.10 * (0.6 + 0.4 * np.sin(PI2 * 3.5 * t))
        hum *= swell(t, dur, 0.55, 0.8)
        ping_f = 880 * v.pitch
        for tp, g in ((0.14, 1.0), (0.46, 0.6)):
            ping = ev_bell(sr, ping_f, 0.35, 0.09, GLASS)
            place(buf, ping, tp * dur, sr, g * 0.8)
            place(buf, ping, tp * dur + 0.17, sr, g * 0.3)   # soft echo
        for k in (0, 1):  # confirm blip
            place(buf, tone(1318 * v.pitch, 1318 * v.pitch, min(0.07, dur * 0.1), "tri", 0.7), dur * 0.78 + k * 0.09 * min(1, dur), sr)
        return reverb(buf + hum, sr, 0.25, 0.15)
    raise KeyError(variant)


# ---------------------------------------------------------------- chime
def f_chime(variant, dur, v):
    sr, n, rng = v.sr, v.n, v.rng
    buf = np.zeros(n)
    if variant == "ok":
        base = [587, 659, 698, 740, 784][v.pick(5)] * v.pitch
        ratio = [5 / 4, 4 / 3, 6 / 5 * 1.0][v.pick(2, 1)] if dur < 1.0 else 5 / 4
        gap = float(np.clip(0.2 * dur, 0.07, 0.18)) * v.tj
        dec = max(0.05, dur * 0.2)
        parts = BELL if v.pick(2, 2) == 0 else GLASS
        a = ev_bell(sr, base, dur, dec, parts, shimmer=0.002)
        b = ev_bell(sr, base * ratio, dur - gap, dec * 1.3, parts, shimmer=0.002)
        place(buf, a, 0, sr, 0.75)
        place(buf, b, gap, sr, 1.0)
        if dur >= 0.8:  # heavier clink for trophies / rewards
            place(buf, ev_metal(sr, rng, 2200 * v.pitch, 0.04), 0, sr, 0.6)
            place(buf, ev_bell(sr, base * 2 * ratio, dur - gap, dec * 0.8, GLASS), gap, sr, 0.25)
        return reverb(buf, sr, 0.4, 0.2)
    if variant in ("bellL", "bellR"):
        f = (587.3 if variant == "bellL" else 880.0) * v.pitch
        b = ev_bell(sr, f, dur, dur * 0.22, BELL, shimmer=0.0025)
        place(buf, b, 0, sr, 1.0)
        place(buf, ev_noise(rng, sr, 0.02, fc=f * 3, bw=0.8, dec=0.004), 0, sr, 0.25)
        return reverb(buf, sr, 0.35, 0.18)
    raise KeyError(variant)


# ---------------------------------------------------------------- click
def f_click(variant, dur, v):
    sr, n, rng = v.sr, v.n, v.rng
    buf = np.zeros(n)
    if variant == "soft":
        place(buf, ev_wood(sr, rng, 1250 * v.pitch, 0.010, 0.8, 0.25), 0, sr)
        place(buf, ev_thump(sr, 0.04, 320, 160, 0.012), 0, sr, 0.3)
        return buf
    if variant == "clap":
        base = 1500 * v.pitch
        for k, tt in enumerate((0.0, 0.011, 0.021, 0.034)):
            place(buf, ev_noise(rng, sr, 0.018, fc=base, bw=0.9, dec=0.004), tt * v.tj, sr, 0.7 + 0.1 * k)
        place(buf, ev_noise(rng, sr, 0.12, fc=base * 0.7, bw=1.0, dec=0.035), 0.03, sr, 0.8)
        place(buf, ev_wood(sr, rng, 1800 * v.pitch, 0.016, 1.2, 0.2), 0.0, sr, 0.8)   # woody clapper crack
        place(buf, ev_thump(sr, 0.08, 260, 120, 0.03), 0, sr, 0.35)
        return reverb(buf, sr, 0.3, 0.25)
    if variant == "magnet":
        te = 0.8 * dur
        m = nsamp(sr, te)
        tt = np.arange(m) / sr
        f = 260 * (2100 / 260) ** (tt / te) ** 1.8 * v.pitch
        trem = 1 + 0.35 * np.sin(PI2 * (8 + 40 * (tt / te) ** 2) * tt)
        y = np.sin(np.cumsum(f) * PI2 / sr) * trem * (tt / te) ** 1.3 + 0.3 * np.sin(np.cumsum(f * 2.01) * PI2 / sr) * (tt / te)
        place(buf, y, 0, sr, 0.5)
        place(buf, ev_metal(sr, rng, 2600 * v.pitch, 0.03), te, sr, 1.0)
        place(buf, ev_thump(sr, 0.1, 200, 90, 0.03), te, sr, 0.8)
        for k in range(5):
            place(buf, ev_metal(sr, rng, rng.uniform(3200, 5200), 0.008, 0.1), te + 0.04 + rng.uniform(0, 0.25 * dur), sr, rng.uniform(0.12, 0.3))
        return buf
    if variant == "racket":
        hits = 3 if dur >= 0.58 else 2
        times = [0.02, 0.44 * dur, 0.78 * dur][:hits]
        for i, tt in enumerate(times):
            f = (520 if i % 2 == 0 else 440) * v.pitch * (1 + 0.04 * i)
            pok = ev_thump(sr, 0.16, f * 1.15, f * 0.62, 0.05, 0.25)
            pok += 0.4 * ev_noise(rng, sr, 0.03, fc=1900, bw=0.9, dec=0.006)
            pok += 0.18 * ev_modal(sr, 0.15, [f * 1.9, f * 2.7], [1, 0.6], [0.05, 0.03])
            place(buf, pok, tt * v.tj if i else 0, sr, 1.0 - 0.15 * i)
        return buf
    if variant == "ratchet":
        k = int(np.clip(round(dur * 13), 4, 9))
        for i in range(k):
            tt = (0.86 * dur) * i / max(k - 1, 1) * v.jit(0.02) if i else 0.0
            f = 2300 * v.pitch * (1 + 0.03 * i)
            c = ev_metal(sr, rng, f, 0.007, 0.5)
            c += 0.5 * ev_thump(sr, 0.04, 520, 260, 0.01)
            place(buf, c, tt, sr, 0.75 + 0.25 * (i % 2))
        return buf
    if variant == "reel":
        k = int(np.clip(round(dur * 26), 12, 30))
        for i in range(k):
            u = i / (k - 1)
            tt = 0.78 * dur * u ** 1.9
            f = float(rng.choice([1500, 1800, 2200, 2700, 3200])) * v.pitch
            place(buf, ev_wood(sr, rng, f, 0.005, 0.8, 0.4), tt, sr, 0.5 + 0.4 * (1 - u))
        tl = 0.80 * dur
        place(buf, ev_thump(sr, 0.18, 170 * v.pitch, 72, 0.06), tl, sr, 1.0)
        place(buf, ev_metal(sr, rng, 1500, 0.02), tl, sr, 0.5)
        place(buf, ev_bell(sr, 1760 * v.pitch, 0.35, 0.09, GLASS), tl + 0.03, sr, 0.45)
        return reverb(buf, sr, 0.25, 0.14)
    if variant == "shutter":
        gap = min(0.14, 0.4 * dur) * v.tj if dur < 0.4 else 0.36 * dur
        c1 = ev_metal(sr, rng, 2900 * v.pitch, 0.006, 0.8) + 0.5 * ev_thump(sr, 0.05, 700, 300, 0.012)
        c2 = ev_metal(sr, rng, 2300 * v.pitch, 0.007, 0.8) + 0.5 * ev_thump(sr, 0.05, 520, 240, 0.012)
        place(buf, c1, 0, sr, 1.0)
        place(buf, c2, gap, sr, 0.8)
        if dur >= 0.4:   # blades whirr between the two clicks
            wh = ev_noise(rng, sr, gap * 0.8, fc=crv([(0, 1500), (gap * 0.8, 3200)], log=True), bw=0.6, atk=0.01, dec=gap * 0.5)
            place(buf, wh, 0.02, sr, 0.35)
        return buf
    if variant == "tickrun":
        k = int(np.clip(round(dur * 14), 6, 12))
        style = v.pick(2)
        fs = [1500, 1800, 2200, 2700] if style else [2000, 2000, 2300, 2000]
        for i in range(k):
            tt = (0.9 * dur) * i / k * (1 + rng.uniform(-0.03, 0.03) if i else 1)
            f = fs[int(rng.integers(0, len(fs)))] * v.pitch if dur > 0.7 else 2000 * v.pitch * (1 + 0.02 * (i % 3))
            place(buf, ev_wood(sr, rng, f, 0.006, 0.8, 0.35), tt, sr, 0.6 + 0.4 * ((i % 4) == 0))
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- coin
@event
def ev_coin(sr, rng, f, dec=0.09):
    return ev_modal(sr, dec * 6, [f, f * 1.51, f * 2.37, f * 3.92], [1, 0.6, 0.4, 0.2], [dec, dec * 0.7, dec * 0.5, dec * 0.3]) \
        + 0.15 * ev_noise(rng, sr, dec, fc=f * 2, bw=0.7, dec=dec * 0.1)


def f_coin(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "shower":
        k = int(np.clip(round(dur * 30), 4, 36))
        if dur < 0.6:
            k = 4
        for i in range(k):
            u = i / k
            tt = (0.82 * dur) * (u if dur < 0.6 else (0.0 if i == 0 else rng.beta(2.0, 2.2)))
            f = float(rng.choice([2093, 2349, 2637, 3136, 3520, 4186])) * v.pitch * (0.6 + 0.4 * (i == 0))
            g = (0.45 + 0.5 * rng.random()) * (0.6 + 0.4 * np.sin(np.pi * min(1, u * 1.2)))
            if dur < 0.6:
                f = [2349, 3136, 3951, 4699][i] * v.pitch
                g = 0.6 + 0.12 * i
            place(buf, ev_coin(sr, rng, f, 0.06 + 0.05 * rng.random()), tt, sr, g)
        return reverb(buf, sr, 0.25, 0.16)
    if variant == "spin":
        te = dur
        f0 = 2400 * v.pitch
        prog = t / te
        fm = f0 * (1 + 0.06 * prog ** 2)
        rate = 6 + 70 * prog ** 2.2
        am = 0.55 + 0.45 * np.sin(np.cumsum(rate) * PI2 / sr)
        y = np.zeros(n)
        for r, a in ((1, 1.0), (1.51, 0.5), (2.37, 0.3), (3.92, 0.12)):
            y += a * np.sin(np.cumsum(fm * r) * PI2 / sr)
        env = np.exp(-prog * 2.2) * (1 - smoothstep((prog - 0.82) / 0.18)) + 0.0
        rattle = bandpass(rng.standard_normal(n), sr, 3200, 0.5) * 0.15 * smoothstep((prog - 0.55) / 0.3) * (1 - smoothstep((prog - 0.85) / 0.15))
        out = y * am * env * 0.4 + rattle * (0.6 + 0.4 * am)
        place(out, ev_coin(sr, rng, 2200 * v.pitch, 0.05), 0, sr, 0.5)
        return out
    if variant == "tick":
        place(buf, ev_coin(sr, rng, 3000 * v.pitch, 0.014), 0, sr)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- fanfare
def f_fanfare(variant, dur, v):
    sr, n, rng = v.sr, v.n, v.rng
    buf = np.zeros(n)
    roots = [60, 62, 65, 67]
    root = roots[v.pick(len(roots))]
    big = variant == "big"
    u = (0.15 if big else 0.105) * v.tj
    notes = [(0, 0.0), (7, 1.0), (12, 2.0), (9, 3.4), (16, 4.4)] if big else [(0, 0.0), (7, 1.0), (4, 2.0), (12, 3.2)]
    final_t = notes[-1][1] * u
    for i, (st, tk) in enumerate(notes):
        last = i == len(notes) - 1
        t0 = tk * u
        d = (dur - t0) if last else (u * (1.05 if i < 2 else 1.5))
        f = float(mtof(root + st)) * v.pitch
        ev = ev_brass(sr, f, d, attack=0.022, release=min(0.25, d * 0.6) if last else 0.04, bright=1.0 + 0.2 * i,
                      decay=0.5 if last else None)
        place(buf, ev, t0, sr, 0.8 if not last else 1.0)
    # final chord held under the last note: major triad + low octave (brass section)
    for st in ([root - 12, root + 7, root + 12 + 4] if big else [root - 12, root + 4 + 12]):
        f = float(mtof(st)) * v.pitch
        d = dur - final_t
        place(buf, ev_brass(sr, f, d, attack=0.04, release=min(0.3, d * 0.5), bright=0.8, decay=0.6), final_t, sr, 0.55)
    # cymbal-like shimmer + chime sparkle at the arrival
    shim = ev_noise(rng, sr, min(0.9, dur - final_t), fc=6500, bw=0.9, dec=0.25, hp=3500)
    place(buf, shim, final_t, sr, 0.22)
    place(buf, ev_bell(sr, float(mtof(root + 36)) * v.pitch, min(0.8, dur - final_t), 0.2, GLASS), final_t, sr, 0.18)
    return reverb(buf, sr, 0.5 if big else 0.4, 0.2)


# ---------------------------------------------------------------- glitch
def f_glitch(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "short":
        tt = 0.0
        while tt < dur * 0.95:
            ln = rng.uniform(0.014, 0.04)
            kind = int(rng.integers(0, 3))
            m = nsamp(sr, ln)
            x = np.arange(m) / sr
            if kind == 0:
                f = float(rng.choice([440, 660, 880, 1320, 1760, 2400])) * v.pitch
                seg = np.sign(np.sin(PI2 * f * x)) * 0.5
            elif kind == 1:
                seg = rng.standard_normal(m) * 0.5
            else:
                f = float(rng.uniform(300, 3000))
                seg = np.sin(PI2 * f * x * (1 + 3 * x / ln))
            # sample-rate reduce / bit crush
            hold = int(rng.integers(2, 6))
            seg = np.repeat(seg[::hold], hold)[:m]
            seg = np.round(seg * 6) / 6
            seg *= smoothstep(x / 0.002) * smoothstep((ln - x) / 0.003)
            reps = int(rng.integers(1, 3))
            for r in range(reps):
                place(buf, seg, tt + r * ln, sr, 0.8)
            tt += ln * reps + rng.uniform(0.0, 0.012)
        return lowpass(buf, sr, 7500)
    if variant == "scratch":
        # DJ record scrub: playhead speed follows back-and-forth strokes
        k = max(3, int(round(dur * 5.5)))
        speed = np.zeros(n)
        edges = np.linspace(0, dur, k + 1)
        for i in range(k):
            m = (t >= edges[i]) & (t < edges[i + 1])
            u = (t[m] - edges[i]) / (edges[i + 1] - edges[i])
            sgn = 1 if i % 2 == 0 else -1
            speed[m] = sgn * (0.3 + rng.uniform(1.4, 2.6)) * np.sin(np.pi * u) ** 0.6
        base = 190 * v.pitch
        fq = base * np.abs(speed) + 8
        ph = np.cumsum(fq) * PI2 / sr
        y = np.zeros(n)
        for h in range(1, 18):
            y += np.sin(h * ph) / h ** 0.9
        y = lowpass(y, sr, crv([(0, 3500)]), 2)
        amp = np.clip(np.abs(speed), 0, 1.2) ** 0.8
        crackle = (rng.random(n) < 90 / sr) * rng.standard_normal(n)
        crackle = pk_(highpass(crackle, sr, 2500)) * 1.0
        hiss = highpass(rng.standard_normal(n), sr, 3000) * 0.05
        out = y * amp * 0.7 + crackle * 0.3 + hiss * amp
        return out * smoothstep(t / 0.01) * smoothstep((dur - t) / 0.05)
    if variant == "shatter":
        place(buf, ev_noise(rng, sr, 0.06, fc=5000, bw=1.2, dec=0.012, hp=2500), 0, sr, 1.0)
        place(buf, ev_metal(sr, rng, 3400 * v.pitch, 0.02, 0.8), 0, sr, 0.8)
        place(buf, ev_thump(sr, 0.1, 260, 110, 0.03), 0, sr, 0.5)
        k = int(dur * 70)
        for i in range(k):
            u = rng.random() ** 1.7
            tt = 0.01 + u * dur * 0.8
            f = float(rng.uniform(2200, 9500))
            dec = rng.uniform(0.008, 0.05)
            g = (1 - u) * rng.uniform(0.2, 0.7)
            place(buf, ev_modal(sr, dec * 6, [f, f * 1.43], [1, 0.4], [dec, dec * 0.6]), tt, sr, g)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- laser
def f_laser(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    # four straight cuts with a tiny pitch step at each corner
    steps = np.array([1.0, 1.06, 0.97, 1.1])
    seg = np.minimum((t / dur * 4).astype(int), 3)
    f = 640 * v.pitch * steps[seg]
    f = f * (1 + 0.012 * np.sin(PI2 * 9 * t))
    ph = np.cumsum(f) * PI2 / sr
    y = np.zeros(n)
    for h in range(1, 14):
        if h * f.max() > 0.45 * sr:
            break
        y += np.sin(h * ph) / h ** 1.1
    whine = np.sin(np.cumsum(f * 4.01) * PI2 / sr) * 0.12
    sizzle = highpass(rng.standard_normal(n), sr, 3000) * 0.25
    sizzle *= (0.55 + 0.45 * np.clip(smooth_noise(rng, n, sr, 60), -1, 1))
    imp = (rng.random(n) < 55 / sr) * rng.uniform(0.3, 1, n)
    sparks = pk_(bandpass(imp, sr, 4200, 0.9)) * 0.9
    env = smoothstep(t / 0.03) * smoothstep((dur - t) / 0.12)
    out = (y * 0.55 + whine + sizzle + sparks * 0.5) * env
    return lowpass(out, sr, 8500)


# ---------------------------------------------------------------- magic
def sparkle_tail(buf, sr, rng, t0, d, f_lo, f_hi, k, g=0.3, hi=None):
    for i in range(k):
        tt = t0 + rng.random() ** 1.2 * d
        f = float(np.exp(rng.uniform(np.log(f_lo), np.log(f_hi))))
        dec = rng.uniform(0.03, 0.09)
        gg = g * rng.uniform(0.3, 1.0) * (1 - (tt - t0) / (d + 1e-9) * 0.7)
        place(buf, ev_modal(sr, dec * 5, [f, f * 2.01], [1, 0.25], [dec, dec * 0.5]), tt, sr, gg)


def f_magic(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "glide":
        tg = 0.62 * dur
        if v.pick(2) == 0:   # smooth glissando
            f = 380 * (2600 / 380) ** smoothstep(t / tg) * v.pitch
            f *= 1 + 0.01 * np.sin(PI2 * 6 * t)
            y = np.zeros(n)
            for det in (0.996, 1.004):
                ph = np.cumsum(f * det) * PI2 / sr
                y += np.sin(ph) + 0.3 * np.sin(2 * ph)
            y *= smoothstep(t / 0.02) * smoothstep((tg * 1.15 - t) / (0.3 * dur)) * 0.5
            buf += y
        else:                # harp-like pentatonic sweep
            k = int(tg / 0.028)
            root = 62 + 2 * v.pick(3, 1)
            for i in range(k):
                m = scale_note(root, PENTA, i)
                place(buf, ev_pluck(sr, float(mtof(m)) * v.pitch, 0.35, 0.16), i * 0.028, sr, 0.5)
        sparkle_tail(buf, sr, rng, tg * 0.8, dur - tg * 0.85, 2500, 8000, int(dur * 24), 0.22)
        return reverb(buf, sr, 0.4, 0.22)
    if variant == "juggle":
        k = max(4, int(dur / 0.105))
        pat = [0, 2, 4, 2, 5, 3]
        root = 60 + 2 * v.pick(3)
        drop = v.pick(3) == 0
        for i in range(k):
            tt = i * (dur - 0.12) / k * (1 if i == 0 else v.jit(0.015))
            m = scale_note(root, PENTA, pat[i % len(pat)])
            f = float(mtof(m)) * v.pitch
            if drop and i == k - 1:
                ev = ev_bloop(sr, 0.12, f * 1.4, f * 0.5, 0.06)
            else:
                ev = ev_bloop(sr, 0.12, f * 0.78, f * 1.15, 0.05)
            place(buf, ev, tt, sr, 0.75)
            place(buf, ev_wood(sr, rng, 2400, 0.004, 0.5, 0.3), tt + 0.075, sr, 0.15)   # catch tick
        return reverb(buf, sr, 0.25, 0.14)
    if variant == "morph":
        f = 300 * (1000 / 300) ** smoothstep(t / (0.7 * dur)) * v.pitch
        f = f * (1 + 0.025 * np.sin(PI2 * (4 + 6 * t / dur) * t))
        y = np.zeros(n)
        fc = crv([(0, 600), (0.35 * dur, 3200), (0.7 * dur, 1000), (dur, 2400)], log=True)(t)
        for det in (0.994, 1.006):
            ph = np.cumsum(f * det) * PI2 / sr
            for h in range(1, 26):
                y += np.sin(h * ph) / h * (1.0 / (1.0 + (h * f / fc) ** 2)) * 0.6
        ring = np.sin(np.cumsum(f * 2.01) * PI2 / sr) * np.sin(PI2 * (18 + 30 * t / dur) * t) * 0.18
        env = smoothstep(t / 0.04) * (1 - smoothstep((t - 0.62 * dur) / (0.2 * dur)))
        buf = (y + ring) * env
        tp = 0.76 * dur
        place(buf, ev_bell(sr, 1318 * v.pitch, dur - tp, 0.18, GLASS), tp, sr, 0.7)
        sparkle_tail(buf, sr, rng, tp, dur - tp, 3000, 8000, int(dur * 14), 0.2)
        return reverb(buf, sr, 0.35, 0.2)
    if variant == "portal":
        noise = white(v)
        fc = crv([(0, 250), (0.6 * dur, 1800), (dur, 900)], log=True)(t)
        sw = bandpass(noise, sr, lambda tt: np.interp(tt, t, fc), 0.8)
        sw = flange(sw / sw.std(), sr, 0.0007, 0.0025, 5.0, 0.0, 0.9) * swell(t, dur, 0.5, 1.2) * 0.5
        sub = np.sin(np.cumsum(crv([(0, 70), (0.5 * dur, 190), (dur, 130)])(t) * v.pitch) * PI2 / sr) * swell(t, dur, 0.4, 1.0) * 0.7
        tone = np.zeros(n)
        for r, a in ((1, 1.0), (1.5, 0.6), (2.02, 0.35)):
            tone += a * np.sin(np.cumsum(crv([(0, 220), (0.6 * dur, 440), (dur, 440)])(t) * r * v.pitch) * PI2 / sr)
        tone *= (0.7 + 0.3 * np.sin(PI2 * 7 * t)) * swell(t, dur, 0.55, 1.4) * 0.2
        buf = sw + sub + tone
        sparkle_tail(buf, sr, rng, 0.4 * dur, 0.55 * dur, 1800, 6000, int(dur * 16), 0.18)
        return buf * smoothstep(t / 0.015)
    if variant == "reveal":
        tr = 0.5 * dur
        creak = 0.0
        t0 = 0.0
        if dur >= 1.15:       # chest creak first
            cd = 0.26
            m = nsamp(sr, cd)
            tt = np.arange(m) / sr
            f = (95 + 60 * (tt / cd) + 8 * np.sin(PI2 * 11 * tt) + 6 * rng.standard_normal(m) * 0.2) * v.pitch
            ph = np.cumsum(f) * PI2 / sr
            cr = sum(np.sin(h * ph) / h ** 0.8 for h in range(1, 20))
            cr = bandpass(cr, sr, 700, 0.8) * smoothstep(tt / 0.03) * smoothstep((cd - tt) / 0.06)
            place(buf, cr / (np.abs(cr).max() + 1e-9), 0, sr, 0.4)
            t0 = 0.3
        rs = dur * 0.45 - t0 * 0.5
        m = nsamp(sr, rs)
        tt = np.arange(m) / sr
        ris = bandpass(rng.standard_normal(m), sr, crv([(0, 600), (rs, 5200)], log=True), 0.7)
        ris = ris / ris.std() * (tt / rs) ** 1.6 * 0.5
        shim = np.sin(np.cumsum(crv([(0, 500), (rs, 1500)])(tt) * v.pitch) * PI2 / sr) * (tt / rs) ** 2 * 0.25
        place(buf, ris + shim, t0, sr, 1.0)
        tb = t0 + rs
        root = 72 + 2 * v.pick(3)
        for i, st in enumerate((0, 4, 7, 14, 16)):
            place(buf, ev_bell(sr, float(mtof(root + st)) * v.pitch, dur - tb, 0.22 + 0.04 * i, GLASS, 0.002), tb + 0.012 * i, sr, 0.5 - 0.04 * i)
        place(buf, ev_noise(rng, sr, 0.15, fc=4000, bw=1.0, dec=0.05, hp=2000), tb, sr, 0.6)
        sparkle_tail(buf, sr, rng, tb, dur - tb, 2500, 9000, int((dur - tb) * 36), 0.25)
        return reverb(buf, sr, 0.5, 0.22)
    raise KeyError(variant)


# ---------------------------------------------------------------- mech
@event
def pawl_click(sr, rng, f, g=1.0):
    return g * (ev_metal(sr, rng, f, 0.008, 0.5) + 0.5 * ev_thump(sr, 0.04, 520, 240, 0.01))


def f_mech(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "snap":
        ns = 1 if dur < 0.65 else int(round(dur / 0.2))
        for i in range(ns):
            if ns == 1:
                ts = dur - 0.17 if dur >= 0.5 else dur * 0.2
                if dur >= 0.5:   # swing whoosh before the click
                    sw = ev_noise(rng, sr, 0.5 * dur, fc=crv([(0, 600), (0.5 * dur, 2400)], log=True), bw=0.8, atk=0.05, dec=0.2 * dur)
                    place(buf, sw, 0.0, sr, 0.35)
            else:
                half = ns >= 6 and i >= ns // 2
                ts = (0.04 + (dur - 0.3) * i / ns) * (v.jit(0.03) if i else 1)
            closing = ns >= 6 and i >= ns // 2
            fm = (3300 if not closing else 2400) * v.pitch * (1 + 0.04 * (i % 3))
            slide = ev_noise(rng, sr, 0.04, fc=crv([(0, 1800), (0.04, 4800)], log=True), bw=0.6, atk=0.004, dec=0.02)
            place(buf, slide, ts - 0.035, sr, 0.5)
            click = ev_metal(sr, rng, fm, 0.012, 0.35) * 1.0
            click += 0.9 * ev_thump(sr, 0.09, 330, 150, 0.025)
            click += 0.5 * ev_wood(sr, rng, 1500, 0.008, 1.0, 0.2)
            place(buf, click, ts, sr, 1.0 if i == ns - 1 else 0.8)
            place(buf, ev_metal(sr, rng, fm * 1.18, 0.006, 0.2), ts + 0.028, sr, 0.35)      # blade bounce
        return buf
    if variant == "lock":
        sl = ev_noise(rng, sr, 0.05, fc=crv([(0, 2500), (0.05, 1500)], log=True), bw=0.7, atk=0.005, dec=0.025)
        place(buf, sl, 0, sr, 0.3)
        c1 = ev_metal(sr, rng, 3500 * v.pitch, 0.012, 0.4) + 0.4 * ev_thump(sr, 0.04, 800, 400, 0.008)
        c2 = ev_metal(sr, rng, 1750 * v.pitch, 0.018, 0.4) + 0.8 * ev_thump(sr, 0.09, 260, 120, 0.03) + 0.3 * ev_wood(sr, rng, 900, 0.01)
        t1 = 0.04
        t2 = t1 + max(0.12, 0.2 * dur) * v.tj
        place(buf, c1, t1, sr, 0.85)
        place(buf, c2, t2, sr, 1.0)
        place(buf, ev_metal(sr, rng, 4400, 0.01, 0.1), t2 + 0.04, sr, 0.25)
        place(buf, ev_bell(sr, 2100 * v.pitch, dur - t2, 0.09, GLASS), t2, sr, 0.12)
        return reverb(buf, sr, 0.25, 0.14)
    if variant == "vault":
        tb = [0.0, 0.17, 0.34]
        for i, tt in enumerate(tb):
            tt *= v.tj
            bolt = ev_thump(sr, 0.2, 200 * v.pitch * (1 - 0.1 * i), 85, 0.05) + 0.7 * ev_metal(sr, rng, 1100 * v.pitch * (1 + 0.08 * i), 0.05, 0.4)
            place(buf, bolt, tt + 0.01, sr, 0.75 + 0.1 * i)
        k = 6
        for i in range(k):   # spinning wheel ratchet
            place(buf, pawl_click(sr, rng, 1800 * v.pitch, 0.35), 0.43 * dur + i * 0.035, sr)
        tt = 0.62 * dur
        place(buf, ev_thump(sr, 0.5, 100 * v.pitch, 42, 0.16, 0.2), tt, sr, 1.4)
        place(buf, ev_noise(rng, sr, 0.3, fc=140, bw=1.0, dec=0.09), tt, sr, 0.9)
        place(buf, ev_metal(sr, rng, 520 * v.pitch, 0.18, 0.1), tt, sr, 0.45)
        return reverb(buf, sr, 0.5, 0.25)
    if variant == "belt":
        rate = 6.2 * v.pitch
        motor = np.sin(np.cumsum((92 + 4 * np.sin(PI2 * 0.7 * t)) * v.pitch) * PI2 / sr) * 0.25
        motor += 0.1 * np.sin(np.cumsum((184 + 8 * np.sin(PI2 * 0.7 * t)) * v.pitch) * PI2 / sr)
        bed = lowpass(white(v), sr, 700, 2)
        bed = bed / bed.std() * 0.22
        k = int(dur * rate)
        for i in range(k):
            tt = (i + 0.2) / rate * v.jit(0.01)
            place(buf, ev_thump(sr, 0.09, 140, 80, 0.03) + 0.4 * ev_wood(sr, rng, 520, 0.012, 0.5, 0.4), tt, sr, 0.8 if i % 2 == 0 else 0.55)
        env = smoothstep(t / 0.06) * smoothstep((dur - t) / 0.12)
        return (buf + (motor + bed) * env * 0.9)
    if variant == "print":
        rate = crv([(0, 52), (0.2 * dur, 68), (0.85 * dur, 62), (dur, 40)])(t)
        ph = np.cumsum(rate)
        idx = np.nonzero(np.diff(np.floor(ph)) > 0)[0] + 1
        imp = np.zeros(n)
        imp[idx] = rng.uniform(0.6, 1.0, len(idx))
        step = pk_(bandpass(imp, sr, 950 * v.pitch, 0.7))
        buzz = np.sin(np.cumsum((690 + 30 * np.sin(PI2 * 3 * t)) * v.pitch) * PI2 / sr) * 0.12
        env = smoothstep(t / 0.04) * smoothstep((dur - 0.12 - t) / 0.05)
        out = (step * 0.8 + buzz) * env
        place(out, ev_thump(sr, 0.08, 220, 100, 0.025), dur - 0.1, sr, 0.5)
        place(out, ev_noise(rng, sr, 0.08, fc=1800, bw=0.8, dec=0.03), dur - 0.11, sr, 0.3)
        return out
    if variant == "ratchet":
        k = int(np.clip(round(dur * 10), 5, 9))
        for i in range(k):
            tt = 0.84 * dur * (i / (k - 1)) ** 0.9 if i else 0.0
            f = 1100 * v.pitch * (1 + 0.05 * i)
            c = ev_metal(sr, rng, f, 0.012, 0.4) + 0.9 * ev_thump(sr, 0.07, 300, 140, 0.02)
            place(buf, c, tt, sr, 0.6 + 0.05 * i)
            place(buf, ev_noise(rng, sr, 0.15, fc=900 + 60 * i, bw=0.8, atk=0.01, dec=0.05), tt + 0.01, sr, 0.15)   # strap drag
        return buf
    if variant == "reel":
        rate = (20.0 if dur < 0.85 else 17.0) * v.pitch
        k = int(dur * rate)
        for i in range(k):
            tt = (i + 0.1) / rate * v.jit(0.015)
            place(buf, ev_wood(sr, rng, 1700 * v.pitch, 0.006, 0.9, 0.5), tt, sr, 0.55 + 0.3 * (i % 2))
        motor = sum(np.sin(np.cumsum(f * (1 + 0.012 * np.sin(PI2 * 2.2 * t)) * v.pitch) * PI2 / sr) * g for f, g in ((88, 0.22), (176, 0.1), (264, 0.05)))
        flutter = bandpass(white(v), sr, 2800, 0.7) * 0.05 * (0.7 + 0.3 * np.sin(PI2 * rate * t))
        env = smoothstep(t / 0.08) * smoothstep((dur - t) / 0.12)
        return buf * env + (motor + flutter) * env
    if variant == "saw":
        strokes = max(2, int(round(dur * 4.4)))
        sd = dur / strokes
        stroke_env = np.zeros(n)
        for i in range(strokes):
            m = (t >= i * sd) & (t < (i + 1) * sd)
            u = (t[m] - i * sd) / sd
            stroke_env[m] = np.sin(np.pi * u) ** 0.7 * (1.0 if i % 2 == 0 else 0.75)
        teeth = (rng.random(n) < 230 / sr) * rng.uniform(0.4, 1.0, n) * rng.choice([-1, 1], n)
        g1 = pk_(bandpass(teeth, sr, crv([(0, 2600), (dur, 3200)]), 0.8))
        ring = np.sin(np.cumsum(2150 * v.pitch * (1 + 0.05 * stroke_env)) * PI2 / sr) * 0.1
        blade = lowpass(white(v), sr, 1200, 2)
        out = (g1 + ring + 0.1 * blade / blade.std()) * stroke_env
        return out * smoothstep(t / 0.01)
    if variant == "tape":
        te = 0.62 * dur
        m = nsamp(sr, te)
        tt = np.arange(m) / sr
        rate = 55 + 80 * (tt / te) ** 0.8
        ph = np.cumsum(rate) / sr
        idx = np.nonzero(np.diff(np.floor(ph)) > 0)[0] + 1
        imp = np.zeros(m)
        imp[idx] = rng.uniform(0.6, 1.0, len(idx))
        zz = pk_(bandpass(imp, sr, 2300 * v.pitch, 0.8)) * smoothstep(tt / 0.02) * (0.6 + 0.4 * tt / te)
        place(buf, zz, 0, sr, 0.8)
        tl = te + 0.02
        place(buf, ev_metal(sr, rng, 2000 * v.pitch, 0.01, 0.4) + 0.8 * ev_thump(sr, 0.08, 300, 140, 0.02), tl, sr, 1.0)
        ts = tl + 0.13       # tape retracts a little
        k = 14
        for i in range(k):
            place(buf, ev_wood(sr, rng, 1900 * v.pitch, 0.004, 0.7, 0.4), ts + i * 0.014 * (1 + 0.04 * i), sr, 0.35)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- paper
def f_paper(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)

    def crinkle(d, fc, dens, g=1.0):
        m = nsamp(sr, d)
        imp = (rng.random(m) < dens / sr) * rng.uniform(0.2, 1.0, m) * rng.choice([-1, 1], m)
        y = pk_(bandpass(imp, sr, fc, 0.9))
        bed = bandpass(rng.standard_normal(m), sr, fc * 0.8, 0.9)
        return (y + 0.18 * bed / (bed.std() + 1e-9)) * g

    if variant == "flip":
        k = 1 if dur <= 0.5 else int(np.clip(round(dur * 7), 3, 8))
        for i in range(k):
            tt = (dur - 0.12) * ((i / k) ** 0.9 if k > 1 else 0.0) + (0.0 if i == 0 else rng.uniform(-0.005, 0.005))
            d = 0.11 if k > 1 else 0.28 * dur / 0.5 * 0.5
            fc0 = rng.uniform(1600, 2400) * v.pitch
            fl = ev_noise(rng, sr, d, fc=crv([(0, fc0), (d, fc0 * 2.2)], log=True), bw=0.6, atk=0.006 if k == 1 else 0.003, dec=d * 0.3)
            place(buf, fl, max(tt, 0), sr, 0.9 - 0.04 * i)
            place(buf, crinkle(0.05, 3500, 700, 0.3), max(tt, 0) + 0.01, sr)
            place(buf, ev_wood(sr, rng, 700, 0.01, 0.4, 0.5), max(tt, 0) + d * 0.7, sr, 0.25)
        return buf
    if variant == "curl":
        m = n
        x = crinkle(dur, 3600, 600, 1.0)
        bed = bandpass(white(v), sr, crv([(0, 1800), (dur, 3600)], log=True), 0.7)
        bed = bed / bed.std() * 0.4
        return (x + bed) * swell(t, dur, 0.55, 0.8)
    if variant == "fold":
        k = int(np.clip(round(dur / 0.2), 2, 4))
        tail = dur >= 0.85
        span = (dur - (0.35 if tail else 0.1))
        for i in range(k):
            tt = span * i / k * v.jit(0.02) if i else 0
            place(buf, crinkle(0.07, 3200 * v.pitch, 500, 0.7), tt, sr)
            tp = tt + 0.075
            place(buf, ev_thump(sr, 0.06, 240 - 25 * i, 120, 0.015) + 0.7 * ev_noise(rng, sr, 0.03, fc=1400, bw=0.8, dec=0.008), tp, sr, 0.8)
        if tail:
            sw = ev_noise(rng, sr, 0.33, fc=crv([(0, 800), (0.33, 3000)], log=True), bw=0.8, atk=0.08, dec=0.14)
            place(buf, sw, dur - 0.33, sr, 0.5)
        return buf
    if variant == "peel":
        rate = crv([(0, 60), (0.6 * dur, 110), (dur, 80)])(t)
        ph = np.cumsum(rate) / sr
        idx = np.nonzero(np.diff(np.floor(ph)) > 0)[0] + 1
        imp = np.zeros(n)
        imp[idx] = rng.uniform(0.3, 1.0, len(idx))
        gr = pk_(bandpass(imp, sr, crv([(0, 1800), (dur, 3600)], log=True), 0.9))
        bed = bandpass(white(v), sr, crv([(0, 2200), (dur, 3800)], log=True), 0.8)
        out = (gr + 0.3 * bed / bed.std()) * swell(t, dur, 0.7, 0.9)
        place(out, ev_wood(sr, rng, 1100, 0.01), dur - 0.06, sr, 0.35)
        return out
    if variant == "pen":
        k = 3
        sp = np.zeros(n)
        for i in range(k):
            a, b = dur * (i / k + 0.02), dur * ((i + 0.95) / k)
            m = (t >= a) & (t < b)
            u = (t[m] - a) / (b - a)
            sp[m] = np.sin(np.pi * u) ** 0.8 * (0.6 + 0.4 * np.sin(PI2 * (1.5 + i) * u + i))
        fcn = crv([(0, 3200), (dur, 4200)])(t)
        sc = bandpass(white(v), sr, lambda tt: np.interp(tt, t, fcn), 0.8)
        sc = sc / sc.std() * (0.6 + 0.4 * np.clip(smooth_noise(rng, n, sr, 90), -1, 1))
        low = lowpass(white(v), sr, 500, 2)
        out = (sc * 0.7 + 0.15 * low / low.std()) * sp
        return out * smoothstep(t / 0.01)
    if variant == "shuffle":
        bursts = [(0.0, 0.42), (0.46, 0.88)] if dur > 0.5 else [(0.0, 1.0)]
        for (a, b) in bursts:
            ta, tb = a * dur, b * dur
            kk = int((tb - ta) * 105)
            for i in range(kk):
                u = i / kk
                tt = ta + (tb - ta) * (u ** 0.85)
                g = np.sin(np.pi * (0.1 + 0.8 * u)) * rng.uniform(0.4, 1.0)
                fl = ev_noise(rng, sr, 0.014, fc=rng.uniform(2800, 5200), bw=0.9, atk=0.0008, dec=0.004)
                place(buf, fl, tt, sr, g)
        te = 0.9 * dur
        place(buf, ev_thump(sr, 0.08, 200 * v.pitch, 100, 0.025) + 0.8 * ev_noise(rng, sr, 0.03, fc=1500, bw=1.0, dec=0.01), te, sr, 0.7)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- pop
@event
def ev_pop(sr, rng, f, g=1.0, d=0.07):
    return g * (ev_thump(sr, d, f * 1.6, f * 0.55, d * 0.35, 0.25) + 0.25 * ev_noise(rng, sr, 0.012, fc=f * 3, bw=1.0, dec=0.003))


def f_pop(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "soft":
        place(buf, ev_pop(sr, rng, 640 * v.pitch, 1.0, 0.06), 0, sr)
        place(buf, ev_wood(sr, rng, 1800, 0.005, 0.8, 0.5), 0, sr, 0.35)
        return buf
    if variant == "cascade":
        k = int(np.clip(round(dur * 17), 5, 16))
        ring = dur < 0.5
        root = 67 + 2 * v.pick(3)
        order = rng.permutation(k)
        for i in range(k):
            tt = (dur - 0.12) * (i / k if ring else (i / k) ** 1.15) * (v.jit(0.02) if i else 1)
            deg = (i * 2) % 10 if ring else int(order[i]) % 10
            f = float(mtof(scale_note(root - 12, PENTA, deg))) * v.pitch
            place(buf, ev_pop(sr, rng, f, 0.7 + 0.3 * rng.random(), 0.06), tt, sr)
        return reverb(buf, sr, 0.25, 0.16)
    if variant == "balloon":
        tp = 0.38 * dur if dur > 0.75 else 0.12 * dur
        if tp > 0.2:   # rubbery stretch squeak before the pop
            m = nsamp(sr, tp)
            tt = np.arange(m) / sr
            f = (300 + 500 * (tt / tp) ** 1.5 + 25 * np.sin(PI2 * 18 * tt)) * v.pitch
            sq = np.sin(np.cumsum(f) * PI2 / sr) + 0.3 * np.sin(np.cumsum(f * 2) * PI2 / sr)
            sq *= (tt / tp) ** 1.2 * 0.25
            place(buf, sq, 0, sr)
        place(buf, ev_noise(rng, sr, 0.06, fc=2800, bw=1.4, dec=0.012), tp, sr, 1.2)
        place(buf, ev_thump(sr, 0.12, 300 * v.pitch, 110, 0.035), tp, sr, 0.9)
        rip = ev_noise(rng, sr, 0.16, fc=crv([(0, 3500), (0.16, 800)], log=True), bw=0.8, atk=0.004, dec=0.05)
        place(buf, rip, tp + 0.02, sr, 0.5)
        sparkle_tail(buf, sr, rng, tp + 0.05, dur - tp - 0.05, 3000, 8500, int(dur * 24), 0.22)
        flut = ev_noise(rng, sr, dur - tp - 0.05, fc=4200, bw=0.7, atk=0.01, dec=(dur - tp) * 0.25, hp=2500)
        place(buf, flut, tp + 0.05, sr, 0.18)
        return buf
    if variant == "bubbles":
        k = int(dur * 13)
        for i in range(k):
            u = rng.random() ** 0.9
            tt = u * (dur - 0.15)
            f = float(rng.uniform(500, 1800)) * v.pitch
            place(buf, ev_bloop(sr, 0.09, f * 0.7, f * 1.15, 0.03), tt, sr, 0.5 + 0.4 * rng.random())
            if rng.random() < 0.55:
                place(buf, ev_pop(sr, rng, f * 1.2, 0.5, 0.04), tt + rng.uniform(0.07, 0.2), sr)
        return reverb(buf, sr, 0.25, 0.14)
    if variant == "cannon":
        offs = [0.0, 0.05 * v.tj]
        for j, o in enumerate(offs):
            place(buf, ev_thump(sr, 0.25, 160 * v.pitch * (1 + 0.1 * j), 55, 0.06, 0.3), o, sr, 1.0)
            place(buf, ev_noise(rng, sr, 0.12, fc=900, bw=1.2, dec=0.03), o, sr, 0.9)
            place(buf, ev_noise(rng, sr, 0.04, fc=3200, bw=1.2, dec=0.008), o, sr, 0.8)
        tc = 0.06
        fl = ev_noise(rng, sr, dur - tc, fc=5200, bw=0.8, atk=0.03, dec=dur * 0.28, hp=3000)
        place(buf, fl, tc, sr, 0.35)
        sparkle_tail(buf, sr, rng, tc, dur * 0.8, 2800, 8500, int(dur * 50), 0.24)
        for i in range(int(dur * 14)):
            place(buf, ev_noise(rng, sr, 0.015, fc=rng.uniform(3000, 6000), bw=0.8, dec=0.004), tc + rng.random() ** 1.3 * dur * 0.85, sr, 0.25)
        return reverb(buf, sr, 0.45, 0.2)
    if variant == "firework":
        launches = [0.0, 0.27, 0.5]
        for j, lt in enumerate(launches):
            lt = lt * dur / 1.2
            wd = 0.22
            m = nsamp(sr, wd)
            tt = np.arange(m) / sr
            f = (500 + 1700 * (tt / wd) ** 1.2) * v.pitch * (1 + 0.12 * j)
            wh = np.sin(np.cumsum(f) * PI2 / sr) * smoothstep(tt / 0.03) * smoothstep((wd - tt) / 0.03) * 0.3
            wh += 0.1 * bandpass(rng.standard_normal(m), sr, 1800, 0.8) * 3 * (tt / wd)
            place(buf, wh, lt, sr, 0.6)
            tb = lt + wd
            place(buf, ev_thump(sr, 0.4, 130 * v.pitch, 46, 0.1, 0.25), tb, sr, 1.1)
            place(buf, ev_noise(rng, sr, 0.25, fc=1100, bw=1.3, dec=0.07), tb, sr, 0.9)
            place(buf, ev_noise(rng, sr, 0.05, fc=4000, bw=1.2, dec=0.01), tb, sr, 0.7)
            for i in range(22):
                place(buf, ev_noise(rng, sr, 0.012, fc=rng.uniform(2500, 7500), bw=0.7, dec=0.003), tb + 0.04 + rng.random() ** 1.4 * 0.35, sr, rng.uniform(0.15, 0.45))
            sparkle_tail(buf, sr, rng, tb + 0.03, 0.3, 3000, 8500, 8, 0.16)
        return reverb(buf, sr, 0.5, 0.22)
    raise KeyError(variant)


# ---------------------------------------------------------------- riser
def f_riser(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    noise = white(v)
    if variant == "soft":
        f = crv([(0, 330), (dur, 700)], log=True)(t) * v.pitch
        y = np.zeros(n)
        for det in (0.995, 1.005):
            ph = np.cumsum(f * det) * PI2 / sr
            y += np.sin(ph) + 0.2 * np.sin(2 * ph)
        air = bandpass(noise, sr, crv([(0, 800), (dur, 3600)], log=True), 0.8)
        air = air / air.std() * 0.35
        return (y * 0.4 + air) * (t / dur) ** 1.2 * smoothstep(t / 0.01) * smoothstep((dur - t) / 0.04)
    if variant == "power":
        tp = 0.62 * dur
        f = 70 * (420 / 70) ** (t / tp).clip(0, 1) ** 1.3 * v.pitch
        y = np.zeros(n)
        fc = 300 + 4500 * (t / tp).clip(0, 1) ** 1.5
        for det in (0.994, 1.006):
            ph = np.cumsum(f * det) * PI2 / sr
            for h in range(1, 30):
                y += np.sin(h * ph) / h * (1 / (1 + (h * f / fc) ** 2)) * 0.5
        ris = bandpass(noise, sr, crv([(0, 400), (tp, 6000)], log=True), 0.9)
        ris = ris / ris.std() * (t / tp).clip(0, 1) ** 2 * 0.4
        env = smoothstep(t / 0.05) * np.where(t < tp, (t / tp) ** 0.6, 1.0)
        out = (y + ris) * np.where(t < tp, 1.0, 0.0)
        out *= env
        # impact + shrink-back sweep
        place(out, ev_thump(sr, 0.5, 130, 45, 0.15, 0.2), tp, sr, 2.0)
        place(out, ev_noise(rng, sr, 0.5, fc=3500, bw=1.2, dec=0.12, hp=1500), tp, sr, 0.8)
        td = dur - tp - 0.05
        m = nsamp(sr, td)
        tt = np.arange(m) / sr
        fd = (900 * (320 / 900) ** (tt / td)) * v.pitch
        dn = np.sin(np.cumsum(fd) * PI2 / sr) * smoothstep(tt / 0.02) * np.exp(-tt / (td * 0.5)) * 0.4
        place(out, dn, tp + 0.08, sr)
        sparkle_tail(out, sr, rng, tp, dur - tp, 2500, 8000, 18, 0.22)
        return reverb(out, sr, 0.4, 0.15)
    if variant == "rocket":
        tc = 0.80 * dur
        ig = ev_thump(sr, 0.3, 120, 45, 0.08, 0.3)
        roar = lowpass(noise, sr, crv([(0, 250), (0.5 * dur, 1400), (tc, 3200), (dur, 600)], log=True), 2)
        roar = roar / roar.std()
        crackle = (rng.random(n) < 180 / sr) * rng.standard_normal(n)
        crackle = pk_(bandpass(crackle, sr, 1800, 1.0)) * 2.0
        rum = np.sin(np.cumsum(crv([(0, 55), (tc, 90), (dur, 60)])(t) * v.pitch * (1 + 0.1 * np.sin(PI2 * 17 * t))) * PI2 / sr)
        wh = np.sin(np.cumsum(crv([(0, 200), (tc, 1000), (dur, 500)], log=True)(t) * v.pitch) * PI2 / sr) * 0.18
        env = smoothstep(t / 0.08) * np.where(t < tc, (0.3 + 0.7 * (t / tc) ** 1.3), 1.0) * (1 - smoothstep((t - tc) / (dur - tc)))
        out = (roar * 0.6 + crackle * 0.4 + rum * 0.5 + wh) * env
        place(out, ig, 0, sr, 1.0)
        return out
    raise KeyError(variant)


# ---------------------------------------------------------------- rumble
def f_rumble(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    style = v.hint.get("style", ["chug", "whirr", "whine"][v.pick(3)])
    noise = white(v)
    env = smoothstep(t / 0.08) * smoothstep((dur - t) / 0.15)
    if style == "chug":
        rate = crv([(0, 11), (dur, 13.5)])(t) * v.pitch
        ph = np.cumsum(rate) / sr
        idx = np.nonzero(np.diff(np.floor(ph)) > 0)[0] + 1
        imp = np.zeros(n)
        imp[idx] = rng.uniform(0.7, 1.0, len(idx))
        puff = np.zeros(n)
        pulse = ev_thump(sr, 0.07, 130, 62, 0.025, 0.3) + 0.6 * ev_noise(rng, sr, 0.04, fc=500, bw=1.0, dec=0.012)
        for i in idx:
            place(puff, pulse, i / sr, sr, imp[i])
        low = np.sin(np.cumsum(crv([(0, 48), (dur, 56)])(t) * v.pitch) * PI2 / sr) * 0.25
        low *= 0.7 + 0.3 * np.sin(PI2 * rate * t / 1)
        bed = lowpass(noise, sr, 300, 2)
        return (puff + low + 0.18 * bed / bed.std()) * env
    if style == "whirr":
        f = crv([(0, 70), (0.45 * dur, 250), (dur, 270)])(t) * v.pitch
        y = np.zeros(n)
        ph = np.cumsum(f) * PI2 / sr
        for h in range(1, 14):
            y += np.sin(h * ph + h) / h ** 0.8
        blade = bandpass(noise, sr, crv([(0, 800), (0.5 * dur, 2200), (dur, 2400)], log=True), 0.9)
        blade = blade / blade.std() * (0.55 + 0.45 * np.sin(PI2 * 38 * t))
        chop = 0.7 + 0.3 * np.sign(np.sin(PI2 * 9 * t))
        return (y * 0.28 + blade * 0.35 * chop) * env
    # whine (vacuum)
    f = (410 + 12 * np.sin(PI2 * 1.3 * t)) * v.pitch
    ph = np.cumsum(f) * PI2 / sr
    y = np.sin(ph) + 0.4 * np.sin(2 * ph) + 0.2 * np.sin(3 * ph)
    hose = bandpass(noise, sr, crv([(0, 700), (dur, 1400)], log=True), 1.0)
    hose = hose / hose.std() * (0.8 + 0.2 * np.sin(PI2 * 2.2 * t))
    motor = np.sin(np.cumsum(np.full(n, 105.0 * v.pitch)) * PI2 / sr) * 0.4
    return (y * 0.3 + hose * 0.5 + motor) * env


# ---------------------------------------------------------------- sparkle
def f_sparkle(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    k = int(dur * 42)
    root = 84 + 2 * v.pick(3)
    for i in range(k):
        u = i / k
        tt = (dur - 0.1) * (u + rng.uniform(-0.4, 0.4) / k)
        tt = max(tt, 0.0)
        centre = 1900 + 3600 * u
        f = centre * 2.0 ** rng.normal(0, 0.35) * v.pitch
        f = float(np.clip(f, 1200, 7500))
        # snap to pentatonic grid for a musical shimmer
        m = 69 + 12 * np.log2(f / 440)
        m = round(m)
        deg = [d for d in range(int(m) - 6, int(m) + 6) if (d - root) % 12 in (0, 2, 4, 7, 9)]
        if deg:
            m = min(deg, key=lambda d: abs(d - m))
        f = float(mtof(m)) * v.pitch
        dec = rng.uniform(0.035, 0.08)
        g = rng.uniform(0.35, 1.0) * (0.55 + 0.45 * np.sin(np.pi * min(u * 1.1, 1.0)))
        place(buf, ev_modal(sr, dec * 5, [f, f * 2.0, f * 3.01], [1, 0.3, 0.1], [dec, dec * 0.6, dec * 0.4]), tt, sr, g)
    wsh = highpass(bandpass(white(v), sr, crv([(0, 2200), (dur, 6200)], log=True), 0.8), sr, 1500)
    wsh = wsh / wsh.std() * 0.1 * swell(t, dur, 0.5, 1.0)
    return reverb(buf + wsh, sr, 0.35, 0.18)


# ---------------------------------------------------------------- squish
@event
def wet_squelch(sr, rng, d, f0, f1, g=1.0):
    m = nsamp(sr, d)
    x = rng.standard_normal(m)
    fc = crv([(0, f0), (d, f1)], log=True)
    y = bandpass(x, sr, fc, 0.5)
    y = y / (y.std() + 1e-9)
    tt = np.arange(m) / sr
    wob = 0.65 + 0.35 * np.sin(PI2 * 33 * tt)
    return g * y * wob * smoothstep(tt / 0.006) * np.exp(-tt / (d * 0.45))


def f_squish(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "knead":
        k = max(3, int(round(dur * 5)))
        sp = (dur - 0.12) / k
        for i in range(k):
            tt = i * sp * v.jit(0.03) if i else 0
            place(buf, wet_squelch(sr, rng, 0.16, 520 * v.pitch, 160, 1.0), tt, sr, 0.9)
            place(buf, ev_thump(sr, 0.12, 110 * v.pitch, 60, 0.04, 0.4), tt + 0.02, sr, 0.8)
            place(buf, ev_noise(rng, sr, 0.06, fc=1600, bw=1.0, atk=0.01, dec=0.02), tt + 0.1, sr, 0.15)
        return buf
    if variant == "press":
        # accordion bellows squeezed (falling reed cluster) + squeaky toy peep
        te = 0.78 * dur
        m = nsamp(sr, te)
        tt = np.arange(m) / sr
        f = 340 * (170 / 340) ** (tt / te) * v.pitch
        y = np.zeros(m)
        for r, g in ((1.0, 1.0), (1.26, 0.6), (1.5, 0.5)):
            ph = np.cumsum(f * r * (1 + 0.004 * np.sin(PI2 * 5.5 * tt))) * PI2 / sr
            for h in range(1, 12):
                y += g * np.sin(h * ph + h * r) / h ** 1.1
        y = lowpass(y, sr, crv([(0, 3000), (te, 900)], log=True), 2)
        y *= smoothstep(tt / 0.03) * smoothstep((te - tt) / 0.06)
        br = bandpass(rng.standard_normal(m), sr, 900, 0.9)
        y = y / (np.abs(y).max() + 1e-9) * 0.7 + 0.16 * br / (br.std() + 1e-9) * smoothstep(tt / 0.03)
        place(buf, y, 0, sr)
        d = dur - te
        pe = ev_bloop(sr, d, 1500 * v.pitch, 2300 * v.pitch, d * 0.4)
        place(buf, pe, te, sr, 0.45)
        place(buf, wet_squelch(sr, rng, 0.08, 400, 200), te, sr, 0.3)
        return buf
    if variant == "stomp":
        k = max(2, int(round(dur * 4)))
        sp = (dur - 0.18) / k
        for i in range(k):
            tt = i * sp * v.jit(0.03) if i else 0
            place(buf, ev_thump(sr, 0.14, 150 * v.pitch * (1 - 0.06 * i), 62, 0.045, 0.3), tt, sr, 1.0)
            place(buf, wet_squelch(sr, rng, 0.11, 1900 * v.pitch, 500, 1.0), tt + 0.012, sr, 0.8)
            place(buf, ev_noise(rng, sr, 0.03, fc=2600, bw=1.0, dec=0.008), tt, sr, 0.35)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- stamp
def f_stamp(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "hit":
        place(buf, ev_thump(sr, 0.25, 125 * v.pitch, 50, 0.09, 0.25), 0, sr, 1.2)
        place(buf, ev_noise(rng, sr, 0.05, fc=1400, bw=1.0, dec=0.012), 0, sr, 0.9)
        place(buf, ev_wood(sr, rng, 520 * v.pitch, 0.02, 0.8, 0.3), 0, sr, 0.5)
        sw = ev_noise(rng, sr, min(0.2, dur - 0.05), fc=300, bw=1.2, dec=0.07)
        place(buf, sw, 0.01, sr, 0.5)
        if dur >= 0.45:    # small shockwave ring
            place(buf, ev_modal(sr, 0.3, [180 * v.pitch, 410 * v.pitch], [0.4, 0.2], [0.12, 0.08]), 0.02, sr)
        return buf
    if variant == "wax":
        place(buf, wet_squelch(sr, rng, 0.16, 520, 180, 1.0), 0, sr, 0.9)
        tp = 0.15
        place(buf, ev_thump(sr, 0.18, 150 * v.pitch, 60, 0.06, 0.3), tp, sr, 1.1)
        place(buf, ev_noise(rng, sr, 0.03, fc=1200, bw=1.0, dec=0.008), tp, sr, 0.6)
        tr = 0.5 * dur
        m = nsamp(sr, 0.09)
        tt = np.arange(m) / sr
        pk = np.sin(np.cumsum(1700 * (0.6 ** (tt / 0.09)) * v.pitch) * PI2 / sr) * np.exp(-tt / 0.03) * smoothstep(tt / 0.004)   # sticky release
        place(buf, pk, tr, sr, 0.3)
        place(buf, wet_squelch(sr, rng, 0.1, 900, 400), tr, sr, 0.25)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- thud
def f_thud(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    style = v.hint.get("style", "")
    f = 130 * v.pitch

    def thud(f, g=1.0, bright=0.4):
        return g * (ev_thump(sr, 0.22, f * 1.5, f * 0.55, 0.075, 0.3) + bright * ev_noise(rng, sr, 0.04, fc=f * 6, bw=1.0, dec=0.008))

    if variant == "bounce":
        if style == "rattle":      # chest shake: wooden rattle
            k = int(dur * 17)
            for i in range(k):
                tt = (dur - 0.09) * (i / k) * v.jit(0.2)
                place(buf, ev_wood(sr, rng, float(rng.uniform(500, 1300)) * v.pitch, 0.012, 1.0, 0.4), max(tt, 0), sr, rng.uniform(0.4, 1.0) * (1 - 0.3 * i / k))
            place(buf, thud(110 * v.pitch, 0.5), 0, sr)
            return buf
        if style == "boing":       # drop thud + boing
            place(buf, thud(f, 1.1), 0, sr)
            tb = 0.12
            d = dur - tb
            m = nsamp(sr, d)
            tt = np.arange(m) / sr
            fb = (240 + 150 * np.exp(-tt / 0.12)) * v.pitch * (1 + 0.28 * np.exp(-tt / 0.2) * np.sin(PI2 * 9 * tt))
            bo = np.sin(np.cumsum(fb) * PI2 / sr) + 0.35 * np.sin(np.cumsum(fb * 2) * PI2 / sr)
            bo *= smoothstep(tt / 0.006) * np.exp(-tt / (d * 0.25)) * 0.45
            place(buf, bo, tb, sr)
            return buf
        k = 2 if style == "bounce" else 3
        tt = 0.0
        gap = 0.3 * dur
        for i in range(k):
            place(buf, thud(f * (1 + 0.15 * i), 1.0 * 0.55 ** i), tt, sr)
            tt += gap
            gap *= 0.62
        return buf
    if variant == "soft":
        if style == "knock":
            place(buf, ev_wood(sr, rng, 250 * v.pitch, 0.02, 0.5, 0.2), 0, sr, 0.9)
            place(buf, thud(f * 1.3, 0.7), 0, sr)
            for i in range(3):
                place(buf, ev_wood(sr, rng, 520 * v.pitch, 0.006, 0.5, 0.3), 0.14 + i * 0.03, sr, 0.18)
            return buf
        if style == "slap":
            place(buf, ev_noise(rng, sr, 0.06, fc=1500, bw=1.0, dec=0.012), 0, sr, 0.9)
            place(buf, thud(f * 1.6, 0.9), 0, sr)
            return buf
        if style == "micdrop":
            place(buf, thud(95 * v.pitch, 1.3), 0, sr)
            place(buf, ev_modal(sr, 0.5, [92 * v.pitch, 210, 1100], [0.5, 0.2, 0.08], [0.25, 0.1, 0.06]), 0, sr, 0.6)
            place(buf, thud(130 * v.pitch, 0.4), 0.2 * dur, sr)
            return buf
        place(buf, thud(f, 1.0), 0, sr)
        if dur >= 0.45:
            place(buf, thud(f * 1.35, 0.4 + (0.15 if style == "mailbox" else 0)), 0.34 * dur * v.tj, sr)
        if style == "mailbox":
            place(buf, ev_metal(sr, rng, 900, 0.08, 0.2), 0.34 * dur + 0.08, sr, 0.35)
        if style == "bins":
            place(buf, ev_wood(sr, rng, 380, 0.03), 0, sr, 0.4)
        return buf
    if variant == "nail":
        k = int(np.clip(round(dur * 5), 3, 5))
        chisel = style == "chisel"
        sp = (dur - 0.2) / k
        for i in range(k):
            tt = i * sp * v.jit(0.03) if i else 0
            fp = (900 + 90 * i) * v.pitch
            hit = ev_wood(sr, rng, fp, 0.012, 1.0, 0.5) + 0.6 * ev_thump(sr, 0.06, 240, 140, 0.015)
            if chisel:
                hit = hit * 0.8 + 0.4 * ev_noise(rng, sr, 0.07, fc=3000, bw=1.0, atk=0.002, dec=0.02)
            else:
                hit += 0.35 * ev_metal(sr, rng, 3200 + 150 * i, 0.02, 0.1)
            place(buf, hit, tt, sr, 1.0)
        return buf
    raise KeyError(variant)


# ---------------------------------------------------------------- tick
def f_tick(variant, dur, v):
    sr, n, rng = v.sr, v.n, v.rng
    buf = np.zeros(n)
    style = v.pick(3)
    if style == 0:        # wooden
        ev = ev_wood(sr, rng, 1350 * v.pitch, 0.009, 0.8, 0.2)
        ev2 = ev_wood(sr, rng, 1000 * v.pitch, 0.007, 0.6, 0.2)
    elif style == 1:      # glassy
        ev = ev_modal(sr, 0.06, [2600 * v.pitch, 4400 * v.pitch, 6100 * v.pitch], [1.0, 0.35, 0.15], [0.012, 0.007, 0.004])
        ev2 = ev_modal(sr, 0.05, [2100 * v.pitch, 3900 * v.pitch], [1.0, 0.3], [0.009, 0.005])
    else:                 # soft pebble
        ev = ev_thump(sr, 0.05, 900 * v.pitch, 600, 0.012, 0.3) + 0.2 * ev_noise(rng, sr, 0.01, fc=3000, bw=1.0, dec=0.003)
        ev2 = ev_thump(sr, 0.04, 700 * v.pitch, 480, 0.009, 0.3)
    place_wrap(buf, ev, 0.0, sr, 1.0)
    place_wrap(buf, ev2, 0.5 * dur, sr, 0.35)       # faint off-beat tick
    return buf


# ---------------------------------------------------------------- water
def f_water(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    if variant == "blob":
        k = 3 if dur >= 0.75 else 2
        gloop = lowpass(white(v), sr, 700, 2)
        for i in range(k):
            tt = i * dur * 0.24 * v.jit(0.1) if i else 0
            f = float(rng.uniform(200, 340)) * v.pitch
            place(buf, ev_bloop(sr, 0.4, f, f * 2.6, 0.12, wob=0.1), tt, sr, 0.9 - 0.15 * i)
            place(buf, ev_bloop(sr, 0.25, f * 1.5, f * 3.4, 0.06), tt + 0.03, sr, 0.35)
        bed = gloop / gloop.std() * 0.22 * swell(t, dur, 0.4, 1.0)
        bed *= 0.6 + 0.4 * np.sin(PI2 * 7 * t)
        out = buf + bed
        return reverb(out, sr, 0.3, 0.15)
    if variant == "bubbles":
        k = int(dur * 14)
        for i in range(k):
            tt = rng.random() * (dur - 0.12)
            f = float(rng.uniform(700, 2300)) * v.pitch
            place(buf, ev_bloop(sr, 0.08, f * 0.75, f * 1.2, 0.025), tt, sr, 0.35 + 0.4 * rng.random())
        scrub = bandpass(white(v), sr, 2600, 0.9)
        scrub = scrub / scrub.std() * (0.5 + 0.5 * np.sin(PI2 * 5.5 * t)) ** 1.5 * 0.08 * swell(t, dur, 0.5, 0.8)
        return reverb(buf + scrub, sr, 0.25, 0.14)
    if variant == "drip":
        k = int(np.clip(round(dur * 4), 2, 4))
        times = np.sort(rng.uniform(0, 0.7, k)) * (dur - 0.3)
        times[0] = 0.0
        for i, tt in enumerate(times):
            f = float(rng.choice([1000, 1250, 1500, 1800])) * v.pitch
            m = nsamp(sr, 0.3)
            tm = np.arange(m) / sr
            fd = f * (1 + 0.9 * (1 - np.exp(-tm / 0.012)))
            dr = np.sin(np.cumsum(fd) * PI2 / sr) * np.exp(-tm / 0.05) * smoothstep(tm / 0.001)
            place(buf, dr, tt, sr, 0.9)
            place(buf, ev_bloop(sr, 0.12, 180, 120, 0.04), tt + 0.012, sr, 0.35)
            place(buf, ev_noise(rng, sr, 0.01, fc=3500, bw=1.0, dec=0.002), tt, sr, 0.3)
        return reverb(buf, sr, 0.3, 0.2)
    if variant == "ripple":
        wave = v.hint.get("style") == "wave"
        k = int(dur * 9)
        for i in range(k):
            u = i / k
            tt = u * (dur - 0.25)
            f = float(rng.uniform(500, 1100)) * (1 + 0.8 * u) * v.pitch
            d = 0.22
            m = nsamp(sr, d)
            tm = np.arange(m) / sr
            fr = f * (1 + 0.25 * np.exp(-tm / 0.05))
            y = np.sin(np.cumsum(fr) * PI2 / sr) * np.exp(-tm / 0.07) * smoothstep(tm / 0.004)
            place(buf, y, tt, sr, (0.7 - 0.45 * u) * 0.8)
        sh = bandpass(white(v), sr, crv([(0, 900), (dur, 2600)], log=True), 0.8)
        sh = sh / sh.std() * 0.18 * swell(t, dur, 0.35, 1.1) * (0.7 + 0.3 * np.sin(PI2 * crv([(0, 9), (dur, 3)])(t) * t))
        out = buf + sh
        if wave:
            wv = bandpass(white(v), sr, crv([(0, 400), (0.5 * dur, 1800), (dur, 600)], log=True), 0.9)
            out += wv / wv.std() * 0.4 * swell(t, dur, 0.5, 1.6)
        return reverb(out, sr, 0.35, 0.18)
    if variant == "splash":
        splash = bandpass(white(v), sr, crv([(0, 3200), (0.4 * dur, 1000)], log=True), 1.1)
        splash = splash / splash.std() * np.exp(-t / (dur * 0.18)) * smoothstep(t / 0.004)
        place(buf, ev_bloop(sr, 0.3, 160 * v.pitch, 420 * v.pitch, 0.1), 0.0, sr, 0.8)
        for i in range(int(dur * 22)):
            tt = 0.04 + rng.random() ** 1.2 * (dur - 0.15)
            f = float(rng.uniform(1100, 3200)) * v.pitch
            place(buf, ev_bloop(sr, 0.06, f * 0.8, f * 1.2, 0.02), tt, sr, rng.uniform(0.15, 0.45) * (1 - tt / dur))
        return reverb(buf + splash * 1.0, sr, 0.3, 0.16)
    raise KeyError(variant)


# ---------------------------------------------------------------- whoosh
def f_whoosh(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    noise = white(v)
    short = dur <= 0.3

    def sweep(fc_pts, bw, pk, pw=1.3, g=1.0):
        f = crv(fc_pts, log=True)
        y = bandpass(noise, sr, f, bw)
        return y / y.std() * swell(t, dur, pk, pw) * g

    def tone(fp, g, pk):
        f = crv(fp, log=True)(t) * v.pitch
        return np.sin(np.cumsum(f) * PI2 / sr) * g * swell(t, dur, pk, 1.5)

    if variant == "up":
        return sweep([(0, 350), (dur, 3200)], 0.7, 0.55) + tone([(0, 420), (dur, 1300)], 0.10, 0.6)
    if variant == "down":
        return sweep([(0, 3000), (dur, 300)], 0.7, 0.35) + tone([(0, 1250), (dur, 400)], 0.10, 0.4)
    if variant == "left":
        y = sweep([(0, 1900), (dur, 750)], 0.95, 0.4, 1.3)
        return lowpass(y, sr, 3200, 2) + tone([(0, 700), (dur, 520)], 0.05, 0.4)
    if variant == "right":
        y = sweep([(0, 700), (dur, 2100)], 0.95, 0.6, 1.3)
        return highpass(y, sr, 400, 1) + tone([(0, 520), (dur, 840)], 0.05, 0.6)
    if variant == "rise":
        y = sweep([(0, 250), (dur, 5200)], 0.9, 0.9, 1.8, 1.0)
        sub = np.sin(np.cumsum(crv([(0, 60), (dur, 200)])(t) * v.pitch) * PI2 / sr) * swell(t, dur, 0.9, 2.0) * 0.9
        return (y + sub + tone([(0, 400), (dur, 2200)], 0.14, 0.9)) * (1 - smoothstep((t - 0.94 * dur) / (0.06 * dur)))
    if variant == "snap":
        tc = dur - 0.05
        y = sweep([(0, 2600), (tc, 800)], 0.8, 0.3, 1.2, 1.0) * (1 - smoothstep((t - tc * 0.9) / (tc * 0.1)))
        c = ev_metal(sr, rng, 3400 * v.pitch, 0.01, 0.4) + 0.8 * ev_thump(sr, 0.06, 360, 170, 0.02) + 0.3 * ev_wood(sr, rng, 1500, 0.006)
        place(y, c, tc, sr, 1.0)
        return y
    if variant == "spiral":
        lfo = crv([(0, 1.5), (dur, 5.0)])(t)
        ang = np.cumsum(lfo) * PI2 / sr
        fcs = 900 * (1 + 0.8 * np.sin(ang)) * (1 + 0.8 * t / dur) * v.pitch
        y = bandpass(noise, sr, lambda tt: np.interp(tt, t, fcs), 0.8)
        y = flange(y / y.std(), sr, 0.0006, 0.003, lambda tt: 1.5 * tt + 1.25 * tt ** 2 / dur, 0.0, 0.95)
        tn = np.sin(np.cumsum(fcs * 0.5) * PI2 / sr) * 0.1 * (0.6 + 0.4 * np.sin(ang + 1.0))
        return (y * 0.9 + tn) * swell(t, dur, 0.55, 1.2)
    if variant == "split":
        a = bandpass(noise, sr, crv([(0, 1500), (dur, 4200)], log=True), 0.55)
        b = bandpass(rng.standard_normal(n), sr, crv([(0, 1500), (dur, 380)], log=True), 0.55)
        env = swell(t, dur, 0.4, 1.2)
        out = (a / a.std() * 0.8 + b / b.std() * 1.0) * env
        return out + tone([(0, 1500), (dur, 3000)], 0.05, 0.4) + tone([(0, 1500), (dur, 380)], 0.07, 0.4)
    if variant == "suck":
        lfo = crv([(0, 2.0), (0.9 * dur, 22.0)], log=True)(t)
        ang = np.cumsum(lfo) * PI2 / sr
        fcs = crv([(0, 300), (0.9 * dur, 4200)], log=True)(t) * (1 + 0.45 * np.sin(ang)) * v.pitch
        y = bandpass(noise, sr, lambda tt: np.interp(tt, t, fcs), 0.8)
        y = flange(y / y.std(), sr, 0.0005, 0.002, lambda tt: 2.0 * tt + 6.0 * tt ** 2 / dur, 0.0, 0.8)
        tn = np.sin(np.cumsum(crv([(0, 180), (0.9 * dur, 1700)], log=True)(t) * v.pitch) * PI2 / sr) * 0.16 * (0.7 + 0.3 * np.sin(ang))
        env = (t / (0.92 * dur)).clip(0, 1) ** 2.2 * (t < 0.915 * dur)
        out = (y * 0.9 + tn) * env
        tp = 0.915 * dur
        place(out, ev_pop(sr, rng, 520 * v.pitch, 1.4, 0.07), tp, sr)
        place(out, ev_noise(rng, sr, 0.06, fc=2400, bw=1.0, dec=0.012), tp, sr, 0.5)
        return out
    raise KeyError(variant)


# ---------------------------------------------------------------- zap
def f_zap(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    buf = np.zeros(n)
    place(buf, ev_noise(rng, sr, 0.08, fc=5200, bw=1.4, dec=0.014, hp=2500), 0, sr, 1.2)
    f = 4200 * (260 / 4200) ** np.clip(t / 0.16, 0, 1) * v.pitch
    ph = np.cumsum(f) * PI2 / sr
    zz = np.sign(np.sin(ph + 1.5 * np.sin(PI2 * 190 * t))) * 0.5 * np.exp(-t / 0.07) * smoothstep(t / 0.001)
    buf += lowpass(zz, sr, 7000, 2)
    imp = (rng.random(n) < 260 / sr) * rng.uniform(0.3, 1, n) * rng.choice([-1, 1], n)
    buf += pk_(bandpass(imp, sr, 3500, 1.0)) * np.exp(-t / (dur * 0.25)) * 0.5
    th = bandpass(white(v), sr, crv([(0, 300), (dur, 90)], log=True), 1.0)
    buf += th / th.std() * 0.4 * np.exp(-t / (dur * 0.3)) * smoothstep(t / 0.01)
    place(buf, ev_thump(sr, 0.35, 120, 45, 0.1), 0.01, sr, 0.9)
    return buf


# ---------------------------------------------------------------- zip
def f_zip(variant, dur, v):
    sr, n, rng, t = v.sr, v.n, v.rng, v.t
    up = variant == "up"
    r0, r1 = (55, 190) if up else (190, 55)
    te = dur - 0.07
    m = nsamp(sr, te)
    tt = np.arange(m) / sr
    rate = (r0 + (r1 - r0) * (tt / te) ** 1.1) * v.pitch
    ph = np.cumsum(rate) / sr
    idx = np.nonzero(np.diff(np.floor(ph)) > 0)[0] + 1
    imp = np.zeros(m)
    imp[idx] = rng.uniform(0.55, 1.0, len(idx))
    fc = (2300 + 1600 * (tt / te if up else 1 - tt / te)) * v.pitch
    teeth = pk_(bandpass(imp, sr, lambda x: np.interp(x, tt, fc), 0.9))
    slider = bandpass(rng.standard_normal(m), sr, 1700 * v.pitch, 0.7)
    slider = slider / (slider.std() + 1e-9) * 0.12
    y = (teeth + slider) * smoothstep(tt / 0.012) * smoothstep((te - tt) / 0.015)
    buf = np.zeros(n)
    place(buf, y, 0.0 if up else 0.05, sr)
    stop = ev_metal(sr, rng, 2000 * v.pitch, 0.01, 0.4) + 0.8 * ev_thump(sr, 0.06, 340, 150, 0.02)
    place(buf, stop, dur - 0.065 if up else 0.0, sr, 0.9)
    return buf


# ----------------------------------------------------------------------------
# Pip's voice: ONE consistent character, a small warm, slightly nasal, chirpy
# toy-animal. Additive harmonic source shaped by moving formants (F1/F2/F3 + a
# nasal murmur), breath noise through the same formants, per-syllable pitch
# contours (300-900 Hz range), vibrato and tremolo.  Non-lexical syllables only.
# ----------------------------------------------------------------------------
VOWELS = {
    "a": (800, 1250, 2700), "e": (560, 1950, 2750), "i": (330, 2350, 3100), "o": (520, 950, 2600),
    "u": (360, 850, 2500), "ae": (720, 1750, 2650), "uh": (640, 1150, 2600), "m": (290, 1150, 2500),
}
SMALL = 1.13   # small creature: shorter vocal tract, all formants up


class Voice:
    def __init__(self, v, nasal=0.28):
        self.v = v
        n = v.n
        self.f0 = np.zeros(n)
        self.amp = np.zeros(n)
        self.F = np.zeros((3, n))
        self.br = np.zeros(n)
        self.nas = np.full(n, nasal)
        self.jit = np.zeros(n)
        self.bursts = []
        self.out_extra = np.zeros(n)

    def syl(self, t0, d, pitch, vowel="a", amp=1.0, breath=0.06, nasal=None, vib=None, a=0.010, r=0.035,
            am=None, jit=0.0, onset=None):
        v = self.v
        sr, n = v.sr, v.n
        i0 = max(0, int(round(t0 * sr)))
        i1 = min(n, i0 + int(round(d * sr)))
        m = i1 - i0
        if m < 8:
            return
        u = np.linspace(0, 1, m)
        te = np.arange(m) / sr
        xs = [p[0] for p in pitch]
        ys = np.log2(np.array([p[1] for p in pitch], dtype=float) * v.pitch)
        lf = np.interp(u, xs, ys)
        w = max(3, int(0.015 * sr))
        pad = np.concatenate([np.full(w, lf[0]), lf, np.full(w, lf[-1])])
        lf = np.convolve(pad, np.ones(w) / w, mode="same")[w:-w]
        f = 2.0 ** lf
        if vib:
            rate, depth = vib[0], vib[1]
            delay = vib[2] if len(vib) > 2 else 0.05
            f = f * (1 + depth * np.sin(PI2 * rate * te) * smoothstep((te - delay) / 0.08))
        env = smoothstep(te / a) * smoothstep((d - te) / r)
        if am:
            env = env * (1 - am[1] + am[1] * 0.5 * (1 + np.sin(PI2 * am[0] * te)))
        vs = vowel if isinstance(vowel, (list, tuple)) else [vowel]
        xp = np.linspace(0, 1, len(vs))
        for k in range(3):
            self.F[k, i0:i1] = np.interp(u, xp, [VOWELS[x][k] for x in vs]) * SMALL
        self.f0[i0:i1] = f
        self.amp[i0:i1] = amp * env
        self.br[i0:i1] = breath * env
        if nasal is not None:
            self.nas[i0:i1] = nasal
        self.jit[i0:i1] = jit
        if onset:
            fc, dd, g = {"h": (2400, 0.03, 0.5), "t": (3200, 0.018, 0.8), "k": (2000, 0.022, 0.8),
                         "ch": (2800, 0.04, 1.0), "s": (5500, 0.05, 0.6), "b": (700, 0.014, 0.6)}[onset]
            self.burst(t0, dd, fc, 1.0, g * amp)

    def burst(self, t0, d, fc, bw, g):
        self.bursts.append((t0, d, fc, bw, g))

    def render(self, tilt=1.0):
        v = self.v
        sr, n, rng = v.sr, v.n, v.rng
        nz = np.nonzero(self.f0 > 0)[0]
        if len(nz) == 0:
            return np.zeros(n)
        idx = np.maximum.accumulate(np.where(self.f0 > 0, np.arange(n), 0))
        f0 = self.f0[idx]
        f0[:nz[0]] = f0[nz[0]]
        F = np.stack([self.F[k][idx] for k in range(3)])
        for k in range(3):
            F[k, :nz[0]] = F[k, nz[0]]
        j = smooth_noise(rng, n, sr, 45) * self.jit + 0.0025 * smooth_noise(rng, n, sr, 12)
        f0 = f0 * (1 + j)
        ph = np.cumsum(f0) * PI2 / sr
        act = self.amp > 1e-3
        fmin = f0[act].min() if act.any() else f0.min()
        top = min(5800.0, 0.45 * sr)
        H = int(min(70, top / fmin))
        sig = np.zeros(n)
        pw = np.zeros(n)
        nas = self.nas
        lor = lambda f, c, b: 1.0 / (1.0 + ((f - c) / b) ** 2)
        for h in range(1, H + 1):
            fh = f0 * h
            g = (0.04 + lor(fh, F[0], 120) + (0.75 - 0.35 * nas) * lor(fh, F[1], 190) + 0.38 * lor(fh, F[2], 280)
                 + nas * (0.65 * lor(fh, 1050, 200) + 0.9 * lor(fh, 270, 90)))
            a = (h ** -tilt) * g * np.clip((top - fh) / 1500.0, 0, 1)
            sig += a * np.sin(h * ph)
            pw += a * a
        sig /= np.sqrt(0.5 * pw) + 1e-9
        # breath noise through the same moving formants
        tg = np.arange(n) / sr
        nz_ = rng.standard_normal(n)
        brz = spec_shape(nz_, lambda fr, tt: (np.exp(-0.5 * (np.log2(np.maximum(fr, 1) / np.interp(tt, tg, F[1])) / 0.55) ** 2)
                                               + 0.7 * np.exp(-0.5 * (np.log2(np.maximum(fr, 1) / np.interp(tt, tg, F[0])) / 0.5) ** 2)), sr)
        brz /= brz.std() + 1e-9
        out = sig * self.amp + brz * self.br * 0.7
        for (t0, d, fc, bw, g) in self.bursts:
            nb = nsamp(sr, d)
            b = bandpass(rng.standard_normal(nb), sr, fc, bw)
            b = b / (b.std() + 1e-9) * smoothstep(np.arange(nb) / sr / 0.002) * np.exp(-np.arange(nb) / sr / (d / 3.5))
            place(out, b, t0, sr, g * 0.9)
        out += self.out_extra
        return lowpass(out, sr, 6200, 2)


def v_snore_into(vc, t0, d, rng_scale=1.0):
    """Soft snore: inhale (rising flutter) + exhale (falling), noisy and low."""
    vc.syl(t0, d * 0.42, [(0, 95), (1, 150)], ["uh", "a"], amp=0.9, breath=0.55, nasal=0.65, am=(26, 0.65), jit=0.05, a=0.05, r=0.06)
    vc.syl(t0 + d * 0.48, d * 0.46, [(0, 135), (1, 80)], ["a", "uh"], amp=0.8, breath=0.65, nasal=0.7, am=(21, 0.6), jit=0.06, a=0.04, r=0.1)


def f_voice(variant, dur, v):
    d = dur
    vc = Voice(v)
    tilt = 1.0
    if variant == "happy":
        vc.syl(0.0, 0.22 * d, [(0, 500), (1, 600)], "a", breath=0.1, onset="h", a=0.01)
        vc.syl(0.27 * d, 0.24 * d, [(0, 640), (1, 780)], "e")
        vc.syl(0.56 * d, 0.44 * d, [(0, 820), (0.4, 880), (1, 720)], ["i", "a"], vib=(6.0, 0.03, 0.08), r=0.08)
    elif variant == "hmm":
        vc.syl(0.0, 0.34 * d, [(0, 520), (1, 400)], ["m", "uh"], nasal=0.8, breath=0.04, a=0.03, r=0.04)
        vc.syl(0.40 * d, 0.60 * d, [(0, 390), (0.35, 375), (1, 540)], ["m", "uh", "m"], nasal=0.75, breath=0.05, vib=(5.5, 0.015, 0.2), r=0.1)
    elif variant == "wow":
        vc.syl(0.0, d, [(0, 380), (0.4, 900), (1, 760)], ["u", "a", "o"], vib=(6.5, 0.035, 0.45 * d), nasal=0.3, a=0.02, r=0.15 * d)
    elif variant == "yay":
        k = 3 if d >= 0.7 else 2
        steps = [520, 650, 820][3 - k:] if k == 3 else [560, 760]
        sp = 0.28 * d if k == 3 else 0.34 * d
        for i in range(k):
            last = i == k - 1
            t0 = i * sp
            dd = (d - t0) if last else sp * 0.85
            vc.syl(t0, dd, [(0, steps[i] * 0.93), (0.35, steps[i]), (1, steps[i] * (1.04 if not last else 0.97))], ["i", "a"],
                   vib=(6.0, 0.03, 0.12) if last else None, a=0.012, r=0.1 if last else 0.03, breath=0.05)
    elif variant == "ouch":
        vc.syl(0.0, 0.45 * d, [(0, 950), (0.2, 1000), (1, 430)], ["a", "o"], a=0.004, r=0.08, nasal=0.4)
        vc.burst(0.48 * d, 0.1 * d + 0.02, 3000, 1.2, 0.5)
        vc.syl(0.62 * d, 0.33 * d, [(0, 700), (1, 520)], "i", amp=0.35, breath=0.12, a=0.03, r=0.07, vib=(7, 0.03, 0.05))
    elif variant in ("giggle", "ticklish"):
        tick = variant == "ticklish"
        if not tick:
            k = int(np.clip(round(d * 9), 5, 7))
            span, base, brth = d, 640, 0.3
            t_end = d
        else:
            k = 6
            span, base, brth = 0.62 * d, 740, 0.55
            t_end = d
        sp = span / k
        for i in range(k):
            p = base * (1 + 0.17 * (1 if i % 2 == 0 else -1)) * (1 - 0.015 * i + (0.025 * i if tick else 0))
            g = 1.0 - 0.04 * i
            vc.syl(i * sp, sp * 0.68, [(0, p), (1, p * 0.93)], "i" if i % 2 == 0 else "e", amp=g, breath=brth, onset="h", a=0.008, r=0.02, nasal=0.3)
        if tick:
            ts = 0.64 * d
            vc.burst(ts, 0.07 * d + 0.03, 750, 1.0, 0.55)
            vc.syl(ts + 0.02, 0.18 * d, [(0, 270), (1, 175)], "uh", nasal=0.95, breath=0.5, jit=0.05, a=0.01, r=0.06, am=(35, 0.5))
            sp2 = 0.14 * d / 2
            for i in range(2):
                vc.syl(0.86 * d + i * sp2, sp2 * 0.7, [(0, 800), (1, 740)], "i", amp=0.7, breath=0.5, onset="h", a=0.008, r=0.02)
    elif variant == "oops":
        vc.syl(0.0, 0.5 * d, [(0, 820), (0.25, 700), (1, 340)], ["o", "u"], vib=(6, 0.02, 0.05), r=0.07, nasal=0.3)
        vc.syl(0.53 * d, 0.47 * d, [(0, 335), (1, 295)], ["u", "uh"], amp=0.65, vib=(11.5, 0.07, 0.0), nasal=0.5, breath=0.12, r=0.12)
    elif variant == "squeal":
        vc.syl(0.0, d, [(0, 880), (0.3, 1300), (1, 1450)], ["i", "e", "i"], vib=(7.5, 0.035, 0.12 * d), a=0.012, r=0.1 * d + 0.02, breath=0.04, nasal=0.2)
    elif variant == "whee":
        vc.syl(0.0, d, [(0, 420), (0.55, 980), (1, 560)], ["u", "i", "e"], vib=(6.5, 0.03, 0.3 * d), a=0.02, r=0.18 * d, breath=0.05)
    elif variant == "yawn":
        yd = 0.5 * d if v.hint.get("tail") == "snore" else 0.6 * d
        vc.syl(0.0, yd, [(0, 360), (0.38, 540), (1, 290)], ["e", "a", "o"], breath=0.35, nasal=0.35, vib=(5, 0.02, 0.2), a=0.06, r=0.2 * yd, jit=0.015)
        if v.hint.get("tail") == "snore":
            vc.syl(yd - 0.02, 0.17 * d, [(0, 240), (1, 160)], "a", amp=0.08, breath=0.9, a=0.04, r=0.1)
            v_snore_into(vc, 0.7 * d, 0.3 * d)
        else:
            vc.syl(0.58 * d, 0.42 * d, [(0, 250), (1, 170)], ["a", "o"], amp=0.08, breath=0.9, a=0.05, r=0.2 * d)
    elif variant == "snore":
        v_snore_into(vc, 0.0, d)
    elif variant == "chomp":
        k = max(2, int(round(d * 3.5)))
        sp = d / k
        for i in range(k):
            t0 = i * sp
            f = 520 * (1 - 0.06 * i)
            vc.burst(t0, 0.03, 2200, 1.0, 0.55)
            vc.syl(t0 + 0.012, sp * 0.38, [(0, f), (1, f * 0.62)], ["o", "m"], nasal=0.6, breath=0.1, a=0.006, r=0.03)
        rng = v.rng
        for i in range(k):
            ev = ev_wood(v.sr, rng, 2300 * v.pitch, 0.006, 0.8, 0.5)
            place(vc.out_extra, ev, i * sp + sp * 0.5, v.sr, 0.35)
    elif variant == "grumble":
        vc.syl(0.0, 0.42 * d, [(0, 330), (1, 270)], ["o", "u"], am=(31, 0.75), jit=0.025, breath=0.15, nasal=0.5, a=0.03, r=0.05)
        vc.syl(0.47 * d, 0.53 * d, [(0, 300), (0.5, 335), (1, 240)], ["uh", "m"], am=(27, 0.7), jit=0.03, breath=0.15, nasal=0.6, a=0.03, r=0.1)
        tilt = 0.8
    elif variant == "cheer":
        return voice_cheer(v)
    elif variant == "sad":
        vc.syl(0.0, 0.55 * d, [(0, 650), (0.3, 610), (1, 470)], ["o", "u"], vib=(5, 0.04, 0.1), breath=0.2, nasal=0.4, a=0.04, r=0.08)
        vc.syl(0.58 * d, 0.42 * d, [(0, 470), (1, 330)], "u", amp=0.7, vib=(5.5, 0.055, 0.0), breath=0.35, nasal=0.45, a=0.03, r=0.18)
    elif variant == "brr":
        vc.burst(0.0, 0.02, 800, 1.0, 0.5)
        vc.syl(0.0, d, [(0, 430), (0.5, 465), (1, 400)], ["u", "o", "u"], am=(15, 0.85), vib=(15, 0.06, 0.0), breath=0.25, nasal=0.3, jit=0.02, a=0.02, r=0.12 * d)
    elif variant == "sneeze":
        vc.syl(0.0, 0.2 * d, [(0, 380), (1, 480)], "a", amp=0.5, breath=0.5, a=0.03, r=0.03)
        vc.syl(0.24 * d, 0.27 * d, [(0, 460), (1, 620)], ["a", "e"], amp=0.7, breath=0.55, a=0.04, r=0.03)
        tb = 0.55 * d
        vc.burst(tb, 0.14 * d + 0.03, 2500, 1.4, 1.5)
        vc.syl(tb, 0.24 * d, [(0, 720), (1, 360)], ["e", "u"], amp=1.0, breath=0.5, a=0.006, r=0.06, nasal=0.4)
        vc.burst(0.88 * d, 0.1 * d, 1200, 1.0, 0.3)
    elif variant == "hiccup":
        for tt, f in ((0.0, 360), (0.5 * d, 330)):
            hd = 0.14 * d + 0.02
            vc.syl(tt, hd, [(0, f), (0.35, f * 1.9), (1, f * 1.5)], "i", a=0.003, r=0.03, nasal=0.5, breath=0.15)
        place(vc.out_extra, ev_metal(v.sr, v.rng, 2500 * v.pitch, 0.05, 0.1), 0.78 * d, v.sr, 0.25)
    elif variant == "dizzy":
        n = v.n
        vc.syl(0.0, 0.8 * d, [(0, 760), (1, 340)], ["u", "i", "u", "i", "u"], vib=(3.8, 0.17, 0.0), am=(3.8, 0.35), breath=0.1, nasal=0.35, a=0.03, r=0.1)
        vc.syl(0.84 * d, 0.16 * d, [(0, 300), (1, 245)], "o", amp=0.6, a=0.01, r=0.03)
    elif variant == "effort":
        k = int(np.clip(int(d * 4.5), 2, 5))
        sp = 0.74 * d / k
        for i in range(k):
            vc.syl(i * sp, sp * 0.6, [(0, 330 + 12 * i), (1, 285)], ["a", "o"], amp=0.7 + 0.1 * i, breath=0.5, jit=0.05, onset="h", a=0.008, r=0.03, nasal=0.4, am=(40, 0.3))
        vc.syl(0.74 * d, 0.26 * d, [(0, 270), (1, 220)], "a", amp=0.1, breath=0.9, a=0.03, r=0.1)
    elif variant == "babble":
        rng = v.rng
        k = max(4, int(round(d * 6.5)))
        vs = ["a", "e", "i", "o", "u", "ae", "uh"]
        sp = d / k
        p = float(rng.uniform(450, 650))
        for i in range(k):
            vow = vs[int(rng.integers(0, len(vs)))]
            ps = float(np.clip(p * rng.uniform(0.95, 1.12), 330, 880))
            pe = float(np.clip(ps * np.exp(rng.uniform(-0.35, 0.35)), 330, 880))
            if i == k - 1:
                pe = ps * 0.75
            onset = [None, "b", "t", "k", "h"][int(rng.integers(0, 5))]
            vc.syl(i * sp, sp * rng.uniform(0.62, 0.85), [(0, ps), (1, pe)], vow, a=0.01, r=0.025,
                   vib=(6, 0.025, 0.04) if i == k - 1 else None, onset=onset, nasal=0.28 if rng.random() > 0.3 else 0.6)
            p = pe
    elif variant == "uhoh":
        vc.syl(0.0, 0.26 * d, [(0, 620), (1, 640)], "uh", a=0.004, r=0.02, nasal=0.4, breath=0.05)
        vc.burst(0.32 * d, 0.012, 1200, 1.0, 0.3)
        vc.syl(0.37 * d, 0.63 * d, [(0, 500), (0.3, 480), (1, 395)], ["o", "o"], vib=(6, 0.025, 0.3 * d), a=0.01, r=0.12, nasal=0.35)
    else:
        raise KeyError(variant)
    return vc.render(tilt)


def voice_cheer(v):
    d = v.dur
    parts = []
    for (ratio, off, g) in ((1.0, 0.0, 1.0), (1.25, 0.012, 0.7), (0.84, 0.024, 0.65)):
        vc = Voice(v)
        sp = 0.27 * d
        for i, st in enumerate((520, 650, 820)):
            last = i == 2
            t0 = i * sp + off
            dd = (d - t0) if last else sp * 0.85
            f = st * ratio * float(v.rng.uniform(0.985, 1.015))
            vc.syl(t0, dd, [(0, f * 0.93), (0.35, f), (1, f * (1.04 if not last else 0.96))], ["i", "a"],
                   vib=(5.8, 0.03, 0.12) if last else None, r=0.2 if last else 0.03, breath=0.1, nasal=0.3, jit=0.01)
        parts.append(vc.render() * g)
    out = sum(parts)
    crowd = bandpass(v.rng.standard_normal(v.n), v.sr, 2200, 0.9) * 0.05
    return out + crowd * smoothstep(v.t / 0.05) * smoothstep((d - v.t) / 0.2)


# ----------------------------------------------------------------------------
# dispatch + finishing stage
# ----------------------------------------------------------------------------
FAMILIES = {
    "air": f_air, "arp": f_arp, "beep": f_beep, "chime": f_chime, "click": f_click, "coin": f_coin,
    "fanfare": f_fanfare, "glitch": f_glitch, "laser": f_laser, "magic": f_magic, "mech": f_mech,
    "paper": f_paper, "pop": f_pop, "riser": f_riser, "rumble": f_rumble, "sparkle": f_sparkle,
    "squish": f_squish, "stamp": f_stamp, "thud": f_thud, "tick": f_tick, "voice": f_voice,
    "water": f_water, "whoosh": f_whoosh, "zap": f_zap, "zip": f_zip,
}


def target_db(fam, var, dur, cat):
    """(peak target dBFS, loudness cap offset). Quiet UI, a bit louder big moments."""
    if fam in ("fanfare", "riser") or (fam, var) in (("pop", "firework"), ("pop", "cannon")):
        return -2.0, 1.5
    if (fam, var) in (("tick", "soft"), ("coin", "tick"), ("click", "soft")):
        return -8.0, 0.0
    if cat == "ui" or dur <= 0.2:
        return -6.0, 0.0
    return -3.0, 0.0


def finish(x, v, cat):
    sr, n = v.sr, v.n
    x = np.nan_to_num(np.asarray(x, dtype=np.float64))
    peak_t, cap_off = target_db(v.family, v.variant, v.dur, cat)
    if not v.loop:
        pk = np.abs(x).max() + 1e-12
        idx = int(np.argmax(np.abs(x) > 0.03 * pk))
        idx = max(0, idx - int(0.0004 * sr))
        idx = min(idx, int(0.04 * sr))
        x = x[idx:]
    if len(x) < n:
        x = np.concatenate([x, np.zeros(n - len(x))])
    x = x[:n]
    x = x - x.mean()
    pk = np.abs(x).max() + 1e-12
    crest_db = 20 * np.log10(pk / (np.sqrt(np.mean(x ** 2)) + 1e-12))
    drive = float(np.clip((crest_db - 10.0) / 4.0, 0.0, 3.0))      # soft limiter for spiky material
    if drive > 0.05:
        x = np.tanh(x * drive / pk) / np.tanh(drive) * pk
    if v.loop:
        # zero-crossing alignment of a cyclic signal keeps the loop seamless
        lim = int(0.012 * sr)
        cand = [i for i in range(1, lim) if x[i - 1] <= 0 < x[i]]
        if x[-1] <= 0 < x[0]:
            cand.append(0)
        if cand:
            i = min(cand, key=lambda k: abs(x[k]) + abs(x[k - 1]))
            x = np.roll(x, -i)
    else:
        fi = int(v.rng.uniform(0.003, 0.006) * sr)
        fo = int(np.clip(0.1 * v.dur, 0.008, 0.05) * sr)
        x[:fi] *= 0.5 - 0.5 * np.cos(np.pi * np.arange(fi) / fi)
        x[-fo:] *= 0.5 + 0.5 * np.cos(np.pi * np.arange(fo) / fo)
    pk = np.abs(x).max() + 1e-12
    g = 10 ** (peak_t / 20) / pk
    rms_all = np.sqrt(np.mean(x ** 2)) + 1e-12
    cap = 10 ** ((-14.0 + cap_off) / 20) / rms_all          # loudness cap for dense/tonal sounds
    g = max(min(g, cap), g * 10 ** (-min(6.0, peak_t + 10.5) / 20))
    x = x * g
    return x.astype(np.float32)


def encode(x, sr, path):
    cmd = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "f32le", "-ar", str(sr), "-ac", "1", "-i", "pipe:0",
           "-map_metadata", "-1", "-fflags", "+bitexact", "-flags:a", "+bitexact",
           "-c:a", ENCODER, "-b:a", BITRATE[sr], "-ar", str(sr), "-ac", "1", str(path)]
    r = subprocess.run(cmd, input=x.astype("<f4").tobytes(), capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(r.stderr.decode())


def pick_encoder():
    out = subprocess.run(["ffmpeg", "-hide_banner", "-encoders"], capture_output=True, text=True).stdout
    if "libvorbis" in out:
        return "libvorbis"
    if "libopus" in out:
        return "libopus"
    raise SystemExit("neither libvorbis nor libopus found in ffmpeg")


ENCODER = None


def decode(path, sr):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", str(path), "-f", "f32le", "-ac", "1", "-ar", str(sr), "pipe:1"],
                       capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(r.stderr.decode())
    return np.frombuffer(r.stdout, dtype="<f4").astype(np.float64)


def parse_sfx(sfx):
    fam, var, sec = sfx.split(":")
    return fam, var, float(sec)


def build_one(args):
    entry, out_dir, encoder = args
    global ENCODER
    ENCODER = encoder
    fam, var, dur = parse_sfx(entry["sfx"])
    v = V(entry["id"], fam, var, dur)
    x = FAMILIES[fam](var, dur, v)
    x = finish(x, v, entry["cat"])
    path = Path(out_dir) / (entry["id"] + ".ogg")
    encode(x, v.sr, path)
    pcm = decode(path, v.sr)
    # The lossy codec can overshoot the peak target; pull the gain down and re-encode until the decoded file is safe.
    for _ in range(4):
        pk = np.abs(pcm).max() + 1e-12
        if pk <= 10 ** (-2.5 / 20):
            break
        x = (x * (10 ** (-3.5 / 20) / pk)).astype(np.float32)
        encode(x, v.sr, path)
        pcm = decode(path, v.sr)
    return {"id": entry["id"], "sr": v.sr, "durationMs": int(round(1000.0 * len(pcm) / v.sr)), "bytes": path.stat().st_size}


# ----------------------------------------------------------------------------
# manifest, README, check
# ----------------------------------------------------------------------------
def load_catalogue():
    return json.loads(CATALOGUE.read_text(encoding="utf-8"))


def group_of(cat, categories):
    for g in categories:
        if cat in g["cats"]:
            return g["id"]
    raise KeyError(cat)


VOLUME = {"tick": 0.5, "coin:tick": 0.5, "click:soft": 0.6, "fanfare": 0.85, "riser": 0.85, "voice": 0.85}


def volume_for(entry):
    fam, var, dur = parse_sfx(entry["sfx"])
    for k in (f"{fam}:{var}", fam):
        if k in VOLUME:
            return VOLUME[k]
    if entry["cat"] == "ui":
        return 0.65
    return 0.8


def write_manifest(cat, results):
    sounds = []
    for e in cat["all"]:
        fam, var, dur = parse_sfx(e["sfx"])
        r = results[e["id"]]
        sounds.append({
            "id": e["id"], "name": e["name"], "desc": e["desc"], "category": e["cat"],
            "group": group_of(e["cat"], cat["soundCategories"]), "file": e["id"] + ".ogg",
            "durationMs": r["durationMs"], "loop": (fam, var) in LOOP_FAMILIES, "defaultOn": True,
            "volume": volume_for(e), "family": fam, "variant": var,
        })
    manifest = {
        "version": VERSION,
        "generatedBy": "tools/make-sounds.py (numpy + ffmpeg, deterministic)",
        "licence": LICENCE,
        "loudnessNote": "Every file is peak-normalised to about -3 dBFS (UI ticks and short swishes -6 to -8 dBFS; "
                        "risers, fanfares and fireworks are a little louder in perceived level). Dense or tonal sounds are "
                        "level-capped so loudness stays roughly even across the set. Play at `volume` (0.0-1.0) times the user's master volume.",
        "categories": cat["soundCategories"],
        "sounds": sounds,
    }
    (OUT / "sounds.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return manifest


def write_readme(results):
    total = sum(r["bytes"] for r in results.values())
    text = f"""# Placeholder sounds

This folder holds {len(results)} short sound effects for Image Swiss Knife (Pip and the app UI), one `.ogg` file per
sound id, plus `sounds.json` (the manifest the app reads) and `_report.txt` (a sanity table).

**They are placeholders.** They were made by a script so the app can feel finished while real audio is being
produced. Replace any of them with licensed or hand-made audio by dropping in a file with the **same file name**
(same id, `.ogg`, mono, about -3 dBFS peak, no leading silence). The app does not need any code change.

**Nothing is sampled.** Every sound is synthesised from scratch (oscillators, filtered noise and a small formant
voice for Pip, no words), so there is no licence risk. Licence: CC0 1.0.

**Every sound has an on/off switch in the app.** The manifest sets `defaultOn: true` for each one and the settings
screen must let people turn each sound (or its whole group) off. The sounds marked `loop: true` (progress ticks and the
carpet-flight air) are made to repeat without a click.

## Regenerate

    python3 tools/make-sounds.py            # build everything (needs numpy and ffmpeg)
    python3 tools/make-sounds.py --check    # decode every file, run the checks, write _report.txt

Output is deterministic: running it again gives identical files.

Total size of this folder's audio: {total / 1024 / 1024:.2f} MB ({total / 1024:.0f} KB) for {len(results)} files.
"""
    (OUT / "README.md").write_text(text, encoding="utf-8")


def run_check(cat):
    entries = cat["all"]
    manifest_path = OUT / "sounds.json"
    problems = []
    rows = []
    manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else None
    if manifest is None:
        problems.append("sounds.json missing")
    else:
        ids = {s["id"] for s in manifest["sounds"]}
        if ids != {e["id"] for e in entries}:
            problems.append("manifest ids differ from catalogue")
    total_bytes = 0
    for e in entries:
        fam, var, dur = parse_sfx(e["sfx"])
        sr = SR_HIGH if fam in HIGH_FAMILIES else SR_DEFAULT
        path = OUT / (e["id"] + ".ogg")
        errs = []
        if not path.exists():
            problems.append(f"{e['id']}: file missing")
            rows.append((e["id"], 0, float("nan"), float("nan"), "MISSING"))
            continue
        total_bytes += path.stat().st_size
        x = decode(path, sr)
        if len(x) == 0 or not np.isfinite(x).all():
            errs.append("NaN/empty")
            rows.append((e["id"], 0, float("nan"), float("nan"), "; ".join(errs)))
            problems.append(f"{e['id']}: {errs}")
            continue
        pk = np.abs(x).max()
        pkdb = 20 * np.log10(pk + 1e-12)
        rms = np.sqrt(np.mean(x ** 2))
        rmsdb = 20 * np.log10(rms + 1e-12)
        secs = len(x) / sr
        if not -12.0 <= pkdb <= -1.0:
            errs.append(f"peak {pkdb:.1f} dB out of range")
        if rmsdb < -42.0:
            errs.append(f"rms {rmsdb:.1f} dB below floor")
        if abs(secs - dur) > DUR_TOL * dur:
            errs.append(f"duration {secs:.3f}s vs {dur:.3f}s")
        lead = np.argmax(np.abs(x) > 10 ** (-80 / 20)) if (np.abs(x) > 10 ** (-80 / 20)).any() else len(x)
        if lead / sr > 0.006:
            errs.append(f"leading silence {lead / sr * 1000:.1f} ms")
        if (fam, var) in LOOP_FAMILIES:
            step = np.std(np.diff(x)) + 1e-9
            if abs(x[0] - x[-1]) > 10 * step or abs(x[0]) > 0.3 * pk or abs(x[-1]) > 0.3 * pk:
                errs.append("loop seam not at zero crossing")
        else:
            if abs(x[0]) > 0.08 * pk:
                errs.append("no fade-in")
            if abs(x[-1]) > 0.15 * pk:
                errs.append("no fade-out")
        rows.append((e["id"], secs, pkdb, rmsdb, "ok" if not errs else "; ".join(errs)))
        if errs:
            problems.append(f"{e['id']}: " + "; ".join(errs))
    if total_bytes > 3.5 * 1024 * 1024:
        problems.append(f"total size {total_bytes} exceeds 3.5 MB")
    lines = [f"{'id':<22}{'dur_s':>8}{'peak_dB':>9}{'rms_dB':>9}  status"]
    for r in rows:
        lines.append(f"{r[0]:<22}{r[1]:>8.3f}{r[2]:>9.1f}{r[3]:>9.1f}  {r[4]}")
    ok = sum(1 for r in rows if r[4] == "ok")
    lines.append("")
    lines.append(f"{ok}/{len(entries)} pass; total size {total_bytes / 1024:.0f} KB ({total_bytes / 1024 / 1024:.2f} MB)")
    (OUT / "_report.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("\n".join(lines[-1:]))
    for p in problems:
        print("FAIL", p)
    return not problems


def main():
    global ENCODER
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true", help="decode every output and assert quality; writes _report.txt")
    ap.add_argument("--only", nargs="*", help="only (re)generate these ids (manifest is rewritten from the files on disk)")
    ap.add_argument("--jobs", type=int, default=os.cpu_count() or 1)
    args = ap.parse_args()
    cat = load_catalogue()
    OUT.mkdir(parents=True, exist_ok=True)
    if args.check:
        sys.exit(0 if run_check(cat) else 1)
    ENCODER = pick_encoder()
    entries = cat["all"]
    todo = [e for e in entries if not args.only or e["id"] in args.only]
    print(f"encoder: {ENCODER}; generating {len(todo)} sounds with {args.jobs} workers")
    jobs = [(e, str(OUT), ENCODER) for e in todo]
    if args.jobs > 1 and len(jobs) > 1:
        with ProcessPoolExecutor(max_workers=args.jobs) as ex:
            res = list(ex.map(build_one, jobs, chunksize=4))
    else:
        res = [build_one(j) for j in jobs]
    results = {r["id"]: r for r in res}
    for e in entries:      # fill in untouched ids from disk (for --only)
        if e["id"] not in results:
            fam, var, dur = parse_sfx(e["sfx"])
            sr = SR_HIGH if fam in HIGH_FAMILIES else SR_DEFAULT
            p = OUT / (e["id"] + ".ogg")
            results[e["id"]] = {"id": e["id"], "durationMs": int(round(1000 * len(decode(p, sr)) / sr)), "bytes": p.stat().st_size}
    write_manifest(cat, results)
    write_readme(results)
    total = sum(r["bytes"] for r in results.values())
    print(f"wrote {len(results)} files, {total / 1024:.0f} KB total")


if __name__ == "__main__":
    main()
