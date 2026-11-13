with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'arraial' in line.lower() and ('<img' in line.lower() or '<source' in line.lower() or '<article' in line.lower()):
        print(f"Line {i+1}: {line.strip()}")
