// Usage: node headtext.mjs <bytes> url1 url2 ...   -> prints first N bytes of each (licence text from primary sources)
const [n, ...urls] = process.argv.slice(2);
for (const u of urls) {
  try {
    const r = await fetch(u);
    const t = r.ok ? (await r.text()).slice(0, Number(n)).replace(/\s+/g, ' ').trim() : `HTTP ${r.status}`;
    console.log(`### ${u}\n${t}\n`);
  } catch (e) { console.log(`### ${u}\nERR ${e}\n`); }
}
