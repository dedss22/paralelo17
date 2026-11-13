/**
 * ============================================================================
 * CASA GÊMEA - ARRAIAL D'AJUDA | CONFIGURAÇÃO GERAL DA PROPRIEDADE
 * ============================================================================
 * Arquivo único de parametrização da landing page.
 * Altere os dados, textos, preços e caminhos de imagens neste arquivo.
 * Para gerar uma nova casa, basta duplicar esta pasta e atualizar este config.
 * ----------------------------------------------------------------------------
 */

const CASA_CONFIG = {
  // IDENTIFICAÇÃO E MARCA
  brand: {
    name: "Casa Gêmea",
    slug: "casa-gemea",
    subName: "Alto do Mucugê",
    tagline: "Arraial d'Ajuda • Alto do Mucugê • Vista para o Mar",
    architect: "[PREENCHER]", // ex: Nome do Arquiteto (se houver)
    logoImage: "assets/paralelo17_original.svg",
    agencyName: "Paralelo 17 Casas na Praia",
    creci: "CRECI: 27409 - BA | 18958 - BA"
  },

  // METADADOS E SEO
  seo: {
    title: "Casa Gêmea | Casa de Alto Padrão no Alto do Mucugê em Arraial d'Ajuda | Paralelo 17 Casas na Praia",
    description: "Casa Gêmea no Alto do Mucugê, Arraial d'Ajuda. 6 suítes para até 16 hóspedes com camas extras, piscina privativa com vista para o mar, sauna, academia e cozinha cookshow. Exclusividade Paralelo 17.",
    themeColor: "#0d2b22",
    ogImage: "assets/deck_piscina.jpg",
    canonicalUrl: "https://dedss22.github.io/paralelo17/Casa-Gemea/"
  },

  // CANAIS DE ATENDIMENTO E CONTATO
  contact: {
    whatsappNumber: "5573998331717",
    whatsappDisplay: "+55 73 99833-1717",
    email: "contato@paralelo17.com.br",
    hours: "Segunda a sexta, 08h às 18h",
    address: "Alto do Mucugê, Arraial d'Ajuda - BA",
    cityState: "Arraial d'Ajuda • Bahia • Brasil"
  },

  // SEÇÃO HERO
  hero: {
    topAnnouncement: "Reserva Direta Exclusiva com a Paralelo 17: Atendimento VIP & Melhor Tarifa Garantida",
    badge: "Alto do Mucugê • Vista para o Mar • Arraial d'Ajuda",
    title: "Casa Gêmea",
    subtitle: "Conforto, amplitude e ambientes pensados para proporcionar momentos especiais em família ou entre amigos no endereço mais nobre de Arraial d'Ajuda.",
    bgImage: "assets/deck_piscina.jpg",
    bgImageAlt: "Piscina e deck da Casa Gêmea com vista para o mar no Alto do Mucugê",
    formTitle: "Consultar Disponibilidade",
    formSubtitle: "Datas exclusivas sob consulta direta no WhatsApp",
    buttonText: "Consultar no WhatsApp",
    badgesStrip: [
      { icon: "users", text: "Até 16 Hóspedes (camas extras)" },
      { icon: "bed", text: "6 Suítes Climatizadas" },
      { icon: "waves", text: "Piscina, Sauna & Academia" },
      { icon: "sun", text: "Vista Panorâmica para o Mar" }
    ]
  },

  // FAIXA DE DESTAQUES (TRUST STRIP)
  trustStrip: {
    items: [
      { number: "Até 16", label: "Hóspedes", sub: "Com camas extras confortáveis", icon: "users" },
      { number: "6", label: "Suítes", sub: "Climatizadas e privativas", icon: "bed" },
      { number: "Vista Mar", label: "Alto do Mucugê", sub: "Localização nobre em Arraial", icon: "eye" },
      { number: "6 Carros", label: "Garagem Coberta", sub: "Capacidade para até 6 veículos", icon: "car" }
    ]
  },

  // SEÇÃO A CASA / ARQUITETURA
  about: {
    visible: true,
    eyebrow: "Arquitetura & Convivência",
    title: "Conforto, amplitude e vista para o mar",
    paragraphs: [
      "Localizada no cobiçado Alto do Mucugê, com vista aberta para o mar azul da Bahia, a Casa Gêmea reúne conforto, amplitude e ambientes pensados para proporcionar momentos especiais em família ou entre amigos.",
      "A área social integra com harmonia a sala de TV, a acolhedora sala de estar e a sala de jantar com mesa ampla para refeições. A cozinha em estilo cookshow conecta os amantes da gastronomia com a convivência dos convidados em um ambiente fluido e arejado.",
      "A estrutura de lazer e bem-estar privativa é completa: piscina debruçada na paisagem do mar, sauna a vapor, academia equipada, churrasqueira para celebrações inesquecíveis e garagem com capacidade para até 6 carros."
    ],
    features: [
      { title: "Cozinha Estilo Cookshow", desc: "Ambiente moderno e integrado para celebrar a gastronomia com convidados ou chefs particulares." },
      { title: "Salas Integradas", desc: "Sala de TV, sala de estar e sala de jantar conectadas com mesa ampla para refeições." },
      { title: "Deck Panorâmico & Piscina", desc: "Solarium com espreguiçadeiras e piscina privativa debruçada sobre a vista mar." },
      { title: "Bem-Estar & Saúde", desc: "Sauna a vapor e academia completa privativa sem necessidade de sair da propriedade." }
    ],
    image: "assets/deck_vista_mar.jpg",
    imageAlt: "Vista do deck e piscina da Casa Gêmea com vista mar no Alto do Mucugê"
  },

  // STAFF INCLUSO
  staff: {
    visible: true, // Defina como false para ocultar graciosamente a seção
    eyebrow: "Serviço & Hospitalidade",
    title: "Atendimento e hospitalidade dedicada",
    subtitle: "Equipe de apoio e curadoria para garantir dias de total tranquilidade e descanso para o seu grupo.",
    members: [
      {
        role: "Serviço de Camareira & Limpeza",
        hours: "Diário",
        desc: "Arrumação diária das suítes, higienização dos banheiros e manutenção impecável dos ambientes sociais."
      },
      {
        role: "Apoio de Manutenção & Piscina",
        hours: "Diário / Manhã",
        desc: "Piscina e áreas externas sempre cristalinas e prontas para o seu lazer matinal."
      },
      {
        role: "Concierge Paralelo 17 Dedicado",
        hours: "Durante toda a estadia",
        desc: "Curadoria VIP para agendamento de passeios náuticos, reservas nos beach clubs e contratação de serviços."
      },
      {
        role: "Cozinheira & Auxiliar (Opcional)",
        hours: "Sob consulta",
        desc: "Possibilidade de contratação de equipe culinária para café da manhã, almoço e petiscos com cardápio personalizado."
      }
    ]
  },

  // SUÍTES
  suites: {
    visible: true,
    eyebrow: "Acomodações",
    title: "6 suítes planejadas para o seu descanso",
    subtitle: "Acomodação confortável para até 16 hóspedes com camas extras. Ambientes climatizados, privacidade e enxoval premium.",
    items: [
      {
        name: "Suíte Master 01",
        tag: "Cama King",
        beds: "1 Cama King Size",
        desc: "Suíte ampla climatizada com cama King, armários planejados, banheiro privativo e acabamento de alto padrão.",
        image: "assets/quarto_1.jpg",
        imageAlt: "Suíte Master com cama king na Casa Gêmea",
        amenities: ["Ar-condicionado Split", "Banheiro privativo completo", "Enxoval premium", "Espaço para cama extra"]
      },
      {
        name: "Suíte Master 02",
        tag: "Cama King",
        beds: "1 Cama King Size",
        desc: "Conforto absoluto com cama King, decoração aconchegante, excelente ventilação natural e privacidade total.",
        image: "assets/suite_02.jpg",
        imageAlt: "Suíte 02 com cama king na Casa Gêmea",
        amenities: ["Ar-condicionado Split", "Banheiro privativo completo", "Enxoval premium", "Espaço para cama extra"]
      },
      {
        name: "Suíte 03",
        tag: "Cama Queen",
        beds: "1 Cama Queen Size",
        desc: "Ambiente sofisticado com cama Queen, armários, climatização silenciosa e banheiro privativo.",
        image: "assets/suite_03.jpg",
        imageAlt: "Suíte 03 com cama queen na Casa Gêmea",
        amenities: ["Ar-condicionado Split", "Banheiro privativo", "Armários planejados", "Enxoval macio"]
      },
      {
        name: "Suíte 04",
        tag: "Cama Queen",
        beds: "1 Cama Queen Size",
        desc: "Espaçosa e luminosa, com cama Queen de alto conforto e suporte a montagem de cama extra.",
        image: "assets/suite_04.jpg",
        imageAlt: "Suíte 04 com cama queen na Casa Gêmea",
        amenities: ["Ar-condicionado Split", "Banheiro privativo", "Espaço para cama extra", "Enxoval completo"]
      },
      {
        name: "Suíte 05 (Reversível)",
        tag: "Solteiro / Casal",
        beds: "2 Camas de Solteiro (uníveis p/ Casal)",
        desc: "Versatilidade ideal para casais ou filhos: duas camas de solteiro que se unem perfeitamente para formar uma cama de casal.",
        image: "assets/suite_05.jpg",
        imageAlt: "Suíte 05 reversível na Casa Gêmea",
        amenities: ["2 Camas de solteiro ou 1 Casal", "Ar-condicionado Split", "Banheiro privativo", "Enxoval versátil"]
      },
      {
        name: "Suíte 06 (Reversível)",
        tag: "Solteiro / Casal",
        beds: "2 Camas de Solteiro (uníveis p/ Casal)",
        desc: "Segunda suíte com camas reversíveis para solteiro ou casal, com banheiro privativo e climatização completa.",
        image: "assets/suite_06.jpg",
        imageAlt: "Suíte 06 reversível na Casa Gêmea",
        amenities: ["2 Camas de solteiro ou 1 Casal", "Ar-condicionado Split", "Banheiro privativo", "Enxoval versátil"]
      }
    ]
  },

  // ÁREAS DE LAZER E ESTRUTURA
  leisure: {
    visible: true,
    eyebrow: "Lazer & Bem-Estar",
    title: "Piscina, sauna, academia e espaço gourmet",
    description: "Infraestrutura completa de alto padrão pensada para recarregar as energias, manter a rotina ativa e celebrar os melhores momentos das férias.",
    items: [
      {
        title: "Piscina com Vista para o Mar",
        desc: "Deck amplo em madeira com solarium debruçado na vista panorâmica do litoral de Arraial d'Ajuda.",
        icon: "waves"
      },
      {
        title: "Sauna a Vapor Privativa",
        desc: "Ambiente moderno com fechamento em vidro para relaxamento revigorante após a praia.",
        icon: "flame"
      },
      {
        title: "Academia Completa",
        desc: "Espaço fitness equipado para musculação e condicionamento físico com total privacidade.",
        icon: "dumbbell"
      },
      {
        title: "Churrasqueira & Espaço Gourmet",
        desc: "Espaço gourmet para churrascos e confraternizações conectado às áreas externas da casa.",
        icon: "utensils"
      },
      {
        title: "Cozinha Estilo Cookshow",
        desc: "Bancada ampla equipada para os apaixonados por gastronomia cozinharem enquanto confraternizam.",
        icon: "coffee"
      },
      {
        title: "Salas de TV, Estar & Jantar",
        desc: "Ambientes sociais integrados com mesa espaçosa para refeições e área de convivência climatizada.",
        icon: "tv"
      },
      {
        title: "Garagem para até 6 Carros",
        desc: "Estacionamento interno amplo e seguro com capacidade para comportar até 6 veículos.",
        icon: "car"
      }
    ],
    image: "assets/sauna.jpg",
    imageAlt: "Sauna privativa envidraçada da Casa Gêmea"
  },

  // GALERIA DE FOTOS COM LIGHTBOX
  gallery: {
    visible: true,
    eyebrow: "Galeria",
    title: "Ambientes da Casa Gêmea",
    subtitle: "Explore as fotos dos espaços de convivência, suítes, áreas de lazer e a vista para o mar.",
    items: [
      { src: "assets/deck_piscina.jpg", alt: "Deck e piscina com vista mar da Casa Gêmea", label: "Deck & Piscina com Vista Mar", span2: true },
      { src: "assets/deck_vista_mar.jpg", alt: "Deck visto de cima com solarium", label: "Vista Panorâmica do Deck", span2: false },
      { src: "assets/casa_fachada.jpg", alt: "Fachada arquitetônica da Casa Gêmea", label: "Fachada & Arquitetura", span2: false },
      { src: "assets/sala_estar.jpg", alt: "Sala de estar ampla integrada", label: "Sala de Estar Integrada", span2: false },
      { src: "assets/cozinha_cookshow.jpg", alt: "Cozinha ampla estilo cookshow", label: "Cozinha Cookshow", span2: false },
      { src: "assets/sauna.jpg", alt: "Sauna privativa moderna", label: "Sauna a Vapor Privativa", span2: false },
      { src: "assets/academia.jpg", alt: "Academia equipada", label: "Academia Privativa", span2: false },
      { src: "assets/poltronas_lounge.jpg", alt: "Lounge externo com poltronas", label: "Lounge & Convivência", span2: false },
      { src: "assets/quarto_1.jpg", alt: "Suíte Master com cama king", label: "Suíte Master King", span2: false },
      { src: "assets/suite_02.jpg", alt: "Suíte com cama king", label: "Suíte King Conforto", span2: false },
      { src: "assets/suite_03.jpg", alt: "Suíte do primeiro andar", label: "Suíte Superior Queen", span2: false },
      { src: "assets/banheiro.jpg", alt: "Banheiro privativo de alto padrão", label: "Banheiro das Suítes", span2: false }
    ]
  },

  // LOCALIZAÇÃO E DISTÂNCIAS
  location: {
    visible: true,
    eyebrow: "Localização Privilegiada",
    title: "Alto do Mucugê, Arraial d'Ajuda",
    subtitle: "O endereço mais exclusivo da vila, combinando a tranquilidade de uma vista deslumbrante com a proximidade dos melhores restaurantes, praias e serviços.",
    description: "Localizada no ponto mais alto e valorizado de Arraial d'Ajuda, a Casa Gêmea proporciona acesso rápido às praias e à famosa Rua do Mucugê, mantendo silêncio, privacidade e segurança absolutos.",
    distances: [
      { name: "Rua do Mucugê (A rua mais charmosa do Brasil)", time: "~3 min", distance: "800 m" },
      { name: "Praia do Mucugê", time: "~5 min", distance: "1,2 km" },
      { name: "Praia do Parracho", time: "~7 min", distance: "2,0 km" },
      { name: "Praia da Pitinga", time: "~10 min", distance: "3,5 km" },
      { name: "Centro Histórico & Igreja N. Sra. d'Ajuda", time: "~5 min", distance: "1,5 km" },
      { name: "Balsa Arraial d'Ajuda — Porto Seguro", time: "~15 min", distance: "5,0 km" },
      { name: "Aeroporto Internacional de Porto Seguro (BPS)", time: "~45 min", distance: "12 km (via balsa)" },
      { name: "Quadrado de Trancoso", time: "~40 min", distance: "28 km (asfalto)" }
    ]
  },

  // TARIFÁRIO POR TEMPORADA (PREÇOS DEFINIDOS COMO INDISPONÍVEL)
  pricing: {
    visible: true,
    eyebrow: "Tarifas & Temporadas",
    title: "Valores por temporada",
    subtitle: "Valores sob consulta direta. Diárias exclusivas para a locação da propriedade inteira.",
    badge: "Locação Exclusiva",
    seasons: [
      {
        name: "Baixa Temporada",
        period: "Março a Junho, Agosto a Novembro",
        price: "INDISPONÍVEL",
        unit: "/ diária",
        minNights: "Mínimo de 3 diárias",
        features: [
          "Acomoda até 16 pessoas (com camas extras)",
          "Uso 100% exclusivo da propriedade",
          "Acesso à piscina, sauna e academia",
          "Apoio diário de camareira e manutenção",
          "Concierge VIP Paralelo 17"
        ]
      },
      {
        name: "Alta Temporada",
        period: "Dezembro, Janeiro, Fevereiro e Julho",
        price: "INDISPONÍVEL",
        unit: "/ diária",
        minNights: "Mínimo de 4 diárias",
        features: [
          "Acomoda até 16 pessoas (com camas extras)",
          "Uso 100% exclusivo da propriedade",
          "Piscina panorâmica e sauna privativa",
          "Equipe de apoio e limpeza diária",
          "Assistência VIP para reservas e transfers"
        ]
      },
      {
        name: "Carnaval 2027",
        period: "Pacote especial (5 a 7 noites)",
        price: "INDISPONÍVEL",
        unit: "/ pacote",
        minNights: "Pacote fechado sob consulta",
        features: [
          "Exclusividade total para até 16 pessoas",
          "Estrutura para confraternizações",
          "Área gourmet, cookshow e churrasqueira",
          "Garagem para até 6 veículos",
          "Curadoria de camarotes e beach clubs"
        ]
      },
      {
        name: "Réveillon 2026/2027",
        period: "Pacote especial da virada (7 a 10 noites)",
        price: "INDISPONÍVEL",
        unit: "/ pacote",
        minNights: "Pacote de Réveillon sob consulta",
        features: [
          "Vista privilegiada para queimas e mar",
          "Toda a infraestrutura de luxo privativa",
          "Equipe de apoio à disposição",
          "Abastecimento pré-chegada opcional",
          "Planejamento sob medida com concierge"
        ]
      }
    ],
    salesValue: null // ex: "R$ 15.000.000" caso a casa também esteja à venda
  },

  // CONCIERGE & SERVIÇOS ADICIONAIS PARALELO 17
  concierge: {
    visible: true,
    eyebrow: "Experiência Completa",
    title: "Concierge Paralelo 17",
    subtitle: "Cuidamos de cada detalhe da sua estadia antes mesmo da sua chegada, proporcionando atendimento sob medida.",
    services: [
      {
        title: "Transfers Executivos",
        desc: "Recepção VIP no Aeroporto de Porto Seguro com veículos executivos privativos até a porta da casa.",
        icon: "car"
      },
      {
        title: "Abastecimento Pré-Chegada",
        desc: "Sua despensa e adega abastecidas com bebidas e itens frescos selecionados antes da sua chegada.",
        icon: "shopping-bag"
      },
      {
        title: "Lanchas & Passeios Náuticos",
        desc: "Embarcações exclusivas para passeios nos corais de Coroa Vermelha, Caraíva, Espelho e Santo André.",
        icon: "anchor"
      },
      {
        title: "Chef Particular & Bartender",
        desc: "Contratação de profissionais para café da manhã farto, churrascos na piscina e jantares autorais.",
        icon: "utensils"
      },
      {
        title: "Massoterapia & Bem-Estar",
        desc: "Sessões de massagem e tratamentos corporais ao lado da sauna ou no deck com vista para o mar.",
        icon: "sparkles"
      },
      {
        title: "Curadoria de Beach Clubs & Mesas VIP",
        desc: "Reservas garantidas nos melhores beach clubs e restaurantes de Arraial d'Ajuda e Trancoso.",
        icon: "calendar"
      }
    ]
  },

  // PERGUNTAS FREQUENTES (FAQ)
  faq: {
    visible: true,
    eyebrow: "Informações Úteis",
    title: "Dúvidas frequentes",
    subtitle: "Regras de locação, horários e detalhes para a sua estadia.",
    items: [
      {
        question: "Qual é a capacidade máxima da Casa Gêmea?",
        answer: "A casa possui 6 suítes climatizadas e acomoda confortavelmente até 16 hóspedes com a utilização de camas extras planejadas previamente junto ao concierge."
      },
      {
        question: "Como são configuradas as camas nas 6 suítes?",
        answer: "A distribuição das suítes é composta por: 2 suítes com cama king size, 2 suítes com cama queen size e 2 suítes com duas camas de solteiro cada (as quais podem ser unidas formando uma confortável cama de casal)."
      },
      {
        question: "Qual o horário padrão de check-in e check-out?",
        answer: "O check-in padrão é realizado a partir das 14h00 e o check-out até as 11h00, garantindo o preparo e higienização impecáveis da casa. Early check-in ou late check-out podem ser combinados mediante disponibilidade da agenda."
      },
      {
        question: "A casa possui vista para o mar e fica perto da praia?",
        answer: "Sim! A Casa Gêmea fica situada no nobre Alto do Mucugê, oferecendo uma linda vista aberta para o mar e fácil acesso tanto à Praia do Mucugê (~5 min) quanto ao centrinho gastronômico da charmosa Rua do Mucugê (~3 min)."
      },
      {
        question: "Quantos veículos a garagem comporta?",
        answer: "A propriedade conta com garagem privativa com capacidade para acomodar com segurança até 6 carros."
      },
      {
        question: "Como funciona a contratação de equipe culinária ou serviços extras?",
        answer: "A casa conta com apoio de camareira e manutenção. Para cozinheira particular, barman ou garçom adicional, nosso serviço de Concierge Paralelo 17 providencia profissionais de inteira confiança com cardápio sob medida."
      },
      {
        question: "Como é formalizada a reserva e quais são as garantias?",
        answer: "A reserva é formalizada por contrato digital de locação por temporada com garantias jurídicas claras, emitido pela Paralelo 17 Casas na Praia (CRECI 27409 - BA | 18958 - BA)."
      }
    ]
  },

  // FORMULÁRIO DE COTAÇÃO COMPLETA
  form: {
    title: "Consulte a disponibilidade",
    subtitle: "Fale diretamente com nosso concierge e reserve sua temporada em Arraial d'Ajuda com a atenção e discrição da Paralelo 17 Casas na Praia.",
    guarantees: [
      "Contrato formal de locação por temporada com garantias jurídicas claras.",
      "Atendimento exclusivo e curadoria de serviços sob medida.",
      "Melhor tarifa garantida em reserva direta sem taxas de intermediários."
    ],
    buttonText: "Solicitar Cotação Oficial via WhatsApp"
  },

  // TEMPLATES DINÂMICOS DE MENSAGENS PARA O WHATSAPP
  messages: {
    quickQuote: (checkIn, checkOut, guests) => 
      `Olá! Gostaria de consultar a disponibilidade e cotar os valores da *Casa Gêmea* no Alto do Mucugê (Arraial d'Ajuda):%0A%0A` +
      `• Check-in: ${checkIn}%0A` +
      `• Check-out: ${checkOut}%0A` +
      `• Hóspedes: ${guests}%0A%0A` +
      `Poderiam me informar a disponibilidade e os valores para este período?`,
      
    fullReservation: (data) =>
      `Olá! Meu nome é ${encodeURIComponent(data.name)}. Gostaria de solicitar cotação para a *Casa Gêmea* em Arraial d'Ajuda de ${data.checkIn} a ${data.checkOut} para ${data.guests} hóspedes.%0A%0A` +
      `• Finalidade: ${encodeURIComponent(data.purpose || 'Férias em família/amigos')}%0A` +
      `• E-mail: ${encodeURIComponent(data.email)}%0A` +
      `• WhatsApp: ${encodeURIComponent(data.phone)}%0A` +
      (data.notes ? `• Observações: ${encodeURIComponent(data.notes)}%0A%0A` : `%0A`) +
      `Poderiam confirmar a disponibilidade e enviar a proposta oficial de reserva?`,

    directConcierge: "Olá! Gostaria de falar com o Concierge da Paralelo 17 para tirar dúvidas e obter mais informações sobre a Casa Gêmea no Alto do Mucugê."
  }
};

// Exportação universal (Node.js e Browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CASA_CONFIG;
}
if (typeof window !== 'undefined') {
  window.CASA_CONFIG = CASA_CONFIG;
}
