import urllib.request
from pathlib import Path

url = 'https://cdn.pixabay.com/photo/2016/11/29/03/53/luxury-1868957_1280.jpg'
dest = Path('src/assets/hotel-booking.jpg')
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=30) as r:
    dest.write_bytes(r.read())
print(dest)
