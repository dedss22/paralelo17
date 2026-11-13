import urllib.request
import json

titles = [
    "File:Arraial d'Ajuda (Porto Seguro), Bahia, Brazil.jpg",
    "File:Arraial d'Ajuda, Porto Seguro - BA, Brazil - panoramio.jpg",
    "File:Arraial D'Ajuda - Porto Seguro-BA - panoramio.jpg",
    "File:Arraial D'Ajuda - Porto Seguro-BA - panoramio (3).jpg",
    "File:Arraial dajuda (50869952393).jpg",
    "File:Arraial dajuda (50870883771).jpg"
]

for t in titles:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url&iiurlwidth=960&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'NobreBot/1.0 (contact@nobretransfers.com.br)'})
    try:
        data = json.loads(urllib.request.urlopen(req).read())
        pages = data.get('query', {}).get('pages', {})
        for p in pages.values():
            if 'imageinfo' in p:
                thumb = p['imageinfo'][0].get('thumburl')
                fname = t.split(':')[1].replace(' ', '_').replace('(', '').replace(')', '').replace("'", "")[:25] + '.jpg'
                outpath = f"scratch_img/{fname}"
                img_data = urllib.request.urlopen(urllib.request.Request(thumb, headers={'User-Agent': 'NobreBot/1.0'})).read()
                with open(outpath, 'wb') as f:
                    f.write(img_data)
                print(f"Saved: {outpath}")
    except Exception as e:
        print(f"Error {t}: {e}")
