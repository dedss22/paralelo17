with open(r'C:\Users\Paralelo 17\Desktop\Nobre-Transfers\index.html', 'r', encoding='utf-8') as f:
    text = f.read()

print('ANTECEDENCIA_MINIMA_HORAS in file:', 'ANTECEDENCIA_MINIMA_HORAS = 48' in text)
print('Desktop clamp 14.5vh in file:', 'clamp(80px, 14.5vh, 160px)' in text)
print('Destinations in dropdown:', 'Praia do Espelho' in text)
