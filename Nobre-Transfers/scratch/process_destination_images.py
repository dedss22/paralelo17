import os
from PIL import Image

BRAIN_DIR = r"C:\Users\Paralelo 17\.gemini\antigravity\brain\332a9909-f1ea-431d-8084-eaa9f5556749"
DEST_DIR = r"assets\images\destinos"
IMG_DIR = r"assets\images"

# 1. Mirante & Falesias (Hero Card Arraial)
mirante_src = os.path.join(BRAIN_DIR, "arraial_mirante_falesias_1792081780273.jpg")
im_mirante = Image.open(mirante_src)

# Save 800w (aspect ratio ~ 800x1126)
im_mirante_800 = im_mirante.resize((800, 1126), Image.Resampling.LANCZOS)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial_800w.jpg"), quality=90)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial_800w.webp"), quality=90)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial.jpg"), quality=90)
im_mirante_800.save(os.path.join(DEST_DIR, "card_arraial.webp"), quality=90)

# Save 480w
im_mirante_480 = im_mirante.resize((480, 676), Image.Resampling.LANCZOS)
im_mirante_480.save(os.path.join(DEST_DIR, "card_arraial_480w.jpg"), quality=90)
im_mirante_480.save(os.path.join(DEST_DIR, "card_arraial_480w.webp"), quality=90)
print("Saved Mirante & Falésias cards (800w and 480w)")

# 2. Vista Aerea (Card 1)
aerea_src = os.path.join(BRAIN_DIR, "arraial_vista_aerea_1792081809389.jpg")
im_aerea = Image.open(aerea_src)
im_aerea_1280 = im_aerea.resize((1280, 714), Image.Resampling.LANCZOS)
im_aerea_1280.save(os.path.join(DEST_DIR, "arraial_vista_aerea.jpg"), quality=92)
im_aerea_1280.save(os.path.join(DEST_DIR, "arraial_vista_aerea.webp"), quality=92)
im_aerea_1280.save(os.path.join(IMG_DIR, "arraial_vista_aerea.jpg"), quality=92)
print("Saved Vista Aérea (1280x714)")

# 3. Falésias e Mar (Card 2)
falesias_src = os.path.join(BRAIN_DIR, "arraial_falesias_mar_1792081845539.jpg")
im_falesias = Image.open(falesias_src)
im_falesias_1280 = im_falesias.resize((1280, 714), Image.Resampling.LANCZOS)
im_falesias_1280.save(os.path.join(DEST_DIR, "arraial_falesias_mar.jpg"), quality=92)
im_falesias_1280.save(os.path.join(DEST_DIR, "arraial_falesias_mar.webp"), quality=92)
im_falesias_1280.save(os.path.join(IMG_DIR, "arraial_falesias_mar.jpg"), quality=92)
print("Saved Falésias e Mar (1280x714)")

# 4. Rua do Mucugê (Card 3)
# We use the authentic night street photo of Rua do Mucuge
mucuge_src = "scratch_img/rua_mucuge_night_16x9.jpg"
im_mucuge = Image.open(mucuge_src)
im_mucuge_1280 = im_mucuge.resize((1280, 714), Image.Resampling.LANCZOS)
im_mucuge_1280.save(os.path.join(DEST_DIR, "arraial_rua_mucuge.jpg"), quality=92)
im_mucuge_1280.save(os.path.join(DEST_DIR, "arraial_rua_mucuge.webp"), quality=92)
im_mucuge_1280.save(os.path.join(IMG_DIR, "arraial_rua_mucuge.jpg"), quality=92)
print("Saved Rua do Mucugê (1280x714)")

# Also save Beco das Cores as alternative option
beco_src = "scratch_img/mucuge_16x9.jpg"
im_beco = Image.open(beco_src)
im_beco_1280 = im_beco.resize((1280, 714), Image.Resampling.LANCZOS)
im_beco_1280.save(os.path.join(DEST_DIR, "arraial_beco_das_cores.jpg"), quality=92)
im_beco_1280.save(os.path.join(IMG_DIR, "arraial_beco_das_cores.jpg"), quality=92)
print("Saved Beco das Cores alternative (1280x714)")
