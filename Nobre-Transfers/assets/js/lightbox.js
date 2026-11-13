/**
 * Nobre Transfers — Componente de Lightbox Fullscreen para Galeria de Destinos
 * Arquivo: assets/js/lightbox.js
 *
 * Transforma os cards estáticos da galeria em um visualizador fullscreen
 * acessível, fluido e otimizado para dispositivos móveis com suporte a gestos,
 * animações FLIP via Web Animations API e integração direta com WhatsApp.
 */

// Mapeamento padrão de nomes de destinos pelos IDs das seções
const DESTINOS_NOMES = {
  arraial: "Arraial d'Ajuda",
  trancoso: "Trancoso",
  caraiva: "Caraíva",
  riodabarra: "Rio da Barra",
  espelho: "Praia do Espelho",
  taipe: "Taípe",
  santoandre: "Santo André"
};

// Número de WhatsApp oficial da Nobre Transfers
const WHATSAPP_NUMERO = '5573998171117';

// Estado global do componente de Lightbox
const estado = {
  dialog: null,
  track: null,
  tituloEl: null,
  contadorEl: null,
  closeBtn: null,
  prevBtn: null,
  nextBtn: null,
  ctaBar: null,
  ctaBtn: null,
  ctaTextEl: null,
  grupos: new Map(), // destId -> array de itens
  destAtivo: null,
  indiceAtivo: 0,
  estaAberto: false,
  emTransicaoFechamento: false,
  elementoFocoAnterior: null,
  scrollDebounceTimer: null,
  touchStartY: 0,
  touchStartX: 0,
  touchDeltaY: 0,
  touchDeltaX: 0,
  arrastoVerticalAtivo: false,
  slideInnerArrasto: null
};

/**
 * Construtor e disparador seguro de URL do WhatsApp.
 * CRÍTICO: Evita o bug de abertura dupla do WhatsApp usando a técnica com try/catch.
 * NUNCA utilize window.open(url, '_blank', 'noopener') pois retorna nulo e aciona o fallback duplo.
 *
 * @param {string} url - Link do WhatsApp com mensagem codificada
 */
function abrirWhatsApp(url) {
  if (!url) return;
  var win = window.open(url, '_blank');
  if (win) {
    try {
      win.opener = null;
    } catch (_) {}
  } else {
    window.location.href = url;
  }
}

/**
 * Monta a URL padrão de cotação para o WhatsApp para um determinado destino.
 *
 * @param {string} nomeDestino
 * @returns {string}
 */
