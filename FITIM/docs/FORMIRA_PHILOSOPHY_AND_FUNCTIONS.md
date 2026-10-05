# Formira & FITI: Complete Architecture, Philosophy & Functional Specification

> **Document Purpose**: This single, exhaustive reference document synthesizes the complete philosophical foundation, technical architecture, data model, cryptographic integrity rules, and functional mechanics of **Formira** and the **FITI / FITIM** open format standards. It is designed as a self-contained blueprint for in-depth architectural reviews, technical audits, and cross-AI brainstorming.

---

## 1. Executive Summary & Foundational Philosophy

### 1.1 The Core Problem Formira Solves
Modern field data collection tools (e.g., Survey123, Fulcrum, Google Forms, KoboToolbox, JotForm) suffer from four systemic vulnerabilities that render them unsuitable for mission-critical industrial, utility, environmental, and security auditing:

1. **Cloud-Lock-in & Network Fragility**: Traditional forms depend on centralized cloud APIs, online user accounts, and OAuth handshakes. In remote wilderness, offshore wind platforms, subterranean drainage tunnels, or disaster relief zones, cloud connectivity fails completely.
2. **Timestamp Forgery & Audit Fraud**: Inspection personnel facing deadlines frequently manipulate the device clock (`Settings -> Date & Time`) to backdate inspections or forge maintenance deadlines. Standard apps blindly accept `System.currentTimeMillis()`.
3. **Data Loss & Relational Corruption in Flat Formats**: Field inspections generate rich, heterogeneous data—including high-frequency sensor streams (e.g., 50Hz 3-axis accelerometer readings over 30 seconds), audio voice memos, thermal images, vector signatures, and multi-defect logs. Forcing this rich telemetry into a single flat CSV or an opaque database blob either truncates the data or corrupts relational export.
4. **Proprietary Enclosure**: Organizations become trapped inside proprietary software subscriptions where forms and inspection logs cannot be inspected, archived, or transferred without vendor software.

### 1.2 The Formira Doctrine: Seven Core Axioms

```
                    ┌──────────────────────────────────────────────┐
                    │          THE FORMIRA DOCTRINE                │
                    │   Zero Cloud • Zero Accounts • 100% Offline  │
                    └──────────────────────┬───────────────────────┘
                                           │
         ┌───────────────────┬─────────────┴───────┬───────────────────┐
         ▼                   ▼                     ▼                   ▼
  1. Airplane-Ready   2. Anti-Tamper Clock  3. Dual Container   4. Multi-Row Assets
  Zero dependencies   Monotonic hardware    .fiti (Template)    Scalar in data.csv;
  on servers, auth,   time verification     .fitim (Submission) Streams in assets/
  or cellular signal  blocks time fraud     ZIP+JSON+CSV        clean relational model
```

