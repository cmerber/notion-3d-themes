const fs = require('node:fs')
const path = require('node:path')
const cp = require('node:child_process')
const assert = require('node:assert/strict')
const root = path.resolve(__dirname, '..')
const config = require('../next.config')
assert.deepEqual([...config.publicRuntimeConfig.THEMES].sort(), ['island', 'orange'])
for (const file of ['site.config.js', '.env.example', 'NOTICE', 'LICENSE', 'docs/images/orange.webp', 'docs/images/island.webp']) assert.ok(fs.existsSync(path.join(root, file)), `Missing ${file}`)
for (const file of ['README.md', 'README_EN.md']) {
  const text = fs.readFileSync(path.join(root, file), 'utf8')
  for (const match of text.matchAll(/\]\((\.\/[^)#]+)(?:#[^)]*)?\)/g)) assert.ok(fs.existsSync(path.join(root, match[1])), `Broken ${file} link: ${match[1]}`)
}
const files = cp.execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' }).split('\0').filter(Boolean)
assert.ok(files.length > 0, 'Stage the source before running the packaging check')
const forbidden = files.filter(f => /(^|\/)(node_modules|\.next|\.vercel|\.tmp|data)\//.test(f) || /(^|\/)\.env(?:\..+)?$/.test(f) && !f.endsWith('.example'))
assert.deepEqual(forbidden, [], 'Local files must not be packaged')
// Report filenames only, never matched credential values.
const sensitive = new RegExp(['gh[pousr]_[A-Za-z0-9]{30,}', 'github_pat_[A-Za-z0-9_]{40,}', 'ntn_[A-Za-z0-9]{30,}', 'sk-(?:proj-)?[A-Za-z0-9_-]{35,}', '-----BEGIN [A-Z ]*PRIVATE KEY-----'].join('|'))
const findings=[]
for (const file of files) {
  if (!/\.(?:js|jsx|ts|tsx|json|md|yml|yaml|example|toml)$/.test(file) || file === 'scripts/check-starter.cjs') continue
  if (sensitive.test(fs.readFileSync(path.join(root, file), 'utf8'))) findings.push(file)
}
assert.deepEqual(findings, [], 'Credential-shaped data found; inspect listed files before publishing')
console.log(`Starter package OK: two themes, README assets/links and ${files.length} tracked files checked.`)
