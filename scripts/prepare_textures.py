"""Create original tiling surface maps for the CC0 architectural variants.

Only needed to regenerate assets; the finished application ships the GLB files.
Requires Pillow. No external images or generative services are used here.
"""
from pathlib import Path
import math
import random
from PIL import Image, ImageDraw, ImageFilter

OUT = Path(__file__).resolve().parents[1] / 'public/assets/textures'
OUT.mkdir(parents=True, exist_ok=True)
random.seed(217)
N = 512

for kind, base in [('stone', (132, 132, 114)), ('roof', (57, 69, 66)), ('wood', (91, 74, 54))]:
    image = Image.new('RGB', (N, N), (47, 51, 43))
    draw = ImageDraw.Draw(image)
    if kind == 'wood':
        draw.rectangle((0, 0, N, N), fill=base)
        for i in range(1300):
            x = random.randrange(N)
            d = random.randint(-20, 20)
            color = tuple(max(0, min(255, c + d)) for c in base)
            points = [(x + math.sin(y / 65 + x) * 2, y) for y in range(0, N, 8)]
            draw.line(points, fill=color, width=random.choice([1, 1, 2]))
        for x in range(0, N, 85):
            draw.line((x, 0, x, N), fill=(39, 37, 27), width=2)
    else:
        rows, w = (8, 105) if kind == 'stone' else (16, 42)
        h = N / rows
        for row in range(rows):
            for col in range(-2, int(N / w) + 2):
                x, y = col * w + (row % 2) * w / 2, row * h
                d = random.randint(-19, 15)
                color = tuple(max(0, min(255, c + d)) for c in base)
                draw.rounded_rectangle((x + 2, y + 2, x + w - 2, y + h - 2), radius=3, fill=color)
                draw.line((x + 3, y + h - 4, x + 3, y + 3, x + w - 4, y + 3), fill=tuple(min(255, c + 8) for c in color), width=1)
                if random.random() > .68:
                    draw.line((x + 4, y + h - 4, x + random.random() * w * .7, y + h - 4), fill=(68, 78, 48), width=2)
    pixels = list(image.getdata())
    varied = []
    for i, pixel in enumerate(pixels):
        n = random.randint(-12, 12)
        varied.append(tuple(max(0, min(255, channel + n)) for channel in pixel))
    image.putdata(varied)
    image.save(OUT / (kind + '.png'), optimize=True)
    gray = image.convert('L').filter(ImageFilter.GaussianBlur(.6))
    normal = Image.new('RGB', (N, N))
    values = gray.load()
    normal.putdata([(int(128 + (values[(x-1)%N,y] - values[(x+1)%N,y]) * .65), int(128 + (values[x,(y-1)%N] - values[x,(y+1)%N]) * .65), 248) for y in range(N) for x in range(N)])
    normal.save(OUT / (kind + '-normal.png'), optimize=True)
print('Prepared original stone, slate and timber maps.')
