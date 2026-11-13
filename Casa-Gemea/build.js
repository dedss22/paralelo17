const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'casa.config.js');
const CASA_CONFIG = require(configPath);

// Extract CSS from Casa-Janagu to ensure 100% exact visual fidelity
const janaguHtmlPath = path.resolve(__dirname, '../Casa-Janagu/index.html');
let baseCss = '';
if (fs.existsSync(janaguHtmlPath)) {
  const janaguContent = fs.readFileSync(janaguHtmlPath, 'utf8');
  const styleMatch = janaguContent.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    baseCss = styleMatch[1];
  }
}

// Icon helper
function getIcon(name, size = 15, strokeColor = 'currentColor') {
  const icons = {
    bed: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
    users: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    waves: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    sun: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    car: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    eye: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    flame: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    dumbbell: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`,
    utensils: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v4a3 3 0 0 0 3 3v13"/><path d="M8 2v4"/></svg>`,
    coffee: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>`,
    tv: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
    calendar: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    anchor: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
    shoppingBag: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    sparkles: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    check: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><polyline points="20 6 9 17 4 12"/></svg>`,
    whatsapp: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.284l-.54 2.393 2.477-.525c.98.577 1.777.848 2.806.848 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.435 8.163c-.144.406-.833.774-1.144.821-.303.047-.698.077-2.227-.563-1.849-.773-3.036-2.658-3.128-2.78-.093-.124-.748-.997-.748-1.902 0-.905.47-1.35.637-1.536.168-.186.368-.232.492-.232.124 0 .248.001.356.006.115.005.269-.044.422.323.159.382.545 1.332.593 1.43.048.098.081.213.016.34-.065.128-.098.208-.194.322-.097.114-.204.254-.291.341-.098.097-.2.203-.086.399.114.195.508.837 1.09 1.356.75.668 1.381.875 1.577.973.196.098.31.082.424-.049.115-.131.492-.572.623-.768.131-.196.262-.164.441-.098.18.065 1.143.539 1.339.637.196.098.327.147.375.229.049.082.049.475-.095.881z"></path></svg>`
  };
  return icons[name] || icons.bed;
}

// Generate HTML
function buildHtml() {
  const c = CASA_CONFIG;
  const whatsappUrlConcierge = `https://wa.me/${c.contact.whatsappNumber}?text=${encodeURIComponent(c.messages.directConcierge)}`;

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title>${c.seo.title}</title>
  <meta name="description" content="${c.seo.description}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="theme-color" content="${c.seo.themeColor}" />
  <link rel="canonical" href="${c.seo.canonicalUrl}" />

  <!-- Open Graph / Facebook / WhatsApp -->
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${c.brand.name} - ${c.brand.agencyName}" />
  <meta property="og:title" content="${c.seo.title}" />
  <meta property="og:description" content="${c.seo.description}" />
  <meta property="og:image" content="${c.seo.ogImage}" />
  <meta property="og:url" content="${c.seo.canonicalUrl}" />

  <!-- Preload Hero Image -->
  <link rel="preload" as="image" href="${c.hero.bgImage}" fetchpriority="high">

  <!-- Google Fonts: Cormorant Garamond & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"></noscript>

  <style>
${baseCss}
  </style>

  <!-- Config Script -->
  <script src="casa.config.js"></script>

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "${c.brand.name}",
    "description": "${c.seo.description}",
    "image": "${c.seo.ogImage}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alto do Mucugê",
      "addressLocality": "Arraial d'Ajuda",
      "addressRegion": "BA",
      "addressCountry": "BR"
    },
    "telephone": "+${c.contact.whatsappNumber}",
    "priceRange": "$$$$"
  }
  </script>
