import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

INDEX_PATH = r'C:\Users\Paralelo 17\.gemini\antigravity\scratch\paralelo17\Nobre-Transfers\index.html'

with open(INDEX_PATH, 'r', encoding='utf-8') as f:
    orig = f.read()

is_crlf = '\r\n' in orig
content = orig.replace('\r\n', '\n')

old_clamp = 'margin-bottom: clamp(75px, 14vh, 160px);'
new_clamp = 'margin-bottom: clamp(80px, 14.5vh, 160px);'

assert old_clamp in content, "old_clamp not found!"
content = content.replace(old_clamp, new_clamp, 1)

old_dd_top = '''    .nbq-select-dropdown {
      position: absolute;
      top: calc(100% + 4px);'''

new_dd_top = '''    .nbq-select-dropdown {
      position: absolute;
      top: calc(100% + 2px);'''

assert old_dd_top in content, "old_dd_top not found!"
content = content.replace(old_dd_top, new_dd_top, 1)

if is_crlf:
    content = content.replace('\n', '\r\n')

with open(INDEX_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("✔ Adjusted clamp to 14.5vh and top to calc(100% + 2px) successfully!")
