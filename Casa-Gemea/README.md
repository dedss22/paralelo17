# Landing Page Casa Gêmea — Paralelo 17 Casas na Praia

Landing page de alto padrão para locação por temporada da **Casa Gêmea**, situada no prestigiado **Alto do Mucugê, Arraial d'Ajuda - Bahia**.

Projeto desenvolvido com arquitetura orientada a dados, alta fidelidade visual com a identidade da **Paralelo 17** e total isolamento das casas de referência.

---

## 📁 Estrutura de Pastas e Arquivos

```text
/Casa-Gemea/
├── assets/                  # Fotos da casa, logos SVG da Paralelo 17 e vídeos
├── casa.config.js           # ⚙️ ARQUIVO CENTRAL DE CONFIGURAÇÃO (Fonte da verdade)
├── build.js                 # Script gerador estático (Node.js)
├── gerar_site.bat           # Executável para atualizar a página com 1 clique no Windows
├── index.html               # Página final pronta para produção / GitHub Pages
└── README.md                # Documentação do projeto
```

---

## ⚙️ Como Alterar Dados ou Criar uma Nova Casa

Tudo o que é variável na casa está centralizado em **`casa.config.js`**:

1. **Alterar Preços / Tarifas:**
   - Abra `casa.config.js`.
   - Localize o bloco `pricing.seasons`.
   - Modifique o campo `price` (atualmente definido como `"INDISPONÍVEL"` conforme solicitado).
2. **Alterar Textos, Staff, Suítes ou FAQ:**
   - Edite diretamente as propriedades correspondentes em `casa.config.js`.
3. **Ocultar uma Seção que a casa não tenha:**
   - Cada seção possui uma flag `visible: true` ou `visible: false` (ex: `staff.visible = false`). O layout se ajusta automaticamente sem quebrar.
4. **Adicionar/Trocar Fotos:**
   - Coloque as novas fotos na pasta `assets/`.
   - Atualize os caminhos em `casa.config.js` (seções `hero`, `about`, `suites`, `leisure`, `gallery`).
5. **Reconstruir o Site:**
   - Basta dar um duplo-clique no arquivo `gerar_site.bat` ou executar no terminal:
     ```bash
     node build.js
     ```

---

## 💎 Características e Comportamento
- **Fidelidade Visual:** Paleta de luxo original (`#0d2b22`, ouro `#e58b24`, areia `#fbf8f2` e `#f0e9dc`), tipografia editorial (*Cormorant Garamond* e *Plus Jakarta Sans*), sombras profundas e raios de curvatura refinados.
- **Formulário Rápido no Hero:** Integração direta com WhatsApp montando mensagem com datas e número de hóspedes.
- **Formulário Completo de Reserva:** Envio de proposta detalhada via WhatsApp.
- **Lightbox Interativo na Galeria:** Modal full-screen com setas, suporte a teclado (Esc, setas) e toque.
- **SEO & Performance:** Meta tags Open Graph, schema.org JSON-LD para `LodgingBusiness`, preloads de imagem e critical CSS inlined.
- **100% Responsivo:** Menu gaveta mobile com animação fluida, barra inferior fixa e ergonomia para telas sensíveis ao toque.
