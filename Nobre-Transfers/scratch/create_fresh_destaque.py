import os
from PIL import Image

BRAIN_DIR = r"C:\Users\Paralelo 17\.gemini\antigravity\brain\332a9909-f1ea-431d-8084-eaa9f5556749"
DEST_DIR = r"assets\images\destinos"

# Mirante & Falésias (The Art Director & Swarm generated hero)
mirante_src = os.path.join(BRAIN_DIR, "arraial_mirante_falesias_1792081780273.jpg")
im_mirante = Image.open(mirante_src)
im_mirante_800 = im_mirante.resize((800, 1126), Image.Resampling.LANCZOS)

# Save with brand new names
im_mirante_800.save(os.path.join(DEST_DIR, "arraial_grande_destaque.jpg"), quality=94)
im_mirante_800.save(os.path.join(DEST_DIR, "arraial_grande_destaque.webp"), quality=94)

# Also update card_arraial_800w
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial_800w.jpg"), quality=94)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial_800w.webp"), quality=94)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial.jpg"), quality=94)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial.webp"), quality=94)

# Also save drone aerial alternative under unique name
im_air = Image.open("scratch_img/aerial_vertical_800.jpg")
im_air.save(os.path.join(DEST_DIR, "arraial_grande_aerea.jpg"), quality=94)
im_air.save(os.path.join(DEST_DIR, "arraial_grande_aerea.webp"), quality=94)

print("Created fresh images with new filenames!")
