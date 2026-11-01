// Gerado de SC-200/conteudo_sc200.md por scripts/build-question-bank.py.
// Edite o Markdown e execute npm run build:questions para atualizar.
export const questions = [
  {
    "id": "SC200-001",
    "area": "ambiente",
    "prompt": "Em qual tabela uma regra costuma encontrar eventos do conector Windows Security Events via AMA?",
    "options": [
      "SecurityEvent",
      "WindowsEvent",
      "DeviceEvents",
      "AzureActivity"
    ],
    "answer": 0,
    "explanation": "O conector grava esses eventos em SecurityEvent.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/windows-security-event-id-reference"
  },
  {
    "id": "SC200-002",
    "area": "ambiente",
    "prompt": "Eventos recebidos pelo conector Windows Forwarded Events normalmente chegam a qual tabela?",
    "options": [
      "SecurityEvent",
      "WindowsEvent",
      "Syslog",
      "CommonSecurityLog"
    ],
    "answer": 1,
    "explanation": "O conector de eventos encaminhados usa WindowsEvent.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/windows-security-event-id-reference"
  },
  {
    "id": "SC200-003",
    "area": "ambiente",
    "prompt": "Uma regra pronta consulta SecurityEvent, mas a coleta via WEF grava em WindowsEvent. Qual é a primeira verificação útil?",
    "options": [
      "Alterar a frequência de execução da regra",
      "Revisar apenas a gravidade do incidente",
      "A tabela consultada pela regra",
      "Trocar o parâmetro de tempo do workbook"
    ],
    "answer": 2,
    "explanation": "A regra pode não encontrar os eventos porque consulta outra tabela; adapte a consulta ou o conector.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/windows-security-event-id-reference"
  },
  {
    "id": "SC200-004",
    "area": "ambiente",
    "prompt": "Qual recurso define quais eventos o Azure Monitor Agent coleta e para onde os envia?",
    "options": [
      "Workbook",
      "Incidente",
      "Watchlist",
      "Regra de coleta de dados (DCR)"
    ],
    "answer": 3,
    "explanation": "A DCR define a coleta e o destino dos dados do agente.",
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200"
  },
  {
    "id": "SC200-005",
    "area": "ambiente",
    "prompt": "Uma fonte Linux envia mensagens Syslog não formatadas como CEF. Qual tabela consultar após a ingestão via AMA?",
    "options": [
      "Syslog",
      "SecurityEvent",
      "EmailEvents",
      "AzureActivity"
    ],
    "answer": 0,
    "explanation": "Mensagens Syslog são armazenadas na tabela Syslog.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/connect-data-sources"
  },
  {
    "id": "SC200-006",
    "area": "ambiente",
    "prompt": "Um appliance envia eventos em Common Event Format por um encaminhador Linux. Qual tabela do Sentinel é esperada?",
    "options": [
      "WindowsEvent",
      "CommonSecurityLog",
      "DeviceNetworkEvents",
      "SigninLogs"
    ],
    "answer": 1,
    "explanation": "O conector CEF via AMA grava os eventos em CommonSecurityLog.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/connect-data-sources"
  },
  {
    "id": "SC200-007",
    "area": "ambiente",
    "prompt": "Para receber CEF de vários equipamentos de rede, onde o AMA pode ser instalado?",
    "options": [
      "Apenas no navegador do analista",
      "No workbook",
      "Em um encaminhador Linux",
      "No incidente"
    ],
    "answer": 2,
    "explanation": "O encaminhador Linux recebe os logs e o AMA os envia ao workspace.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/cef-syslog-ama-overview"
  },
  {
    "id": "SC200-008",
    "area": "ambiente",
    "prompt": "Um analista precisa ver dados e incidentes do Sentinel, sem gerenciá-los. Qual papel é o ponto de partida de menor privilégio?",
    "options": [
      "Owner",
      "Microsoft Sentinel Contributor",
      "Logic App Contributor",
      "Microsoft Sentinel Reader"
    ],
    "answer": 3,
    "explanation": "Reader permite consultar e visualizar recursos, sem gerenciar incidentes.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "SC200-009",
    "area": "ambiente",
    "prompt": "Um analista deve atribuir e atualizar incidentes, mas não criar regras analíticas. Qual papel do Sentinel se encaixa melhor?",
    "options": [
      "Responder",
      "Reader",
      "Contributor",
      "Playbook Operator"
    ],
    "answer": 0,
    "explanation": "Responder acrescenta gerenciamento de incidentes às permissões de leitura.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "SC200-010",
    "area": "ambiente",
    "prompt": "Qual papel interno do Sentinel permite criar ou editar regras analíticas?",
    "options": [
      "Sentinel Reader",
      "Sentinel Contributor",
      "Sentinel Responder",
      "Sentinel Playbook Operator"
    ],
    "answer": 1,
    "explanation": "Contributor pode criar e editar recursos do Sentinel, inclusive regras.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "SC200-011",
    "area": "ambiente",
    "prompt": "Qual papel do Sentinel concede a capacidade específica de executar playbooks manualmente?",
    "options": [
      "Reader",
      "Security Reader",
      "Playbook Operator",
      "Workbook Reader"
    ],
    "answer": 2,
    "explanation": "O Playbook Operator permite listar, ver e executar playbooks; o acesso ao incidente pode exigir permissões adicionais.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "SC200-012",
    "area": "ambiente",
    "prompt": "Uma tabela precisa alimentar regras de alerta e consultas interativas do Sentinel. Qual camada atende melhor esse uso?",
    "options": [
      "Data Lake",
      "Arquivo PDF",
      "Blob público",
      "Analytics"
    ],
    "answer": 3,
    "explanation": "Analytics é a camada otimizada para regras e consultas interativas.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/manage-data-overview"
  },
  {
    "id": "SC200-013",
    "area": "ambiente",
    "prompt": "Logs volumosos serão mantidos para investigação histórica, sem necessidade de alertas em tempo real sobre a própria tabela. Qual camada considerar?",
    "options": [
      "Data Lake",
      "Apenas cache do navegador",
      "SecurityAlert",
      "Workbook"
    ],
    "answer": 0,
    "explanation": "O data lake foi desenhado para retenção longa e análise histórica.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/manage-data-overview"
  },
  {
    "id": "SC200-014",
    "area": "ambiente",
    "prompt": "A equipe quer gráficos e tabelas interativas de dados do Sentinel para acompanhamento operacional. Qual recurso usar?",
    "options": [
      "DCR",
      "Workbook",
      "Incidente",
      "NRT"
    ],
    "answer": 1,
    "explanation": "Workbooks visualizam e monitoram dados consultados.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/monitor-your-data"
  },
  {
    "id": "SC200-015",
    "area": "ambiente",
    "prompt": "Uma consulta KQL deve rodar a cada intervalo definido e gerar alertas quando atingir um limiar. Qual tipo de regra é adequado?",
    "options": [
      "Workbook",
      "DCR",
      "Regra analítica agendada",
      "Watchlist"
    ],
    "answer": 2,
    "explanation": "Regras agendadas executam consultas em intervalos e comparam os resultados ao limiar.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview"
  },
  {
    "id": "SC200-016",
    "area": "ambiente",
    "prompt": "Uma detecção precisa avaliar eventos novos em cadência aproximada de um minuto. Qual tipo de regra do Sentinel foi criado para isso?",
    "options": [
      "Scheduled de 24 horas",
      "Workbook",
      "Summary rule",
      "NRT"
    ],
    "answer": 3,
    "explanation": "Regras near-real-time (NRT) executam em intervalos de um minuto.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/near-real-time-rules"
  },
  {
    "id": "SC200-017",
    "area": "ambiente",
    "prompt": "Em uma regra agendada, a consulta retorna linhas, mas você só quer alertar acima de determinada quantidade. Que configuração usar?",
    "options": [
      "Limiar do alerta",
      "Aumentar a janela de consulta",
      "Alterar o agrupamento de alertas",
      "Mapear entidades adicionais"
    ],
    "answer": 0,
    "explanation": "O limiar determina quantos resultados são necessários para gerar o alerta.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview"
  },
  {
    "id": "SC200-018",
    "area": "ambiente",
    "prompt": "Vários alertas relacionados não devem abrir incidentes independentes. Qual configuração da regra ajuda?",
    "options": [
      "Troca da fonte de dados",
      "Agrupamento de alertas em incidentes",
      "Exportação CSV",
      "Nome da tabela"
    ],
    "answer": 1,
    "explanation": "A regra pode agrupar alertas em um incidente segundo critérios definidos.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview"
  },
  {
    "id": "SC200-019",
    "area": "ambiente",
    "prompt": "Um incidente recém-criado deve receber uma atribuição e uma tarefa padrão automaticamente. Qual recurso do Sentinel atende isso?",
    "options": [
      "DCR",
      "KQL job",
      "Regra de automação",
      "Watchlist"
    ],
    "answer": 2,
    "explanation": "Regras de automação podem padronizar ações de triagem sobre incidentes.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks"
  },
  {
    "id": "SC200-020",
    "area": "ambiente",
    "prompt": "Após a criação de um incidente, a equipe quer chamar um fluxo que abra um ticket em sistema externo. Qual combinação usar?",
    "options": [
      "Workbook e tabela",
      "DCR e retenção",
      "NRT e CSV",
      "Regra de automação e playbook"
    ],
    "answer": 3,
    "explanation": "A regra aciona o playbook que implementa o fluxo externo.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks"
  },
  {
    "id": "SC200-021",
    "area": "ambiente",
    "prompt": "Em que serviço os playbooks do Microsoft Sentinel são construídos?",
    "options": [
      "Azure Logic Apps",
      "Microsoft Word",
      "Azure Policy exclusivamente",
      "GitHub Issues"
    ],
    "answer": 0,
    "explanation": "Playbooks são fluxos do Azure Logic Apps.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks"
  },
  {
    "id": "SC200-022",
    "area": "ambiente",
    "prompt": "Um playbook deve rodar quando um incidente existente é atualizado, não apenas quando é criado. Que gatilho da regra de automação selecionar?",
    "options": [
      "Workbook saved",
      "Incident updated",
      "DCR created",
      "Table exported"
    ],
    "answer": 1,
    "explanation": "As regras de automação oferecem gatilhos de criação e atualização de incidentes.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks"
  },
  {
    "id": "SC200-023",
    "area": "ambiente",
    "prompt": "Qual é a base para criar uma regra de detecção personalizada no Microsoft Defender XDR?",
    "options": [
      "Workbook do Sentinel",
      "DCR",
      "Consulta de caça avançada",
      "Pesquisa eDiscovery"
    ],
    "answer": 2,
    "explanation": "A regra é construída sobre uma consulta de advanced hunting.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules/"
  },
  {
    "id": "SC200-024",
    "area": "ambiente",
    "prompt": "Uma detecção personalizada encontrou um dispositivo suspeito e a equipe precisa conter sua comunicação de rede. Qual ação de resposta é adequada?",
    "options": [
      "Coletar o pacote de investigação",
      "Adicionar uma etiqueta ao dispositivo",
      "Executar uma varredura antivírus",
      "Isolar o dispositivo"
    ],
    "answer": 3,
    "explanation": "Regras de detecção personalizadas podem iniciar ações de resposta em dispositivos identificados no resultado.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules/"
  },
  {
    "id": "SC200-025",
    "area": "ambiente",
    "prompt": "Qual modelo de regra do Sentinel compara indicadores importados com eventos ingeridos?",
    "options": [
      "TI map",
      "Workbook",
      "DCR",
      "Pesquisa de conteúdo"
    ],
    "answer": 0,
    "explanation": "Regras TI map cruzam indicadores com dados das fontes conectadas.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/use-threat-indicators-in-analytics-rules"
  },
  {
    "id": "SC200-026",
    "area": "ambiente",
    "prompt": "A equipe quer agregar repetidamente logs de alto volume e gravar o resultado em tabela menor para consulta. Qual recurso considerar?",
    "options": [
      "Incidente manual",
      "Summary rule",
      "Live response",
      "Quarentena de e-mail"
    ],
    "answer": 1,
    "explanation": "Summary rules executam agregações e persistem os resultados em tabelas de análise.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-jobs-summary-rules-search-jobs"
  },
  {
    "id": "SC200-027",
    "area": "resposta",
    "prompt": "No Defender XDR, qual é um resultado possível da investigação automática sobre uma evidência?",
    "options": [
      "Indexed",
      "Archived",
      "Malicious",
      "Retained"
    ],
    "answer": 2,
    "explanation": "A investigação pode classificar evidências como maliciosas, suspeitas ou sem ameaça encontrada.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/m365d-autoir"
  },
  {
    "id": "SC200-028",
    "area": "resposta",
    "prompt": "Por que uma ação sugerida pela investigação automática pode aparecer como pendente?",
    "options": [
      "O KQL não suporta alertas",
      "Todo incidente exige exportação PDF",
      "O agente AMA está desabilitado",
      "Pode exigir aprovação conforme a configuração de automação"
    ],
    "answer": 3,
    "explanation": "A automação pode executar ações diretamente ou aguardar aprovação.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/m365d-autoir"
  },
  {
    "id": "SC200-029",
    "area": "resposta",
    "prompt": "Onde verificar o andamento de uma ação de resposta iniciada no Defender?",
    "options": [
      "Action center",
      "Grafo do incidente",
      "Linha do tempo do dispositivo",
      "Página de entidade do e-mail"
    ],
    "answer": 0,
    "explanation": "O Action center reúne status e histórico de ações de resposta.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/entity-page-device"
  },
  {
    "id": "SC200-030",
    "area": "resposta",
    "prompt": "Um dispositivo está comprometido e a equipe precisa conter a comunicação de rede mantendo contato com o serviço Defender. Qual ação usar?",
    "options": [
      "Delete workbook",
      "Isolate device",
      "Change DCR",
      "Dismiss incident"
    ],
    "answer": 1,
    "explanation": "O isolamento corta a rede do dispositivo, preservando a conexão de gerenciamento com o Defender.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/entity-page-device"
  },
  {
    "id": "SC200-031",
    "area": "resposta",
    "prompt": "Qual ação reúne informações do endpoint em um pacote para análise posterior?",
    "options": [
      "Create workbook",
      "Disable analytics rule",
      "Collect investigation package",
      "Export sitemap"
    ],
    "answer": 2,
    "explanation": "A coleta produz um pacote de investigação do dispositivo.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/entity-page-device"
  },
  {
    "id": "SC200-032",
    "area": "resposta",
    "prompt": "O analista precisa executar comandos investigativos no endpoint remoto usando o Defender. Qual recurso escolher?",
    "options": [
      "Summary rule",
      "Threat Explorer",
      "Content search",
      "Live response"
    ],
    "answer": 3,
    "explanation": "Live response fornece uma sessão interativa no dispositivo, sujeita a permissões e suporte do sistema.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/live-response"
  },
  {
    "id": "SC200-033",
    "area": "resposta",
    "prompt": "Para relacionar processos, arquivos e conexões observados em um endpoint, qual vista é especialmente útil?",
    "options": [
      "Device timeline",
      "Grafo do incidente XDR",
      "Página de entidade do e-mail",
      "Relatório de entradas do Entra"
    ],
    "answer": 0,
    "explanation": "A linha do tempo ajuda a reconstruir atividades do dispositivo.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/entity-page-device"
  },
  {
    "id": "SC200-034",
    "area": "resposta",
    "prompt": "Uma ação de resposta não aparece para determinado endpoint. Qual hipótese deve ser checada antes de concluir que o produto falhou?",
    "options": [
      "Ajuste da janela da regra analítica",
      "Suporte do sistema, versão, onboarding e permissões",
      "Retenção da tabela no Sentinel",
      "Filtro de tempo do workbook"
    ],
    "answer": 1,
    "explanation": "Ações disponíveis variam conforme dispositivo, sistema, versão e acesso.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/entity-page-device"
  },
  {
    "id": "SC200-035",
    "area": "resposta",
    "prompt": "Um incidente do Sentinel contém alertas associados a usuários, IPs e dispositivos. Onde começar a examinar esses objetos?",
    "options": [
      "Apenas nome do workbook",
      "DCR",
      "Entidades do incidente",
      "Configuração do tema"
    ],
    "answer": 2,
    "explanation": "As entidades reúnem os objetos envolvidos e permitem ampliar a investigação.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents"
  },
  {
    "id": "SC200-036",
    "area": "resposta",
    "prompt": "Qual vista do incidente do Sentinel ajuda a conferir ações já executadas por automações e comentários da equipe?",
    "options": [
      "Aba de entidades",
      "Aba de logs",
      "Lista de tarefas",
      "Activity log"
    ],
    "answer": 3,
    "explanation": "O registro de atividades contém ações e comentários do incidente.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents"
  },
  {
    "id": "SC200-037",
    "area": "resposta",
    "prompt": "O analista quer aprofundar um incidente do Sentinel com uma consulta aos logs sem sair da página do incidente. Qual opção usar?",
    "options": [
      "Logs",
      "Theme",
      "Cost management",
      "App registration"
    ],
    "answer": 0,
    "explanation": "A página do incidente oferece acesso a uma janela de consulta de logs.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents"
  },
  {
    "id": "SC200-038",
    "area": "resposta",
    "prompt": "A equipe quer uma lista de passos visível em cada incidente do Sentinel para reduzir omissões no processo. Qual recurso se encaixa?",
    "options": [
      "DCR",
      "Tasks",
      "Syslog daemon",
      "Search job"
    ],
    "answer": 1,
    "explanation": "Tarefas do incidente padronizam os passos que o analista precisa executar.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents"
  },
  {
    "id": "SC200-039",
    "area": "resposta",
    "prompt": "Para verificar geolocalização e contexto de um IP ligado a um incidente do Sentinel, qual objeto deve ser aberto?",
    "options": [
      "Detalhe da regra analítica",
      "Entidade do dispositivo",
      "Entidade do endereço IP",
      "Histórico do playbook"
    ],
    "answer": 2,
    "explanation": "A página/detalhe da entidade IP reúne dados contextuais, inclusive geolocalização quando disponível.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents"
  },
  {
    "id": "SC200-040",
    "area": "resposta",
    "prompt": "Um alerta de risco de usuário no Entra ID Protection precisa de triagem. Qual evidência inicial é apropriada?",
    "options": [
      "Somente etiquetas do dispositivo",
      "Somente assunto dos e-mails",
      "Somente volume de alertas por dia",
      "Histórico de entradas, aplicativo, dispositivo, local e IP"
    ],
    "answer": 3,
    "explanation": "O fluxo recomendado compara esses atributos ao padrão conhecido do usuário.",
    "source": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-investigate-risk"
  },
  {
    "id": "SC200-041",
    "area": "resposta",
    "prompt": "Após confirmar que uma conta de usuário foi comprometida, qual ação de classificação no Entra ID Protection corresponde ao achado?",
    "options": [
      "Confirm compromised",
      "Confirm safe",
      "Dismiss risk",
      "Delete workbook"
    ],
    "answer": 0,
    "explanation": "A ação registra a identidade como comprometida; a contenção/remediação ainda deve ser executada.",
    "source": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock"
  },
  {
    "id": "SC200-042",
    "area": "resposta",
    "prompt": "A investigação mostrou que a entrada suspeita veio de viagem legítima do usuário, sem outros indícios de ataque. Qual classificação é adequada?",
    "options": [
      "Confirm compromised",
      "Confirm safe",
      "Isolate device",
      "Create DCR"
    ],
    "answer": 1,
    "explanation": "Marcar como segura é adequado quando a atividade é legítima após investigação.",
    "source": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-investigate-risk"
  },
  {
    "id": "SC200-043",
    "area": "resposta",
    "prompt": "Uma identidade comprometida ainda possui sessões ativas. Que medida ajuda a encerrar o acesso persistente?",
    "options": [
      "Criar workbook",
      "Aumentar retenção",
      "Revogar sessões/tokens de atualização",
      "Trocar o nome da regra"
    ],
    "answer": 2,
    "explanation": "A remediação de identidade pode incluir revogação de sessões/tokens além de troca de senha e bloqueio.",
    "source": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock"
  },
  {
    "id": "SC200-044",
    "area": "resposta",
    "prompt": "Uma investigação automática em Defender for Office 365 encontrou uma mensagem maliciosa. O que pode ampliar o escopo da busca?",
    "options": [
      "Trocar o workspace",
      "Criar DCR Linux",
      "Consultar somente WindowsEvent",
      "Analisar clusters de mensagens relacionadas"
    ],
    "answer": 3,
    "explanation": "A análise de mensagens relacionadas ajuda a localizar outras cópias ou variantes do ataque.",
    "source": "https://learn.microsoft.com/en-us/defender-office-365/email-analysis-investigations"
  },
  {
    "id": "SC200-045",
    "area": "resposta",
    "prompt": "A equipe precisa filtrar e investigar mensagens de phishing recebidas no Microsoft 365. Qual ferramenta do Defender for Office 365 é adequada?",
    "options": [
      "Threat Explorer",
      "AMA",
      "Sentinel data lake",
      "Azure Policy"
    ],
    "answer": 0,
    "explanation": "Threat Explorer permite investigar e filtrar e-mails suspeitos.",
    "source": "https://learn.microsoft.com/en-us/defender-office-365/threat-explorer-email-security"
  },
  {
    "id": "SC200-046",
    "area": "resposta",
    "prompt": "O analista precisa examinar os cabeçalhos, anexos, URLs e vereditos de uma mensagem específica. Qual vista é a mais direta?",
    "options": [
      "Threat Explorer para busca ampla",
      "Página de entidade do e-mail",
      "Action center de remediação",
      "Microsoft Purview Audit"
    ],
    "answer": 1,
    "explanation": "A página de entidade reúne evidências e detalhes de uma mensagem individual.",
    "source": "https://learn.microsoft.com/en-us/defender-office-365/mdo-email-entity-page"
  },
  {
    "id": "SC200-047",
    "area": "resposta",
    "prompt": "Uma investigação precisa localizar documentos e mensagens relevantes em Exchange, SharePoint, OneDrive e Teams. Qual recurso do Purview usar?",
    "options": [
      "NRT",
      "Device isolation",
      "Busca em eDiscovery",
      "Syslog via AMA"
    ],
    "answer": 2,
    "explanation": "A busca do eDiscovery localiza conteúdo armazenado nessas fontes para um caso.",
    "source": "https://learn.microsoft.com/en-us/purview/edisc-search-query"
  },
  {
    "id": "SC200-048",
    "area": "resposta",
    "prompt": "O analista quer pesquisar ações registradas de usuários em serviços Microsoft 365 para reconstruir uma sequência de eventos. Qual recurso usar?",
    "options": [
      "DCR",
      "Device tags",
      "Summary rule",
      "Microsoft Purview Audit"
    ],
    "answer": 3,
    "explanation": "Purview Audit permite pesquisar registros de atividades auditadas.",
    "source": "https://learn.microsoft.com/en-us/purview/audit-solutions-overview"
  },
  {
    "id": "SC200-049",
    "area": "caca",
    "prompt": "Na caça avançada do Defender XDR, qual tabela é apropriada para eventos de criação de processos em dispositivos?",
    "options": [
      "DeviceProcessEvents",
      "EmailEvents",
      "SecurityEvent",
      "AzureActivity"
    ],
    "answer": 0,
    "explanation": "DeviceProcessEvents contém eventos de criação de processos.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables"
  },
  {
    "id": "SC200-050",
    "area": "caca",
    "prompt": "Qual tabela da caça avançada contém eventos de conexão de rede feitos por dispositivos?",
    "options": [
      "DeviceFileEvents",
      "DeviceNetworkEvents",
      "EmailEvents",
      "IdentityInfo"
    ],
    "answer": 1,
    "explanation": "DeviceNetworkEvents descreve conexões e eventos de rede do endpoint.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables"
  },
  {
    "id": "SC200-051",
    "area": "caca",
    "prompt": "A hipótese de caça envolve criação e alteração de arquivos em endpoints. Qual tabela consultar?",
    "options": [
      "DeviceLogonEvents",
      "Syslog",
      "DeviceFileEvents",
      "OfficeActivity"
    ],
    "answer": 2,
    "explanation": "DeviceFileEvents registra eventos do sistema de arquivos.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables"
  },
  {
    "id": "SC200-052",
    "area": "caca",
    "prompt": "Qual tabela da caça avançada descreve entradas e autenticações observadas em dispositivos?",
    "options": [
      "DeviceNetworkInfo",
      "EmailEvents",
      "CommonSecurityLog",
      "DeviceLogonEvents"
    ],
    "answer": 3,
    "explanation": "DeviceLogonEvents contém eventos de logon em dispositivos.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables"
  },
  {
    "id": "SC200-053",
    "area": "caca",
    "prompt": "Qual tabela do Defender XDR é ponto de partida para investigar entrega ou bloqueio de mensagens de e-mail?",
    "options": [
      "EmailEvents",
      "DeviceProcessEvents",
      "SecurityEvent",
      "Syslog"
    ],
    "answer": 0,
    "explanation": "EmailEvents traz eventos de e-mail, inclusive entrega e bloqueio.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables"
  },
  {
    "id": "SC200-054",
    "area": "caca",
    "prompt": "Em KQL, qual operador mantém apenas as linhas que satisfazem uma condição?",
    "options": [
      "summarize",
      "where",
      "join",
      "render"
    ],
    "answer": 1,
    "explanation": "where filtra a tabela pelo predicado.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/where-operator"
  },
  {
    "id": "SC200-055",
    "area": "caca",
    "prompt": "Que trecho KQL agrega eventos e calcula a contagem separada por DeviceName?",
    "options": [
      "where DeviceName",
      "join DeviceName",
      "summarize count() by DeviceName",
      "render DeviceName"
    ],
    "answer": 2,
    "explanation": "summarize agrupa pelos valores de DeviceName e calcula count().",
    "source": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
  },
  {
    "id": "SC200-056",
    "area": "caca",
    "prompt": "Que operador KQL relaciona linhas de duas tabelas por colunas correspondentes?",
    "options": [
      "where",
      "take",
      "sort",
      "join"
    ],
    "answer": 3,
    "explanation": "join combina dados das tabelas conforme uma condição de correspondência.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/join-operator"
  },
  {
    "id": "SC200-057",
    "area": "caca",
    "prompt": "Em KQL, qual tipo de join mantém apenas as linhas que encontram correspondência nas duas tabelas?",
    "options": [
      "inner",
      "fullouter",
      "leftanti",
      "rightanti"
    ],
    "answer": 0,
    "explanation": "inner retorna apenas as linhas correspondentes.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/join-operator"
  },
  {
    "id": "SC200-058",
    "area": "caca",
    "prompt": "Uma série temporal precisa contar eventos por janelas de uma hora. Qual expressão usar no agrupamento de summarize?",
    "options": [
      "where 1h",
      "bin(Timestamp, 1h)",
      "join Timestamp",
      "sort 1h"
    ],
    "answer": 1,
    "explanation": "bin reduz valores de tempo a intervalos discretos para a agregação.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
  },
  {
    "id": "SC200-059",
    "area": "caca",
    "prompt": "A equipe precisa executar, sob demanda, uma consulta histórica que relaciona várias tabelas do data lake. Qual recurso é mais adequado?",
    "options": [
      "Workbook vazio",
      "DCR",
      "KQL job",
      "Regra NRT"
    ],
    "answer": 2,
    "explanation": "KQL jobs permitem consultas assíncronas históricas com joins e unions.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-jobs-summary-rules-search-jobs"
  },
  {
    "id": "SC200-060",
    "area": "caca",
    "prompt": "Uma consulta retorna muitas colunas, mas a equipe quer manter somente Timestamp, DeviceName e FileName no resultado. Qual operador usar?",
    "options": [
      "extend Timestamp, DeviceName, FileName",
      "summarize Timestamp, DeviceName, FileName",
      "join Timestamp, DeviceName, FileName",
      "project Timestamp, DeviceName, FileName"
    ],
    "answer": 3,
    "explanation": "project retorna apenas as colunas especificadas, na ordem indicada.",
    "source": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/project-operator"
  },
  {
    "id": "SC200-061",
    "area": "ambiente",
    "prompt": "Antes de ativar uma regra ASR que pode afetar aplicativos internos, qual modo ajuda a medir o impacto sem bloquear a execução?",
    "options": [
      "Audit",
      "Block",
      "Off",
      "Quarantine"
    ],
    "answer": 0,
    "explanation": "Audit registra o que seria bloqueado sem interromper o aplicativo.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-faq"
  },
  {
    "id": "SC200-062",
    "area": "ambiente",
    "prompt": "Uma aplicação legítima é afetada por uma regra ASR específica. Qual ajuste preserva as outras regras?",
    "options": [
      "Desativar todo o Defender",
      "Exclusão apenas para essa regra",
      "Excluir todos os dispositivos",
      "Apagar o incidente"
    ],
    "answer": 1,
    "explanation": "Exclusões por regra limitam a exceção ao controle envolvido.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-faq"
  },
  {
    "id": "SC200-063",
    "area": "ambiente",
    "prompt": "Qual fonte ajuda a revisar ocorrências de uma regra ASR em modo Audit?",
    "options": [
      "Apenas o registro DNS público",
      "Purview eDiscovery",
      "Eventos e caça avançada do Defender",
      "Fila de e-mails enviados"
    ],
    "answer": 2,
    "explanation": "Eventos e advanced hunting mostram o efeito potencial da regra.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-faq"
  },
  {
    "id": "SC200-064",
    "area": "ambiente",
    "prompt": "Em uma implantação gerenciada pelo Intune, a política ASR deve ser atribuída a que tipo de grupo?",
    "options": [
      "Grupo de usuários apenas",
      "Lista de destinatários de e-mail",
      "Workspace",
      "Grupo de dispositivos Entra"
    ],
    "answer": 3,
    "explanation": "O gerenciamento de ASR para Defender for Endpoint direciona objetos de dispositivo.",
    "source": "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/enable-attack-surface-reduction"
  },
  {
    "id": "SC200-065",
    "area": "ambiente",
    "prompt": "Uma atividade interna conhecida gera repetidamente alertas benignos. Qual recurso do Defender XDR permite aplicar condições e ocultar ou resolver esses alertas?",
    "options": [
      "Alert tuning",
      "Live response",
      "Data lake",
      "DCR"
    ],
    "answer": 0,
    "explanation": "Regras de ajuste tratam alertas que correspondem às condições definidas.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/investigate-alerts"
  },
  {
    "id": "SC200-066",
    "area": "ambiente",
    "prompt": "No ajuste de alertas do Defender XDR, qual ação impede a criação de incidente a partir de um alerta do Defender for Endpoint correspondente?",
    "options": [
      "Add comment",
      "Hide alert",
      "Create workbook",
      "Collect package"
    ],
    "answer": 1,
    "explanation": "Hide alert suprime o alerta e impede a criação do incidente nesse cenário.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/investigate-alerts"
  },
  {
    "id": "SC200-067",
    "area": "ambiente",
    "prompt": "Um alerta foi ocultado por uma regra de ajuste. Para caça avançada, onde ele ainda pode ser encontrado?",
    "options": [
      "Somente SecurityEvent",
      "Apenas Syslog",
      "AlertInfo e AlertEvidence",
      "Nunca mais em tabela alguma"
    ],
    "answer": 2,
    "explanation": "Os dados do alerta ocultado permanecem nessas tabelas para hunting.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/investigate-alerts"
  },
  {
    "id": "SC200-068",
    "area": "ambiente",
    "prompt": "Uma detecção personalizada deve integrar alertas relacionados em uma história de ataque no Defender XDR. Que configuração escolher?",
    "options": [
      "Exclude from correlation",
      "Delete detection",
      "Disable hunting",
      "Include in correlation"
    ],
    "answer": 3,
    "explanation": "Incluir na correlação permite agrupar o alerta com outros sinais relacionados.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/exclude-analytics-rules-correlation"
  },
  {
    "id": "SC200-069",
    "area": "ambiente",
    "prompt": "Uma detecção precisa produzir comportamento previsível de incidente próprio para uma automação específica. Qual ajuste de correlação pode ajudar?",
    "options": [
      "Exclude from correlation",
      "Include in correlation",
      "Desligar a consulta",
      "Alterar a retenção"
    ],
    "answer": 0,
    "explanation": "Excluir da correlação evita que a detecção participe da correlação padrão; regras de agrupamento ainda devem ser consideradas.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/exclude-analytics-rules-correlation"
  },
  {
    "id": "SC200-070",
    "area": "ambiente",
    "prompt": "O SOC precisa receber e-mail quando surgir um incidente de uma fonte e gravidade específicas no Defender XDR. O que configurar?",
    "options": [
      "Regra de ajuste de alertas",
      "Regra de notificação de incidentes",
      "Detecção personalizada sem destinatários",
      "Parâmetro de workbook"
    ],
    "answer": 1,
    "explanation": "A notificação de incidentes pode usar filtros como fonte e gravidade e enviar aos destinatários definidos.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/m365d-notifications-incidents"
  },
  {
    "id": "SC200-071",
    "area": "ambiente",
    "prompt": "Quando uma detecção personalizada encontra eventos correspondentes, o que ela pode gerar?",
    "options": [
      "Apenas uma consulta salva",
      "Apenas um workbook",
      "Alertas e ações de resposta configuradas",
      "Apenas um conector de dados"
    ],
    "answer": 2,
    "explanation": "A regra pode gerar alertas e disparar ações de resposta conforme a configuração.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "SC200-072",
    "area": "ambiente",
    "prompt": "Qual prática melhora uma detecção personalizada baseada em caça avançada?",
    "options": [
      "Omitir sempre Timestamp",
      "Usar apenas comentários na consulta",
      "Desativar todas as fontes",
      "Retornar as colunas exigidas pelo tipo de evento e pela ação"
    ],
    "answer": 3,
    "explanation": "A regra precisa de dados suficientes na consulta para identificar eventos e entidades.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "SC200-073",
    "area": "ambiente",
    "prompt": "No nível Full de investigação automática do Endpoint, o que acontece quando uma evidência recebe veredito malicioso?",
    "options": [
      "A remediação apropriada ocorre automaticamente",
      "Toda ação exige aprovação",
      "O incidente é exportado para PDF",
      "A telemetria é apagada"
    ],
    "answer": 0,
    "explanation": "O nível Full permite executar automaticamente a remediação.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/manage-auto-investigation"
  },
  {
    "id": "SC200-074",
    "area": "ambiente",
    "prompt": "Qual nível de automação exige aprovação para qualquer ação de remediação proposta?",
    "options": [
      "Full",
      "Semi — require approval for any remediation",
      "Audit",
      "NRT"
    ],
    "answer": 1,
    "explanation": "Esse nível mantém a aprovação humana antes da remediação.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/manage-auto-investigation"
  },
  {
    "id": "SC200-075",
    "area": "ambiente",
    "prompt": "Por que configurar grupos de dispositivos no Defender for Endpoint ao ajustar a investigação automática?",
    "options": [
      "Para mudar o domínio DNS",
      "Para criar um e-mail de phishing",
      "Para aplicar níveis de automação diferentes a conjuntos de endpoints",
      "Para substituir o Sentinel"
    ],
    "answer": 2,
    "explanation": "Grupos permitem controlar o nível de automação por dispositivo.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/manage-auto-investigation"
  },
  {
    "id": "SC200-076",
    "area": "ambiente",
    "prompt": "Qual é a finalidade principal da interrupção automática de ataques no Defender XDR?",
    "options": [
      "Classificar alertas sem agir sobre entidades",
      "Agregar logs históricos para relatórios",
      "Criar recomendações de postura sem contenção",
      "Conter rapidamente entidades comprometidas durante ataques de alta confiança"
    ],
    "answer": 3,
    "explanation": "O recurso executa contenções para interromper a progressão do ataque.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption"
  },
  {
    "id": "SC200-077",
    "area": "ambiente",
    "prompt": "O que significa Contain user na interrupção automática de ataques?",
    "options": [
      "Impor política em dispositivos onboarded para bloquear comunicações da identidade suspeita",
      "Apagar a conta de todos os backups",
      "Criar um workbook",
      "Suspender qualquer coleta de logs"
    ],
    "answer": 0,
    "explanation": "A contenção reduz a movimentação lateral da identidade nos dispositivos protegidos.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption"
  },
  {
    "id": "SC200-078",
    "area": "ambiente",
    "prompt": "Qual ação de interrupção automática busca interromper sessões de uma identidade comprometida?",
    "options": [
      "Create summary rule",
      "Revoke user session",
      "Collect package",
      "Add bookmark"
    ],
    "answer": 1,
    "explanation": "Revogar sessões interrompe o acesso existente da identidade.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption"
  },
  {
    "id": "SC200-079",
    "area": "ambiente",
    "prompt": "Uma regra deve atribuir automaticamente incidentes novos a um analista. Qual recurso usar?",
    "options": [
      "DCR",
      "Search job",
      "Automation rule",
      "Investigation package"
    ],
    "answer": 2,
    "explanation": "Regras de automação podem alterar proprietário, status, tags e acionar playbooks.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules"
  },
  {
    "id": "SC200-080",
    "area": "ambiente",
    "prompt": "Uma regra deve agir quando a gravidade de um incidente muda. Qual gatilho do Sentinel é o mais adequado?",
    "options": [
      "When alert is created apenas",
      "On workbook save",
      "On DCR deletion",
      "When incident is updated"
    ],
    "answer": 3,
    "explanation": "Mudanças de gravidade contam como atualização do incidente.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules"
  },
  {
    "id": "SC200-081",
    "area": "ambiente",
    "prompt": "Para executar um playbook somente em incidentes de alta gravidade, o que combinar na regra de automação?",
    "options": [
      "Gatilho, condição de gravidade e ação de playbook",
      "Somente o gatilho de criação do incidente",
      "Somente a condição de gravidade",
      "Somente o playbook sem regra de automação"
    ],
    "answer": 0,
    "explanation": "A regra avalia condições antes de executar ações.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules"
  },
  {
    "id": "SC200-082",
    "area": "ambiente",
    "prompt": "O objetivo do exame cita a coleta de atividade do Azure por quais mecanismos?",
    "options": [
      "Live response e eDiscovery",
      "Azure Policy e diagnostic settings",
      "ASR e Threat Explorer",
      "MFA e FIDO2"
    ],
    "answer": 1,
    "explanation": "Esses mecanismos são citados para configurar coleta de logs de atividade.",
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200"
  },
  {
    "id": "SC200-083",
    "area": "ambiente",
    "prompt": "Uma aplicação local grava texto em arquivo e não possui conector nativo. Qual opção do Sentinel contempla sua ingestão via agente?",
    "options": [
      "Threat Explorer",
      "Device isolation",
      "Custom Logs via AMA",
      "Purview Audit"
    ],
    "answer": 2,
    "explanation": "O conector coleta arquivos de texto com AMA e DCR.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/connect-custom-logs-ama"
  },
  {
    "id": "SC200-084",
    "area": "ambiente",
    "prompt": "Antes de encaminhar logs próprios por Logs Ingestion API, qual objeto de destino precisa existir?",
    "options": [
      "Incidente resolvido",
      "Mensagem de e-mail",
      "Grupo de dispositivos",
      "Tabela personalizada no workspace"
    ],
    "answer": 3,
    "explanation": "O fluxo requer uma tabela de destino e DCR que roteie os dados.",
    "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/create-custom-table"
  },
  {
    "id": "SC200-085",
    "area": "ambiente",
    "prompt": "Uma regra deve comparar IPs observados nos logs com indicadores ingeridos. Que tipo de regra/modelo é pertinente?",
    "options": [
      "Analytics de threat intelligence",
      "Workbook de custos apenas",
      "Política ASR",
      "Live response"
    ],
    "answer": 0,
    "explanation": "Regras de TI cruzam eventos com indicadores, como IPs e domínios.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/use-threat-indicators-in-analytics-rules"
  },
  {
    "id": "SC200-086",
    "area": "ambiente",
    "prompt": "A equipe quer descobrir técnicas ATT&CK pouco cobertas por detecções ativas. Qual vista do Sentinel ajuda?",
    "options": [
      "Action center",
      "Matriz de cobertura MITRE ATT&CK",
      "Device timeline",
      "Purview eDiscovery"
    ],
    "answer": 1,
    "explanation": "A matriz mostra táticas e técnicas associadas à cobertura de regras.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/mitre-coverage"
  },
  {
    "id": "SC200-087",
    "area": "ambiente",
    "prompt": "Ao criar uma regra analítica, por que associar técnicas MITRE ATT&CK?",
    "options": [
      "Para alterar o IP do atacante",
      "Para eliminar retenção",
      "Para contextualizar a detecção e avaliar cobertura",
      "Para trocar o tenant"
    ],
    "answer": 2,
    "explanation": "O mapeamento ajuda a relacionar alertas a técnicas e lacunas de detecção.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/mitre-coverage"
  },
  {
    "id": "SC200-088",
    "area": "ambiente",
    "prompt": "Em Sentinel, uma atividade se destaca do padrão histórico de uma entidade. Que conceito descreve esse achado?",
    "options": [
      "Backup incremental",
      "DCR",
      "Workbook",
      "Anomalia"
    ],
    "answer": 3,
    "explanation": "Anomalias comparam atividade observada a uma linha de base.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/anomalies-reference"
  },
  {
    "id": "SC200-089",
    "area": "ambiente",
    "prompt": "Na tabela Anomalies, o que representa um score mais alto?",
    "options": [
      "Maior desvio em relação à linha de base",
      "Maior custo de licença",
      "Mais dias de retenção",
      "Prioridade manual do incidente"
    ],
    "answer": 0,
    "explanation": "O score quantifica o grau de desvio; exige interpretação contextual.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/anomalies-reference"
  },
  {
    "id": "SC200-090",
    "area": "ambiente",
    "prompt": "O Sentinel identifica uma lacuna entre logs ingeridos e detecções úteis para certos ataques. Qual recurso oferece recomendações para essa lacuna?",
    "options": [
      "Live response",
      "SOC optimization",
      "eDiscovery",
      "Investigação de e-mail"
    ],
    "answer": 1,
    "explanation": "As recomendações de otimização analisam ingestão e detecções frente a cenários de ameaça.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/soc-optimization/soc-optimization-reference"
  },
  {
    "id": "SC200-091",
    "area": "ambiente",
    "prompt": "A equipe quer priorizar mudanças de ingestão sem perder de vista valor de segurança e custo. Qual painel do Sentinel consultar?",
    "options": [
      "Device timeline",
      "Threat Explorer",
      "SOC optimization recommendations",
      "Lista de usuários de risco"
    ],
    "answer": 2,
    "explanation": "A otimização do SOC reúne recomendações orientadas à cobertura e ao uso de dados.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/soc-optimization/soc-optimization-reference"
  },
  {
    "id": "SC200-092",
    "area": "ambiente",
    "prompt": "O analista quer trocar o período exibido em vários gráficos de um workbook sem editar cada consulta. Qual componente adicionar?",
    "options": [
      "Regra analítica NRT",
      "DCR para cada gráfico",
      "Filtro KQL fixo em cada consulta",
      "Parâmetro de intervalo de tempo"
    ],
    "answer": 3,
    "explanation": "Parâmetros permitem que o usuário altere o intervalo e o reutilize nas visualizações vinculadas.",
    "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-parameters"
  },
  {
    "id": "SC200-093",
    "area": "ambiente",
    "prompt": "Qual camada do Sentinel é voltada a detecções e consultas interativas de baixa latência?",
    "options": [
      "Analytics tier",
      "Data lake somente",
      "Blob archive isolado",
      "E-mail quarantine"
    ],
    "answer": 0,
    "explanation": "Analytics é a camada operacional para análise e alertas interativos.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/manage-data-overview"
  },
  {
    "id": "SC200-094",
    "area": "ambiente",
    "prompt": "O Defender for Endpoint coleta a telemetria padrão, mas o SOC precisa capturar eventos específicos com filtros e enviá-los ao Sentinel. Qual recurso usar?",
    "options": [
      "Regra de detecção personalizada do Defender XDR",
      "Regra de coleta personalizada do Defender for Endpoint",
      "Workbook do Sentinel",
      "Regra de ajuste de alertas"
    ],
    "answer": 1,
    "explanation": "A coleta personalizada adiciona eventos filtrados à telemetria padrão e os encaminha ao workspace do Sentinel.",
    "source": "https://learn.microsoft.com/en-us/defender-endpoint/custom-data-collection"
  },
  {
    "id": "SC200-095",
    "area": "ambiente",
    "prompt": "Qual característica distingue uma regra analítica NRT no Sentinel?",
    "options": [
      "Execução apenas mensal",
      "Exclusividade de e-mail",
      "Execução aproximadamente a cada minuto",
      "Ausência de alertas"
    ],
    "answer": 2,
    "explanation": "Regras NRT oferecem cadência próxima do tempo real.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/near-real-time-rules"
  },
  {
    "id": "SC200-096",
    "area": "ambiente",
    "prompt": "A equipe quer e-mail apenas para alertas de gravidade alta em grupos de dispositivos definidos. O que configurar?",
    "options": [
      "Notificação de atualização de threat analytics",
      "Regra de notificação de incidentes sem filtro de dispositivo",
      "Regra de supressão de alertas",
      "Regra de notificação de alertas com gravidade e escopo de dispositivos"
    ],
    "answer": 3,
    "explanation": "Notificações de alerta aceitam filtros de gravidade e grupos de dispositivos, além dos destinatários.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/configure-email-notifications"
  },
  {
    "id": "SC200-097",
    "area": "ambiente",
    "prompt": "Duas regras de automação podem alterar o mesmo incidente no Sentinel. Que configuração ajuda a controlar qual delas atua primeiro?",
    "options": [
      "Ordem ou prioridade de execução das regras",
      "Tipo de gatilho da regra",
      "Gravidade usada na condição",
      "Intervalo de retenção do incidente"
    ],
    "answer": 0,
    "explanation": "As regras de automação são executadas sequencialmente na ordem definida.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules"
  },
  {
    "id": "SC200-098",
    "area": "ambiente",
    "prompt": "Um analista consegue ver incidentes, mas não executar manualmente um playbook. Qual área deve ser revisada?",
    "options": [
      "Configuração de retenção das tabelas",
      "Permissões do Sentinel e do recurso Logic App",
      "Tempo limite da consulta analítica",
      "Grupo de dispositivos do Endpoint"
    ],
    "answer": 1,
    "explanation": "A execução manual depende de permissões sobre incidente e playbook.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "SC200-099",
    "area": "resposta",
    "prompt": "No Defender for Cloud, qual atributo deve pesar na triagem inicial de vários alertas?",
    "options": [
      "Somente o horário de criação",
      "Somente o status atual",
      "Gravidade do alerta e recurso afetado",
      "Somente o título do alerta"
    ],
    "answer": 2,
    "explanation": "A triagem considera gravidade, contexto e recursos afetados.",
    "source": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/managing-and-responding-alerts"
  },
  {
    "id": "SC200-100",
    "area": "resposta",
    "prompt": "Um alerta do Defender for Cloud aponta uma VM. Que ação ajuda a examinar a atividade que sustenta o alerta?",
    "options": [
      "Mudar o tema",
      "Excluir DCR",
      "Criar eDiscovery case",
      "Inspect resource context"
    ],
    "answer": 3,
    "explanation": "O contexto do recurso leva aos logs relevantes.",
    "source": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/managing-and-responding-alerts"
  },
  {
    "id": "SC200-101",
    "area": "resposta",
    "prompt": "Qual opção de resposta do Defender for Cloud pode acionar um fluxo automatizado a partir de um alerta?",
    "options": [
      "Trigger automated response com Logic App",
      "Criar workbook vazio",
      "Encerrar AMA",
      "Alterar tipo de join"
    ],
    "answer": 0,
    "explanation": "O alerta pode iniciar uma Logic App.",
    "source": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/managing-and-responding-alerts"
  },
  {
    "id": "SC200-102",
    "area": "resposta",
    "prompt": "A investigação confirma que um alerta do Defender for Cloud reflete atividade esperada. O que verificar antes de suprimir ocorrências semelhantes?",
    "options": [
      "Suprimir todos os alertas da assinatura",
      "Escopo e características precisas da atividade",
      "Reduzir a gravidade sem validar a causa",
      "Encerrar a coleta da fonte"
    ],
    "answer": 1,
    "explanation": "Supressão deve ser específica após validação da causa benigna.",
    "source": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/managing-and-responding-alerts"
  },
  {
    "id": "SC200-103",
    "area": "resposta",
    "prompt": "Para verificar quem acessou um aplicativo SaaS, de qual IP e local, qual vista do Defender for Cloud Apps usar?",
    "options": [
      "DCR",
      "Device timeline",
      "Activity log",
      "KQL job"
    ],
    "answer": 2,
    "explanation": "O log de atividades permite filtrar acessos e ações por aplicativo.",
    "source": "https://learn.microsoft.com/en-us/defender-cloud-apps/investigate"
  },
  {
    "id": "SC200-104",
    "area": "resposta",
    "prompt": "A equipe suspeita que um arquivo sensível ficou acessível publicamente em um aplicativo conectado. Onde investigar?",
    "options": [
      "Apenas DeviceProcessEvents",
      "DCR",
      "AzureActivity",
      "Files no Defender for Cloud Apps"
    ],
    "answer": 3,
    "explanation": "A vista de arquivos permite examinar compartilhamento e exposição.",
    "source": "https://learn.microsoft.com/en-us/defender-cloud-apps/investigate"
  },
  {
    "id": "SC200-105",
    "area": "resposta",
    "prompt": "Qual ação de governança pode reduzir a exposição de um arquivo compartilhado externamente em aplicativo compatível?",
    "options": [
      "Remover usuários externos ou link compartilhado",
      "Aumentar a retenção do Sentinel",
      "Desligar o KQL",
      "Criar gráfico de barras"
    ],
    "answer": 0,
    "explanation": "Ações de governança podem revogar compartilhamento externo, conforme o conector.",
    "source": "https://learn.microsoft.com/en-us/defender-cloud-apps/governance-actions"
  },
  {
    "id": "SC200-106",
    "area": "resposta",
    "prompt": "Onde verificar se uma ação manual ou automática do Defender for Cloud Apps foi concluída ou falhou?",
    "options": [
      "WindowsEvent",
      "Governance log",
      "Workbook",
      "Purview eDiscovery"
    ],
    "answer": 1,
    "explanation": "O Governance log registra status e resultado das ações.",
    "source": "https://learn.microsoft.com/en-us/defender-cloud-apps/governance-actions"
  },
  {
    "id": "SC200-107",
    "area": "resposta",
    "prompt": "Um alerta sugere movimentação lateral entre hosts e contas de domínio. Qual produto fornece a história do alerta de identidade?",
    "options": [
      "Defender for Office 365 apenas",
      "Purview eDiscovery",
      "Defender for Identity",
      "Azure Cost Management"
    ],
    "answer": 2,
    "explanation": "O Defender for Identity fornece contexto de contas e hosts em ataques de identidade.",
    "source": "https://learn.microsoft.com/en-us/defender-for-identity/playbook-lateral-movement"
  },
  {
    "id": "SC200-108",
    "area": "resposta",
    "prompt": "Qual seção de um alerta do Defender for Identity mostra a sequência e as entidades envolvidas?",
    "options": [
      "Alert graph",
      "Comments & history",
      "Alert details",
      "What happened"
    ],
    "answer": 3,
    "explanation": "A seção apresenta linha do tempo e entidades.",
    "source": "https://learn.microsoft.com/en-us/defender-for-identity/playbook-lateral-movement"
  },
  {
    "id": "SC200-109",
    "area": "resposta",
    "prompt": "Ao investigar alerta do Defender for Identity, qual vista ajuda a visualizar relações entre conta, host e outras entidades?",
    "options": [
      "Alert graph",
      "Action center de e-mail",
      "DCR",
      "Summary rule"
    ],
    "answer": 0,
    "explanation": "O gráfico do alerta representa entidades e vínculos.",
    "source": "https://learn.microsoft.com/en-us/defender-for-identity/playbook-lateral-movement"
  },
  {
    "id": "SC200-110",
    "area": "resposta",
    "prompt": "Após atribuir um alerta do Defender for Identity, a equipe inicia a apuração. Qual status representa esse andamento?",
    "options": [
      "New",
      "In progress",
      "Deleted",
      "Archived by DCR"
    ],
    "answer": 1,
    "explanation": "In progress indica investigação em curso.",
    "source": "https://learn.microsoft.com/en-us/defender-for-identity/playbook-lateral-movement"
  },
  {
    "id": "SC200-111",
    "area": "resposta",
    "prompt": "Um mesmo ataque envolve e-mail, identidade e endpoint. Qual vantagem de investigar o incidente correlacionado no Defender XDR?",
    "options": [
      "Dispensar a investigação de entidades",
      "Tratar todos os alertas como verdadeiros",
      "Relacionar alertas e entidades em uma história única",
      "Executar automaticamente todas as remediações"
    ],
    "answer": 2,
    "explanation": "A correlação reúne sinais de vários domínios para triagem.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/exclude-analytics-rules-correlation"
  },
  {
    "id": "SC200-112",
    "area": "resposta",
    "prompt": "Uma resposta guiada do Security Copilot recomenda classificar um incidente. A que categoria de recomendação isso pertence?",
    "options": [
      "Containment",
      "Investigation",
      "Remediation",
      "Triage"
    ],
    "answer": 3,
    "explanation": "As respostas guiadas incluem recomendações de triagem.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "SC200-113",
    "area": "resposta",
    "prompt": "Uma resposta guiada sugere isolar um dispositivo comprometido. A qual grupo de ações ela pertence?",
    "options": [
      "Containment",
      "Data collection",
      "Report styling",
      "Storage"
    ],
    "answer": 0,
    "explanation": "Isolamento é medida de contenção.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "SC200-114",
    "area": "resposta",
    "prompt": "Antes de aplicar uma ação sugerida pelo Security Copilot em um incidente, qual passo é apropriado?",
    "options": [
      "Aceitar todas as sugestões sem análise",
      "Revisar entidade, motivo e efeito da ação",
      "Apagar a evidência",
      "Desligar os conectores"
    ],
    "answer": 1,
    "explanation": "Cada cartão mostra a ação recomendada, a entidade e a justificativa para revisão.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "SC200-115",
    "area": "resposta",
    "prompt": "Um botão de resposta guiada aparece desabilitado para o analista. Qual causa documentada deve ser checada?",
    "options": [
      "Ausência de incidentes semelhantes",
      "Ordem dos cartões de recomendação",
      "Permissão RBAC insuficiente",
      "Falta de um workbook no Sentinel"
    ],
    "answer": 2,
    "explanation": "Ações indisponíveis podem refletir permissões insuficientes.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "SC200-116",
    "area": "resposta",
    "prompt": "No Copilot em um incidente de phishing, que ação pode abrir uma consulta KQL para mensagens semelhantes?",
    "options": [
      "Create DCR",
      "Live response",
      "Enable WEF",
      "View similar emails"
    ],
    "answer": 3,
    "explanation": "O recurso leva à caça avançada com consulta gerada para e-mails relacionados.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "SC200-117",
    "area": "resposta",
    "prompt": "Por que revisar incidentes semelhantes sugeridos pelo Copilot?",
    "options": [
      "Para comparar classificação e respostas anteriores",
      "Para ignorar o incidente atual",
      "Para alterar o tenant",
      "Para remover a trilha de auditoria"
    ],
    "answer": 0,
    "explanation": "Casos similares fornecem contexto, mas não substituem a validação.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "SC200-118",
    "area": "resposta",
    "prompt": "A interrupção automática isolou um dispositivo. O que o analista deve verificar no incidente?",
    "options": [
      "Apenas a data de onboarding do dispositivo",
      "Ação executada, entidade afetada e escopo residual do ataque",
      "Fechar o incidente sem avaliar outras entidades",
      "Liberar a contenção antes de investigar"
    ],
    "answer": 1,
    "explanation": "Contenção automática exige avaliação do resultado e investigação do restante do ataque.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption"
  },
  {
    "id": "SC200-119",
    "area": "resposta",
    "prompt": "O atacante usou uma conta para acessar vários endpoints. Por que conter só um endpoint pode ser insuficiente?",
    "options": [
      "Todos os logs deixam de existir",
      "O KQL deixa de funcionar",
      "A identidade ainda pode manter acesso aos demais recursos",
      "A gravidade vira baixa automaticamente"
    ],
    "answer": 2,
    "explanation": "A resposta deve considerar a entidade identidade e o alcance da conta.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption"
  },
  {
    "id": "SC200-120",
    "area": "resposta",
    "prompt": "Uma mensagem maliciosa já foi entregue a várias caixas. Qual ação de resposta deve ser considerada no Defender for Office 365?",
    "options": [
      "Criar regra ASR",
      "Alterar retenção do data lake",
      "Excluir a DCR",
      "Remover ou mover mensagens correspondentes das caixas"
    ],
    "answer": 3,
    "explanation": "A remediação pós-entrega permite atuar sobre mensagens identificadas.",
    "source": "https://learn.microsoft.com/en-us/defender-office-365/remediate-malicious-email-delivered-office-365"
  },
  {
    "id": "SC200-121",
    "area": "resposta",
    "prompt": "Um usuário abriu anexo de phishing e um processo suspeito surgiu no endpoint. Qual abordagem amplia a investigação?",
    "options": [
      "Correlacionar mensagem, usuário, dispositivo e processo no incidente",
      "Examinar apenas o assunto do e-mail",
      "Excluir o alerta inicial",
      "Gerar um workbook vazio"
    ],
    "answer": 0,
    "explanation": "O encadeamento entre domínios ajuda a delimitar o ataque.",
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200"
  },
  {
    "id": "SC200-122",
    "area": "resposta",
    "prompt": "Uma conta foi confirmada como comprometida. Qual conjunto de respostas é mais coerente?",
    "options": [
      "Apenas renomear o usuário",
      "Bloquear acesso, revogar sessões e redefinir credenciais conforme o caso",
      "Criar gráfico sem alterar acesso",
      "Descartar todos os logs"
    ],
    "answer": 1,
    "explanation": "A remediação deve interromper sessões e recuperar a conta.",
    "source": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock"
  },
  {
    "id": "SC200-123",
    "area": "resposta",
    "prompt": "Uma entrada de alto risco no Entra ID Protection veio de IP e localização inéditos. Qual passo inicial fortalece a conclusão?",
    "options": [
      "Marcar comprometido sem olhar contexto",
      "Apagar o registro",
      "Comparar o evento com atividades e dispositivos habituais do usuário",
      "Aumentar a retenção"
    ],
    "answer": 2,
    "explanation": "A triagem deve confrontar o risco com o padrão legítimo e outras evidências.",
    "source": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-investigate-risk"
  },
  {
    "id": "SC200-124",
    "area": "resposta",
    "prompt": "O Defender XDR conteve ativos durante um ataque. Onde o analista vê um resumo das ações no contexto do incidente?",
    "options": [
      "Pacote de investigação de um único endpoint",
      "Workbook de ingestão do Sentinel",
      "Registro de configuração da DCR",
      "Cartão de resumo da interrupção automática no incidente"
    ],
    "answer": 3,
    "explanation": "O cartão do incidente mostra as ações de interrupção e os ativos relacionados.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/autoad-results"
  },
  {
    "id": "SC200-125",
    "area": "resposta",
    "prompt": "A linha do tempo mostra um processo iniciado logo após download de anexo. Que contexto investigar em seguida?",
    "options": [
      "Processo pai, arquivo, usuário e conexões relacionadas",
      "Somente o hash do anexo",
      "Somente o remetente da mensagem",
      "Somente a gravidade do alerta"
    ],
    "answer": 0,
    "explanation": "Relações entre processo, arquivo, usuário e rede ajudam a reconstruir a cadeia.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/entity-page-device"
  },
  {
    "id": "SC200-126",
    "area": "resposta",
    "prompt": "Para verificar uma ação administrativa em Microsoft 365 durante a investigação, que fonte consultar?",
    "options": [
      "ASR mode",
      "Purview Audit",
      "Device isolation",
      "Summary rule"
    ],
    "answer": 1,
    "explanation": "O Audit permite pesquisar atividades registradas em serviços Microsoft 365.",
    "source": "https://learn.microsoft.com/en-us/purview/audit-solutions-overview"
  },
  {
    "id": "SC200-127",
    "area": "resposta",
    "prompt": "Qual recurso é apropriado para localizar o conteúdo de uma mensagem ou documento relevante a um caso?",
    "options": [
      "Purview Audit apenas",
      "DCR",
      "Purview eDiscovery search",
      "MITRE coverage"
    ],
    "answer": 2,
    "explanation": "eDiscovery pesquisa conteúdo; Audit pesquisa eventos de atividade.",
    "source": "https://learn.microsoft.com/en-us/purview/edisc-search-query"
  },
  {
    "id": "SC200-128",
    "area": "resposta",
    "prompt": "Uma aplicação realizou chamadas incomuns à API Microsoft Graph. Qual fonte registra requisições HTTP recebidas e processadas pelo serviço?",
    "options": [
      "DeviceFileEvents",
      "ASR audit",
      "Workbook",
      "Microsoft Graph activity logs"
    ],
    "answer": 3,
    "explanation": "Esses logs fornecem trilha de chamadas Graph do tenant.",
    "source": "https://learn.microsoft.com/en-us/graph/microsoft-graph-activity-logs-overview"
  },
  {
    "id": "SC200-129",
    "area": "resposta",
    "prompt": "Para consultar logs de atividade do Graph no Log Analytics, qual configuração de coleta é usada?",
    "options": [
      "Diagnostic settings com destino no workspace",
      "Live response",
      "ASR exclusion",
      "Playbook manual"
    ],
    "answer": 0,
    "explanation": "Diagnostic settings encaminha os logs aos destinos de análise.",
    "source": "https://learn.microsoft.com/en-us/graph/microsoft-graph-activity-logs-overview"
  },
  {
    "id": "SC200-130",
    "area": "resposta",
    "prompt": "Um incidente longo reúne evidências, hipóteses e tarefas de vários analistas. Qual prática melhora a continuidade?",
    "options": [
      "Manter tudo na memória de um analista",
      "Registrar decisões, responsáveis e evidências no gerenciamento do caso",
      "Alterar o nome a cada hora",
      "Apagar comentários antigos"
    ],
    "answer": 1,
    "explanation": "O gerenciamento do caso mantém rastreabilidade da resposta colaborativa.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/investigate-incident-cases"
  },
  {
    "id": "SC200-131",
    "area": "resposta",
    "prompt": "Um incidente fechado recebe nova evidência confiável relacionada ao mesmo ataque. Qual ação operacional é coerente?",
    "options": [
      "Ignorar a evidência porque houve fechamento",
      "Excluir a entidade",
      "Reabrir/reavaliar o caso e atualizar a investigação",
      "Desativar todas as regras"
    ],
    "answer": 2,
    "explanation": "Novas evidências devem ser incorporadas à triagem e à resposta.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents"
  },
  {
    "id": "SC200-132",
    "area": "caca",
    "prompt": "Uma caça parte da suspeita de que contas com privilégios estão autenticando em hosts incomuns. Qual primeiro passo torna o trabalho verificável?",
    "options": [
      "Isolar todos os dispositivos",
      "Desligar os alertas",
      "Criar incidente sem evidências",
      "Definir hipótese, fontes e período"
    ],
    "answer": 3,
    "explanation": "A hipótese delimita dados e critérios de análise.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "SC200-133",
    "area": "caca",
    "prompt": "Uma consulta KQL de caça no Sentinel deve ser reutilizada pela equipe. Que recurso ajuda a mantê-la organizada?",
    "options": [
      "Hunting query salva",
      "DCR sem destino",
      "Live response",
      "Política ASR"
    ],
    "answer": 0,
    "explanation": "Consultas de hunting podem ser criadas e monitoradas no Sentinel.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "SC200-134",
    "area": "caca",
    "prompt": "Durante a caça, um evento é suspeito e deve ser preservado para nova análise. O que criar no Sentinel?",
    "options": [
      "DCR",
      "Bookmark",
      "Exceção ASR",
      "Regra de cobrança"
    ],
    "answer": 1,
    "explanation": "Bookmarks guardam eventos relevantes e seu contexto para investigação.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "SC200-135",
    "area": "caca",
    "prompt": "Um bookmark contém evidência suficiente de possível comprometimento e requer resposta formal. Qual próximo passo?",
    "options": [
      "Apagar a consulta",
      "Encerrar coleta de logs",
      "Escalar o achado para incidente",
      "Mudar o tema"
    ],
    "answer": 2,
    "explanation": "Achados importantes podem ser elevados a incidentes.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "SC200-136",
    "area": "caca",
    "prompt": "A equipe precisa acompanhar uma hipótese, consultas, técnicas MITRE e bookmarks como uma atividade de caça coordenada. Qual recurso usar?",
    "options": [
      "DCR",
      "Action center",
      "ASR policy",
      "Hunt do Sentinel"
    ],
    "answer": 3,
    "explanation": "Hunts agrupam as etapas e achados de uma campanha de caça.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunts"
  },
  {
    "id": "SC200-137",
    "area": "caca",
    "prompt": "Uma caça exige análise em Python, visualização e enriquecimento de dados. Qual recurso do Sentinel atende melhor?",
    "options": [
      "Jupyter notebook",
      "Regra ASR",
      "Threat Explorer apenas",
      "Incidente sem logs"
    ],
    "answer": 0,
    "explanation": "Notebooks permitem código, dados, resultados e visualizações no mesmo fluxo.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "SC200-138",
    "area": "caca",
    "prompt": "Qual biblioteca da Microsoft ajuda a enriquecer e visualizar investigações em notebooks do Sentinel?",
    "options": [
      "React",
      "MSTICPy",
      "Terraform",
      "OpenSSL"
    ],
    "answer": 1,
    "explanation": "MSTICPy reúne funções de consulta, enriquecimento e visualização para hunting.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "SC200-139",
    "area": "caca",
    "prompt": "Em uma caça assistida por agente, qual capacidade do Sentinel MCP Server permite explorar relações de entidades em grafos?",
    "options": [
      "ASR Audit",
      "eDiscovery export",
      "Ferramentas de data exploration/graph",
      "WEF collector"
    ],
    "answer": 2,
    "explanation": "O servidor expõe ferramentas para explorar dados e grafos do Sentinel.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-mcp-data-exploration-tool"
  },
  {
    "id": "SC200-140",
    "area": "caca",
    "prompt": "A equipe quer visualizar conexões entre usuários, dispositivos, IPs e outros objetos durante uma caça. Qual experiência consultar?",
    "options": [
      "DCR editor",
      "Audit search",
      "Alert tuning",
      "Hunting graph"
    ],
    "answer": 3,
    "explanation": "O grafo de caça mostra relações entre entidades.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-graph-overview"
  },
  {
    "id": "SC200-141",
    "area": "caca",
    "prompt": "Uma conta comprometida pode alcançar diversos recursos. Qual grafo ajuda a estimar impacto atual e potencial?",
    "options": [
      "Blast radius graph",
      "Workbook de custos",
      "DCR",
      "ASR exclusions"
    ],
    "answer": 0,
    "explanation": "O blast radius visualiza alcance de uma possível violação.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-graph-overview"
  },
  {
    "id": "SC200-142",
    "area": "caca",
    "prompt": "Por que usar Sentinel Graph além de consultar uma tabela isolada?",
    "options": [
      "Para substituir autenticação",
      "Para analisar relações entre entidades e caminhos de ataque",
      "Para desativar retenção",
      "Para aumentar CPU do agente"
    ],
    "answer": 1,
    "explanation": "O grafo ajuda a encontrar conexões que uma tabela isolada não mostra diretamente.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-graph-overview"
  },
  {
    "id": "SC200-143",
    "area": "caca",
    "prompt": "A equipe investiga uma campanha conhecida e precisa de contexto sobre atores, técnicas e exposição. Qual recurso do Defender XDR consultar?",
    "options": [
      "DCR",
      "Device isolation",
      "Threat analytics",
      "Purview eDiscovery"
    ],
    "answer": 2,
    "explanation": "Threat analytics reúne relatórios de ameaças e contexto de exposição.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/threat-analytics"
  },
  {
    "id": "SC200-144",
    "area": "caca",
    "prompt": "Uma hipótese de phishing parte de uma URL presente no corpo ou anexo de e-mails. Qual tabela da caça avançada contém essas URLs?",
    "options": [
      "EmailEvents",
      "EmailAttachmentInfo",
      "DeviceNetworkEvents",
      "EmailUrlInfo"
    ],
    "answer": 3,
    "explanation": "EmailUrlInfo registra URLs extraídas de mensagens e anexos processados pelo Defender for Office 365.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailurlinfo-table"
  },
  {
    "id": "SC200-145",
    "area": "caca",
    "prompt": "A equipe quer caçar mensagens que carregaram um arquivo anexo identificado por hash. Qual tabela contém informações dos anexos?",
    "options": [
      "EmailAttachmentInfo",
      "EmailUrlInfo",
      "EmailEvents",
      "DeviceProcessEvents"
    ],
    "answer": 0,
    "explanation": "EmailAttachmentInfo contém dados de anexos, incluindo nome e hashes quando disponíveis.",
    "source": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table"
  },
  {
    "id": "SC200-146",
    "area": "caca",
    "prompt": "Qual expressão KQL limita eventos às últimas 24 horas usando Timestamp?",
    "options": [
      "summarize Timestamp 24h",
      "where Timestamp > ago(24h)",
      "join Timestamp 24h",
      "render Timestamp"
    ],
    "answer": 1,
    "explanation": "where aplica o predicado temporal; ago calcula o instante relativo.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/where-operator"
  },
  {
    "id": "SC200-147",
    "area": "caca",
    "prompt": "Após filtrar logs, que operação KQL calcula a quantidade de eventos por IPAddress?",
    "options": [
      "where count() by IPAddress",
      "join count() by IPAddress",
      "summarize count() by IPAddress",
      "take IPAddress"
    ],
    "answer": 2,
    "explanation": "summarize agrega as linhas por IPAddress.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
  },
  {
    "id": "SC200-148",
    "area": "caca",
    "prompt": "A caça precisa acrescentar a cada evento informações de uma segunda tabela pelo mesmo DeviceId. Qual operador aplicar?",
    "options": [
      "render on DeviceId",
      "take on DeviceId",
      "bin on DeviceId",
      "join on DeviceId"
    ],
    "answer": 3,
    "explanation": "join relaciona as tabelas pela chave DeviceId.",
    "source": "https://learn.microsoft.com/en-us/kusto/query/join-operator"
  },
  {
    "id": "SC200-149",
    "area": "caca",
    "prompt": "A equipe precisa pesquisar um período histórico de uma única tabela do data lake e levar resultados para Analytics. Qual recurso considerar?",
    "options": [
      "Search job",
      "Live response",
      "ASR Audit",
      "Copilot guided response"
    ],
    "answer": 0,
    "explanation": "Search jobs pesquisam dados históricos de uma tabela e disponibilizam resultados para análise.",
    "source": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-jobs-summary-rules-search-jobs"
  },
  {
    "id": "SC200-150",
    "area": "caca",
    "prompt": "A consulta deve acrescentar Duration = EndTime - StartTime sem descartar as colunas originais. Qual operador usar?",
    "options": [
      "project",
      "extend",
      "summarize",
      "where"
    ],
    "answer": 1,
    "explanation": "extend adiciona uma coluna calculada ao conjunto de resultados e mantém as demais colunas.",
    "source": "https://learn.microsoft.com/azure/data-explorer/kusto/query/extendoperator"
  }
];