function gerarUrlWhatsAppDestino(nomeDestino) {
  const mensagem = `Olá, Nobre Transfers! Gostaria de uma cotação de transfer para ${nomeDestino}.`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Sanitiza texto simples para inserção segura no HTML.
 *
 * @param {string} str
 * @returns {string}
 */
function escaparHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Deriva a URL em alta resolução caso `data-full` não esteja presente no HTML.
 * Exemplo: troca _480w por _800w se for imagem responsiva da pasta destinos.
 *
 * @param {HTMLImageElement|null} img
 * @returns {string}
 */
function resolverUrlAltaResolucao(img) {
  if (!img) return '';
  const src = img.getAttribute('src') || img.src || '';
  if (!src) return '';

  // Se for imagem responsiva em card de destinos (_480w), tenta a versão de 800w
  if (src.includes('_480w.')) {
    return src.replace('_480w.', '_800w.');
  }
  return src;
}

/**
 * Pré-carrega uma imagem sob demanda para navegação imediata.
 *
 * @param {string} url
 */
function preCarregarImagem(url) {
  if (!url) return;
  const img = new Image();
  img.src = url;
}

/**
 * Cria a estrutura DOM única do <dialog id="nbLightbox"> e anexa ao <body>.
 */
function criarEstruturaDialog() {
  let dialog = document.getElementById('nbLightbox');
  if (dialog) return dialog;

  dialog = document.createElement('dialog');
  dialog.id = 'nbLightbox';
  dialog.className = 'nb-lb-dialog';
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Visualizador de fotos Nobre Transfers');

  dialog.innerHTML = `
    <!-- Barra Superior -->
    <header class="nb-lb-topbar">
      <div class="nb-lb-dest-title" id="nbLbDestTitle">Destino</div>
      <div class="nb-lb-counter" id="nbLbCounter" aria-live="polite">1 / 1</div>
      <button type="button" class="nb-lb-close" id="nbLbClose" aria-label="Fechar galeria">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>

    <!-- Área Principal de Visualização -->
    <div class="nb-lb-main">
      <!-- Seta Navegação Esquerda (Desktop) -->
      <button type="button" class="nb-lb-nav-prev" id="nbLbPrev" aria-label="Foto anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <!-- Trilho de Scroll Snap Horizontal -->
      <div class="nb-lb-track" id="nbLbTrack" tabindex="-1"></div>

      <!-- Seta Navegação Direita (Desktop) -->
      <button type="button" class="nb-lb-nav-next" id="nbLbNext" aria-label="Próxima foto">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Barra Inferior de CTA -->
    <footer class="nb-lb-cta-bar" id="nbLbCtaBar">
      <a href="#" class="nb-lb-cta-btn" id="nbLbCtaBtn" target="_blank" rel="noopener noreferrer">
        <span id="nbLbCtaText">Cotar transfer para este destino</span>
        <svg class="nb-lb-cta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </footer>
  `;

  document.body.appendChild(dialog);
  return dialog;
}

/**
 * Vincula referências do DOM aos elementos internos do lightbox.
 */
function cachearElementosDOM(dialog) {
  estado.dialog = dialog;
  estado.track = dialog.querySelector('#nbLbTrack');
  estado.tituloEl = dialog.querySelector('#nbLbDestTitle');
  estado.contadorEl = dialog.querySelector('#nbLbCounter');
  estado.closeBtn = dialog.querySelector('#nbLbClose');
  estado.prevBtn = dialog.querySelector('#nbLbPrev');
  estado.nextBtn = dialog.querySelector('#nbLbNext');
  estado.ctaBar = dialog.querySelector('#nbLbCtaBar');
  estado.ctaBtn = dialog.querySelector('#nbLbCtaBtn');
  estado.ctaTextEl = dialog.querySelector('#nbLbCtaText');
}

/**
 * Atualiza o indicador numérico e os botões de navegação.
 *
 * @param {number} indice
 */
function sincronizarContadorENavegacao(indice) {
  const itens = estado.grupos.get(estado.destAtivo) || [];
  const total = itens.length;
  estado.indiceAtivo = indice;

  if (estado.contadorEl) {
    estado.contadorEl.textContent = `${indice + 1} / ${total}`;
  }

  if (estado.prevBtn) {
    if (indice <= 0) {
      estado.prevBtn.setAttribute('disabled', 'true');
    } else {
      estado.prevBtn.removeAttribute('disabled');
    }
  }

  if (estado.nextBtn) {
    if (indice >= total - 1) {
      estado.nextBtn.setAttribute('disabled', 'true');
    } else {
      estado.nextBtn.removeAttribute('disabled');
    }
  }

  // Pré-carrega o slide adjacente para resposta imediata
  if (itens[indice + 1]) preCarregarImagem(itens[indice + 1].fullUrl);
  if (itens[indice - 1]) preCarregarImagem(itens[indice - 1].fullUrl);
}

/**
 * Rola suavemente o trilho para o slide do índice selecionado.
 *
 * @param {number} indice
 * @param {boolean} suave
 */
function irParaSlide(indice, suave = true) {
  const slides = estado.track.children;
  if (!slides || indice < 0 || indice >= slides.length) return;
  const slideAlvo = slides[indice];
  if (!slideAlvo) return;

  estado.track.scrollTo({
    left: slideAlvo.offsetLeft,
    behavior: suave ? 'smooth' : 'auto'
  });

  sincronizarContadorENavegacao(indice);
}

/**
 * Renderiza os slides correspondentes ao destino selecionado dentro do track.
 *
 * @param {string} destId
 * @param {number} indiceInicial
 */
function renderizarSlides(destId, indiceInicial) {
  const itens = estado.grupos.get(destId) || [];
  estado.destAtivo = destId;
  estado.indiceAtivo = indiceInicial;

  const primeiroItem = itens[0] || {};
  const nomeDestino = primeiroItem.destNome || 'Destino';
  const urlWhatsApp = primeiroItem.destWa || gerarUrlWhatsAppDestino(nomeDestino);

  // Atualiza título e botão de CTA
  if (estado.tituloEl) estado.tituloEl.textContent = nomeDestino;
  if (estado.ctaTextEl) estado.ctaTextEl.textContent = `Cotar transfer para ${nomeDestino}`;
  if (estado.ctaBtn) {
    estado.ctaBtn.href = urlWhatsApp;
    estado.ctaBtn.setAttribute('aria-label', `Cotar transfer para ${nomeDestino} pelo WhatsApp`);
  }

  // Constrói HTML dos slides
  const fragment = document.createDocumentFragment();
  itens.forEach((item, i) => {
    const slide = document.createElement('div');
    slide.className = 'nb-lb-slide';
    slide.dataset.slideIndex = String(i);
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `Foto ${i + 1} de ${itens.length}`);

    slide.innerHTML = `
      <div class="nb-lb-slide-inner">
        <img class="nb-lb-img"
             src="${escaparHtml(item.fullUrl)}"
             alt="${escaparHtml(item.alt)}"
             loading="${i === indiceInicial ? 'eager' : 'lazy'}"
             decoding="async">
        ${item.legenda ? `<div class="nb-lb-caption">${escaparHtml(item.legenda)}</div>` : ''}
      </div>
    `;

    fragment.appendChild(slide);
  });

  estado.track.innerHTML = '';
  estado.track.appendChild(fragment);

  // Posiciona imediatamente no slide inicial
  const slideAlvo = estado.track.children[indiceInicial];
  if (slideAlvo) {
    estado.track.scrollLeft = slideAlvo.offsetLeft;
  }

  sincronizarContadorENavegacao(indiceInicial);
}

