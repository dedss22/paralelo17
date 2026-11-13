import os
import shutil
from PIL import Image

BRAIN_DIR = r"C:\Users\Paralelo 17\.gemini\antigravity\brain\332a9909-f1ea-431d-8084-eaa9f5556749"
DEST_DIR = r"assets\images\destinos"
IMG_DIR = r"assets\images"

# 1. Main Left Image: Aerial Vertical 800w & 480w (Direct 4K upgrade of user's beach drone shot)
im_air = Image.open("scratch_img/aerial_vertical_800.jpg")
im_air.save(os.path.join(DEST_DIR, "card_arraial_800w.jpg"), quality=94)
im_air.save(os.path.join(DEST_DIR, "card_arraial_800w.webp"), quality=94)
im_air.save(os.path.join(DEST_DIR, "card_arraial.jpg"), quality=94)
im_air.save(os.path.join(DEST_DIR, "card_arraial.webp"), quality=94)

im_air_480 = im_air.resize((480, 676), Image.Resampling.LANCZOS)
im_air_480.save(os.path.join(DEST_DIR, "card_arraial_480w.jpg"), quality=94)
im_air_480.save(os.path.join(DEST_DIR, "card_arraial_480w.webp"), quality=94)

# Copy to brain dir for artifact display
im_air.save(os.path.join(BRAIN_DIR, "opcao_1_vista_aerea_4k.jpg"), quality=94)
print("Saved Option 1 (Aerial Vertical 4K)")

# 2. Option 2: Mirante das Fitinhas & Falésias
mirante_src = os.path.join(BRAIN_DIR, "arraial_mirante_falesias_1792081780273.jpg")
im_mirante = Image.open(mirante_src)
im_mirante_card = im_mirante.resize((1280, 714), Image.Resampling.LANCZOS)
im_mirante_card.save(os.path.join(DEST_DIR, "arraial_mirante_card.jpg"), quality=92)
im_mirante_card.save(os.path.join(DEST_DIR, "arraial_mirante_card.webp"), quality=92)
im_mirante.save(os.path.join(BRAIN_DIR, "opcao_2_mirante_fitinhas.jpg"), quality=94)
print("Saved Option 2 (Mirante das Fitinhas)")

# 3. Option 3: Pitinga Beach View
im_pitinga = Image.open("scratch_img/pitinga_vertical_800.jpg")
im_pitinga.save(os.path.join(BRAIN_DIR, "opcao_3_pitinga_mirante.jpg"), quality=94)
print("Saved Option 3 (Pitinga Mirante)")
