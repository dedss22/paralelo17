import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

INDEX_PATH = r'C:\Users\Paralelo 17\.gemini\antigravity\scratch\paralelo17\Nobre-Transfers\index.html'

with open(INDEX_PATH, 'r', encoding='utf-8') as f:
    orig = f.read()

is_crlf = '\r\n' in orig
content = orig.replace('\r\n', '\n')

old_escape = '''      window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeCalendar();
          closeTimeSheet();
        }
      });'''

new_escape = '''      window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeCalendar();
          closeTimeSheet();
          closeAllCustomSelects();
        }
      });'''

assert old_escape in content, "old_escape not found!"
content = content.replace(old_escape, new_escape, 1)

old_close_all = '''      function closeAllCustomSelects(exceptDropdown) {
        var dropdowns = form.querySelectorAll('.nbq-select-dropdown');
        dropdowns.forEach(function (dd) {
          if (dd !== exceptDropdown) {
            dd.hidden = true;
            var trigger = dd.parentElement ? dd.parentElement.querySelector('.nbq-select-trigger') : null;
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }'''

new_close_all = '''      function closeAllCustomSelects(exceptDropdown) {
        var dropdowns = form.querySelectorAll('.nbq-select-dropdown');
        dropdowns.forEach(function (dd) {
          if (dd !== exceptDropdown) {
            dd.hidden = true;
            dd.classList.remove('nbq-mobile-sheet');
            var trigger = dd.parentElement ? dd.parentElement.querySelector('.nbq-select-trigger') : null;
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }'''

assert old_close_all in content, "old_close_all not found!"
content = content.replace(old_close_all, new_close_all, 1)

if is_crlf:
    content = content.replace('\n', '\r\n')

with open(INDEX_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("✔ Escape key and closeAllCustomSelects updated successfully!")
