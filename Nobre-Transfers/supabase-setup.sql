-- ==============================================================================
-- Nobre Transfers - Infraestrutura de Banco de Dados Supabase (PostgreSQL)
-- Tabela: leads (Captura de Cotações e Contatos)
-- ==============================================================================

-- 1. Criação da Tabela de Leads
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Dados do Cliente (Obrigatórios)
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  
  -- Dados da Viagem / Cotação
  origem TEXT,
  destino TEXT,
  tipo TEXT DEFAULT 'transfer',
  ida_volta BOOLEAN DEFAULT false,
  data_ida DATE,
  hora_ida TIME,
  data_volta DATE,
  hora_volta TIME,
  passageiros INTEGER,
  veiculo TEXT,
  malas TEXT,
  voo TEXT,
  observacoes TEXT,
  
  -- Metadados de Navegação & Rastreamento (LGPD / Marketing)
  pagina_origem TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  idioma TEXT DEFAULT 'pt-BR',
  
  -- Status do Lead no CRM / Funil de Atendimento
  status TEXT DEFAULT 'novo',
  
  -- Consentimento e Conformidade LGPD
  marketing_opt_in BOOLEAN DEFAULT false,
  consent_at TIMESTAMPTZ,
  privacy_version TEXT,

  -- Restrições de Validação (CHECK Constraints)
  CONSTRAINT check_nome_length CHECK (char_length(nome) <= 200),
  CONSTRAINT check_whatsapp_length CHECK (char_length(whatsapp) <= 30),
  CONSTRAINT check_email_length CHECK (email IS NULL OR char_length(email) <= 254),
  CONSTRAINT check_observacoes_length CHECK (observacoes IS NULL OR char_length(observacoes) <= 2000),
  CONSTRAINT check_voo_length CHECK (voo IS NULL OR char_length(voo) <= 20),
  CONSTRAINT check_tipo CHECK (tipo IS NULL OR tipo IN ('transfer', 'passeio')),
  CONSTRAINT check_status CHECK (status IN ('novo', 'em_atendimento', 'confirmado', 'cancelado', 'perdido'))
);

-- 2. Índices para Otimização de Consultas no CRM
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_whatsapp ON public.leads (whatsapp);

-- 3. Configuração de Segurança em Nível de Linha (Row Level Security - RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Remove políticas anteriores caso o script seja reexecutado
DROP POLICY IF EXISTS "anon_insert" ON public.leads;
DROP POLICY IF EXISTS "service_full" ON public.leads;

-- Política 'anon_insert': Visitantes anônimos do site podem SOMENTE inserir leads
-- Não é permitido SELECT, UPDATE ou DELETE para a role 'anon' (protege dados de concorrentes e clientes)
CREATE POLICY "anon_insert" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política 'service_full': Acesso total para o painel administrativo/CRM via service_role
CREATE POLICY "service_full" ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 4. Comentários para Documentação do Schema
COMMENT ON TABLE public.leads IS 'Captura de leads, cotações e contatos de transfer da Nobre Transfers';
COMMENT ON COLUMN public.leads.id IS 'Identificador único do lead (UUID)';
COMMENT ON COLUMN public.leads.created_at IS 'Data e hora da captura do lead';
COMMENT ON COLUMN public.leads.nome IS 'Nome completo ou primeiro nome informado pelo cliente';
COMMENT ON COLUMN public.leads.whatsapp IS 'Número de WhatsApp formatado ou bruto informado pelo cliente';
COMMENT ON COLUMN public.leads.email IS 'E-mail para envio de orçamento formal ou confirmação';
COMMENT ON COLUMN public.leads.tipo IS 'Modalidade do serviço: transfer ou passeio';
COMMENT ON COLUMN public.leads.status IS 'Status no funil: novo, em_atendimento, confirmado, cancelado, perdido';
COMMENT ON COLUMN public.leads.privacy_version IS 'Versão dos Termos de Privacidade vigentes no momento do consentimento';
