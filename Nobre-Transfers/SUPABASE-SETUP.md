# Guia de Configuração do Supabase — Nobre Transfers

Este guia detalha o passo a passo para criar o projeto no Supabase, configurar o banco de dados PostgreSQL e ativar a infraestrutura de captura de leads do site da **Nobre Transfers**.

---

## 1. Criar Conta no Supabase

1. Acesse [supabase.com](https://supabase.com).
2. Clique em **Start your project** ou **Sign In**.
3. Crie sua conta utilizando sua conta do GitHub ou e-mail corporativo.

---

## 2. Criar Novo Projeto

1. No dashboard do Supabase, clique no botão **New project** (Novo projeto).
2. Selecione a organização desejada.
3. Preencha as informações do projeto:
   - **Name (Nome):** `nobre-transfers` (ou nome de sua preferência)
   - **Database Password (Senha do Banco):** Gere uma senha forte e armazene em local seguro.
   - **Region (Região):** Selecione **South America (São Paulo) — `sa-east-1`**.  
     *Recomendação:* A escolha de São Paulo garante a menor latência de rede para os clientes no Brasil.
   - **Pricing Plan:** Selecione o plano gratuito (*Free Tier*).
4. Clique em **Create new project** e aguarde a inicialização da infraestrutura (aproximadamente 1 a 2 minutos).

---

## 3. Executar o Script SQL no SQL Editor

1. No menu lateral esquerdo do painel do Supabase, clique no ícone do **SQL Editor** (ou pressione `Ctrl + Shift + S`).
2. Clique em **+ New query**.
3. Abra o arquivo [`supabase-setup.sql`](file:///C:/Users/Paralelo%2017/.gemini/antigravity/scratch/paralelo17/Nobre-Transfers/supabase-setup.sql) deste repositório, copie todo o seu conteúdo e cole no editor do Supabase.
4. Clique no botão verde **Run** (Executar) no canto inferior direito.
5. Verifique a mensagem de sucesso: `Success. No rows returned`.

### O que este script cria:
- **Tabela `leads`**: Armazena os dados do cliente, rota, datas, metadados de tráfego (UTMs e Referrer), LGPD e status de atendimento.
- **Constraints de Integridade**: Limites de caracteres (`nome` ≤ 200, `whatsapp` ≤ 30, `email` ≤ 254, etc.) e valores permitidos para `tipo` e `status`.
- **Índices de Performance**: Otimização para buscas por data de criação (`created_at`), status do funil (`status`) e WhatsApp.
- **Row Level Security (RLS)**:
  - **`anon_insert`**: Permite aos visitantes do site (chave pública `anon`) **apenas inserir** novos registros. Leituras, atualizações e exclusões são bloqueadas para o público externo.
  - **`service_full`**: Concede acesso irrestrito para integrações de backend/CRM através da chave `service_role`.

---

## 4. Obter as Chaves de API do Supabase

1. No menu lateral esquerdo, clique no ícone de engrenagem **Project Settings**.
2. Na seção lateral de configurações, selecione **API**.
3. Localize e copie os seguintes valores:
   - **Project URL:** Formato `https://xxxxxxxxxxxxxxxxxxxx.supabase.co`
   - **Project API Keys:** Copie a chave identificada como **`anon` / `public`**.

> [!WARNING]
> NUNCA copie ou utilize a chave `service_role` no código front-end!  
> A chave `anon` foi configurada exclusivamente com permissão de inserção de leads.

---

## 5. Configurar o Arquivo `supabase-config.js`

1. Abra o arquivo [`assets/js/supabase-config.js`](file:///C:/Users/Paralelo%2017/.gemini/antigravity/scratch/paralelo17/Nobre-Transfers/assets/js/supabase-config.js) no seu editor de código.
2. Substitua as constantes vazias pelas credenciais obtidas no passo 4:

```javascript
// Preencha com as credenciais do seu projeto Supabase:
export const SUPABASE_URL = 'https://sua-url-do-projeto.supabase.co';
export const SUPABASE_ANON_KEY = 'sua-chave-anon-publica-aqui';
```

3. Salve o arquivo.

---

## 6. Testar o Funcionamento

### Teste Rápido via Console do Navegador
1. Abra o site no navegador.
2. Abra o Console de Ferramentas do Desenvolvedor (`F12` > aba **Console**).
3. Importe e execute um teste manual:

```javascript
import('/assets/js/supabase-config.js').then(async (module) => {
  const res = await module.saveLead({
    nome: 'Teste Automatizado',
    whatsapp: '5573998171117',
    origem: 'Aeroporto de Porto Seguro',
    destino: 'Trancoso',
    tipo: 'transfer',
    observacoes: 'Lead de teste para homologação'
  });
  console.log('Resultado do teste:', res);
});
```

### Teste via Formulário de Cotação
1. Preencha os campos do formulário de reserva/cotação na página inicial.
2. Submeta a cotação. O link do WhatsApp será aberto normalmente.
3. No painel do Supabase, acesse **Table Editor** > tabela **`leads`**.
4. Confirme que o novo lead aparece listado na tabela com todos os campos e parâmetros de rastreamento.

---

## 7. Notas de Segurança e Boas Práticas

| Item | Regra / Recomendação |
| :--- | :--- |
| **Chave `anon`** | Pública por natureza. Pode ficar visível no código front-end do repositório estático. Possui permissão restrita apenas a `INSERT` via RLS. |
| **Chave `service_role`** | **Privada e confidencial.** Concede acesso irrestrito para burlar as regras de RLS. **Jamais** versione ou utilize essa chave no JavaScript do navegador ou em repositórios públicos. |
| **Degradação Graciosa** | O módulo `saveLead` possui timeout de 5 segundos e captura qualquer exceção. Se o Supabase estiver indisponível ou desconfigurado, a conversão do cliente via WhatsApp continuará funcionando sem travar a interface. |
| **Privacidade e LGPD** | A tabela inclui os campos `marketing_opt_in`, `consent_at` e `privacy_version` para registrar a conformidade legal das cotações recebidas. |

---

## Suporte e Estrutura dos Arquivos

- `supabase-setup.sql`: Script DDL com a tabela `leads`, índices e políticas RLS.
- `assets/js/supabase-config.js`: Módulo ES que centraliza as chaves e executa `saveLead()` com timeout e tratamento de erros.
- `assets/js/utm-capture.js`: Módulo ES que captura parâmetros `utm_*` e `referrer` no `sessionStorage` sem sobrescrever em navegações internas.
