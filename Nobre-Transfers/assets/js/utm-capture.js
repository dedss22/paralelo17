/**
 * ==============================================================================
 * Nobre Transfers - Captura de UTMs e Referrer
 * Módulo ES para rastreamento de atribuição de marketing e canais de tráfego.
 * ==============================================================================
 * 
 * Este módulo captura os parâmetros de campanha (utm_source, utm_medium, utm_campaign)
 * presentes na URL e o documento de origem (document.referrer) no primeiro acesso da sessão.
 * 
 * Os dados são persistidos no sessionStorage ('nobre_utm') e nunca são sobrescritos
 * em navegações internas ou recarregamentos subsequentes, preservando a atribuição original.
 */

const STORAGE_KEY = 'nobre_utm';

/**
 * Retorna os dados de UTM e Referrer capturados na sessão.
 * 
 * @returns {{
 *   utm_source: string|null,
 *   utm_medium: string|null,
 *   utm_campaign: string|null,
 *   referrer: string|null
 * }}
 */
export function getUtmData() {
  try {
    const raw = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        utm_source: typeof parsed.utm_source === 'string' && parsed.utm_source ? parsed.utm_source : null,
        utm_medium: typeof parsed.utm_medium === 'string' && parsed.utm_medium ? parsed.utm_medium : null,
        utm_campaign: typeof parsed.utm_campaign === 'string' && parsed.utm_campaign ? parsed.utm_campaign : null,
        referrer: typeof parsed.referrer === 'string' && parsed.referrer ? parsed.referrer : null
      };
    }
  } catch (_) {
    // sessionStorage indisponível ou JSON inválido
  }

  return {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    referrer: null
  };
}

/**
 * Inicializa a captura na carga da página.
 * Não sobrescreve dados já registrados na sessão atual.
 */
function initUtmCapture() {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return;

  try {
    // Preserva os dados da primeira carga na sessão
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (existing) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const referrer = typeof document !== 'undefined' && document.referrer ? document.referrer : null;

    const utmData = {
      utm_source: utmSource ? utmSource.trim() : null,
      utm_medium: utmMedium ? utmMedium.trim() : null,
      utm_campaign: utmCampaign ? utmCampaign.trim() : null,
      referrer: referrer ? referrer.trim() : null
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmData));
  } catch (_) {
    // Protege contra bloqueios de cookies/storage de navegadores em modo anônimo restritivo
  }
}

// Execução imediata na avaliação do módulo
initUtmCapture();