/**
 * Abre o lightbox executando a animação FLIP a partir do thumbnail de origem.
 *
 * @param {HTMLElement} botaoOrigem
 * @param {string} destId
 * @param {number} indice
 */
function abrirLightbox(botaoOrigem, destId, indice) {
  if (estado.estaAberto) return;
  estado.estaAberto = true;
  estado.emTransicaoFechamento = false;
  estado.elementoFocoAnterior = document.activeElement;

  // 1. FIRST: Coordenadas do thumbnail de origem
  const firstRect = botaoOrigem.getBoundingClientRect();

  // 2. Renderiza slides e abre o diálogo nativo
  renderizarSlides(destId, indice);

  // Histórico do navegador para capturar botão Voltar no Android
  try {
    window.history.pushState({ nbLightboxOpen: true }, '');
  } catch (_) {}

  estado.dialog.showModal();

  // Posiciona o scroll do track exatamente no slide alvo
  const slideAtivo = estado.track.children[indice];
  if (slideAtivo) {
    estado.track.scrollLeft = slideAtivo.offsetLeft;
  }

  // Foco inicial acessível
  if (estado.closeBtn) {
    estado.closeBtn.focus();
  }

  const prefereMovimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefereMovimentoReduzido) {
    // Transição suave de opacidade em caso de movimento reduzido
    estado.dialog.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      { duration: 120, easing: 'ease-out' }
    );
    return;
  }

  // 3. LAST & INVERT: Animação FLIP na imagem ativa
  const imgAtiva = slideAtivo ? slideAtivo.querySelector('.nb-lb-img') : null;

  if (imgAtiva) {
    requestAnimationFrame(() => {
      const lastRect = imgAtiva.getBoundingClientRect();

      // Se a imagem tiver dimensões calculáveis
      if (lastRect.width > 0 && lastRect.height > 0) {
        const deltaX = (firstRect.left + firstRect.width / 2) - (lastRect.left + lastRect.width / 2);
        const deltaY = (firstRect.top + firstRect.height / 2) - (lastRect.top + lastRect.height / 2);
        const scaleX = firstRect.width / lastRect.width;
        const scaleY = firstRect.height / lastRect.height;

        imgAtiva.style.willChange = 'transform, opacity';

        const anim = imgAtiva.animate(
          [
            {
              transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
              opacity: 0.85
            },
            {
              transform: 'translate3d(0, 0, 0) scale(1, 1)',
              opacity: 1
            }
          ],
          {
            duration: 280,
            easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
            fill: 'none'
          }
        );

        anim.onfinish = () => {
          imgAtiva.style.willChange = '';
        };
        anim.oncancel = () => {
          imgAtiva.style.willChange = '';
        };
      } else {
        // Fallback suave caso dimensões ainda não estejam disponíveis no layout
        imgAtiva.animate(
          [
            { opacity: 0, transform: 'scale(0.92)' },
            { opacity: 1, transform: 'scale(1)' }
          ],
          { duration: 200, easing: 'ease-out' }
        );
      }

      // Fade-in sutil de fundo do diálogo
      estado.dialog.animate(
        [
          { backgroundColor: 'rgba(11, 25, 44, 0)' },
          { backgroundColor: 'rgba(11, 25, 44, 0.97)' }
        ],
        { duration: 280, easing: 'ease-out' }
      );
    });
  }
}

