import urllib.request
import json
import re

# Let's search Wikimedia for various queries related to Arraial d'Ajuda streets and village
queries = [
    'Arraial d\'Ajuda',
    'Arraial d\'Ajuda centro',
    'Praça Caminho do Mar',
    'Beco das Cores',
    'Mucugê',
    'Porto Seguro rua'
]

results = []
for q in queries:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&srlimit=15&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'NobreBot/1.0 (contact@nobretransfers.com.br)'})
    try:
        data = json.loads(urllib.request.urlopen(req).read())
        for item in data.get('query', {}).get('search', []):
            title = item['title']
            snippet = item.get('snippet', '')
            results.append((title, snippet))
    except Exception as e:
        print(f"Error for {q}: {e}")

print(f"Total results: {len(results)}")
for title, snippet in results[:30]:
    clean_snippet = re.sub(r'<[^>]+>', '', snippet)
    print(f"- {title}: {clean_snippet[:80]}")
