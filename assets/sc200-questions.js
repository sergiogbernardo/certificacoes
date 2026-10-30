// Questões autorais de demonstração. Cada item precisa de revisão antes de integrar o banco completo.
export const questions = [
  {
    id: "SC200-001",
    area: "ambiente",
    prompt:
      "Qual tabela do Sentinel recebe eventos do conector Windows Security Events via AMA?",
    options: ["WindowsEvent", "SecurityEvent", "SigninLogs", "DeviceEvents"],
    answer: 1,
    explanation:
      "Esse conector grava os eventos na tabela SecurityEvent. O conector Windows Forwarded Events usa WindowsEvent.",
    source:
      "https://learn.microsoft.com/en-us/azure/sentinel/windows-security-event-id-reference",
  },
  {
    id: "SC200-002",
    area: "ambiente",
    prompt:
      "Uma consulta KQL deve rodar periodicamente e gerar alertas conforme os resultados. Qual recurso usar?",
    options: [
      "Workbook",
      "Playbook manual",
      "Regra analítica agendada",
      "Conector de dados",
    ],
    answer: 2,
    explanation:
      "Regras analíticas agendadas executam consultas em intervalos configurados e podem gerar alertas.",
    source:
      "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview",
  },
  {
    id: "SC200-003",
    area: "ambiente",
    prompt:
      "No Defender XDR, qual recurso fornece a consulta de base para uma detecção personalizada?",
    options: [
      "Caça avançada",
      "Política de acesso condicional",
      "Workbook do Sentinel",
      "Regra de coleta AMA",
    ],
    answer: 0,
    explanation:
      "Detecções personalizadas podem ser criadas a partir de consultas de caça avançada.",
    source:
      "https://learn.microsoft.com/en-us/defender-xdr/custom-detections-overview",
  },
  {
    id: "SC200-004",
    area: "ambiente",
    prompt:
      "Um incidente novo no Sentinel deve abrir um ticket externo automaticamente. Qual combinação é adequada?",
    options: [
      "Conector AMA e regra de coleta",
      "Workbook e consulta salva",
      "Tabela personalizada e notebook",
      "Regra de automação e playbook",
    ],
    answer: 3,
    explanation:
      "A regra de automação pode reagir à criação do incidente e chamar um playbook baseado em Azure Logic Apps.",
    source:
      "https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks",
  },
  {
    id: "SC200-005",
    area: "resposta",
    prompt:
      "Uma regra analítica gera alertas, mas a equipe não quer incidentes automáticos. Que configuração revisar?",
    options: [
      "Retenção dos logs",
      "Criação de incidentes na regra",
      "Frequência do workbook",
      "Nome do conector",
    ],
    answer: 1,
    explanation:
      "A criação de incidentes a partir dos alertas pode ser habilitada ou desabilitada nas configurações da regra.",
    source:
      "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview",
  },
  {
    id: "SC200-006",
    area: "resposta",
    prompt:
      "Para reunir alertas relacionados em um único incidente do Sentinel, que opção da regra analítica deve ser considerada?",
    options: [
      "Tabela personalizada",
      "Regra de coleta",
      "Agrupamento de alertas",
      "Playbook manual",
    ],
    answer: 2,
    explanation:
      "O agrupamento de alertas permite reunir vários alertas em um incidente, conforme critérios configurados.",
    source:
      "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview",
  },
  {
    id: "SC200-007",
    area: "caca",
    prompt:
      "Qual operador KQL mantém somente as linhas que satisfazem uma condição?",
    options: ["summarize", "join", "project-away", "where"],
    answer: 3,
    explanation:
      "where filtra a entrada e retorna somente as linhas para as quais a condição é verdadeira.",
    source:
      "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/whereoperator",
  },
  {
    id: "SC200-008",
    area: "caca",
    prompt:
      "Você quer contar eventos por dispositivo. Qual operador KQL agrupa linhas e calcula a contagem?",
    options: ["sort", "summarize", "take", "where"],
    answer: 1,
    explanation:
      "summarize agrupa registros pelos campos informados em by e calcula agregações como count().",
    source:
      "https://learn.microsoft.com/en-us/azure/kusto/query/summarizeoperator",
  },
];

export const areas = {
  ambiente: {
    name: "Gerenciar um ambiente de operações de segurança",
    recommendation:
      "Revise ingestão, conectores, regras de análise, detecções e automação no Defender XDR e Sentinel.",
    weight: "40–45%",
  },
  resposta: {
    name: "Responder a incidentes de segurança",
    recommendation:
      "Pratique triagem, investigação, correlação de alertas e ações de resposta em incidentes.",
    weight: "35–40%",
  },
  caca: {
    name: "Realizar caça a ameaças",
    recommendation:
      "Reforce KQL, caça avançada, seleção de tabelas e análise de entidades.",
    weight: "20–25%",
  },
};

export const modes = [
  {
    id: "facil",
    label: "Fácil",
    count: 50,
    description: "Uma sessão para consolidar os fundamentos.",
  },
  {
    id: "moderado",
    label: "Moderado",
    count: 80,
    description: "Mais cobertura e resistência para a prova.",
  },
  {
    id: "avancado",
    label: "Avançado",
    count: 150,
    description: "Revisão longa de todo o escopo.",
  },
];
