import urllib.request
import json
import re

# Search Flickr feeds for tags: "ruadomucuge", "mucuge", "arraialdajuda"
tags = ["ruadomucuge", "arraialdajuda", "mucugê"]
found = []

for tag in tags:
    url = f"https://www.flickr.com/services/feeds/photos_public.gne?tags={urllib.parse.quote(tag)}&format=json&nojsoncallback=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req).read())
        for item in data.get('items', []):
            title = item.get('title', '')
            media_m = item.get('media', {}).get('m', '')
            link = item.get('link', '')
            tags_str = item.get('tags', '')
            if 'mucuge' in tags_str.lower() or 'mucugê' in tags_str.lower() or 'rua' in tags_str.lower() or 'rua' in title.lower():
                found.append((title, media_m, link, tags_str))
    except Exception as e:
        print(f"Error {tag}: {e}")

print(f"Found {len(found)} photos")
for f in found[:15]:
    print(f[0], "->", f[1])