/**
 * Fecha o visualizador fullscreen com limpeza de histórico e retorno de foco.
 *
 * @param {boolean} desempilharHistorico - Se verdadeiro, executa history.back()
 */
function fecharLightbox(desempilharHistorico = true) {
  if (!estado.estaAberto || estado.emTransicaoFechamento) return;
  estado.emTransicaoFechamento = true;

  // Limpa histórico do navegador caso tenha sido aberto via pushState
  if (desempilharHistorico && window.history.state && window.history.state.nbLightboxOpen) {
    try {
      window.history.back();
    } catch (_) {}
  }

  const prefereMovimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duracao = prefereMovimentoReduzido ? 100 : 200;

  // Animação de saída
  const animFechamento = estado.dialog.animate(
    [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.96)' }
    ],
    { duration: duracao, easing: 'ease-in' }
  );

  const finalizarFechamento = () => {
    estado.dialog.close();
    estado.estaAberto = false;
    estado.emTransicaoFechamento = false;
    estado.track.innerHTML = '';

    // Restaura o foco para o elemento disparador
    if (estado.elementoFocoAnterior && typeof estado.elementoFocoAnterior.focus === 'function') {
      try {
        estado.elementoFocoAnterior.focus();
      } catch (_) {}
    }
  };

  animFechamento.onfinish = finalizarFechamento;
}

/**
 * Configura os ouvintes de eventos para navegação, gestos e atalhos.
 */
