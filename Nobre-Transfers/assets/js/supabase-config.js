/**
 * ==============================================================================
 * Nobre Transfers - Configuração e Integração com Supabase
 * Módulo ES para captura e envio assíncrono de leads à API REST do Supabase.
 * ==============================================================================
 * 
 * INSTRUÇÕES DE CONFIGURAÇÃO:
 * 1. Acesse https://supabase.com e crie ou selecione o projeto da Nobre Transfers.
 *    (Região recomendada: sa-east-1 - São Paulo).
 * 2. No menu "SQL Editor", execute o script `supabase-setup.sql` deste projeto.
 * 3. Vá para "Project Settings" (ícone de engrenagem) > "API".
 * 4. Copie a "Project URL" e atribua à variável SUPABASE_URL abaixo.
 * 5. Copie a chave "anon" / "public" e atribua à variável SUPABASE_ANON_KEY abaixo.
 * 
 * AVISO DE SEGURANÇA:
 * - NUNCA utilize a chave 'service_role' neste arquivo nem em qualquer código cliente.
 * - A chave 'anon' é pública por design e protegida pelas políticas de RLS (Row Level Security).
 */

// Insira as credenciais do seu projeto Supabase:
export const SUPABASE_URL = '';
export const SUPABASE_ANON_KEY = '';

/**
 * Verifica se as credenciais do Supabase foram configuradas.
 * @returns {boolean} True se a URL e a Anon Key forem strings não vazias.
 */
export function isSupabaseConfigured() {
  return typeof SUPABASE_URL === 'string' &&
    SUPABASE_URL.trim().length > 0 &&
    typeof SUPABASE_ANON_KEY === 'string' &&
    SUPABASE_ANON_KEY.trim().length > 0;
}

/**
 * Envia os dados de um novo lead para a tabela 'leads' no Supabase.
 * 
 * Possui timeout estrito de 5 segundos e tratamento defensivo:
 * - Caso o Supabase não esteja configurado, retorna graciosamente { ok: false, error: '...' }.
 * - Caso ocorra timeout ou erro de rede, nunca lança exceção (throw),
 *   garantindo que o fluxo do usuário para o WhatsApp permaneça intacto.
 * 
 * @param {Object} data - Objeto contendo os dados do lead (ex: nome, whatsapp, origem, destino, etc.)
 * @returns {Promise<{ok: boolean, error?: string}>} Resultado da tentativa de gravação.
 */
export async function saveLead(data) {
  // Degradação graciosa imediata se não estiver configurado
  if (!isSupabaseConfigured()) {
    return { ok: false, error: 'Supabase não configurado' };
  }

  if (!data || typeof data !== 'object') {
    return { ok: false, error: 'Dados do lead inválidos ou não informados' };
  }

  const baseUrl = SUPABASE_URL.trim().replace(/\/+$/, '');
  const endpoint = `${baseUrl}/rest/v1/leads`;

  // Timeout de 5 segundos via AbortController nativo
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY.trim(),
        'Authorization': `Bearer ${SUPABASE_ANON_KEY.trim()}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(data),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let details = `HTTP ${response.status}`;
      try {
        const errorText = await response.text();
        if (errorText) details += `: ${errorText}`;
      } catch (_) {
        // Silencia erro ao ler texto de resposta de erro
      }
      return { ok: false, error: details };
    }

    return { ok: true };
  } catch (err) {
    clearTimeout(timeoutId);

    const isTimeout = err && (err.name === 'AbortError' || err.code === 20);
    const errorMessage = isTimeout
      ? 'Tempo limite excedido ao conectar com o Supabase (5s)'
      : (err && err.message ? err.message : String(err));

    return { ok: false, error: errorMessage };
  }
}
