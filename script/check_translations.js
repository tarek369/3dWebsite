const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'translations.js');
const s = fs.readFileSync(file, 'utf8');
// Find 'const translations = {'
const start = s.indexOf('const translations =');
if (start === -1) { console.error('translations start not found'); process.exit(1); }
// Find the opening brace index
let i = s.indexOf('{', start);
// Walk char-by-char keeping track of string literals so braces inside strings are ignored
let depth = 0;
let inSingle = false, inDouble = false, inBack = false, prev = '';
let end = -1;
for (; i < s.length; i++) {
  const ch = s[i];
  if (ch === "'" && !inDouble && !inBack && prev !== '\\') inSingle = !inSingle;
  else if (ch === '"' && !inSingle && !inBack && prev !== '\\') inDouble = !inDouble;
  else if (ch === '`' && !inSingle && !inDouble && prev !== '\\') inBack = !inBack;
  if (!inSingle && !inDouble && !inBack) {
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  prev = ch;
}
if (end === -1) { console.error('end of object not found'); process.exit(1); }
const objText = s.slice(start, end+1);
// Extract the en and et blocks by locating their '{' after the 'en'/'et' keys
function extractBlock(objText, key) {
  const keyIdx = objText.indexOf("'"+key+"'");
  if (keyIdx === -1) return '';
  let braceIdx = objText.indexOf('{', keyIdx);
  if (braceIdx === -1) return '';
  // find matching brace for this block
  let depth = 0;
  let inSingle = false, inDouble = false, inBack = false, prev='';
  for (let j = braceIdx; j < objText.length; j++) {
    const ch = objText[j];
    if (ch === "'" && !inDouble && !inBack && prev !== '\\') inSingle = !inSingle;
    else if (ch === '"' && !inSingle && !inBack && prev !== '\\') inDouble = !inDouble;
    else if (ch === '`' && !inSingle && !inDouble && prev !== '\\') inBack = !inBack;
    if (!inSingle && !inDouble && !inBack) {
      if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) return objText.slice(braceIdx+1, j); }
    }
    prev = ch;
  }
  return '';
}
const enBlock = extractBlock(objText, 'en');
const etBlock = extractBlock(objText, 'et');
function extractKeys(block) {
  const re = /'([^']+)'\s*:\s*('(?:\\'|[^'])*'|`(?:\\`|[^`])*`|"(?:\\"|[^"])*"|[\[\{]?[\s\S]*?(?=,\n|\n\s*'))/g;
  const keys = [];
  let m;
  // simpler: match keys only (lines starting with optional whitespace then 'key': )
  const re2 = /^\s*'([^']+)'\s*:/gm;
  while ((m = re2.exec(block)) !== null) keys.push(m[1]);
  return keys;
}
const enKeys = extractKeys(enBlock);
const etKeys = extractKeys(etBlock);
const uniq = arr => [...new Set(arr)];
const enUniq = uniq(enKeys);
const etUniq = uniq(etKeys);
const missingInEt = enUniq.filter(k => !etUniq.includes(k));
const missingInEn = etUniq.filter(k => !enUniq.includes(k));
console.log('EN keys (raw):', enKeys.length, 'EN keys (unique):', enUniq.length);
console.log('ET keys (raw):', etKeys.length, 'ET keys (unique):', etUniq.length);
console.log('\nMissing in ET ('+missingInEt.length+'):\n' + (missingInEt.length ? missingInEt.join('\n') : '(none)'));
console.log('\nMissing in EN ('+missingInEn.length+'):\n' + (missingInEn.length ? missingInEn.join('\n') : '(none)'));
