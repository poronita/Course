/* Re-colours Pip Prime from red to Turkish blue (dark theme) or creamy white (light theme). */
export const DARK = {
  E5322B: '1B8CA8', EC4034: '2299B5', EE4537: '26A3BF', E8392E: '1F93AE', D0312A: '147A94', C42A24: '126F88',
  FF6B5C: '5CD0E6', FF5E50: '52C6DD', FF8E7A: '8EE0EE', FFB1A6: 'B4EEF6', A9151A: '0C5A72', B8191C: '0F6781',
  B3181B: '0D607A', C81F22: '126F88', '7A1216': '073A4C', '5E0A0E': '052E3E', '4A0508': '04283A', '3B0A10': '03212F',
  '3A0A10': '03212F', '2A0A10': '021A26', '2A070C': '021A26', '3A1618': '0C2A36', FFD2C4: 'CDF3F8', FFE6DC: 'E3F8FB', FFF1EA: 'F0FCFD',
};
export const LIGHT = {
  E5322B: 'F3E8CF', EC4034: 'F6ECD7', EE4537: 'FAF2E0', E8392E: 'F4EAD3', D0312A: 'E8DAB9', C42A24: 'E0D0AA',
  FF6B5C: 'FFFCF2', FF5E50: 'FFF9EC', FF8E7A: 'FFF6E4', FFB1A6: 'FFFDF6', A9151A: 'D2BF95', B8191C: 'DAC89E',
  B3181B: 'D6C398', C81F22: 'DCCAA4', '7A1216': '8C7550', '5E0A0E': '6F5A3C', '4A0508': '5E4B31', '3B0A10': '4F3F29',
  '3A0A10': '4F3F29', '2A0A10': '3D2F1E', '2A070C': '3D2F1E', '3A1618': 'EFE5CC', FFD2C4: 'FFFFFF', FFE6DC: 'FFFFFF', FFF1EA: 'FFFFFF',
};
export function tint(src, map, id, name) {
  let out = src.replace(/#([0-9A-Fa-f]{6})\b/g, (m, h) => { const k = h.toUpperCase(); return map[k] ? '#' + map[k] : m; });
  out = out.replace("id: 'pip'", `id: '${id}'`).replace("name: 'Pip Prime'", `name: '${name}'`);
  return out;
}
