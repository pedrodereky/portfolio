/*
  Lista de projetos do portfólio.
  - Para destacar um projeto (spread grande), use destaque: true. A ordem dos destaques segue a ordem desta lista.
  - "telas" = rotas/páginas do app; "funcoes" = funções serverless (Supabase Edge Functions).
  - Para mostrar um link de demonstração ou do repositório, preencha "demo" ou "repo".
*/
window.AREAS = {
  ia: "IA conversacional e voz",
  reunioes: "Reuniões",
  juridico: "Jurídico e setor público",
  gestao: "Gestão e dados",
  marketing: "Marketing e redes sociais",
  produto: "Produto e 3D",
  lab: "Laboratório"
};

window.PROJECTS = [
  {
    id: "wasabii-art",
    nome: "Wasabii Art",
    area: "produto",
    destaque: true,
    resumo: "Modelagem 3D de vestuário no navegador, do molde 2D à peça simulada no avatar.",
    descricao: "Software de modelagem de roupas inspirado no CLO e no Marvelous Designer, com fluxo de trabalho à moda do Blender. O caminho completo vai do molde 2D à costura, à simulação física do tecido sobre o avatar, à gradação, às medidas e à ficha técnica. A fase atual entrega contas, projetos, compartilhamento por convite, trava de edição e a base do editor 3D.",
    stack: ["TanStack Start", "React", "TypeScript", "three.js", "React Three Fiber", "Zustand", "Supabase", "Vitest"],
    telas: 5, funcoes: 0,
    status: "Em desenvolvimento",
    repo: "", demo: ""
  },
  {
    id: "arq3d-studio",
    nome: "Arq3D Studio",
    area: "produto",
    destaque: true,
    resumo: "Da referência ao 3D em 60 segundos: plantas, redecoração e vídeo gerados por IA.",
    descricao: "Plataforma de arquitetura com IA. Gera plantas 2D a partir de um briefing, analisa plantas existentes com visão computacional, redecora ambientes a partir de uma foto e produz vídeo e visualização 3D. Tem estúdio com detecção de móveis, biblioteca de projetos, links públicos de compartilhamento e painel administrativo com uso e diagnóstico de cada geração.",
    stack: ["TanStack Start", "React", "Supabase", "Gemini", "Replicate", "model-viewer", "Stripe"],
    telas: 27, funcoes: 14,
    status: "", repo: "", demo: ""
  },
  {
    id: "diario-oficial-scanner",
    nome: "Diário Oficial Scanner",
    area: "juridico",
    destaque: true,
    resumo: "Monitoramento de diários oficiais com classificação por IA e alertas no WhatsApp.",
    descricao: "SaaS que varre o Diário Oficial da União e diários estaduais e municipais, classifica cada publicação com IA e avisa por WhatsApp e e-mail quando um termo monitorado aparece. A arquitetura é orientada a eventos, com cron jobs, fila de reprocessamento, dossiês e briefings gerados por IA e um pipeline próprio para avaliar a qualidade do classificador.",
    stack: ["React", "TypeScript", "TanStack Start", "Supabase", "Claude", "Firecrawl", "Querido Diário"],
    telas: 25, funcoes: 20,
    status: "", repo: "", demo: ""
  },
  {
    id: "assina-ai",
    nome: "Assina.ai",
    area: "juridico",
    destaque: true,
    resumo: "Assinatura digital de contratos com padrão ICP-Brasil e trilha de auditoria.",
    descricao: "Plataforma de assinatura eletrônica em conformidade com PAdES e ICP-Brasil: envelopes, modelos, preparação de documentos, verificação do signatário por código, carimbo de tempo e PDF assinado. Inclui controle de acesso por papéis, auditoria completa, webhooks com reenvio automático e lembretes para quem ainda não assinou.",
    stack: ["React 19", "TypeScript", "TanStack Start", "Supabase", "Cloudflare Workers"],
    telas: 22, funcoes: 28,
    status: "", repo: "", demo: ""
  },
  {
    id: "trafego-pago",
    nome: "Gestão de Tráfego Pago",
    area: "marketing",
    destaque: true,
    resumo: "Gerenciador de anúncios no estilo Meta Ads Manager, com IA embutida.",
    descricao: "O projeto mais extenso do portfólio. Campanhas, conjuntos, anúncios, criativos, públicos e pixels, com gerador de copy por IA, testes A/B, regras automáticas com aprovação, calculadora de escala, análise de incrementalidade e um agente que sugere otimizações. São 45 telas.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand", "Supabase"],
    telas: 45, funcoes: 11,
    status: "", repo: "", demo: ""
  },
  {
    id: "nina-talks",
    nome: "Nina Talks",
    area: "ia",
    destaque: true,
    resumo: "Agente de SDR por voz que qualifica leads, agenda reuniões e passa o briefing ao vendedor.",
    descricao: "Plataforma omnichannel de atendimento com IA. O agente atende pelo WhatsApp e por telefone com voz natural, qualifica o lead, consulta a agenda, marca e remarca reuniões e entrega um resumo para a equipe humana. Tem pipeline, cadências de follow-up, central de conversas, importação e mesclagem de contatos e fluxo de exclusão de dados conforme a LGPD.",
    stack: ["React", "TanStack Start", "Supabase", "ElevenLabs", "Evolution API", "Cloudflare Workers"],
    telas: 18, funcoes: 59,
    status: "", repo: "", demo: ""
  },
  {
    id: "briefbot",
    nome: "BriefBot",
    area: "reunioes",
    destaque: true,
    resumo: "Videochamadas com transcrição ao vivo e resumos e tarefas gerados por IA.",
    descricao: "Plataforma de reuniões com videoconferência própria, gravação e transcrição em tempo real. Quando a reunião termina, a IA gera resumo, briefing e itens de ação, que seguem por e-mail e Slack. Tem agenda, contatos, lembretes automáticos e testes end-to-end.",
    stack: ["React", "LiveKit", "Deepgram", "Supabase", "Playwright"],
    telas: 13, funcoes: 18,
    status: "", repo: "", demo: ""
  },
  {
    id: "gabinete-conectado",
    nome: "Gabinete Conectado",
    area: "juridico",
    destaque: true,
    resumo: "Gestão de gabinete parlamentar: agenda, demandas, CEAP, proposições e verbas.",
    descricao: "Sistema que substitui as planilhas soltas do dia a dia de um gabinete parlamentar. Reúne a agenda da equipe, as demandas de eleitores e municípios, o lançamento da cota parlamentar (CEAP), a tramitação de proposições, o controle de verbas, uma base de relacionamento e relatórios, com perfis de acesso por função e log de auditoria.",
    stack: ["React", "TypeScript", "TanStack Start", "Supabase", "Recharts"],
    telas: 13, funcoes: 0,
    status: "", repo: "", demo: ""
  },
  {
    id: "agente-cfo",
    nome: "Agente CFO",
    area: "gestao",
    destaque: false,
    resumo: "Painel de um agente financeiro de IA conectado a ERPs, CRMs e e-commerce.",
    descricao: "Painel multiempresa de um SaaS B2B de finanças. Conecta-se por OAuth a HubSpot, Bling, Conta Azul, Nuvemshop e Mercado Livre, conversa pelo WhatsApp, roda automações com motor próprio e dispara alertas. Inclui metas, relatórios em PDF, chat com o agente, monitoramento de uso de LLM, observabilidade e auditoria.",
    stack: ["TanStack Start", "React", "Supabase", "Evolution API", "Recharts", "Cloudflare Workers"],
    telas: 27, funcoes: 70,
    status: "", repo: "", demo: ""
  },
  {
    id: "my-dashboard",
    nome: "My Dashboard",
    area: "gestao",
    destaque: false,
    resumo: "Criador de dashboards para pequenas e médias empresas, com dados reais e leitura por IA.",
    descricao: "Monta painéis profissionais em minutos a partir de fontes como Pipedrive, Google Sheets e Mercado Livre. A IA escreve a leitura dos números, alertas avisam quando uma métrica foge do esperado e cada painel pode ser compartilhado por link público. Tem modelos prontos e exportação.",
    stack: ["TanStack Start", "React", "TypeScript", "Supabase", "IA generativa"],
    telas: 15, funcoes: 0,
    status: "", repo: "", demo: ""
  },
  {
    id: "live-coach",
    nome: "Live Coach",
    area: "reunioes",
    destaque: false,
    resumo: "Coach de IA que acompanha a reunião ao vivo e sugere o próximo passo.",
    descricao: "Feito para times de Customer Success. Recebe a transcrição em tempo real por WebSocket, analisa a conversa com IA a cada ciclo e mostra o checklist do playbook, alertas de palavras-chave como \"cancelamento\", sugestões de fala e recomendações apoiadas numa base de conhecimento (RAG). Várias pessoas podem acompanhar a mesma sessão.",
    stack: ["React", "Supabase Realtime", "WebSockets", "Gemini", "Fireflies"],
    telas: 13, funcoes: 9,
    status: "", repo: "", demo: ""
  },
  {
    id: "meetingflow",
    nome: "MeetingFlow IA",
    area: "reunioes",
    destaque: false,
    resumo: "Transforma gravações de reunião em planos de ação.",
    descricao: "Processa áudios e transcrições com IA para extrair resumo, decisões e ações, organizadas num kanban. Tem busca semântica em todo o histórico, alertas de prazo e integrações com ElevenLabs, Fireflies, Google Agenda e Slack.",
    stack: ["React", "TypeScript", "Supabase", "ElevenLabs", "Fireflies"],
    telas: 11, funcoes: 16,
    status: "", repo: "", demo: ""
  },
  {
    id: "juristech-ai",
    nome: "Juristech AI",
    area: "juridico",
    destaque: false,
    resumo: "Gestão de escritório jurídico com petições geradas por IA.",
    descricao: "Plataforma para advogados. Gera peças processuais com IA, organiza casos, clientes, tarefas e financeiro, captura publicações do DJEN, consulta processos pelo número CNJ, extrai texto de documentos por OCR e preenche cadastros por voz. Avisa por e-mail e WhatsApp.",
    stack: ["React", "TypeScript", "Supabase", "IA generativa", "Playwright"],
    telas: 21, funcoes: 10,
    status: "", repo: "", demo: ""
  },
  {
    id: "juris-ai",
    nome: "Juris AI",
    area: "juridico",
    destaque: false,
    resumo: "Análise de processos e pesquisa de jurisprudência com IA.",
    descricao: "Busca processos diretamente nos tribunais, inclusive nos que exigem captcha, analisa o andamento com IA e encontra jurisprudência relacionada ao caso.",
    stack: ["React", "TypeScript", "Supabase Edge Functions", "IA generativa"],
    telas: 1, funcoes: 6,
    status: "", repo: "", demo: ""
  },
  {
    id: "nina-imobiliaria",
    nome: "Nina Imobiliária",
    area: "ia",
    destaque: false,
    resumo: "SDR virtual no WhatsApp para imobiliárias.",
    descricao: "Atende leads no WhatsApp, descobre o perfil da família (região, tipo de imóvel, orçamento e urgência), avalia a capacidade financeira com entrada, FGTS e financiamento e agenda visitas com a equipe pelo Google Agenda. Agrupa mensagens enviadas em sequência, responde em áudio e tem uma página pública para cada imóvel.",
    stack: ["React", "Vite", "Supabase", "Gemini", "ElevenLabs", "WhatsApp"],
    telas: 4, funcoes: 21,
    status: "", repo: "", demo: ""
  },
  {
    id: "nina-sdr",
    nome: "Nina SDR",
    area: "ia",
    destaque: false,
    resumo: "A base do agente de pré-atendimento: orquestração de conversas no WhatsApp.",
    descricao: "Versão base do sistema de SDR, com painel, orquestrador que decide a próxima resposta, agrupador de mensagens, envio pelo WhatsApp, voz sintetizada e simuladores de webhook para testar fluxos sem um número real.",
    stack: ["React", "Vite", "Supabase", "Gemini", "ElevenLabs"],
    telas: 1, funcoes: 16,
    status: "", repo: "", demo: ""
  },
  {
    id: "whatsapp-expert",
    nome: "Assistente WhatsApp Business API",
    area: "ia",
    destaque: false,
    resumo: "Especialista na API oficial do WhatsApp, treinado na documentação da Meta.",
    descricao: "Assistente que ensina a configurar e integrar a WhatsApp Cloud API passo a passo. Importa a documentação oficial da Meta, gera embeddings e responde com RAG. Tem uma área administrativa para manter a base atualizada.",
    stack: ["React", "Supabase", "pgvector", "RAG"],
    telas: 4, funcoes: 3,
    status: "", repo: "", demo: ""
  },
  {
    id: "mega-automacao",
    nome: "Mega Automação de Redes Sociais",
    area: "marketing",
    destaque: false,
    resumo: "Cria, agenda e publica conteúdo com IA em várias redes ao mesmo tempo.",
    descricao: "Estúdio de conteúdo com carrosséis, artes e legendas gerados por IA, agenda de publicação, marcas com identidade própria, busca de referências na web e banco de imagens. O piloto automático produz e programa posts sozinho, e a área de analytics devolve insights sobre o que funcionou.",
    stack: ["React", "Supabase", "OpenAI Images", "Firecrawl", "Playwright"],
    telas: 18, funcoes: 13,
    status: "", repo: "", demo: ""
  },
  {
    id: "plataforma-social",
    nome: "Plataforma Social Media",
    area: "marketing",
    destaque: false,
    resumo: "Análise de perfis e criativos para orientar a produção de conteúdo.",
    descricao: "Coleta perfis do Instagram e transcrições do YouTube, analisa criativos e tom de voz com IA, organiza as referências em bases e gera conteúdo numa interface de chat.",
    stack: ["React", "Supabase", "IA generativa", "Scraping"],
    telas: 7, funcoes: 12,
    status: "", repo: "", demo: ""
  },
  {
    id: "socialmedia-ai",
    nome: "SocialMedia AI",
    area: "marketing",
    destaque: false,
    resumo: "Conteúdo para redes sociais a partir de perfis de referência e vídeos.",
    descricao: "SaaS para times de social media que estuda perfis de referência no Instagram e vídeos do YouTube para gerar legendas, roteiros e ideias por nicho. Já tem autenticação e coleta de perfis via Apify. Os próximos passos são o fluxo de aprovação, a publicação pela API da Meta e os papéis de Criador, Revisor e Admin.",
    stack: ["TanStack Start", "React", "Supabase", "Apify"],
    telas: 1, funcoes: 0,
    status: "Em desenvolvimento", repo: "", demo: ""
  },
  {
    id: "okrs",
    nome: "Plataforma de Gestão de OKRs",
    area: "gestao",
    destaque: false,
    resumo: "Da visão da empresa aos key results de cada área, com um consultor de IA.",
    descricao: "A empresa define visão e missão com ajuda da IA, desdobra tudo em objetivos e key results por área e acompanha o andamento numa árvore de OKRs. Tem check-ins periódicos, alertas e sugestões de objetivos e resultados-chave geradas por IA.",
    stack: ["React", "TypeScript", "Supabase", "IA generativa"],
    telas: 11, funcoes: 9,
    status: "", repo: "", demo: ""
  },
  {
    id: "metas-por-area",
    nome: "Gestão de Metas por Área",
    area: "gestao",
    destaque: false,
    resumo: "Metas, planos de ação e análise de resultados por área.",
    descricao: "Acompanha metas e resultados de cada área, com planos de ação, relatórios, análise de meta feita por IA, resumos enviados ao Slack e importação de planilhas. Foi construída sobre uma base SaaS própria com autenticação, papéis e cofre de chaves de API.",
    stack: ["React", "TypeScript", "Supabase", "SheetJS"],
    telas: 10, funcoes: 9,
    status: "", repo: "", demo: ""
  },
  {
    id: "ocupacao-hoteleira",
    nome: "Gestão de Ocupação Hoteleira",
    area: "gestao",
    destaque: false,
    resumo: "Reservas, calendário, tarifas e governança de um hotel, com agente de IA.",
    descricao: "Painel para hotelaria com reservas, calendário de ocupação, cadastro de hóspedes, tarifas, governança com o status dos quartos, recibos e um agente de IA que responde perguntas sobre a operação.",
    stack: ["TanStack Start", "React", "Supabase", "Recharts"],
    telas: 13, funcoes: 2,
    status: "", repo: "", demo: ""
  },
  {
    id: "architect",
    nome: "Architect",
    area: "produto",
    destaque: false,
    resumo: "Gerador de PRDs e prompts para construir produtos no Lovable.",
    descricao: "Um assistente conduz o onboarding do produto e gera o PRD completo, a arquitetura de telas, o plano de tarefas, protótipos e o prompt pronto para o Lovable. Avalia se o PRD está completo, monta a base de conhecimento e exporta tudo em PDF e ZIP. Também expõe um servidor MCP.",
    stack: ["React", "TypeScript", "Supabase", "React Flow", "react-pdf", "MCP"],
    telas: 9, funcoes: 14,
    status: "", repo: "", demo: ""
  },
  {
    id: "hello-world",
    nome: "Hello World",
    area: "lab",
    destaque: false,
    resumo: "Primeiro teste com o template TanStack Start.",
    descricao: "Uma página de boas-vindas usada para testar o template TanStack Start e o fluxo de publicação. É o único repositório público desta lista.",
    stack: ["TanStack Start", "React", "Tailwind CSS"],
    telas: 1, funcoes: 0,
    status: "", repo: "https://github.com/pedrodereky/equilibrium-maker", demo: ""
  }
];