</head>
<body>

  <!-- TOP ANNOUNCEMENT BAR -->
  <div class="top-bar">
    <span>${c.hero.topAnnouncement}</span>
  </div>

  <!-- HEADER & NAVIGATION -->
  <nav class="nav">
    <div class="wrap nav-container">
      <a href="#hero" class="brand-wrap">
        <div class="brand-title-horizontal">
          <span class="main-name">${c.brand.name}</span>
        </div>
        <div class="brand-divider"></div>
        <img src="${c.brand.logoImage}" alt="${c.brand.agencyName}" class="paralelo-logo-img" width="120" height="48" decoding="async" />
      </a>

      <ul class="nav-links">
        ${c.about.visible ? '<li><a href="#a-casa">A Casa</a></li>' : ''}
        ${c.staff.visible ? '<li><a href="#staff">Staff</a></li>' : ''}
        ${c.suites.visible ? '<li><a href="#suites">Suítes</a></li>' : ''}
        ${c.leisure.visible ? '<li><a href="#lazer">Lazer</a></li>' : ''}
        ${c.gallery.visible ? '<li><a href="#galeria">Galeria</a></li>' : ''}
        ${c.location.visible ? '<li><a href="#localizacao">Localização</a></li>' : ''}
        ${c.pricing.visible ? '<li><a href="#tarifario">Tarifário</a></li>' : ''}
        ${c.faq.visible ? '<li><a href="#faq">FAQ</a></li>' : ''}
      </ul>

      <div class="nav-actions">
        <a href="${whatsappUrlConcierge}" target="_blank" class="btn btn-nav">
          ${getIcon('whatsapp', 18)}
          <span>Concierge VIP</span>
        </a>

        <button class="nav-toggle" id="navToggle" aria-label="Abrir menu de navegação" onclick="toggleMobileNav()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- MOBILE NAV DRAWER -->
  <div class="mobile-nav-drawer" id="mobileNavDrawer">
    <div class="mobile-drawer-backdrop" onclick="toggleMobileNav()"></div>
    <div class="mobile-drawer-panel">
      <div class="mobile-drawer-header">
        <div class="brand-title-horizontal">
          <span class="main-name">${c.brand.name}</span>
        </div>
        <button class="mobile-drawer-close" aria-label="Fechar menu de navegação" onclick="toggleMobileNav()">&times;</button>
      </div>
      <div class="mobile-drawer-logo">
        <img src="${c.brand.logoImage}" alt="${c.brand.agencyName}" width="120" height="48" style="height: 40px; width: auto;" decoding="async" />
      </div>
      <ul class="mobile-nav-list">
        ${c.about.visible ? '<li><a href="#a-casa" onclick="toggleMobileNav()">A Casa & Arquitetura</a></li>' : ''}
        ${c.staff.visible ? '<li><a href="#staff" onclick="toggleMobileNav()">Staff Incluso</a></li>' : ''}
        ${c.suites.visible ? '<li><a href="#suites" onclick="toggleMobileNav()">6 Suítes (Até 16 Hóspedes)</a></li>' : ''}
        ${c.leisure.visible ? '<li><a href="#lazer" onclick="toggleMobileNav()">Lazer & Bem-Estar</a></li>' : ''}
        ${c.gallery.visible ? '<li><a href="#galeria" onclick="toggleMobileNav()">Galeria de Fotos</a></li>' : ''}
        ${c.location.visible ? '<li><a href="#localizacao" onclick="toggleMobileNav()">Localização em Arraial</a></li>' : ''}
        ${c.pricing.visible ? '<li><a href="#tarifario" onclick="toggleMobileNav()">Tarifário & Temporadas</a></li>' : ''}
        ${c.faq.visible ? '<li><a href="#faq" onclick="toggleMobileNav()">Perguntas Frequentes</a></li>' : ''}
      </ul>
      <div class="mobile-drawer-footer">
        <a href="#reserva" class="btn" style="width: 100%;" onclick="toggleMobileNav()">
          Consultar Disponibilidade
        </a>
        <a href="${whatsappUrlConcierge}" target="_blank" class="btn btn-outline" style="width: 100%; margin-top: 10px; border-color: var(--gold); color: #fff;">
          WhatsApp Concierge VIP
        </a>
      </div>
    </div>
  </div>

  <!-- HERO SECTION -->
  <header id="hero" class="hero">
    <img src="${c.hero.bgImage}" alt="${c.hero.bgImageAlt}" class="hero-bg" width="1024" height="682" fetchpriority="high" decoding="async" />
    <div class="hero-overlay"></div>

    <div class="wrap hero-content">
      <div class="hero-grid">
        <div>
          <div class="hero-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${c.hero.badge}
          </div>
          <h1 class="serif hero-title">
            ${c.brand.name}<br class="br-desktop" />
            <span class="script-accent">Alto do Mucugê • Vista Mar</span>
          </h1>
          <p>
            ${c.hero.subtitle}
          </p>
        </div>

        <!-- QUICK BOOKING BAR (MOTOR DE VENDAS) -->
        <div class="quick-booking-card" id="quickFormCard">
          <h2>${c.hero.formTitle}</h2>
          <p>${c.hero.formSubtitle}</p>
          <form id="heroQuickForm" onsubmit="handleQuickBooking(event)">
            <div class="dates-row">
              <div class="form-group">
                <label for="heroCheckIn">Check-in</label>
                <input type="date" id="heroCheckIn" aria-label="Data de Check-in" required />
              </div>
              <div class="form-group">
                <label for="heroCheckOut">Check-out</label>
                <input type="date" id="heroCheckOut" aria-label="Data de Check-out" required />
              </div>
            </div>
            <div class="form-group">
              <label for="heroGuests">Hóspedes (Até 16)</label>
              <select id="heroGuests" aria-label="Quantidade de hóspedes" required>
                <option value="1 a 6 pessoas">1 a 6 pessoas</option>
                <option value="7 a 10 pessoas">7 a 10 pessoas</option>
                <option value="11 a 12 pessoas">11 a 12 pessoas</option>
                <option value="13 a 16 pessoas (com extras)" selected>13 a 16 pessoas (com extras)</option>
              </select>
            </div>
            <button type="submit" class="btn" style="width: 100%; margin-top: 8px; padding: 13px 20px;">
              ${getIcon('whatsapp', 18)}
              ${c.hero.buttonText}
            </button>
          </form>
        </div>
      </div>

      <!-- HERO BADGES STRIP -->
      <div class="hero-badges-strip">
        ${c.hero.badgesStrip.map(b => `
          <div class="hero-pill-expanded">
            ${getIcon(b.icon, 15, 'currentColor')}
            ${b.text}
          </div>
        `).join('')}
      </div>
    </div>
  </header>

  <!-- TRUST STRIP SECTION -->
  <section class="trust-section">
    <div class="wrap">
      <div class="trust-strip">
        <div class="trust-item">
          <strong>6 Suítes</strong>
          <span>Até 16 Hóspedes</span>
        </div>
        <div class="trust-item">
          <strong>Vista Mar</strong>
          <span>Alto do Mucugê</span>
        </div>
        <div class="trust-item">
          <strong>Lazer Completo</strong>
          <span>Piscina, Sauna & Academia</span>
        </div>
        <div class="trust-item">
          <strong>Cookshow</strong>
          <span>Cozinha & Espaço Gourmet</span>
        </div>
        <div class="trust-item">
          <strong>Garagem</strong>
          <span>Até 6 Veículos</span>
        </div>
      </div>
    </div>
  </section>

  <!-- A CASA / ARQUITETURA -->
  ${c.about.visible ? `
  <section id="a-casa">
    <div class="wrap">
      <div class="split">
        <div>
          <span class="eyebrow">${c.about.eyebrow}</span>
          <h2 class="serif">${c.about.title}</h2>
          ${c.about.paragraphs.map(p => `
            <p style="font-size: 1.08rem; color: var(--muted); margin-bottom: 20px;">
              ${p}
            </p>
          `).join('')}

          <div class="badges-grid" style="margin-top: 24px;">
            ${c.about.features.map(f => `
              <div class="feature-badge">
                <b>${f.title}</b>
                <span>${f.desc}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="media-card">
            <img src="${c.about.image}" alt="${c.about.imageAlt}" width="1200" height="800" loading="lazy" decoding="async" />
            <div class="media-caption">
              <strong>${c.brand.name}</strong> • ${c.brand.subName}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- STAFF SECTION -->
  ${c.staff.visible ? `
  <section id="staff" class="section-dark">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">${c.staff.eyebrow}</span>
        <h2 class="serif">${c.staff.title}</h2>
        <p>${c.staff.subtitle}</p>
      </div>

      <div class="staff-grid">
        ${c.staff.members.map(m => `
          <div class="staff-card">
            <span class="staff-tag">${m.hours}</span>
            <h3>${m.role}</h3>
            <p>${m.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- SUÍTES -->
  ${c.suites.visible ? `
  <section id="suites">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${c.suites.eyebrow}</span>
        <h2 class="serif">${c.suites.title}</h2>
        <p>${c.suites.subtitle}</p>
      </div>

      <div class="suites-grid">
        ${c.suites.items.map(s => `
          <div class="suite-card">
            <div class="suite-thumb" onclick="openLightbox('${s.image}')" style="cursor: pointer;">
              <img src="${s.image}" alt="${s.imageAlt}" width="1024" height="682" loading="lazy" decoding="async" />
              <div class="suite-tag">${s.tag}</div>
            </div>
            <div class="suite-body">
              <h3 class="serif">${s.name}</h3>
              <div class="suite-bed">
                ${getIcon('bed', 15, 'var(--gold)')}
                ${s.beds}
              </div>
              <p style="font-size: 0.88rem; color: var(--muted); margin: 8px 0 12px 0; line-height: 1.5;">${s.desc}</p>
              <ul class="suite-amenities">
                ${s.amenities.map(a => `
                  <li><span style="color:var(--gold); margin-right:6px;">—</span> ${a}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- LAZER E ESTRUTURA -->
  ${c.leisure.visible ? `
  <section id="lazer" style="background: var(--sand-dark);">
    <div class="wrap">
      <div class="split split-reverse">
        <div>
          <span class="eyebrow">${c.leisure.eyebrow}</span>
          <h2 class="serif">${c.leisure.title}</h2>
          <p style="font-size: 1.12rem; color: var(--muted); margin-bottom: 24px;">
            ${c.leisure.description}
          </p>

          <div class="badges-grid">
            ${c.leisure.items.map(l => `
              <div class="feature-badge">
                <b>${l.title}</b>
                <span>${l.desc}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="media-card">
            <img src="${c.leisure.image}" alt="${c.leisure.imageAlt}" width="1200" height="800" loading="lazy" decoding="async" />
            <div class="media-caption">
              <strong>${c.brand.name}</strong> • Sauna & Bem-Estar
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- GALERIA -->
  ${c.gallery.visible ? `
  <section id="galeria">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">${c.gallery.eyebrow}</span>
        <h2 class="serif">${c.gallery.title}</h2>
        <p>${c.gallery.subtitle}</p>
      </div>

      <div class="gallery-grid" id="galleryGrid">
        ${c.gallery.items.map(img => `
          <div class="gallery-item ${img.span2 ? 'span-2' : ''}" onclick="openLightbox('${img.src}')">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" />
            <div class="gallery-overlay">${img.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- LOCALIZAÇÃO -->
  ${c.location.visible ? `
  <section id="localizacao" style="background: var(--sand-dark);">
    <div class="wrap">
      <div class="split">
        <div>
          <span class="eyebrow">${c.location.eyebrow}</span>
          <h2 class="serif">${c.location.title}</h2>
          <p style="font-size: 1.12rem; color: var(--muted); margin-bottom: 18px;">
            ${c.location.subtitle}
          </p>
          <p style="font-size: 1.05rem; color: var(--muted); margin-bottom: 28px;">
            ${c.location.description}
          </p>

          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="${whatsappUrlConcierge}" target="_blank" class="btn">
              ${getIcon('whatsapp', 18)}
              Planejar Transfer com o Concierge
            </a>
          </div>
        </div>

        <div>
          <div class="location-distances">
            <h3 class="serif">Distâncias de Referência</h3>
            <div class="dist-list">
              ${c.location.distances.map(d => `
                <div class="dist-item">
                  <div class="dist-name">
                    <strong>${d.name}</strong>
                    <span>${d.distance}</span>
                  </div>
                  <div class="dist-time">${d.time}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- TARIFÁRIO -->
  ${c.pricing.visible ? `
  <section id="tarifario">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">${c.pricing.eyebrow}</span>
        <h2 class="serif">${c.pricing.title}</h2>
        <p>${c.pricing.subtitle}</p>
      </div>

      <div class="pricing-grid">
        ${c.pricing.seasons.map(s => {
          const waSeasonUrl = `https://wa.me/${c.contact.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de consultar a disponibilidade e cotar os valores da Casa Gêmea para o período de ${s.name}.`)}`;
          return `
          <div class="pricing-card">
            <div class="pricing-header">
              <h3 class="serif">${s.name}</h3>
              <p>${s.period}</p>
            </div>
            <div class="price-value">
              ${s.price} <small>${s.price === 'INDISPONÍVEL' ? '' : s.unit}</small>
            </div>
            <p style="font-size: 0.82rem; color: var(--muted); margin-bottom: 16px;">*${s.minNights}</p>

            <ul class="pricing-features">
              ${s.features.map(f => `
                <li><span style="color:var(--gold); margin-right:6px;">—</span> ${f}</li>
              `).join('')}
            </ul>

            <a href="${waSeasonUrl}" target="_blank" class="btn" style="width: 100%; justify-content: center; margin-top: 16px;">
              ${getIcon('whatsapp', 16)}
              Consultar Valores
            </a>
          </div>
          `;
        }).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- FORMULÁRIO DE COTAÇÃO / RESERVA COMPLETA -->
  <section id="reserva" class="lead-section">
    <div class="wrap">
      <div class="lead-grid">
        <div>
          <span class="eyebrow" style="color: var(--gold);">Atendimento Personalizado</span>
          <h2 class="serif" style="color: #fff; font-size: clamp(2.4rem, 4vw, 4rem); line-height: 1.08; margin-bottom: 20px;">
            ${c.form.title}
          </h2>
          <p style="color: rgba(255, 255, 255, 0.85); font-size: 1.12rem; margin-bottom: 30px;">
            ${c.form.subtitle}
          </p>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${c.form.guarantees.map(g => `
              <div style="display: flex; align-items: center; gap: 12px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span style="font-size: 0.95rem; color: #fff;">${g}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="lead-card">
            <h3 class="serif" style="font-size: 1.6rem; color: var(--primary); margin-bottom: 8px;">Solicitar Cotação de Período</h3>
            <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 24px;">Preencha os dados e receba a cotação oficial diretamente no seu WhatsApp.</p>

            <form id="reservationForm" onsubmit="handleFullReservation(event)">
              <div style="display: flex; flex-direction: column; gap: 14px;">
                <div>
                  <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resName">Seu Nome Completo *</label>
                  <input type="text" id="resName" required placeholder="Como podemos te chamar?" style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;" />
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div>
                    <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resPhone">WhatsApp (DDD) *</label>
                    <input type="tel" id="resPhone" required placeholder="(11) 99999-9999" style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;" />
                  </div>
                  <div>
                    <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resEmail">E-mail *</label>
                    <input type="email" id="resEmail" required placeholder="seu@email.com" style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;" />
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div>
                    <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resCheckIn">Check-in *</label>
                    <input type="date" id="resCheckIn" required style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;" />
                  </div>
                  <div>
                    <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resCheckOut">Check-out *</label>
                    <input type="date" id="resCheckOut" required style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;" />
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div>
                    <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resGuests">Hóspedes *</label>
                    <select id="resGuests" required style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit; background:#fff;">
                      <option value="1 a 6 pessoas">1 a 6 pessoas</option>
                      <option value="7 a 10 pessoas">7 a 10 pessoas</option>
                      <option value="11 a 12 pessoas" selected>11 a 12 pessoas</option>
                      <option value="13 a 16 pessoas (com extras)">13 a 16 pessoas (com extras)</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resPurpose">Finalidade</label>
                    <select id="resPurpose" style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit; background:#fff;">
                      <option value="Férias em família">Férias em família</option>
                      <option value="Grupo de amigos">Grupo de amigos</option>
                      <option value="Celebração / Aniversário">Celebração / Aniversário</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; color: var(--muted); display: block; margin-bottom: 6px;" for="resNotes">Observações / Pedidos Especiais</label>
                  <textarea id="resNotes" rows="2" placeholder="Ex.: Necessidade de camas extras, transfer, berço..." style="width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit; resize: vertical;"></textarea>
                </div>

                <button type="submit" class="btn" style="width: 100%; justify-content: center; padding: 16px; margin-top: 6px; font-size: 1rem;">
                  ${getIcon('whatsapp', 18)}
                  ${c.form.buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONCIERGE -->
  ${c.concierge.visible ? `
  <section id="concierge">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">${c.concierge.eyebrow}</span>
        <h2 class="serif">${c.concierge.title}</h2>
        <p>${c.concierge.subtitle}</p>
      </div>

      <div class="concierge-grid">
        ${c.concierge.services.map(s => `
          <div class="concierge-card">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- FAQ -->
  ${c.faq.visible ? `
  <section id="faq" style="background: var(--sand-dark);">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">${c.faq.eyebrow}</span>
        <h2 class="serif">${c.faq.title}</h2>
        <p>${c.faq.subtitle}</p>
      </div>

      <div class="faq-grid">
        ${c.faq.items.map(f => `
          <details class="faq-item">
            <summary>${f.question}</summary>
            <p>${f.answer}</p>
          </details>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- FINAL CTA -->
  <section class="final-cta">
    <div class="wrap">
      <span class="eyebrow" style="color: var(--gold-light);">Reserve com Exclusividade</span>
      <h2 class="serif">
        <span class="final-cta-line">Viva momentos inesquecíveis</span>
        <span class="final-cta-line">na ${c.brand.name}</span>
      </h2>
      <p>Datas exclusivas para as melhores temporadas do ano. Fale com nosso concierge no WhatsApp e planeje sua estadia no Alto do Mucugê.</p>

      <div class="final-cta-buttons">
        <a href="${whatsappUrlConcierge}" target="_blank" class="btn" style="padding: 16px 36px; font-size: 1.05rem;">
          ${getIcon('whatsapp', 20)}
          Falar com Concierge no WhatsApp
        </a>
        <a href="#reserva" class="btn btn-outline" style="padding: 16px 36px; font-size: 1.05rem;">
          Calcular Período
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <div class="brand-wrap" style="margin-bottom: 20px;">
            <div class="brand-title-horizontal">
              <span class="main-name">${c.brand.name}</span>
            </div>
            <div class="brand-divider"></div>
            <img src="${c.brand.logoImage}" alt="${c.brand.agencyName}" width="110" height="44" style="height: 44px; width: auto;" loading="lazy" decoding="async" />
          </div>
          <p style="font-size: 0.88rem; line-height: 1.6; color: rgba(255,255,255,0.65); max-width: 380px;">
            Imóvel comercializado com exclusividade pela <strong>${c.brand.agencyName}</strong>. Aluguel de temporada de alto padrão e assessoria patrimonial em Arraial d'Ajuda e Trancoso, Bahia.
          </p>
        </div>

        <div class="footer-col">
          <h3>Navegação Rápida</h3>
          <ul>
            ${c.about.visible ? '<li><a href="#a-casa">A Casa & Arquitetura</a></li>' : ''}
            ${c.staff.visible ? '<li><a href="#staff">Staff & Atendimento</a></li>' : ''}
            ${c.suites.visible ? '<li><a href="#suites">Detalhamento das Suítes</a></li>' : ''}
            ${c.leisure.visible ? '<li><a href="#lazer">Piscina, Sauna & Lazer</a></li>' : ''}
            ${c.gallery.visible ? '<li><a href="#galeria">Galeria de Fotos</a></li>' : ''}
            ${c.pricing.visible ? '<li><a href="#tarifario">Tabela de Tarifas</a></li>' : ''}
          </ul>
        </div>

        <div class="footer-col">
          <h3>Atendimento & Concierge</h3>
          <ul>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> ${c.contact.address}</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg> WhatsApp: <a href="${whatsappUrlConcierge}" target="_blank" style="color: #fff; text-decoration: underline;">${c.contact.whatsappDisplay}</a></li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> E-mail: ${c.contact.email}</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> ${c.brand.creci}</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Atendimento VIP: ${c.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 ${c.brand.name} • ${c.brand.agencyName}. Todos os direitos reservados.
        </div>
        <div style="color: rgba(255,255,255,0.5);">
          ${c.contact.cityState}
        </div>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP BUTTON -->
  <a href="${whatsappUrlConcierge}" target="_blank" class="floating-whatsapp" aria-label="Falar com Concierge pelo WhatsApp" title="Falar com o Concierge">
    ${getIcon('whatsapp', 24)}
  </a>

  <!-- STICKY MOBILE BAR -->
  <div class="mobile-bar">
    <a href="#reserva" class="btn">
      ${getIcon('whatsapp', 18)}
      Consultar Período & Reserva
    </a>
  </div>

  <!-- LIGHTBOX MODAL -->
  <div id="lightboxModal" class="lightbox-modal" onclick="closeLightbox(event)">
    <span class="lightbox-close" onclick="closeLightboxDirect()">&times;</span>
    <button class="lightbox-btn lightbox-prev" onclick="prevLightbox(event)" aria-label="Foto Anterior">&#10094;</button>
    <button class="lightbox-btn lightbox-next" onclick="nextLightbox(event)" aria-label="Próxima Foto">&#10095;</button>
    <div class="lightbox-content">
      <img id="lightboxImg" src="" alt="Foto expandida da Casa" />
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // MOBILE NAV DRAWER
    function toggleMobileNav() {
      const drawer = document.getElementById('mobileNavDrawer');
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        document.body.style.overflow = 'auto';
      } else {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    // GALLERY IMAGES LIST
    const galleryImages = ${JSON.stringify(c.gallery.items.map(i => i.src))};
    let currentImageIndex = 0;

    function openLightbox(src) {
      const modal = document.getElementById('lightboxModal');
      const img = document.getElementById('lightboxImg');
      currentImageIndex = galleryImages.indexOf(src);
      if (currentImageIndex === -1) currentImageIndex = 0;
      img.src = src;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightboxDirect() {
      const modal = document.getElementById('lightboxModal');
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    function closeLightbox(e) {
      if (e.target.id === 'lightboxModal') {
        closeLightboxDirect();
      }
    }

    function nextLightbox(e) {
      if (e) e.stopPropagation();
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      document.getElementById('lightboxImg').src = galleryImages[currentImageIndex];
    }

    function prevLightbox(e) {
      if (e) e.stopPropagation();
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      document.getElementById('lightboxImg').src = galleryImages[currentImageIndex];
    }

    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('lightboxModal');
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightboxDirect();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    });

    // DATE FORMATTER
    const formatDate = (d) => {
      if (!d) return 'A definir';
      const parts = d.split('-');
      return parts.length === 3 ? \`\${parts[2]}/\${parts[1]}/\${parts[0]}\` : d;
    };

    // QUICK BOOKING HANDLER
    function handleQuickBooking(e) {
      e.preventDefault();
      const checkIn = formatDate(document.getElementById('heroCheckIn').value);
      const checkOut = formatDate(document.getElementById('heroCheckOut').value);
      const guests = document.getElementById('heroGuests').value;

      const message = (window.CASA_CONFIG && window.CASA_CONFIG.messages && window.CASA_CONFIG.messages.quickQuote)
        ? window.CASA_CONFIG.messages.quickQuote(checkIn, checkOut, guests)
        : \`Olá! Gostaria de consultar valores para a Casa Gêmea de \${checkIn} a \${checkOut} para \${guests}.\`;

      const phone = (window.CASA_CONFIG && window.CASA_CONFIG.contact && window.CASA_CONFIG.contact.whatsappNumber) || '5573998331717';
      window.open(\`https://wa.me/\${phone}?text=\${message}\`, '_blank');
    }

    // FULL RESERVATION HANDLER
    function handleFullReservation(e) {
      e.preventDefault();
      const name = document.getElementById('resName').value;
      const phone = document.getElementById('resPhone').value;
      const email = document.getElementById('resEmail').value;
      const checkIn = formatDate(document.getElementById('resCheckIn').value);
      const checkOut = formatDate(document.getElementById('resCheckOut').value);
      const guests = document.getElementById('resGuests').value;
      const purpose = document.getElementById('resPurpose').value;
      const notes = document.getElementById('resNotes').value;

      const data = { name, phone, email, checkIn, checkOut, guests, purpose, notes };

      const message = (window.CASA_CONFIG && window.CASA_CONFIG.messages && window.CASA_CONFIG.messages.fullReservation)
        ? window.CASA_CONFIG.messages.fullReservation(data)
        : \`Olá! Meu nome é \${name}. Gostaria de solicitar cotação para a Casa Gêmea de \${checkIn} a \${checkOut} para \${guests}.\`;

      const targetPhone = (window.CASA_CONFIG && window.CASA_CONFIG.contact && window.CASA_CONFIG.contact.whatsappNumber) || '5573998331717';
      window.open(\`https://wa.me/\${targetPhone}?text=\${message}\`, '_blank');
    }
  </script>
</body>
</html>
`;

  const outputPath = path.join(__dirname, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`Successfully generated index.html at ${outputPath}`);
}

buildHtml();