function configurarEventosLightbox() {
  const { dialog, track, closeBtn, prevBtn, nextBtn, ctaBtn, ctaBar } = estado;

  // 1. Fechar via botão ✕
  closeBtn.addEventListener('click', () => {
    fecharLightbox(true);
  });

  // 2. Navegação Desktop via setas
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      irParaSlide(estado.indiceAtivo - 1, true);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      irParaSlide(estado.indiceAtivo + 1, true);
    });
  }

  // 3. Abertura do link do WhatsApp pelo padrão seguro da Nobre Transfers
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = ctaBtn.href;
      abrirWhatsApp(url);
    });
  }

  // 4. Fechar ao tocar no fundo escuro (fora da imagem) e backdrop
  dialog.addEventListener('click', (e) => {
    // Clique no próprio elemento <dialog> (fora da caixa de diálogo no desktop)
    if (e.target === dialog) {
      fecharLightbox(true);
      return;
    }

    // Clique nas áreas escuras dos slides ou do track
    if (
      e.target.classList.contains('nb-lb-slide') ||
      e.target.classList.contains('nb-lb-slide-inner') ||
      e.target.classList.contains('nb-lb-track') ||
      e.target.classList.contains('nb-lb-main')
    ) {
      fecharLightbox(true);
    }
  });

  // 5. Interceptação de teclado: Escape para fechar, setas para navegar e Focus Trap
  dialog.addEventListener('keydown', (e) => {
    if (!estado.estaAberto) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      fecharLightbox(true);
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      irParaSlide(estado.indiceAtivo - 1, true);
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      irParaSlide(estado.indiceAtivo + 1, true);
      return;
    }

    // Focus Trap cíclico WCAG 2.1 AA
    if (e.key === 'Tab') {
      const elementosFocaveis = dialog.querySelectorAll(
        'button:not([disabled]), a[href]:not([disabled]), [tabindex="0"]'
      );
      if (elementosFocaveis.length === 0) return;

      const primeiro = elementosFocaveis[0];
      const ultimo = elementosFocaveis[elementosFocaveis.length - 1];

      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    }
  });

  // 6. Voltar do navegador Android (popstate)
  window.addEventListener('popstate', () => {
    if (estado.estaAberto) {
      fecharLightbox(false); // Já foi desempilhado pelo navegador
    }
  });

  // 7. Scroll com esmaecimento discreto da barra de CTA (Debounce ~300ms)
  track.addEventListener(
    'scroll',
    () => {
      // Oculta a barra de CTA discretamente durante a rolagem/swipe
      if (ctaBar && !ctaBar.classList.contains('nb-lb-cta-bar--hidden')) {
        ctaBar.classList.add('nb-lb-cta-bar--hidden');
      }

      clearTimeout(estado.scrollDebounceTimer);
      estado.scrollDebounceTimer = setTimeout(() => {
        // Reexibe a barra de CTA quando o usuário parar de rolar
        if (ctaBar) {
          ctaBar.classList.remove('nb-lb-cta-bar--hidden');
        }

        // Calcula o slide mais próximo do centro
        const larguraTrack = track.clientWidth || window.innerWidth;
        if (larguraTrack > 0) {
          const novoIndice = Math.round(track.scrollLeft / larguraTrack);
          if (novoIndice !== estado.indiceAtivo) {
            sincronizarContadorENavegacao(novoIndice);
          }
        }
      }, 300);
    },
    { passive: true }
  );

  // 8. Gestos de toque: Swipe para baixo > 80px para fechar
  track.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length !== 1) return;
      estado.touchStartY = e.touches[0].clientY;
      estado.touchStartX = e.touches[0].clientX;
      estado.touchDeltaY = 0;
      estado.touchDeltaX = 0;
      estado.arrastoVerticalAtivo = false;

      const slideAtual = track.children[estado.indiceAtivo];
      estado.slideInnerArrasto = slideAtual ? slideAtual.querySelector('.nb-lb-slide-inner') : null;
      if (estado.slideInnerArrasto) {
        estado.slideInnerArrasto.style.transition = 'none';
      }
    },
    { passive: true }
  );

  track.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length !== 1) return;
      estado.touchDeltaY = e.touches[0].clientY - estado.touchStartY;
      estado.touchDeltaX = e.touches[0].clientX - estado.touchStartX;

      // Ativa arrasto vertical se o movimento para baixo for dominante
      if (!estado.arrastoVerticalAtivo) {
        if (estado.touchDeltaY > 15 && estado.touchDeltaY > Math.abs(estado.touchDeltaX) * 1.25) {
          estado.arrastoVerticalAtivo = true;
        }
      }

      // Aplica deslocamento tátil com redução de opacidade
      if (estado.arrastoVerticalAtivo && estado.touchDeltaY > 0) {
        if (estado.slideInnerArrasto) {
          estado.slideInnerArrasto.style.transform = `translate3d(0, ${estado.touchDeltaY}px, 0)`;
          const opacidade = Math.max(0.35, 1 - estado.touchDeltaY / 320);
          estado.slideInnerArrasto.style.opacity = String(opacidade);
        }
      }
    },
    { passive: true }
  );

  track.addEventListener(
    'touchend',
    () => {
      if (estado.arrastoVerticalAtivo) {
        const slideInner = estado.slideInnerArrasto;

        // Se o arrasto exceder 80px, fecha o visualizador
        if (estado.touchDeltaY > 80) {
          if (slideInner) {
            slideInner.style.transform = '';
            slideInner.style.opacity = '';
          }
          fecharLightbox(true);
        } else if (slideInner) {
          // Retorna suavemente à posição de repouso
          slideInner.style.transition = 'transform 200ms ease, opacity 200ms ease';
          slideInner.style.transform = 'translate3d(0, 0, 0)';
          slideInner.style.opacity = '1';
          setTimeout(() => {
            if (slideInner) {
              slideInner.style.transition = '';
            }
          }, 200);
        }

        estado.arrastoVerticalAtivo = false;
        estado.touchDeltaY = 0;
        estado.touchDeltaX = 0;
      }
    },
    { passive: true }
  );

  track.addEventListener(
    'touchcancel',
    () => {
      if (estado.arrastoVerticalAtivo && estado.slideInnerArrasto) {
        estado.slideInnerArrasto.style.transform = '';
        estado.slideInnerArrasto.style.opacity = '';
        estado.slideInnerArrasto.style.transition = '';
      }
      estado.arrastoVerticalAtivo = false;
      estado.touchDeltaY = 0;
      estado.touchDeltaX = 0;
    },
    { passive: true }
  );
}

