import urllib.request
import json

titles = [
    "File:Igreja de Nossa Senhora d'Ajuda - Panorâmica com praça.jpg",
    "File:MARCIOFILHO NOSSA SENHORA D'AJUDA ARRAIL D'AJUDA BAHIA (40268120504).jpg",
    "File:Igreja Matriz Nossa Senhora D'Ajuda - Arraial d'Ajuda 2021.jpg"
]

for t in titles:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url&iiurlwidth=960&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'NobreBot/1.0'})
    data = json.loads(urllib.request.urlopen(req).read())
    for p in data.get('query', {}).get('pages', {}).values():
        if 'imageinfo' in p:
            thumb = p['imageinfo'][0]['thumburl']
            name = t.split(':')[1].replace("'", "").replace(" ", "_")[:20] + ".jpg"
            img = urllib.request.urlopen(urllib.request.Request(thumb, headers={'User-Agent': 'NobreBot/1.0'})).read()
            with open(f"scratch_img/{name}", "wb") as f:
                f.write(img)
            print("Saved", name)