1. **100% Offline-First ("Airplane-Ready")**: The application contains all runtime engines, stylesheets, schemas, cryptographic routines, and interpreters locally. No telemetry is sent to any remote server. No login screens or cloud dependencies exist.
2. **Deterministic Time Integrity**: System time is never trusted in isolation. The app cross-verifies Android monotonic hardware uptime (`SystemClock.elapsedRealtime()`) against non-resettable boot milestones to detect clock rollbacks, manual time changes, or device tampering.
3. **Open Dual-Container Standards (`.fiti` & `.fitim`)**: Every form definition is an inspectable standard package (`.fiti`). Every completed inspection is a portable cryptographic archive (`.fitim`). Both are standard ZIP containers that can be unzipped by any standard operating system tool without Formira installed.
4. **Clean Relational CSV Separation**: Scalar values sit in the root `data.csv` (1 row per submission). Large binaries (photos, voice recordings, PDFs) and multi-row continuous sensor time-series (accelerometer, gyroscope, GPS NMEA) are stored as independent CSV and media files inside an `assets/` subfolder.
5. **Universal Anti-Bleed Responsiveness**: Forms must render flawlessly across all form factors—from rugged 5-inch handhelds to foldables, 10-inch field tablets, and 4K desktop workstations—without horizontal clipping or viewport bleeding.
6. **Organized Device Vaults (`\Formira\{form-name}\`)**: Submissions are automatically filed into strictly organized local storage folders based on sanitized 15-character form slugs, preventing clutter and ensuring instant manual file recovery.
7. **Cross-Platform Interoperability**: Forms use universal web technologies (HTML5, CSS3, ES2022 JavaScript, Web Cryptography API, Canvas) wrapped inside a native Android 12+ (API 31+) Jetpack Compose shell, allowing forms to be rendered inside native WebViews or modern desktop browsers identically.

---

## 2. The Dual-Format Standard: `.fiti` vs. `.fitim`

Formira separates form design from inspection submissions through two distinct, mathematically verifiable container formats.

```
       FORM DEFINITION ARCHIVE (.fiti)               SUBMISSION DATA ARCHIVE (.fitim)
      ┌───────────────────────────────────┐        ┌───────────────────────────────────┐
      │  inspection_form.fiti (ZIP)       │        │  audit_20261004_143000.fitim (ZIP)│
      ├───────────────────────────────────┤        ├───────────────────────────────────┤
      │ ├── manifest.json                 │        │ ├── manifest.json                 │
      │ ├── form.json                     │        │ ├── form.json (Historical copy)   │
      │ ├── schema.json                   │        │ ├── data.csv (Master 1-row table) │
      │ └── assets/                       │        │ └── assets/                       │
      │     ├── logo.png                  │        │     ├── photo_01.jpg              │
      │     └── reference_guide.pdf       │        │     ├── sig_inspector.svg         │
      │                                   │        │     ├── audio_memo.m4a            │
      └───────────────────────────────────┘        │     ├── accel_telemetry.csv       │
                                                   │     └── table_defects.csv         │
                                                   └───────────────────────────────────┘
```

### 2.1 The `.fiti` Container (Form Template Specification)
A `.fiti` file is an offline distribution bundle containing everything required to render, validate, and execute an inspection form.

#### Directory Layout:
- `manifest.json`: Packaging metadata, author, version, target industry, short slug, and cryptographic SHA-256 hashes of all bundle entries.
- `form.json`: UI layout, sections, field definitions, conditional display rules, and color themes.
- `schema.json`: JSON Schema (Draft 2020-12) defining field data types, regex patterns, and validation bounds.
- `assets/` (Optional): Form brand icons, offline diagram templates, reference plant identification sheets, or engineering specs.

#### `manifest.json` Schema Example:
```json
{
  "format": "FITI",
  "version": "1.2.0",
  "formId": "solaria-drone-thermal-001",
  "shortFormName": "solariadrone",
  "title": "Solaria Drone Thermal Audit",
  "author": "AeroThermal Dynamics Ltd",
  "createdTimestamp": 1759000000000,
  "checksums": {
    "form.json": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "schema.json": "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
  }
}
```

### 2.2 The `.fitim` Container (Inspection Submission Specification)
A `.fitim` file is an immutable, sealed record of a single completed field inspection.

#### Directory Layout:
- `manifest.json`: Submission audit trail, device metadata, cryptographic timestamp, hardware uptime, and SHA-256 hashes of every file in the package.
- `form.json`: An exact copy of the form template used at the time of inspection (ensuring historical auditability even if the master template changes years later).
- `data.csv`: A strictly compliant RFC 4180 CSV containing a single row of all scalar answers. Any multi-row sensor data or media is referenced via an `assets/...` relative URI.
- `assets/`: A subfolder containing all binary files (photos, audio, signatures, PDFs) and multi-row sensor streams (accelerometer, gyroscope, GNSS tracks, defect sub-tables).

---

## 3. Cryptographic Time-Integrity & Anti-Tamper Engine

### 3.1 The Vulnerability
In standard mobile applications, a field inspector can manipulate their device system clock (`Settings -> System -> Date & Time`), turn off automatic network time, and backdate or forward-date inspections. This invalidates legal auditability for aviation, railway track safety, pharmaceutical storage, and structural engineering inspections.

### 3.2 Formira's Anti-Tamper Strategy
Formira uses a multi-layered cryptographic anchor implemented in Android native Kotlin (`TimeIntegrityService.kt`) and exposed to JavaScript via `NativeBridge.kt`:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      TIME INTEGRITY VERIFICATION                       │
└────────────────────────────────────────────────────────────────────────┘
  System Clock (Wall Time)        Monotonic Hardware Clock (Uptime)
  [System.currentTimeMillis()]    [SystemClock.elapsedRealtime()]
               │                                   │
               ▼                                   ▼
        Stored Last-Seen                   Boot-Milestone Check
        Timestamp Anchor                   (Cannot be reset without reboot)
               │                                   │
               └───────────────┬───────────────────┘
                               ▼
               ┌───────────────────────────────┐
               │    Drift & Anomaly Check:     │
               │   • Has Wall Time moved back? │
               │   • Did uptime mismatch?      │
               │   • Was airplane mode toggled?│
               └───────────────┬───────────────┘
                               ▼
            Pass: ANCHORED_MONOTONIC_SECURE
            Fail: TAMPER_FLAGGED_DEGRADED
```

1. **Hardware Monotonic Uptime**: When Formira launches, it records the pairing of `wall_clock_time` and `elapsedRealtime()`. Because `elapsedRealtime()` is a CPU hardware counter that ticks continuously (even in deep sleep) and cannot be modified by user settings, any divergence between elapsed hardware time and wall-clock time indicates manual user tampering.
2. **Persistent Anchor Milestones**: Formira writes encrypted milestone tokens to private app storage. If a user sets their clock back by 3 days, Formira detects that `current_system_time < last_recorded_milestone` and permanently stamps the submission with `TAMPER_DETECTED_CLOCK_ROLLBACK`.
3. **Atomic Cryptographic Envelope**: The `.fitim` manifest stores three timestamps:
   - `reported_system_time`: The user-reported wall clock time.
   - `hardware_uptime_ms`: CPU uptime since the last reboot.
   - `time_integrity_status`: `SECURE_VERIFIED`, `UNVERIFIED_FIRST_BOOT`, or `TAMPER_FLAGGED`.

---

## 4. Master Field Architecture & Comprehensive Input Catalog

Formira supports 52 modular input types divided into 7 functional domains.

### 4.1 Field Categories Overview

| Category | Typical Controls | Storage Rule | Assets Subfolder Behavior |
| :--- | :--- | :--- | :--- |
| **1. Basic Text** | `text`, `textarea` | In-line string in `data.csv` | No assets generated |
| **2. Structured Numeric** | `integer`, `decimal`, `currency` | In-line number in `data.csv` | No assets generated |
| **3. Choices & Selections** | `dropdown`, `radio`, `checkbox`, `multi_select` | Option keys or `OTHER: {val}` | No assets generated |
| **4. Contact & Identity** | `email`, `phone`, `url` | Strict regex validated string | No assets generated |
| **5. Media & Verification** | `photo`, `signature`, `audio_memo`, `file_upload` | Relative asset path | Stored in `assets/` (JPG, SVG, M4A, PDF) |
| **6. Telemetry & Sensors** | `accel_stream`, `gyro_stream`, `gps_track`, `compass` | Summary string in `data.csv` | Stored as multi-row CSV in `assets/` |
| **7. Structural & Dynamic** | `table_repeater`, `computed_formula`, `section` | Summary count in `data.csv` | Stored as sub-table CSV in `assets/` |

---

### 4.2 Detailed Field Specifications & Validation Rules

#### 1. Single-Line Text (`text`)
- **UI Component**: HTML5 `<input type="text">` with floating label and character counter.
- **Validation Rules**:
  - `min_length` and `max_length` (Default: max 120 chars).
  - Optional `regex_pattern` (e.g., alphanumeric asset tags `^[A-Z0-9]{4}-[0-9]{4}$`).
  - **Anti-CSV Injection Guard**: Automatically strips or single-quote escapes leading formula trigger symbols (`=`, `+`, `-`, `@`) to protect analysts opening exported CSVs in Excel.
- **Mobile Adaptation**: Fluid 100% width; font-size 16px to prevent mobile browser viewport auto-zoom.

#### 2. Multi-Line Text / Notes (`textarea`)
- **UI Component**: Auto-expanding `<textarea rows="3">`.
- **Validation Rules**: Maximum 2,000 characters. Newlines are escaped as `\n` in JSON and RFC 4180 multi-line quotes in `data.csv`.

#### 3. Structured Integer (`integer`)
- **UI Component**: `<input type="number" step="1" inputmode="numeric">`.
- **Validation Rules**: Rejects floating decimals. Min and max integer limits (`-2,147,483,648` to `+2,147,483,647`). Triggers the numeric-only virtual keyboard on handhelds.

#### 4. Decimal Number (`decimal`)
- **UI Component**: `<input type="number" step="0.01" inputmode="decimal">`.
- **Validation Rules**: Precision constraint (e.g., 2 decimal places for financial data; 6 decimal places for spatial coordinates). Guarded against `NaN` and `Infinity`.

#### 5. Dropdown Single-Select (`dropdown`) with "Other" Free-Text
- **UI Component**: Searchable modal select box.
- **The "Other" Rule**:
  - If a dropdown includes `"allow_other": true`, the dropdown presents a distinct **"Other (Specify)"** option.
  - When "Other" is chosen, an adjacent input box is dynamically revealed.
  - **Checklist Enforcement**: The form engine marks this revealed input as **strictly mandatory**. The user cannot leave it blank.
  - **CSV Storage**: Stored as `OTHER: {user_typed_value}` or as two dedicated columns (`[field_id]` and `[field_id]_other`).

#### 6. Multi-Select Tags (`multi_dropdown`)
- **UI Component**: Chip/Pill selection array with dismissible `×` handles.
- **Validation Rules**: `min_selections` (e.g., must select at least 1) and `max_selections` (e.g., maximum 5 tags). Stored in `data.csv` as a clean semicolon-separated string (`Oak;Maple;Pine`).

#### 7. Radio Group (`radio`)
- **UI Component**: Horizontal segmented pill buttons on tablet/PC; vertically stacked touch cards (minimum 48dp height) on mobile.
- **Validation Rules**: Mutually exclusive selection. Can trigger conditional visibility branching (Skip Logic) for downstream fields.

#### 8. Checkbox / Boolean Switch (`checkbox`)
- **UI Component**: Material Design 3 toggle switch or high-contrast check card.
- **Validation Rules**: Strict boolean (`TRUE` or `FALSE`). Can be flagged as `must_be_true` (e.g., for safety compliance attestations and legal liability waivers).

#### 9. Email Address (`email`)
- **UI Component**: `<input type="email" autocomplete="email" inputmode="email">`.
- **Validation Rules**:
  - **Strict RFC 5322 Regex**: `^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$`.
  - **Rejects Plain Text**: Cannot be submitted without an `@` symbol and a valid 2+ letter top-level domain. Disallows spaces and quotes.
  - Normalizes to lowercase on blur.

#### 10. Phone Number (`phone`)
- **UI Component**: `<input type="tel" inputmode="tel">`.
- **Validation Rules**:
  - Enforces international **E.164** standard formatting (`^\+?[1-9]\d{1,14}$`).
  - Minimum 7 digits, maximum 15 digits.
  - Disallows alphabetical characters while allowing user-friendly input formatting delimiters (`+`, `-`, `(`, `)`, spaces), which are normalized prior to serialization.

#### 11. Calendar Date & Time (`date`, `time`, `datetime`)
- **UI Component**: Native dialog pickers on Android/iOS; popover steppers on desktop.
- **Validation Rules**:
  - `date`: ISO 8601 `YYYY-MM-DD`.
  - `time`: 24-hour `HH:MM:SS`.
  - `datetime`: `YYYY-MM-DDTHH:MM:SSZ`.
  - Constraints: `disallow_future` (e.g., past incident reporting) or `disallow_past` (e.g., scheduled maintenance).

#### 12. Document & File Upload (`file_upload`)
- **UI Component**: Zero-permission Android Document Picker (Storage Access Framework).
- **Validation Rules**:
  - **MIME & Extension Whitelist**: Configurable (e.g., `application/pdf`, `.docx`, `.xlsx`, `.csv`).
  - **Size Quota**: Default ceiling of 10MB per document (customizable up to 50MB).
  - **Magic Bytes Verification**: Inspects file headers (e.g., `%PDF-`) to reject renamed executables.
  - **Storage**: Binary is written to `assets/doc_{field_id}_{timestamp}.{ext}`. The relative path is stored in `data.csv`.

#### 13. Camera Photo (`photo`)
- **UI Component**: Hardware camera viewfinder bridge with zoom slider and review gallery.
- **Validation Rules**:
  - Live capture enforcement (can disallow selecting pre-existing gallery photos to prevent audit fraud).
  - Client-side canvas compression: Re-compresses to 1920×1080 JPEG at 85% quality (< 2MB file size).
  - EXIF preservation: Keeps original hardware capture timestamp, camera model, and GPS coordinates.
  - Storage: Saved as `assets/photo_{field_id}_{timestamp}.jpg`.

#### 14. Legal Vector Signature (`signature`)
- **UI Component**: HTML5 Smooth Bézier Curve Canvas with velocity-sensitive pen stroke smoothing.
- **Validation Rules**:
  - **Stroke Point Verification**: Enforces minimum 15 trajectory points to prevent single accidental taps or blank submissions.
  - **Storage**: Exported as a Scalable Vector Graphic (`assets/sig_{field_id}_{timestamp}.svg`) preserving mathematical curves, with an embedded PNG raster fallback and signer metadata comment.

#### 15. Audio Memo (`audio_record`)
- **UI Component**: Voice recorder card with live animated audio waveform scrubber, recording timer, and playback controls.
- **Validation Rules**:
  - Minimum duration: 2 seconds.
  - Maximum duration: 180 seconds.
  - Silence detection: Rejects recordings below minimum decibel thresholds.
  - Encoded as 64kbps AAC in M4A container (`assets/audio_{field_id}_{timestamp}.m4a`).

#### 16. GPS Geolocation (`gps_location`)
- **UI Component**: Mini-map snapshot (using cached offline raster tiles) with coordinate badge and accuracy indicator.
- **Validation Rules**:
  - Max acceptable horizontal accuracy threshold (e.g., must be `<= 15.0m`).
  - Anti-Mock Location Check: Detects and flags Android simulated mock GPS providers.
  - Stored in `data.csv` as `LAT: 37.7749, LON: -122.4194, ACC: 3.2m, ALT: 45m`.

#### 17. 3-Axis Accelerometer Telemetry (`sensor_accel`)
- **UI Component**: Live 3-axis motion waveform canvas (X, Y, Z channels).
- **Telemetry Separation**: Continuous 20Hz–100Hz high-frequency vibration/impact logs cannot be stored in a single table cell.
  - Stream is serialized to `assets/accel_{field_id}_{timestamp}.csv`.
  - Main `data.csv` cell records the summary metric: `assets/accel_01.csv [N=1200, Peak=14.2m/s², Mean=9.81m/s²]`.

#### 18. 3-Axis Gyroscope Angular Rate (`sensor_gyro`)
- **UI Component**: Real-time 3D attitude indicator / angular velocity ribbon.
- **Telemetry Separation**: Serialized to `assets/gyro_{field_id}_{timestamp}.csv` (headers: `timestamp_epoch_ms,relative_ms,rot_x,rot_y,rot_z,accuracy`). Main cell records summary.

#### 19. Magnetometer / Digital Compass (`sensor_compass`)
- **UI Component**: Rotating SVG compass rose with azimuth degree readout.
- **Validation Rules**: Azimuth clamped `[0.0°, 359.9°]`. Calibration check requires sensor accuracy status >= Medium.

#### 20. Barcode & 2D QR Scanner (`barcode_qr`)
- **UI Component**: Live camera viewfinder overlay with scanning reticle.
- **Symbologies Supported**: QR Code, Code 128, EAN-13, DataMatrix, UPC-A.
- **Manual Override Rule**: If a barcode is torn, weathered, or unreadable, the user can toggle manual entry, recorded as `MANUAL: {text}`.

#### 21. Dynamic Multi-Item Table Repeater (`table_repeater`)
- **UI Component**: Repeatable grid card container with "+ Add Item" button (e.g., logging 1 to 20 tree defects or pipeline corrosion spots).
- **Relational Separation**:
  - All logged items are serialized as an independent table: `assets/table_{field_id}_{timestamp}.csv`.
  - Main `data.csv` records the item count and sub-table path: `assets/defects.csv [4 items logged]`.

#### 22. Dynamic Formula Field (`computed_calc`)
- **UI Component**: Read-only highlighted summary chip.
- **Validation Rules**: Evaluates deterministic arithmetic expressions based on other numeric fields (e.g., `[length] * [width] * [depth] * [density]`). Division by zero is safely handled without runtime crashes.

---

## 5. The `.fitim` Relational Storage & Multi-Row Asset Model

The central architectural innovation of the `.fitim` format is how it solves the **Heterogeneous Data Dilemma** in field data collection.

### 5.1 The Heterogeneous Data Dilemma
Traditional tools make one of two mistakes:
1. **The "Everything in One Table" Mistake**: They attempt to squeeze photos (as gigantic Base64 strings) and sensor logs into a single CSV. This results in massive 100MB CSV files that crash Microsoft Excel, Python Pandas, and BI tools.
2. **The "Opaque Database Blob" Mistake**: They store data in proprietary SQLite databases or closed cloud endpoints, making it impossible for field engineers to directly inspect data with simple text editors or scripts.

### 5.2 The Formira Relational Hybrid Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        FITIM RELATIONAL MODEL                          │
└────────────────────────────────────────────────────────────────────────┘

 [Root data.csv] (Exactly 1 Record Row per Inspection Submission)
 ┌──────────┬──────────────┬──────────────┬────────────────────────────┬────────────────────────┐
 │ recordId │ inspector    │ overallPass  │ photoFrontRef              │ accelerometerStreamRef │
 ├──────────┼──────────────┼──────────────┼────────────────────────────┼────────────────────────┤
 │ REC-0842 │ Sarah Jenkins│ TRUE         │ assets/photo_front_001.jpg │ assets/accel_001.csv   │
 └──────────┴──────────────┴──────────────┴──────────────┬─────────────┴───────────┬────────────┘
                                                         │                         │
               ┌─────────────────────────────────────────┘                         │
               ▼                                                                   ▼
 [assets/photo_front_001.jpg]                            [assets/accel_001.csv]
 Binary JPEG image (1920x1080)                           Multi-Row High-Frequency Time Series:
 Preserves EXIF GPS coordinates                          ┌───────────────┬──────┬──────┬──────┬──────┐
 and hardware capture timestamp                          │ timestamp_ms  │ rel  │ ax   │ ay   │ az   │
                                                         ├───────────────┼──────┼──────┼──────┼──────┤
                                                         │ 1760000000000 │ 0    │ 0.12 │ 9.81 │ 0.05 │
                                                         │ 1760000000020 │ 20   │ 0.14 │ 9.79 │ 0.08 │
                                                         │ 1760000000040 │ 40   │ 0.19 │ 9.85 │ 0.11 │
                                                         │ ... [1,200 rows of continuous data]       │
                                                         └───────────────────────────────────────────┘
```

### 5.3 Detailed Schemas of Sub-Folder Files

#### Accelerometer Stream (`assets/accel_{field_id}_{timestamp}.csv`):
```csv
timestamp_epoch_ms,relative_ms,accel_x,accel_y,accel_z,magnitude,accuracy
1760000000000,0,0.120,9.805,0.051,9.806,3
1760000000020,20,0.142,9.791,0.084,9.792,3
1760000000040,40,0.195,9.849,0.112,9.852,3
```

#### Multi-Item Defect Table (`assets/table_{field_id}_{timestamp}.csv`):
```csv
item_index,defect_type,severity,action_required,photo_asset_ref
1,Thermal Hotspot,CRITICAL,Replace Inverter Module,assets/photo_defect_01.jpg
2,Bypass Diode Failure,HIGH,Check String Continuity,assets/photo_defect_02.jpg
3,Dust Accumulation,LOW,Schedule Array Wash,assets/photo_defect_03.jpg
```

---

## 6. Storage Vault Architecture & Device File Organization

### 6.1 Strict Alphanumeric Directory Slugs
To prevent filesystem fragmentation and ensure cross-platform compatibility across Android, Linux, Windows, and macOS, Formira enforces strict sanitization on form folder names:

```
Device External Storage / Storage Access Framework
└── \Formira\                                   <-- Master App Root
    ├── solariadrone\                           <-- Sanitized Slug (<= 15 chars, alphanumeric)
    │   ├── solaria-drone-thermal-001.fiti      <-- Active Form Definition Template
    │   ├── audit_20261001_091522.fitim         <-- Submission Record 1
    │   ├── audit_20261002_143000.fitim         <-- Submission Record 2
    │   └── audit_20261004_110545.fitim         <-- Submission Record 3
    ├── royalbotanica\
    │   ├── royal-heritage-botanica-001.fiti
    │   └── specimen_20261003_162010.fitim
    └── treesurvey\
        ├── tree-survey-001.fiti
        └── survey_20260929_101200.fitim
```

#### Sanitization Algorithm:
1. `raw_name` (e.g., `"Solaria Drone: Thermal Audit (V2.1)"`)
2. Remove all non-alphanumeric characters: `[a-zA-Z0-9]` -> `"SolariaDroneThermalAuditV21"`
3. Convert to lowercase: `"solariadronetherm"`
4. Truncate to maximum 15 characters: `"solariadrone"`
5. Destination: `\Formira\solariadrone\`

---

## 7. Responsive Form Engine & Universal Anti-Bleed Architecture

### 7.1 The Universal Anti-Bleed Rule
Field inspection forms must operate across extreme physical form factors without horizontal truncation, clipping, or overflow scrollbars.

```
       MOBILE PHONE (< 600px)                 TABLET / FOLDABLE (600-1024px)              DESKTOP PC (> 1024px)
   ┌─────────────────────────────┐        ┌────────────────────────────────────┐        ┌────────────────────────────────────────┐
   │ [Header Banner]             │        │ [Header Banner]                    │        │ [Header Banner]                        │
   │                             │        │                                    │        │                                        │
   │ [Single Column Field 1]     │        │ ┌────────────────┬───────────────┐ │        │ ┌─────────────────┬──────────────────┐ │
   │                             │        │ │ Field 1        │ Field 2       │ │        │ │ Field 1         │ Field 2          │ │
   │ [Single Column Field 2]     │        │ ├────────────────┼───────────────┤ │        │ ├─────────────────┼──────────────────┤ │
   │                             │        │ │ Field 3        │ Field 4       │ │        │ │ Field 3         │ Field 4          │ │
   │ [Stacked Touch Cards]       │        │ └────────────────┴───────────────┘ │        │ └─────────────────┴──────────────────┘ │
   │                             │        │                                    │        │                                        │
   │ [Signature Canvas (Full W)] │        │ [Signature Canvas (Auto-Scaled)]   │        │ [High-Contrast Focus Ring Canvas]      │
   └─────────────────────────────┘        └────────────────────────────────────┘        └────────────────────────────────────────┘
```

### 7.2 Implementation Requirements
1. **Viewport Meta Tag**:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   ```
2. **Universal Box-Sizing**:
   ```css
   *, *::before, *::after {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   ```
3. **Fluid Layout Bounds**:
   ```css
   .container {
     width: 100%;
     max-width: 760px; /* Ergonomic form reading width */
     margin: 0 auto;
     padding: 16px;
   }
   ```
4. **Dynamic Canvas Resizing**: All HTML5 canvases (signatures, sensor graphs) recalculate their pixel resolution dynamically on window resize events to match their parent container's width.

---

## 8. Application Technical Architecture (Native & Web Hybrid)

Formira is built as a hardened Android 12+ application utilizing Jetpack Compose and native WebViews:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   FORMIRA RUNTIME ARCHITECTURE                         │
└────────────────────────────────────────────────────────────────────────┘

 [Android OS 12+ (API 31+)]
     │
     ▼
 [FormiraApp (Application Context)]
     ├── Software Rendering & Mesa/EGL Crash Shielding
     └── Environment Injection (LIBGL_DEBUG=quiet, MESA_LOG_LEVEL=fatal)
     │
     ▼
 [MainActivity (Jetpack Compose)]
     ├── Edge-to-Edge Scaffold & Material 3 Navigation Bar
     ├── Intent Filter Broker (.fiti / .fitim File Associations)
     │
     ├── [TimeIntegrityService.kt] (Monotonic Hardware Clock Verification)
     │
     └── [NativeBridge.kt] (JavaScriptInterface IPC Channel)
             ▲
             │ Bidirectional Bridge:
             │ • saveToFormiraVault(formSlug, fileName, base64Zip)
             │ • getVerifiedTimeIntegrity()
             │ • getHardwareSensors()
             │ • pickDocument() / launchCamera()
             ▼
     [WebView Runtime (file:///android_asset/web/)]
         ├── CTI_Collector.html (Field Inspection & Form Engine)
         ├── CTI_Builder.html   (Visual Drag-and-Drop Form Designer)
         └── CTI_Viewer.html    (Submission Audit, Decryption & Inspection)
```

### 8.1 Key Application Modules
1. **`FormiraApp.kt`**: Process-level initializer that configures graphics driver fallbacks to guarantee stability across low-cost Android hardware and emulators.
2. **`TimeIntegrityService.kt`**: Monotonic time anchor engine that tracks hardware uptime and flags tampering attempts.
3. **`NativeBridge.kt`**: Annotated `@JavascriptInterface` bridge enabling web forms to access hardware sensors, file pickers, cameras, and local storage vaults securely.
4. **`FormiraZip.js`**: Built-in, zero-dependency streaming ZIP compression and decompression engine executing inside the WebView to generate `.fiti` and `.fitim` packages entirely in memory.

---

## 9. Comprehensive Brainstorming & AI Review Prompts

*Use this section as an agenda when sharing this document with another AI model for brainstorming, expansion, or peer review.*

### Brainstorming Focus 1: Sensor & Hardware Extensibility
- **NFC Proximity Enforcement**: How can we best integrate an `nfc_rfid` field type to physically force inspectors to tap an asset's RFID tag before unlocking the form (to prevent remote "armchair" inspections)?
- **Bluetooth Low Energy (BLE) Wireless Probes**: What is the most resilient architecture for communicating with external digital calipers, concrete moisture meters, and infrared temperature sensors via Web Bluetooth or Android GATT?
- **Edge AI Camera Inference**: Could an on-device TensorFlow Lite / ML Kit model automatically classify tree species or count solar panel fractures in real-time before saving the photo asset?

### Brainstorming Focus 2: Cryptographic Auditability & Decentralized Trust
- **Asymmetric Key Pairs**: Should each inspector generate a local Ed25519 public/private key pair on their device, signing the `manifest.json` so submissions are cryptographically attributed to specific inspectors without a central server?
- **P2P Mesh Synchronization**: How can multiple field devices exchange `.fitim` inspection packages offline (e.g., via Wi-Fi Direct, Nearby Connections, or BLE mesh) to aggregate data at a field base camp without internet?

### Brainstorming Focus 3: Form Logic & Visual Scripting
- **Dynamic Calculation Graph**: How can we expand `computed_calc` to handle complex multi-step dependencies (e.g., topological sorting of formula fields) without performance overhead in low-end hardware?
- **Multi-Page Wizard vs. Continuous Scroll**: What are the ergonomics of switching between a step-by-step wizard UI on 5-inch handhelds versus a continuous layout on 12-inch tablets?

---

## 10. Summary Matrix: Formira at a Glance

| Feature | Standard Form Platforms | Formira / FITI Platform |
| :--- | :--- | :--- |
| **Backend Requirement** | Cloud Server (Firebase, AWS, SaaS) | **Zero Cloud** (100% On-Device) |
| **User Authentication** | OAuth, Google Sign-In, Email/Pass | **Zero Accounts** (Hardware Key/Device ID) |
| **Offline Durability** | Temporary cache; requires sync | **Permanent Native Vault** (`\Formira\...`) |
| **Form Definition Format** | Proprietary database format | **`.fiti` Open ZIP Archive** (JSON+CSS) |
| **Submission Format** | Remote database row | **`.fitim` Open ZIP Archive** (CSV+Assets) |
| **Time Integrity** | Blindly accepts device clock | **Monotonic Hardware Clock Anchor** |
| **Sensor Telemetry** | Single text coordinates only | **Full Continuous Streams** in `assets/*.csv` |
| **Media Attachments** | Cloud URLs | **Embedded in `.fitim` ZIP Container** |
| **OS Target** | Web browser or cross-platform web | **Hardened Android 12+ & Native Web** |
| **Licensing & Lock-In** | Monthly SaaS Subscription | **100% Open Standards & Local Files** |

---
*End of Master Architecture Specification.*