/**
 * Transforma um elemento .spread-gallery-card (div) em um <button> acessível,
 * adicionando o indicador de zoom visual mobile e eventos de interação.
 *
 * @param {HTMLElement} card - Elemento do card original
 * @param {string} destId - ID do destino pai
 * @param {string} destNome - Nome formatado do destino
 * @param {string} destWa - Link WhatsApp correspondente
 * @param {number} indiceNoGrupo - Índice da foto dentro da galeria do destino
 * @returns {HTMLButtonElement} - Botão interativo resultante
 */
function transformarCardEmBotao(card, destId, destNome, destWa, indiceNoGrupo) {
  const img = card.querySelector('img');
  const altTexto = img && img.alt ? img.alt.trim() : 'foto do destino';
  const legendaEl = card.querySelector('.spread-gallery-caption');
  const legendaTexto = legendaEl ? legendaEl.textContent.trim() : altTexto;

  // Obtém ou deriva a URL em alta resolução
  const fullUrl =
    card.getAttribute('data-full') ||
    card.dataset.full ||
    resolverUrlAltaResolucao(img);

  // Cria o novo elemento <button>
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = card.className;
  btn.classList.add('nb-lb-card', 'nb-lb-initialized');
  btn.setAttribute('aria-haspopup', 'dialog');
  btn.setAttribute('aria-label', `Ampliar foto: ${altTexto}`);
  btn.dataset.destId = destId;
  btn.dataset.slideIndex = String(indiceNoGrupo);
  if (fullUrl) btn.dataset.full = fullUrl;

  // Move todo o conteúdo interno do card antigo para o botão
  while (card.firstChild) {
    btn.appendChild(card.firstChild);
  }

  // Adiciona o indicador visual móvel permanente (círculo 22px no canto superior direito)
  if (!btn.querySelector('.nb-lb-indicator')) {
    const indicador = document.createElement('span');
    indicador.className = 'nb-lb-indicator';
    indicador.setAttribute('aria-hidden', 'true');
    indicador.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
      </svg>
    `;
    btn.appendChild(indicador);
  }

  // Desktop: pré-carrega a imagem em tamanho cheio ao passar o mouse
  btn.addEventListener(
    'pointerenter',
    () => {
      if (window.matchMedia('(pointer: fine)').matches && fullUrl) {
        preCarregarImagem(fullUrl);
      }
    },
    { passive: true }
  );

  // Abre o lightbox ao clicar
  btn.addEventListener('click', () => {
    abrirLightbox(btn, destId, indiceNoGrupo);
  });

  // Registra os dados no mapa global de grupos
  let grupo = estado.grupos.get(destId);
  if (!grupo) {
    grupo = [];
    estado.grupos.set(destId, grupo);
  }
  grupo[indiceNoGrupo] = {
    fullUrl,
    alt: altTexto,
    legenda: legendaTexto,
    destNome,
    destWa,
    origemBtn: btn
  };

  // Substitui o antigo <div> pelo novo <button> no DOM
  if (card.parentNode) {
    card.parentNode.replaceChild(btn, card);
  }

  return btn;
}

/**
 * Função principal de inicialização do Lightbox.
 * Transforma todos os cards `.spread-gallery-card` do documento em botões interativos
 * agrupados por seus artigos `.destination-page-spread` correspondentes.
 */
function initLightbox() {
  // Cria o diálogo global
  const dialog = criarEstruturaDialog();
  cachearElementosDOM(dialog);
  configurarEventosLightbox();

  // Limpa mapa de grupos anterior
  estado.grupos.clear();

  // Busca todos os artigos de destino
  const spreads = document.querySelectorAll('.destination-page-spread');

  if (spreads.length > 0) {
    spreads.forEach((spread) => {
      const destId = spread.id || 'geral';

      // 1. Nome do destino
      let destNome =
        spread.getAttribute('data-dest') ||
        spread.dataset.dest ||
        DESTINOS_NOMES[destId];

      if (!destNome) {
        const titleEl = spread.querySelector('.dest-spread-title, .sec-title, h2');
        if (titleEl) {
          destNome = titleEl.textContent.replace(/^Conheça\s+/i, '').trim();
        }
      }
      if (!destNome) destNome = 'Destino';

      // 2. Link do WhatsApp
      let destWa =
        spread.getAttribute('data-dest-wa') ||
        spread.dataset.destWa;

      if (!destWa) {
        const linkWa = spread.querySelector('.btn-agendar-slim, a[href*="wa.me"]');
        if (linkWa && linkWa.getAttribute('href')) {
          destWa = linkWa.getAttribute('href');
        } else {
          destWa = gerarUrlWhatsAppDestino(destNome);
        }
      }

      // 3. Processa cada card de galeria dentro do destino
      const cards = spread.querySelectorAll('.spread-gallery-card');
      cards.forEach((card, indice) => {
        // Se já foi transformado em botão anteriormente, apenas re-vincula
        if (card.tagName.toLowerCase() === 'button' && card.classList.contains('nb-lb-initialized')) {
          return;
        }

        // Lê possíveis atributos específicos do card
        const cardDest = card.getAttribute('data-dest') || card.dataset.dest || destNome;
        const cardWa = card.getAttribute('data-dest-wa') || card.dataset.destWa || destWa;

        transformarCardEmBotao(card, destId, cardDest, cardWa, indice);
      });
    });
  } else {
    // Caso de fallback: busca cards soltos caso não estejam dentro de .destination-page-spread
    const cardsSoltos = document.querySelectorAll('.spread-gallery-card:not(.nb-lb-initialized)');
    cardsSoltos.forEach((card, indice) => {
      const parentSpread = card.closest('.destination-page-spread');
      const destId = parentSpread ? parentSpread.id : 'geral';
      const destNome = DESTINOS_NOMES[destId] || 'Destino';
      const destWa = gerarUrlWhatsAppDestino(destNome);

      transformarCardEmBotao(card, destId, destNome, destWa, indice);
    });
  }
}

// Auto-inicialização universal (compatível com file://, http://, CDN e bundlers)
if (typeof window !== 'undefined') {
  window.initLightbox = initLightbox;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = initLightbox;
}
