# SC-200 — conteúdo extraído e banco inicial de perguntas

**Coleta inicial:** 30/10/2026. **Revisão parcial:** 31/10/2026. **Versão:** rascunho 3. **Escopo:** objetivos em inglês publicados para o exame a partir de 21/10/2026. A versão localizada pode seguir outro calendário.

Este arquivo é a mesa de trabalho das questões e a fonte do banco usado pelo quiz. As 150 perguntas abaixo foram redigidas para estudo; não são transcrições de provas ou de bancos de terceiros. Os gabaritos têm apoio nas fontes técnicas indicadas, mas cada item ainda precisa de revisão editorial e checagem de ambiguidade. O quiz identifica o banco como material em revisão. Todas são de **resposta única**, com quatro alternativas.

**Nesta revisão:** substituídas 11 questões repetidas por cenários de tópicos pouco cobertos e reescritas alternativas de outras 22 questões. O restante do banco ainda não recebeu uma revisão editorial individual.

## 1. Conteúdo que importa para o SC-200

O [guia oficial](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200) divide o exame em três domínios:

| Domínio | Peso | Tópicos para transformar em questões |
| --- | ---: | --- |
| Gerenciar um ambiente de operações de segurança | 40–45% | Defender XDR, Defender for Endpoint, automação, Sentinel, permissões, retenção, conectores, ingestão, regras e detecções. |
| Responder a incidentes de segurança | 35–40% | Triagem e resposta em Defender XDR, Endpoint, Office 365, Cloud Apps, Entra ID, Purview, Defender for Cloud e Sentinel. |
| Realizar caça a ameaças | 20–25% | KQL, tabelas da caça avançada, consultas do Sentinel, data lake, KQL jobs, summary rules, notebooks e grafos. |

### Mapa de estudo extraído dos objetivos oficiais

**Ambiente de operações (40–45%).** Configurar e otimizar Microsoft Defender XDR e Defender for Endpoint; trabalhar com alertas, detecções personalizadas, investigação automática e regras de redução da superfície de ataque. No Microsoft Sentinel, administrar funções de acesso, conectores, retenção, workbooks, automação e playbooks. Ingerir eventos do Windows, Syslog, CEF, atividades do Azure e inteligência de ameaças. Criar e ajustar regras analíticas agendadas, quase em tempo real, de inteligência de ameaças e de aprendizado de máquina, além de usar anomalias e o MITRE ATT&CK para contextualização. [M00]

**Resposta a incidentes (35–40%).** Correlacionar e triar incidentes no Defender XDR; investigar alertas do Defender for Office 365, Cloud Apps, Identity, Entra ID Protection, Defender for Cloud e Sentinel. No endpoint, usar linha do tempo, evidências, pacote de investigação, isolamento e Live response conforme o caso. No Sentinel, examinar entidades e logs, registrar decisões, executar tarefas e playbooks e gerenciar o ciclo do incidente. Usar Purview Audit/eDiscovery e dados do Microsoft Graph quando a investigação exigir esse contexto. O guia também inclui assistência por Security Copilot e recursos de IA agêntica. [M00]

**Caça a ameaças (20–25%).** Formular hipóteses, escolher tabelas da caça avançada e escrever consultas KQL. Explorar dados do Defender XDR e do Sentinel, incluindo análise histórica no data lake, search jobs, KQL jobs e summary rules. O escopo oficial também cita notebooks e recursos de grafos do Sentinel; essas frentes estão marcadas para expansão no banco. [M00]

**Distinções importantes para o banco:** Windows Security Events via AMA grava em SecurityEvent; Windows Forwarded Events grava em WindowsEvent. Syslog e CEF via AMA alimentam, respectivamente, Syslog e CommonSecurityLog. Regras analíticas agendadas usam KQL em intervalos; regras NRT executam em cadência de um minuto. Playbooks do Sentinel são fluxos do Azure Logic Apps acionáveis por regras de automação. O nível Analytics serve a alertas e consultas interativas; o data lake privilegia retenção longa e análise histórica. [M02] [M03] [M05] [M06] [M08] [M09]

## 2. Leitura crítica dos links catalogados

| Material | Resultado desta coleta | Uso para este rascunho |
| --- | --- | --- |
| [Guia oficial SC-200](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200) e [página da certificação](https://learn.microsoft.com/pt-br/credentials/certifications/security-operations-analyst/) | Acessíveis. O guia lista os três domínios e objetivos atualizados; a página informa 100 minutos de avaliação. | Delimitação do escopo. |
| [d365training](https://d365training.com/practice-test/sc-200/), [Cert Empire](https://certempire.com/practice-tests/free-sc-200-practice-questions/), [OfficialDumps](https://officialdumps.com/exam/sc-200), [DumpsMate](https://www.dumpsmate.com/SC-200-exam.html) e [CertGod](https://www.certgod.com/sc-200.html) | Amostras acessíveis. Aparecem cenários sobre Defender, Sentinel, resposta e caça; algumas páginas usam nomenclatura ou pesos anteriores e outras dependem de figuras ou contexto ausente. | Levantamento de assuntos e armadilhas; nenhum enunciado/gabarito foi copiado. |
| [ExamIT Lab](https://examitlab.com/exams/sc-200), [MindMesh](https://www.mindmeshacademy.com/certifications/azure/sc-200-microsoft-security-operations-analyst/practice-exam) e [CertifyDeck](https://www.certifydeck.com/en/certifications/sc-200) | Páginas de apresentação acessíveis. Listam os três domínios; parte das questões exige sessão, pagamento ou interface dinâmica. | Conferência de cobertura temática, sem importar questões. |
| [CertsTest](https://www.certstest.com/dumps/SC-200/), [Pass2Lead](https://www.pass2lead.com/sc-200.html), [Exam-Files](https://learn.exam-files.com/microsoft/sc-200/), [OpenExams](https://open-exams.com/practice/microsoft-sc-200) e [Courseiva](https://courseiva.com/certifications/sc-200/exam-questions) | Não foi possível recuperar o conteúdo nesta coleta: erros de acesso, bloqueio ou timeout. | Permanecem na lista de fontes candidatas; nenhuma afirmação específica destes sites foi usada. |

**Exemplo de desatualização:** uma amostra do OfficialDumps aponta o Log Analytics agent para integrar servidores Linux locais ao Defender for Cloud. A [documentação atual de migração](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-migration) informa que esse agente foi aposentado. Essa resposta não deve virar gabarito do quiz.

## 3. Referências técnicas para os gabaritos

- **[M00]** [Guia oficial do SC-200](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200)
- **[M01]** [Conectores de dados do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/connect-data-sources)
- **[M02]** [Eventos Windows e tabelas SecurityEvent/WindowsEvent](https://learn.microsoft.com/en-us/azure/sentinel/windows-security-event-id-reference)
- **[M03]** [Syslog e CEF via AMA](https://learn.microsoft.com/en-us/azure/sentinel/cef-syslog-ama-overview)
- **[M04]** [Papéis e permissões do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/roles)
- **[M05]** [Camadas de dados e retenção do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/manage-data-overview)
- **[M06]** [Regras analíticas agendadas](https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview)
- **[M07]** [Regras analíticas NRT](https://learn.microsoft.com/en-us/azure/sentinel/near-real-time-rules)
- **[M08]** [Automação e playbooks do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks)
- **[M09]** [Detecções personalizadas do Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules/)
- **[M10]** [Workbooks do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/monitor-your-data)
- **[M11]** [Indicadores de ameaça em regras analíticas](https://learn.microsoft.com/en-us/azure/sentinel/use-threat-indicators-in-analytics-rules)
- **[M12]** [Resposta automatizada no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/m365d-autoir)
- **[M13]** [Página de entidade do dispositivo no Defender](https://learn.microsoft.com/en-us/defender-xdr/entity-page-device)
- **[M14]** [Live response no Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/live-response)
- **[M15]** [Investigação de incidentes no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents)
- **[M16]** [Riscos de identidade no Entra ID Protection](https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-investigate-risk)
- **[M17]** [Remediação de usuários de risco no Entra](https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock)
- **[M18]** [Análise de e-mail no Defender for Office 365](https://learn.microsoft.com/en-us/defender-office-365/email-analysis-investigations)
- **[M19]** [Threat Explorer no Defender for Office 365](https://learn.microsoft.com/en-us/defender-office-365/threat-explorer-email-security)
- **[M20]** [Busca no Purview eDiscovery](https://learn.microsoft.com/en-us/purview/edisc-search-query)
- **[M21]** [Audit no Microsoft Purview](https://learn.microsoft.com/en-us/purview/audit-solutions-overview)
- **[M22]** [Tabelas da caça avançada no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables)
- **[M23]** [Operador KQL where](https://learn.microsoft.com/en-us/kusto/query/where-operator)
- **[M24]** [Operador KQL summarize](https://learn.microsoft.com/en-us/kusto/query/summarize-operator)
- **[M25]** [Operador KQL join](https://learn.microsoft.com/en-us/kusto/query/join-operator)
- **[M26]** [KQL jobs, summary rules e search jobs](https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-jobs-summary-rules-search-jobs)
- **[M27]** [Investigar alertas no Defender for Cloud Apps](https://learn.microsoft.com/en-us/defender-cloud-apps/best-practices)
- **[M28]** [Remediação de e-mail malicioso](https://learn.microsoft.com/en-us/defender-office-365/remediate-malicious-email-delivered-office-365)
- **[M29]** [Resumo de regras do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/summary-rules)
- **[M30]** [Regras de redução da superfície de ataque (ASR)](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-faq)
- **[M31]** [Criar detecções personalizadas no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules)
- **[M32]** [Ajuste de alertas no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/investigate-alerts)
- **[M33]** [Níveis de automação da investigação no Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/manage-auto-investigation)
- **[M34]** [Recomendações de otimização do SOC no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/soc-optimization/soc-optimization-reference)
- **[M35]** [Logs personalizados via AMA no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/connect-custom-logs-ama)
- **[M36]** [Cobertura MITRE ATT&CK no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/mitre-coverage)
- **[M37]** [Anomalias no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/anomalies-reference)
- **[M38]** [Alertas no Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/managing-and-responding-alerts)
- **[M39]** [Respostas guiadas com Security Copilot](https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response)
- **[M40]** [Investigação no Defender for Cloud Apps](https://learn.microsoft.com/en-us/defender-cloud-apps/investigate)
- **[M41]** [Ações e log de governança no Cloud Apps](https://learn.microsoft.com/en-us/defender-cloud-apps/governance-actions)
- **[M42]** [Investigar alertas do Defender for Identity](https://learn.microsoft.com/en-us/defender-for-identity/playbook-lateral-movement)
- **[M43]** [Logs de atividade do Microsoft Graph](https://learn.microsoft.com/en-us/graph/microsoft-graph-activity-logs-overview)
- **[M44]** [Caça a ameaças no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/hunting)
- **[M45]** [Visão geral do Sentinel Graph](https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-graph-overview)
- **[M46]** [Regras de automação do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules)
- **[M47]** [Interrupção automática de ataques no Defender](https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption)
- **[M48]** [Tabelas personalizadas do Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/create-custom-table)
- **[M49]** [Correlação de regras no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/exclude-analytics-rules-correlation)
- **[M50]** [Hunts no Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/hunts)
- **[M51]** [Ferramentas de exploração do servidor MCP do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-mcp-data-exploration-tool)
- **[M52]** [Configurar regras e exclusões ASR](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/enable-attack-surface-reduction)
- **[M53]** [Threat analytics no Defender](https://learn.microsoft.com/en-us/defender-xdr/threat-analytics)
- **[M54]** [Esquema da tabela EmailEvents](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailevents-table)
- **[M55]** [Operador KQL project](https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/project-operator)
- **[M56]** [Operador KQL extend](https://learn.microsoft.com/azure/data-explorer/kusto/query/extendoperator)
- **[M57]** [Esquema da tabela EmailUrlInfo](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailurlinfo-table)
- **[M58]** [Esquema da tabela EmailAttachmentInfo](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table)
- **[M59]** [Notificações de incidentes no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/m365d-notifications-incidents)
- **[M60]** [Coleta personalizada no Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/custom-data-collection)
- **[M61]** [Página de entidade do e-mail no Defender](https://learn.microsoft.com/en-us/defender-office-365/mdo-email-entity-page)
- **[M62]** [Resultados da interrupção automática de ataques](https://learn.microsoft.com/en-us/defender-xdr/autoad-results)
- **[M63]** [Casos de incidente no Defender](https://learn.microsoft.com/en-us/defender-xdr/investigate-incident-cases)
- **[M64]** [Notificações de alertas no Defender XDR](https://learn.microsoft.com/en-us/defender-xdr/configure-email-notifications)
- **[M65]** [Execução de regras de automação do Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules)
- **[M66]** [Parâmetros de Workbooks](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-parameters)

## 4. Banco inicial — ambiente de operações (Q001–Q026)

### Q001 — Eventos Windows via AMA
**Pergunta:** Em qual tabela uma regra costuma encontrar eventos do conector Windows Security Events via AMA?
**Opções:** A) SecurityEvent · B) WindowsEvent · C) DeviceEvents · D) AzureActivity
**Resposta:** A. O conector grava esses eventos em SecurityEvent.
**Fonte:** [M02]. **Estado:** rascunho com fonte.

### Q002 — Windows Event Forwarding
**Pergunta:** Eventos recebidos pelo conector Windows Forwarded Events normalmente chegam a qual tabela?
**Opções:** A) SecurityEvent · B) WindowsEvent · C) Syslog · D) CommonSecurityLog
**Resposta:** B. O conector de eventos encaminhados usa WindowsEvent.
**Fonte:** [M02]. **Estado:** rascunho com fonte.

### Q003 — Regra existente não dispara
**Pergunta:** Uma regra pronta consulta SecurityEvent, mas a coleta via WEF grava em WindowsEvent. Qual é a primeira verificação útil?
**Opções:** A) Alterar a frequência de execução da regra · B) Revisar apenas a gravidade do incidente · C) A tabela consultada pela regra · D) Trocar o parâmetro de tempo do workbook
**Resposta:** C. A regra pode não encontrar os eventos porque consulta outra tabela; adapte a consulta ou o conector.
**Fonte:** [M02]. **Estado:** rascunho com fonte.

### Q004 — Coleta via AMA
**Pergunta:** Qual recurso define quais eventos o Azure Monitor Agent coleta e para onde os envia?
**Opções:** A) Workbook · B) Incidente · C) Watchlist · D) Regra de coleta de dados (DCR)
**Resposta:** D. A DCR define a coleta e o destino dos dados do agente.
**Fonte:** [M00], [M03]. **Estado:** rascunho com fonte.

### Q005 — Log Linux comum
**Pergunta:** Uma fonte Linux envia mensagens Syslog não formatadas como CEF. Qual tabela consultar após a ingestão via AMA?
**Opções:** A) Syslog · B) SecurityEvent · C) EmailEvents · D) AzureActivity
**Resposta:** A. Mensagens Syslog são armazenadas na tabela Syslog.
**Fonte:** [M01], [M03]. **Estado:** rascunho com fonte.

### Q006 — Log de dispositivo em CEF
**Pergunta:** Um appliance envia eventos em Common Event Format por um encaminhador Linux. Qual tabela do Sentinel é esperada?
**Opções:** A) WindowsEvent · B) CommonSecurityLog · C) DeviceNetworkEvents · D) SigninLogs
**Resposta:** B. O conector CEF via AMA grava os eventos em CommonSecurityLog.
**Fonte:** [M01], [M03]. **Estado:** rascunho com fonte.

### Q007 — Encaminhador Linux
**Pergunta:** Para receber CEF de vários equipamentos de rede, onde o AMA pode ser instalado?
**Opções:** A) Apenas no navegador do analista · B) No workbook · C) Em um encaminhador Linux · D) No incidente
**Resposta:** C. O encaminhador Linux recebe os logs e o AMA os envia ao workspace.
**Fonte:** [M03]. **Estado:** rascunho com fonte.

### Q008 — Leitura sem alteração
**Pergunta:** Um analista precisa ver dados e incidentes do Sentinel, sem gerenciá-los. Qual papel é o ponto de partida de menor privilégio?
**Opções:** A) Owner · B) Microsoft Sentinel Contributor · C) Logic App Contributor · D) Microsoft Sentinel Reader
**Resposta:** D. Reader permite consultar e visualizar recursos, sem gerenciar incidentes.
**Fonte:** [M04]. **Estado:** rascunho com fonte.

### Q009 — Gerenciar incidentes
**Pergunta:** Um analista deve atribuir e atualizar incidentes, mas não criar regras analíticas. Qual papel do Sentinel se encaixa melhor?
**Opções:** A) Responder · B) Reader · C) Contributor · D) Playbook Operator
**Resposta:** A. Responder acrescenta gerenciamento de incidentes às permissões de leitura.
**Fonte:** [M04]. **Estado:** rascunho com fonte.

### Q010 — Criar regra analítica
**Pergunta:** Qual papel interno do Sentinel permite criar ou editar regras analíticas?
**Opções:** A) Sentinel Reader · B) Sentinel Contributor · C) Sentinel Responder · D) Sentinel Playbook Operator
**Resposta:** B. Contributor pode criar e editar recursos do Sentinel, inclusive regras.
**Fonte:** [M04]. **Estado:** rascunho com fonte.

### Q011 — Executar playbook manualmente
**Pergunta:** Qual papel do Sentinel concede a capacidade específica de executar playbooks manualmente?
**Opções:** A) Reader · B) Security Reader · C) Playbook Operator · D) Workbook Reader
**Resposta:** C. O Playbook Operator permite listar, ver e executar playbooks; o acesso ao incidente pode exigir permissões adicionais.
**Fonte:** [M04]. **Estado:** rascunho com fonte.

### Q012 — Dados para alertas em tempo real
**Pergunta:** Uma tabela precisa alimentar regras de alerta e consultas interativas do Sentinel. Qual camada atende melhor esse uso?
**Opções:** A) Data Lake · B) Arquivo PDF · C) Blob público · D) Analytics
**Resposta:** D. Analytics é a camada otimizada para regras e consultas interativas.
**Fonte:** [M05]. **Estado:** rascunho com fonte.

### Q013 — Histórico de longo prazo
**Pergunta:** Logs volumosos serão mantidos para investigação histórica, sem necessidade de alertas em tempo real sobre a própria tabela. Qual camada considerar?
**Opções:** A) Data Lake · B) Apenas cache do navegador · C) SecurityAlert · D) Workbook
**Resposta:** A. O data lake foi desenhado para retenção longa e análise histórica.
**Fonte:** [M05]. **Estado:** rascunho com fonte.

### Q014 — Visualização
**Pergunta:** A equipe quer gráficos e tabelas interativas de dados do Sentinel para acompanhamento operacional. Qual recurso usar?
**Opções:** A) DCR · B) Workbook · C) Incidente · D) NRT
**Resposta:** B. Workbooks visualizam e monitoram dados consultados.
**Fonte:** [M10]. **Estado:** rascunho com fonte.

### Q015 — Detecção periódica
**Pergunta:** Uma consulta KQL deve rodar a cada intervalo definido e gerar alertas quando atingir um limiar. Qual tipo de regra é adequado?
**Opções:** A) Workbook · B) DCR · C) Regra analítica agendada · D) Watchlist
**Resposta:** C. Regras agendadas executam consultas em intervalos e comparam os resultados ao limiar.
**Fonte:** [M06]. **Estado:** rascunho com fonte.

### Q016 — Detecção muito rápida
**Pergunta:** Uma detecção precisa avaliar eventos novos em cadência aproximada de um minuto. Qual tipo de regra do Sentinel foi criado para isso?
**Opções:** A) Scheduled de 24 horas · B) Workbook · C) Summary rule · D) NRT
**Resposta:** D. Regras near-real-time (NRT) executam em intervalos de um minuto.
**Fonte:** [M07]. **Estado:** rascunho com fonte.

### Q017 — Limiar da regra
**Pergunta:** Em uma regra agendada, a consulta retorna linhas, mas você só quer alertar acima de determinada quantidade. Que configuração usar?
**Opções:** A) Limiar do alerta · B) Aumentar a janela de consulta · C) Alterar o agrupamento de alertas · D) Mapear entidades adicionais
**Resposta:** A. O limiar determina quantos resultados são necessários para gerar o alerta.
**Fonte:** [M06]. **Estado:** rascunho com fonte.

### Q018 — Agrupar alertas
**Pergunta:** Vários alertas relacionados não devem abrir incidentes independentes. Qual configuração da regra ajuda?
**Opções:** A) Troca da fonte de dados · B) Agrupamento de alertas em incidentes · C) Exportação CSV · D) Nome da tabela
**Resposta:** B. A regra pode agrupar alertas em um incidente segundo critérios definidos.
**Fonte:** [M06], [M07]. **Estado:** rascunho com fonte.

### Q019 — Triagem automática simples
**Pergunta:** Um incidente recém-criado deve receber uma atribuição e uma tarefa padrão automaticamente. Qual recurso do Sentinel atende isso?
**Opções:** A) DCR · B) KQL job · C) Regra de automação · D) Watchlist
**Resposta:** C. Regras de automação podem padronizar ações de triagem sobre incidentes.
**Fonte:** [M08]. **Estado:** rascunho com fonte.

### Q020 — Integração externa
**Pergunta:** Após a criação de um incidente, a equipe quer chamar um fluxo que abra um ticket em sistema externo. Qual combinação usar?
**Opções:** A) Workbook e tabela · B) DCR e retenção · C) NRT e CSV · D) Regra de automação e playbook
**Resposta:** D. A regra aciona o playbook que implementa o fluxo externo.
**Fonte:** [M08]. **Estado:** rascunho com fonte.

### Q021 — Motor do playbook
**Pergunta:** Em que serviço os playbooks do Microsoft Sentinel são construídos?
**Opções:** A) Azure Logic Apps · B) Microsoft Word · C) Azure Policy exclusivamente · D) GitHub Issues
**Resposta:** A. Playbooks são fluxos do Azure Logic Apps.
**Fonte:** [M08]. **Estado:** rascunho com fonte.

### Q022 — Gatilho por atualização
**Pergunta:** Um playbook deve rodar quando um incidente existente é atualizado, não apenas quando é criado. Que gatilho da regra de automação selecionar?
**Opções:** A) Workbook saved · B) Incident updated · C) DCR created · D) Table exported
**Resposta:** B. As regras de automação oferecem gatilhos de criação e atualização de incidentes.
**Fonte:** [M08]. **Estado:** rascunho com fonte.

### Q023 — Detecção no Defender XDR
**Pergunta:** Qual é a base para criar uma regra de detecção personalizada no Microsoft Defender XDR?
**Opções:** A) Workbook do Sentinel · B) DCR · C) Consulta de caça avançada · D) Pesquisa eDiscovery
**Resposta:** C. A regra é construída sobre uma consulta de advanced hunting.
**Fonte:** [M09]. **Estado:** rascunho com fonte.

### Q024 — Ação de detecção personalizada
**Pergunta:** Uma detecção personalizada encontrou um dispositivo suspeito e a equipe precisa conter sua comunicação de rede. Qual ação de resposta é adequada?
**Opções:** A) Coletar o pacote de investigação · B) Adicionar uma etiqueta ao dispositivo · C) Executar uma varredura antivírus · D) Isolar o dispositivo
**Resposta:** D. Regras de detecção personalizadas podem iniciar ações de resposta em dispositivos identificados no resultado.
**Fonte:** [M09]. **Estado:** rascunho com fonte.

### Q025 — Indicadores de ameaça
**Pergunta:** Qual modelo de regra do Sentinel compara indicadores importados com eventos ingeridos?
**Opções:** A) TI map · B) Workbook · C) DCR · D) Pesquisa de conteúdo
**Resposta:** A. Regras TI map cruzam indicadores com dados das fontes conectadas.
**Fonte:** [M11]. **Estado:** rascunho com fonte.

### Q026 — Resumo de grande volume
**Pergunta:** A equipe quer agregar repetidamente logs de alto volume e gravar o resultado em tabela menor para consulta. Qual recurso considerar?
**Opções:** A) Incidente manual · B) Summary rule · C) Live response · D) Quarentena de e-mail
**Resposta:** B. Summary rules executam agregações e persistem os resultados em tabelas de análise.
**Fonte:** [M26], [M29]. **Estado:** rascunho com fonte.

## 5. Banco inicial — resposta a incidentes (Q027–Q048)

### Q027 — Investigação automática
**Pergunta:** No Defender XDR, qual é um resultado possível da investigação automática sobre uma evidência?
**Opções:** A) Indexed · B) Archived · C) Malicious · D) Retained
**Resposta:** C. A investigação pode classificar evidências como maliciosas, suspeitas ou sem ameaça encontrada.
**Fonte:** [M12]. **Estado:** rascunho com fonte.

### Q028 — Aprovação de remediação
**Pergunta:** Por que uma ação sugerida pela investigação automática pode aparecer como pendente?
**Opções:** A) O KQL não suporta alertas · B) Todo incidente exige exportação PDF · C) O agente AMA está desabilitado · D) Pode exigir aprovação conforme a configuração de automação
**Resposta:** D. A automação pode executar ações diretamente ou aguardar aprovação.
**Fonte:** [M12]. **Estado:** rascunho com fonte.

### Q029 — Histórico de ações
**Pergunta:** Onde verificar o andamento de uma ação de resposta iniciada no Defender?
**Opções:** A) Action center · B) Grafo do incidente · C) Linha do tempo do dispositivo · D) Página de entidade do e-mail
**Resposta:** A. O Action center reúne status e histórico de ações de resposta.
**Fonte:** [M13], [M28]. **Estado:** rascunho com fonte.

### Q030 — Contenção de endpoint
**Pergunta:** Um dispositivo está comprometido e a equipe precisa conter a comunicação de rede mantendo contato com o serviço Defender. Qual ação usar?
**Opções:** A) Delete workbook · B) Isolate device · C) Change DCR · D) Dismiss incident
**Resposta:** B. O isolamento corta a rede do dispositivo, preservando a conexão de gerenciamento com o Defender.
**Fonte:** [M13]. **Estado:** rascunho com fonte.

### Q031 — Coleta de evidência do dispositivo
**Pergunta:** Qual ação reúne informações do endpoint em um pacote para análise posterior?
**Opções:** A) Create workbook · B) Disable analytics rule · C) Collect investigation package · D) Export sitemap
**Resposta:** C. A coleta produz um pacote de investigação do dispositivo.
**Fonte:** [M13]. **Estado:** rascunho com fonte.

### Q032 — Investigação interativa
**Pergunta:** O analista precisa executar comandos investigativos no endpoint remoto usando o Defender. Qual recurso escolher?
**Opções:** A) Summary rule · B) Threat Explorer · C) Content search · D) Live response
**Resposta:** D. Live response fornece uma sessão interativa no dispositivo, sujeita a permissões e suporte do sistema.
**Fonte:** [M14]. **Estado:** rascunho com fonte.

### Q033 — Linha do tempo do dispositivo
**Pergunta:** Para relacionar processos, arquivos e conexões observados em um endpoint, qual vista é especialmente útil?
**Opções:** A) Device timeline · B) Grafo do incidente XDR · C) Página de entidade do e-mail · D) Relatório de entradas do Entra
**Resposta:** A. A linha do tempo ajuda a reconstruir atividades do dispositivo.
**Fonte:** [M13]. **Estado:** rascunho com fonte.

### Q034 — Ações dependentes do dispositivo
**Pergunta:** Uma ação de resposta não aparece para determinado endpoint. Qual hipótese deve ser checada antes de concluir que o produto falhou?
**Opções:** A) Ajuste da janela da regra analítica · B) Suporte do sistema, versão, onboarding e permissões · C) Retenção da tabela no Sentinel · D) Filtro de tempo do workbook
**Resposta:** B. Ações disponíveis variam conforme dispositivo, sistema, versão e acesso.
**Fonte:** [M13], [M14]. **Estado:** rascunho com fonte.

### Q035 — Escopo do incidente
**Pergunta:** Um incidente do Sentinel contém alertas associados a usuários, IPs e dispositivos. Onde começar a examinar esses objetos?
**Opções:** A) Apenas nome do workbook · B) DCR · C) Entidades do incidente · D) Configuração do tema
**Resposta:** C. As entidades reúnem os objetos envolvidos e permitem ampliar a investigação.
**Fonte:** [M15]. **Estado:** rascunho com fonte.

### Q036 — Histórico do incidente
**Pergunta:** Qual vista do incidente do Sentinel ajuda a conferir ações já executadas por automações e comentários da equipe?
**Opções:** A) Aba de entidades · B) Aba de logs · C) Lista de tarefas · D) Activity log
**Resposta:** D. O registro de atividades contém ações e comentários do incidente.
**Fonte:** [M15]. **Estado:** rascunho com fonte.

### Q037 — Consulta durante investigação
**Pergunta:** O analista quer aprofundar um incidente do Sentinel com uma consulta aos logs sem sair da página do incidente. Qual opção usar?
**Opções:** A) Logs · B) Theme · C) Cost management · D) App registration
**Resposta:** A. A página do incidente oferece acesso a uma janela de consulta de logs.
**Fonte:** [M15]. **Estado:** rascunho com fonte.

### Q038 — Padronização da resposta
**Pergunta:** A equipe quer uma lista de passos visível em cada incidente do Sentinel para reduzir omissões no processo. Qual recurso se encaixa?
**Opções:** A) DCR · B) Tasks · C) Syslog daemon · D) Search job
**Resposta:** B. Tarefas do incidente padronizam os passos que o analista precisa executar.
**Fonte:** [M15]. **Estado:** rascunho com fonte.

### Q039 — Endereço IP de incidente
**Pergunta:** Para verificar geolocalização e contexto de um IP ligado a um incidente do Sentinel, qual objeto deve ser aberto?
**Opções:** A) Detalhe da regra analítica · B) Entidade do dispositivo · C) Entidade do endereço IP · D) Histórico do playbook
**Resposta:** C. A página/detalhe da entidade IP reúne dados contextuais, inclusive geolocalização quando disponível.
**Fonte:** [M15]. **Estado:** rascunho com fonte.

### Q040 — Sinalização de identidade
**Pergunta:** Um alerta de risco de usuário no Entra ID Protection precisa de triagem. Qual evidência inicial é apropriada?
**Opções:** A) Somente etiquetas do dispositivo · B) Somente assunto dos e-mails · C) Somente volume de alertas por dia · D) Histórico de entradas, aplicativo, dispositivo, local e IP
**Resposta:** D. O fluxo recomendado compara esses atributos ao padrão conhecido do usuário.
**Fonte:** [M16]. **Estado:** rascunho com fonte.

### Q041 — Comprometimento confirmado
**Pergunta:** Após confirmar que uma conta de usuário foi comprometida, qual ação de classificação no Entra ID Protection corresponde ao achado?
**Opções:** A) Confirm compromised · B) Confirm safe · C) Dismiss risk · D) Delete workbook
**Resposta:** A. A ação registra a identidade como comprometida; a contenção/remediação ainda deve ser executada.
**Fonte:** [M17]. **Estado:** rascunho com fonte.

### Q042 — Falso positivo de identidade
**Pergunta:** A investigação mostrou que a entrada suspeita veio de viagem legítima do usuário, sem outros indícios de ataque. Qual classificação é adequada?
**Opções:** A) Confirm compromised · B) Confirm safe · C) Isolate device · D) Create DCR
**Resposta:** B. Marcar como segura é adequado quando a atividade é legítima após investigação.
**Fonte:** [M16]. **Estado:** rascunho com fonte.

### Q043 — Contenção de sessão
**Pergunta:** Uma identidade comprometida ainda possui sessões ativas. Que medida ajuda a encerrar o acesso persistente?
**Opções:** A) Criar workbook · B) Aumentar retenção · C) Revogar sessões/tokens de atualização · D) Trocar o nome da regra
**Resposta:** C. A remediação de identidade pode incluir revogação de sessões/tokens além de troca de senha e bloqueio.
**Fonte:** [M17]. **Estado:** rascunho com fonte.

### Q044 — E-mail semelhante
**Pergunta:** Uma investigação automática em Defender for Office 365 encontrou uma mensagem maliciosa. O que pode ampliar o escopo da busca?
**Opções:** A) Trocar o workspace · B) Criar DCR Linux · C) Consultar somente WindowsEvent · D) Analisar clusters de mensagens relacionadas
**Resposta:** D. A análise de mensagens relacionadas ajuda a localizar outras cópias ou variantes do ataque.
**Fonte:** [M18]. **Estado:** rascunho com fonte.

### Q045 — Busca de phishing
**Pergunta:** A equipe precisa filtrar e investigar mensagens de phishing recebidas no Microsoft 365. Qual ferramenta do Defender for Office 365 é adequada?
**Opções:** A) Threat Explorer · B) AMA · C) Sentinel data lake · D) Azure Policy
**Resposta:** A. Threat Explorer permite investigar e filtrar e-mails suspeitos.
**Fonte:** [M19]. **Estado:** rascunho com fonte.

### Q046 — Análise de uma mensagem
**Pergunta:** O analista precisa examinar os cabeçalhos, anexos, URLs e vereditos de uma mensagem específica. Qual vista é a mais direta?
**Opções:** A) Threat Explorer para busca ampla · B) Página de entidade do e-mail · C) Action center de remediação · D) Microsoft Purview Audit
**Resposta:** B. A página de entidade reúne evidências e detalhes de uma mensagem individual.
**Fonte:** [M61]. **Estado:** rascunho com fonte.

### Q047 — Conteúdo de investigação
**Pergunta:** Uma investigação precisa localizar documentos e mensagens relevantes em Exchange, SharePoint, OneDrive e Teams. Qual recurso do Purview usar?
**Opções:** A) NRT · B) Device isolation · C) Busca em eDiscovery · D) Syslog via AMA
**Resposta:** C. A busca do eDiscovery localiza conteúdo armazenado nessas fontes para um caso.
**Fonte:** [M20]. **Estado:** rascunho com fonte.

### Q048 — Atividades auditadas
**Pergunta:** O analista quer pesquisar ações registradas de usuários em serviços Microsoft 365 para reconstruir uma sequência de eventos. Qual recurso usar?
**Opções:** A) DCR · B) Device tags · C) Summary rule · D) Microsoft Purview Audit
**Resposta:** D. Purview Audit permite pesquisar registros de atividades auditadas.
**Fonte:** [M21]. **Estado:** rascunho com fonte.

## 6. Banco inicial — caça a ameaças (Q049–Q060)

### Q049 — Criação de processos
**Pergunta:** Na caça avançada do Defender XDR, qual tabela é apropriada para eventos de criação de processos em dispositivos?
**Opções:** A) DeviceProcessEvents · B) EmailEvents · C) SecurityEvent · D) AzureActivity
**Resposta:** A. DeviceProcessEvents contém eventos de criação de processos.
**Fonte:** [M22]. **Estado:** rascunho com fonte.

### Q050 — Conexões de rede
**Pergunta:** Qual tabela da caça avançada contém eventos de conexão de rede feitos por dispositivos?
**Opções:** A) DeviceFileEvents · B) DeviceNetworkEvents · C) EmailEvents · D) IdentityInfo
**Resposta:** B. DeviceNetworkEvents descreve conexões e eventos de rede do endpoint.
**Fonte:** [M22]. **Estado:** rascunho com fonte.

### Q051 — Arquivos no endpoint
**Pergunta:** A hipótese de caça envolve criação e alteração de arquivos em endpoints. Qual tabela consultar?
**Opções:** A) DeviceLogonEvents · B) Syslog · C) DeviceFileEvents · D) OfficeActivity
**Resposta:** C. DeviceFileEvents registra eventos do sistema de arquivos.
**Fonte:** [M22]. **Estado:** rascunho com fonte.

### Q052 — Autenticação em dispositivo
**Pergunta:** Qual tabela da caça avançada descreve entradas e autenticações observadas em dispositivos?
**Opções:** A) DeviceNetworkInfo · B) EmailEvents · C) CommonSecurityLog · D) DeviceLogonEvents
**Resposta:** D. DeviceLogonEvents contém eventos de logon em dispositivos.
**Fonte:** [M22]. **Estado:** rascunho com fonte.

### Q053 — Telemetria de e-mail
**Pergunta:** Qual tabela do Defender XDR é ponto de partida para investigar entrega ou bloqueio de mensagens de e-mail?
**Opções:** A) EmailEvents · B) DeviceProcessEvents · C) SecurityEvent · D) Syslog
**Resposta:** A. EmailEvents traz eventos de e-mail, inclusive entrega e bloqueio.
**Fonte:** [M22]. **Estado:** rascunho com fonte.

### Q054 — Filtro de linhas
**Pergunta:** Em KQL, qual operador mantém apenas as linhas que satisfazem uma condição?
**Opções:** A) summarize · B) where · C) join · D) render
**Resposta:** B. where filtra a tabela pelo predicado.
**Fonte:** [M23]. **Estado:** rascunho com fonte.

### Q055 — Contagem por dispositivo
**Pergunta:** Que trecho KQL agrega eventos e calcula a contagem separada por DeviceName?
**Opções:** A) where DeviceName · B) join DeviceName · C) summarize count() by DeviceName · D) render DeviceName
**Resposta:** C. summarize agrupa pelos valores de DeviceName e calcula count().
**Fonte:** [M24]. **Estado:** rascunho com fonte.

### Q056 — Relacionar duas tabelas
**Pergunta:** Que operador KQL relaciona linhas de duas tabelas por colunas correspondentes?
**Opções:** A) where · B) take · C) sort · D) join
**Resposta:** D. join combina dados das tabelas conforme uma condição de correspondência.
**Fonte:** [M25]. **Estado:** rascunho com fonte.

### Q057 — Tipos de junção
**Pergunta:** Em KQL, qual tipo de join mantém apenas as linhas que encontram correspondência nas duas tabelas?
**Opções:** A) inner · B) fullouter · C) leftanti · D) rightanti
**Resposta:** A. inner retorna apenas as linhas correspondentes.
**Fonte:** [M25]. **Estado:** rascunho com fonte.

### Q058 — Agrupamento temporal
**Pergunta:** Uma série temporal precisa contar eventos por janelas de uma hora. Qual expressão usar no agrupamento de summarize?
**Opções:** A) where 1h · B) bin(Timestamp, 1h) · C) join Timestamp · D) sort 1h
**Resposta:** B. bin reduz valores de tempo a intervalos discretos para a agregação.
**Fonte:** [M24]. **Estado:** rascunho com fonte.

### Q059 — Consulta histórica no data lake
**Pergunta:** A equipe precisa executar, sob demanda, uma consulta histórica que relaciona várias tabelas do data lake. Qual recurso é mais adequado?
**Opções:** A) Workbook vazio · B) DCR · C) KQL job · D) Regra NRT
**Resposta:** C. KQL jobs permitem consultas assíncronas históricas com joins e unions.
**Fonte:** [M26]. **Estado:** rascunho com fonte.

### Q060 — Selecionar colunas em KQL
**Pergunta:** Uma consulta retorna muitas colunas, mas a equipe quer manter somente Timestamp, DeviceName e FileName no resultado. Qual operador usar?
**Opções:** A) extend Timestamp, DeviceName, FileName · B) summarize Timestamp, DeviceName, FileName · C) join Timestamp, DeviceName, FileName · D) project Timestamp, DeviceName, FileName
**Resposta:** D. project retorna apenas as colunas especificadas, na ordem indicada.
**Fonte:** [M55]. **Estado:** rascunho com fonte.

## 7. Ampliação — ambiente de operações (Q061–Q098)

### Q061 — ASR em implantação
**Pergunta:** Antes de ativar uma regra ASR que pode afetar aplicativos internos, qual modo ajuda a medir o impacto sem bloquear a execução?
**Opções:** A) Audit · B) Block · C) Off · D) Quarantine
**Resposta:** A. Audit registra o que seria bloqueado sem interromper o aplicativo.
**Fonte:** [M30]. **Estado:** rascunho com fonte.

### Q062 — ASR por regra
**Pergunta:** Uma aplicação legítima é afetada por uma regra ASR específica. Qual ajuste preserva as outras regras?
**Opções:** A) Desativar todo o Defender · B) Exclusão apenas para essa regra · C) Excluir todos os dispositivos · D) Apagar o incidente
**Resposta:** B. Exclusões por regra limitam a exceção ao controle envolvido.
**Fonte:** [M30]. **Estado:** rascunho com fonte.

### Q063 — Análise de ASR
**Pergunta:** Qual fonte ajuda a revisar ocorrências de uma regra ASR em modo Audit?
**Opções:** A) Apenas o registro DNS público · B) Purview eDiscovery · C) Eventos e caça avançada do Defender · D) Fila de e-mails enviados
**Resposta:** C. Eventos e advanced hunting mostram o efeito potencial da regra.
**Fonte:** [M30]. **Estado:** rascunho com fonte.

### Q064 — Política ASR
**Pergunta:** Em uma implantação gerenciada pelo Intune, a política ASR deve ser atribuída a que tipo de grupo?
**Opções:** A) Grupo de usuários apenas · B) Lista de destinatários de e-mail · C) Workspace · D) Grupo de dispositivos Entra
**Resposta:** D. O gerenciamento de ASR para Defender for Endpoint direciona objetos de dispositivo.
**Fonte:** [M52]. **Estado:** rascunho com fonte.

### Q065 — Ruído de alerta esperado
**Pergunta:** Uma atividade interna conhecida gera repetidamente alertas benignos. Qual recurso do Defender XDR permite aplicar condições e ocultar ou resolver esses alertas?
**Opções:** A) Alert tuning · B) Live response · C) Data lake · D) DCR
**Resposta:** A. Regras de ajuste tratam alertas que correspondem às condições definidas.
**Fonte:** [M32]. **Estado:** rascunho com fonte.

### Q066 — Ocultar versus resolver
**Pergunta:** No ajuste de alertas do Defender XDR, qual ação impede a criação de incidente a partir de um alerta do Defender for Endpoint correspondente?
**Opções:** A) Add comment · B) Hide alert · C) Create workbook · D) Collect package
**Resposta:** B. Hide alert suprime o alerta e impede a criação do incidente nesse cenário.
**Fonte:** [M32]. **Estado:** rascunho com fonte.

### Q067 — Evidência ocultada
**Pergunta:** Um alerta foi ocultado por uma regra de ajuste. Para caça avançada, onde ele ainda pode ser encontrado?
**Opções:** A) Somente SecurityEvent · B) Apenas Syslog · C) AlertInfo e AlertEvidence · D) Nunca mais em tabela alguma
**Resposta:** C. Os dados do alerta ocultado permanecem nessas tabelas para hunting.
**Fonte:** [M32]. **Estado:** rascunho com fonte.

### Q068 — Correlação de detecção
**Pergunta:** Uma detecção personalizada deve integrar alertas relacionados em uma história de ataque no Defender XDR. Que configuração escolher?
**Opções:** A) Exclude from correlation · B) Delete detection · C) Disable hunting · D) Include in correlation
**Resposta:** D. Incluir na correlação permite agrupar o alerta com outros sinais relacionados.
**Fonte:** [M49]. **Estado:** rascunho com fonte.

### Q069 — Incidente isolado
**Pergunta:** Uma detecção precisa produzir comportamento previsível de incidente próprio para uma automação específica. Qual ajuste de correlação pode ajudar?
**Opções:** A) Exclude from correlation · B) Include in correlation · C) Desligar a consulta · D) Alterar a retenção
**Resposta:** A. Excluir da correlação evita que a detecção participe da correlação padrão; regras de agrupamento ainda devem ser consideradas.
**Fonte:** [M49]. **Estado:** rascunho com fonte.

### Q070 — Notificação de incidentes
**Pergunta:** O SOC precisa receber e-mail quando surgir um incidente de uma fonte e gravidade específicas no Defender XDR. O que configurar?
**Opções:** A) Regra de ajuste de alertas · B) Regra de notificação de incidentes · C) Detecção personalizada sem destinatários · D) Parâmetro de workbook
**Resposta:** B. A notificação de incidentes pode usar filtros como fonte e gravidade e enviar aos destinatários definidos.
**Fonte:** [M59]. **Estado:** rascunho com fonte.

### Q071 — Resultado da detecção
**Pergunta:** Quando uma detecção personalizada encontra eventos correspondentes, o que ela pode gerar?
**Opções:** A) Apenas uma consulta salva · B) Apenas um workbook · C) Alertas e ações de resposta configuradas · D) Apenas um conector de dados
**Resposta:** C. A regra pode gerar alertas e disparar ações de resposta conforme a configuração.
**Fonte:** [M31]. **Estado:** rascunho com fonte.

### Q072 — Campo de contexto
**Pergunta:** Qual prática melhora uma detecção personalizada baseada em caça avançada?
**Opções:** A) Omitir sempre Timestamp · B) Usar apenas comentários na consulta · C) Desativar todas as fontes · D) Retornar as colunas exigidas pelo tipo de evento e pela ação
**Resposta:** D. A regra precisa de dados suficientes na consulta para identificar eventos e entidades.
**Fonte:** [M31]. **Estado:** rascunho com fonte.

### Q073 — Automação total
**Pergunta:** No nível Full de investigação automática do Endpoint, o que acontece quando uma evidência recebe veredito malicioso?
**Opções:** A) A remediação apropriada ocorre automaticamente · B) Toda ação exige aprovação · C) O incidente é exportado para PDF · D) A telemetria é apagada
**Resposta:** A. O nível Full permite executar automaticamente a remediação.
**Fonte:** [M33]. **Estado:** rascunho com fonte.

### Q074 — Aprovação obrigatória
**Pergunta:** Qual nível de automação exige aprovação para qualquer ação de remediação proposta?
**Opções:** A) Full · B) Semi — require approval for any remediation · C) Audit · D) NRT
**Resposta:** B. Esse nível mantém a aprovação humana antes da remediação.
**Fonte:** [M33]. **Estado:** rascunho com fonte.

### Q075 — Device groups
**Pergunta:** Por que configurar grupos de dispositivos no Defender for Endpoint ao ajustar a investigação automática?
**Opções:** A) Para mudar o domínio DNS · B) Para criar um e-mail de phishing · C) Para aplicar níveis de automação diferentes a conjuntos de endpoints · D) Para substituir o Sentinel
**Resposta:** C. Grupos permitem controlar o nível de automação por dispositivo.
**Fonte:** [M33], [M00]. **Estado:** rascunho com fonte.

### Q076 — Interrupção de ataque
**Pergunta:** Qual é a finalidade principal da interrupção automática de ataques no Defender XDR?
**Opções:** A) Classificar alertas sem agir sobre entidades · B) Agregar logs históricos para relatórios · C) Criar recomendações de postura sem contenção · D) Conter rapidamente entidades comprometidas durante ataques de alta confiança
**Resposta:** D. O recurso executa contenções para interromper a progressão do ataque.
**Fonte:** [M47]. **Estado:** rascunho com fonte.

### Q077 — Contenção de usuário
**Pergunta:** O que significa Contain user na interrupção automática de ataques?
**Opções:** A) Impor política em dispositivos onboarded para bloquear comunicações da identidade suspeita · B) Apagar a conta de todos os backups · C) Criar um workbook · D) Suspender qualquer coleta de logs
**Resposta:** A. A contenção reduz a movimentação lateral da identidade nos dispositivos protegidos.
**Fonte:** [M47]. **Estado:** rascunho com fonte.

### Q078 — Revogação de sessão
**Pergunta:** Qual ação de interrupção automática busca interromper sessões de uma identidade comprometida?
**Opções:** A) Create summary rule · B) Revoke user session · C) Collect package · D) Add bookmark
**Resposta:** B. Revogar sessões interrompe o acesso existente da identidade.
**Fonte:** [M47]. **Estado:** rascunho com fonte.

### Q079 — Automação do Sentinel
**Pergunta:** Uma regra deve atribuir automaticamente incidentes novos a um analista. Qual recurso usar?
**Opções:** A) DCR · B) Search job · C) Automation rule · D) Investigation package
**Resposta:** C. Regras de automação podem alterar proprietário, status, tags e acionar playbooks.
**Fonte:** [M46]. **Estado:** rascunho com fonte.

### Q080 — Gatilho de atualização
**Pergunta:** Uma regra deve agir quando a gravidade de um incidente muda. Qual gatilho do Sentinel é o mais adequado?
**Opções:** A) When alert is created apenas · B) On workbook save · C) On DCR deletion · D) When incident is updated
**Resposta:** D. Mudanças de gravidade contam como atualização do incidente.
**Fonte:** [M46]. **Estado:** rascunho com fonte.

### Q081 — Condição de automação
**Pergunta:** Para executar um playbook somente em incidentes de alta gravidade, o que combinar na regra de automação?
**Opções:** A) Gatilho, condição de gravidade e ação de playbook · B) Somente o gatilho de criação do incidente · C) Somente a condição de gravidade · D) Somente o playbook sem regra de automação
**Resposta:** A. A regra avalia condições antes de executar ações.
**Fonte:** [M46]. **Estado:** rascunho com fonte.

### Q082 — Origem de dados Azure
**Pergunta:** O objetivo do exame cita a coleta de atividade do Azure por quais mecanismos?
**Opções:** A) Live response e eDiscovery · B) Azure Policy e diagnostic settings · C) ASR e Threat Explorer · D) MFA e FIDO2
**Resposta:** B. Esses mecanismos são citados para configurar coleta de logs de atividade.
**Fonte:** [M00]. **Estado:** rascunho com fonte.

### Q083 — Arquivo de log próprio
**Pergunta:** Uma aplicação local grava texto em arquivo e não possui conector nativo. Qual opção do Sentinel contempla sua ingestão via agente?
**Opções:** A) Threat Explorer · B) Device isolation · C) Custom Logs via AMA · D) Purview Audit
**Resposta:** C. O conector coleta arquivos de texto com AMA e DCR.
**Fonte:** [M35]. **Estado:** rascunho com fonte.

### Q084 — Tabela própria
**Pergunta:** Antes de encaminhar logs próprios por Logs Ingestion API, qual objeto de destino precisa existir?
**Opções:** A) Incidente resolvido · B) Mensagem de e-mail · C) Grupo de dispositivos · D) Tabela personalizada no workspace
**Resposta:** D. O fluxo requer uma tabela de destino e DCR que roteie os dados.
**Fonte:** [M48]. **Estado:** rascunho com fonte.

### Q085 — Indicadores de ameaça
**Pergunta:** Uma regra deve comparar IPs observados nos logs com indicadores ingeridos. Que tipo de regra/modelo é pertinente?
**Opções:** A) Analytics de threat intelligence · B) Workbook de custos apenas · C) Política ASR · D) Live response
**Resposta:** A. Regras de TI cruzam eventos com indicadores, como IPs e domínios.
**Fonte:** [M11]. **Estado:** rascunho com fonte.

### Q086 — Mapa MITRE
**Pergunta:** A equipe quer descobrir técnicas ATT&CK pouco cobertas por detecções ativas. Qual vista do Sentinel ajuda?
**Opções:** A) Action center · B) Matriz de cobertura MITRE ATT&CK · C) Device timeline · D) Purview eDiscovery
**Resposta:** B. A matriz mostra táticas e técnicas associadas à cobertura de regras.
**Fonte:** [M36]. **Estado:** rascunho com fonte.

### Q087 — Mapeamento MITRE
**Pergunta:** Ao criar uma regra analítica, por que associar técnicas MITRE ATT&CK?
**Opções:** A) Para alterar o IP do atacante · B) Para eliminar retenção · C) Para contextualizar a detecção e avaliar cobertura · D) Para trocar o tenant
**Resposta:** C. O mapeamento ajuda a relacionar alertas a técnicas e lacunas de detecção.
**Fonte:** [M36]. **Estado:** rascunho com fonte.

### Q088 — Anomalia baseada em comportamento
**Pergunta:** Em Sentinel, uma atividade se destaca do padrão histórico de uma entidade. Que conceito descreve esse achado?
**Opções:** A) Backup incremental · B) DCR · C) Workbook · D) Anomalia
**Resposta:** D. Anomalias comparam atividade observada a uma linha de base.
**Fonte:** [M37]. **Estado:** rascunho com fonte.

### Q089 — Pontuação de anomalia
**Pergunta:** Na tabela Anomalies, o que representa um score mais alto?
**Opções:** A) Maior desvio em relação à linha de base · B) Maior custo de licença · C) Mais dias de retenção · D) Prioridade manual do incidente
**Resposta:** A. O score quantifica o grau de desvio; exige interpretação contextual.
**Fonte:** [M37]. **Estado:** rascunho com fonte.

### Q090 — Otimização do SOC
**Pergunta:** O Sentinel identifica uma lacuna entre logs ingeridos e detecções úteis para certos ataques. Qual recurso oferece recomendações para essa lacuna?
**Opções:** A) Live response · B) SOC optimization · C) eDiscovery · D) Investigação de e-mail
**Resposta:** B. As recomendações de otimização analisam ingestão e detecções frente a cenários de ameaça.
**Fonte:** [M34]. **Estado:** rascunho com fonte.

### Q091 — Redução de custo
**Pergunta:** A equipe quer priorizar mudanças de ingestão sem perder de vista valor de segurança e custo. Qual painel do Sentinel consultar?
**Opções:** A) Device timeline · B) Threat Explorer · C) SOC optimization recommendations · D) Lista de usuários de risco
**Resposta:** C. A otimização do SOC reúne recomendações orientadas à cobertura e ao uso de dados.
**Fonte:** [M34]. **Estado:** rascunho com fonte.

### Q092 — Filtro de tempo no workbook
**Pergunta:** O analista quer trocar o período exibido em vários gráficos de um workbook sem editar cada consulta. Qual componente adicionar?
**Opções:** A) Regra analítica NRT · B) DCR para cada gráfico · C) Filtro KQL fixo em cada consulta · D) Parâmetro de intervalo de tempo
**Resposta:** D. Parâmetros permitem que o usuário altere o intervalo e o reutilize nas visualizações vinculadas.
**Fonte:** [M66]. **Estado:** rascunho com fonte.

### Q093 — Analytics versus Data lake
**Pergunta:** Qual camada do Sentinel é voltada a detecções e consultas interativas de baixa latência?
**Opções:** A) Analytics tier · B) Data lake somente · C) Blob archive isolado · D) E-mail quarantine
**Resposta:** A. Analytics é a camada operacional para análise e alertas interativos.
**Fonte:** [M05]. **Estado:** rascunho com fonte.

### Q094 — Telemetria adicional de endpoint
**Pergunta:** O Defender for Endpoint coleta a telemetria padrão, mas o SOC precisa capturar eventos específicos com filtros e enviá-los ao Sentinel. Qual recurso usar?
**Opções:** A) Regra de detecção personalizada do Defender XDR · B) Regra de coleta personalizada do Defender for Endpoint · C) Workbook do Sentinel · D) Regra de ajuste de alertas
**Resposta:** B. A coleta personalizada adiciona eventos filtrados à telemetria padrão e os encaminha ao workspace do Sentinel.
**Fonte:** [M60]. **Estado:** rascunho com fonte.

### Q095 — Regra NRT
**Pergunta:** Qual característica distingue uma regra analítica NRT no Sentinel?
**Opções:** A) Execução apenas mensal · B) Exclusividade de e-mail · C) Execução aproximadamente a cada minuto · D) Ausência de alertas
**Resposta:** C. Regras NRT oferecem cadência próxima do tempo real.
**Fonte:** [M07]. **Estado:** rascunho com fonte.

### Q096 — Notificação de alertas
**Pergunta:** A equipe quer e-mail apenas para alertas de gravidade alta em grupos de dispositivos definidos. O que configurar?
**Opções:** A) Notificação de atualização de threat analytics · B) Regra de notificação de incidentes sem filtro de dispositivo · C) Regra de supressão de alertas · D) Regra de notificação de alertas com gravidade e escopo de dispositivos
**Resposta:** D. Notificações de alerta aceitam filtros de gravidade e grupos de dispositivos, além dos destinatários.
**Fonte:** [M64]. **Estado:** rascunho com fonte.

### Q097 — Ordem de automação
**Pergunta:** Duas regras de automação podem alterar o mesmo incidente no Sentinel. Que configuração ajuda a controlar qual delas atua primeiro?
**Opções:** A) Ordem ou prioridade de execução das regras · B) Tipo de gatilho da regra · C) Gravidade usada na condição · D) Intervalo de retenção do incidente
**Resposta:** A. As regras de automação são executadas sequencialmente na ordem definida.
**Fonte:** [M65]. **Estado:** rascunho com fonte.

### Q098 — Permissão para playbook
**Pergunta:** Um analista consegue ver incidentes, mas não executar manualmente um playbook. Qual área deve ser revisada?
**Opções:** A) Configuração de retenção das tabelas · B) Permissões do Sentinel e do recurso Logic App · C) Tempo limite da consulta analítica · D) Grupo de dispositivos do Endpoint
**Resposta:** B. A execução manual depende de permissões sobre incidente e playbook.
**Fonte:** [M04], [M08]. **Estado:** rascunho com fonte.

## 8. Ampliação — resposta a incidentes (Q099–Q131)

### Q099 — Priorização em nuvem
**Pergunta:** No Defender for Cloud, qual atributo deve pesar na triagem inicial de vários alertas?
**Opções:** A) Somente o horário de criação · B) Somente o status atual · C) Gravidade do alerta e recurso afetado · D) Somente o título do alerta
**Resposta:** C. A triagem considera gravidade, contexto e recursos afetados.
**Fonte:** [M38]. **Estado:** rascunho com fonte.

### Q100 — Contexto do recurso
**Pergunta:** Um alerta do Defender for Cloud aponta uma VM. Que ação ajuda a examinar a atividade que sustenta o alerta?
**Opções:** A) Mudar o tema · B) Excluir DCR · C) Criar eDiscovery case · D) Inspect resource context
**Resposta:** D. O contexto do recurso leva aos logs relevantes.
**Fonte:** [M38]. **Estado:** rascunho com fonte.

### Q101 — Resposta automática em nuvem
**Pergunta:** Qual opção de resposta do Defender for Cloud pode acionar um fluxo automatizado a partir de um alerta?
**Opções:** A) Trigger automated response com Logic App · B) Criar workbook vazio · C) Encerrar AMA · D) Alterar tipo de join
**Resposta:** A. O alerta pode iniciar uma Logic App.
**Fonte:** [M38]. **Estado:** rascunho com fonte.

### Q102 — Alerta benigno em nuvem
**Pergunta:** A investigação confirma que um alerta do Defender for Cloud reflete atividade esperada. O que verificar antes de suprimir ocorrências semelhantes?
**Opções:** A) Suprimir todos os alertas da assinatura · B) Escopo e características precisas da atividade · C) Reduzir a gravidade sem validar a causa · D) Encerrar a coleta da fonte
**Resposta:** B. Supressão deve ser específica após validação da causa benigna.
**Fonte:** [M38]. **Estado:** rascunho com fonte.

### Q103 — Cloud Apps activity log
**Pergunta:** Para verificar quem acessou um aplicativo SaaS, de qual IP e local, qual vista do Defender for Cloud Apps usar?
**Opções:** A) DCR · B) Device timeline · C) Activity log · D) KQL job
**Resposta:** C. O log de atividades permite filtrar acessos e ações por aplicativo.
**Fonte:** [M40]. **Estado:** rascunho com fonte.

### Q104 — Arquivo exposto
**Pergunta:** A equipe suspeita que um arquivo sensível ficou acessível publicamente em um aplicativo conectado. Onde investigar?
**Opções:** A) Apenas DeviceProcessEvents · B) DCR · C) AzureActivity · D) Files no Defender for Cloud Apps
**Resposta:** D. A vista de arquivos permite examinar compartilhamento e exposição.
**Fonte:** [M40]. **Estado:** rascunho com fonte.

### Q105 — Compartilhamento externo
**Pergunta:** Qual ação de governança pode reduzir a exposição de um arquivo compartilhado externamente em aplicativo compatível?
**Opções:** A) Remover usuários externos ou link compartilhado · B) Aumentar a retenção do Sentinel · C) Desligar o KQL · D) Criar gráfico de barras
**Resposta:** A. Ações de governança podem revogar compartilhamento externo, conforme o conector.
**Fonte:** [M41]. **Estado:** rascunho com fonte.

### Q106 — Ação de governança
**Pergunta:** Onde verificar se uma ação manual ou automática do Defender for Cloud Apps foi concluída ou falhou?
**Opções:** A) WindowsEvent · B) Governance log · C) Workbook · D) Purview eDiscovery
**Resposta:** B. O Governance log registra status e resultado das ações.
**Fonte:** [M41]. **Estado:** rascunho com fonte.

### Q107 — Identidade local
**Pergunta:** Um alerta sugere movimentação lateral entre hosts e contas de domínio. Qual produto fornece a história do alerta de identidade?
**Opções:** A) Defender for Office 365 apenas · B) Purview eDiscovery · C) Defender for Identity · D) Azure Cost Management
**Resposta:** C. O Defender for Identity fornece contexto de contas e hosts em ataques de identidade.
**Fonte:** [M42]. **Estado:** rascunho com fonte.

### Q108 — Alerta de Identity
**Pergunta:** Qual seção de um alerta do Defender for Identity mostra a sequência e as entidades envolvidas?
**Opções:** A) Alert graph · B) Comments & history · C) Alert details · D) What happened
**Resposta:** D. A seção apresenta linha do tempo e entidades.
**Fonte:** [M42]. **Estado:** rascunho com fonte.

### Q109 — Relações do alerta
**Pergunta:** Ao investigar alerta do Defender for Identity, qual vista ajuda a visualizar relações entre conta, host e outras entidades?
**Opções:** A) Alert graph · B) Action center de e-mail · C) DCR · D) Summary rule
**Resposta:** A. O gráfico do alerta representa entidades e vínculos.
**Fonte:** [M42]. **Estado:** rascunho com fonte.

### Q110 — Gerenciamento de alerta
**Pergunta:** Após atribuir um alerta do Defender for Identity, a equipe inicia a apuração. Qual status representa esse andamento?
**Opções:** A) New · B) In progress · C) Deleted · D) Archived by DCR
**Resposta:** B. In progress indica investigação em curso.
**Fonte:** [M42]. **Estado:** rascunho com fonte.

### Q111 — Incidente multidomínio
**Pergunta:** Um mesmo ataque envolve e-mail, identidade e endpoint. Qual vantagem de investigar o incidente correlacionado no Defender XDR?
**Opções:** A) Dispensar a investigação de entidades · B) Tratar todos os alertas como verdadeiros · C) Relacionar alertas e entidades em uma história única · D) Executar automaticamente todas as remediações
**Resposta:** C. A correlação reúne sinais de vários domínios para triagem.
**Fonte:** [M49], [M00]. **Estado:** rascunho com fonte.

### Q112 — Triage com Copilot
**Pergunta:** Uma resposta guiada do Security Copilot recomenda classificar um incidente. A que categoria de recomendação isso pertence?
**Opções:** A) Containment · B) Investigation · C) Remediation · D) Triage
**Resposta:** D. As respostas guiadas incluem recomendações de triagem.
**Fonte:** [M39]. **Estado:** rascunho com fonte.

### Q113 — Contenção guiada
**Pergunta:** Uma resposta guiada sugere isolar um dispositivo comprometido. A qual grupo de ações ela pertence?
**Opções:** A) Containment · B) Data collection · C) Report styling · D) Storage
**Resposta:** A. Isolamento é medida de contenção.
**Fonte:** [M39]. **Estado:** rascunho com fonte.

### Q114 — Revisão humana
**Pergunta:** Antes de aplicar uma ação sugerida pelo Security Copilot em um incidente, qual passo é apropriado?
**Opções:** A) Aceitar todas as sugestões sem análise · B) Revisar entidade, motivo e efeito da ação · C) Apagar a evidência · D) Desligar os conectores
**Resposta:** B. Cada cartão mostra a ação recomendada, a entidade e a justificativa para revisão.
**Fonte:** [M39]. **Estado:** rascunho com fonte.

### Q115 — Permissão de ação
**Pergunta:** Um botão de resposta guiada aparece desabilitado para o analista. Qual causa documentada deve ser checada?
**Opções:** A) Ausência de incidentes semelhantes · B) Ordem dos cartões de recomendação · C) Permissão RBAC insuficiente · D) Falta de um workbook no Sentinel
**Resposta:** C. Ações indisponíveis podem refletir permissões insuficientes.
**Fonte:** [M39]. **Estado:** rascunho com fonte.

### Q116 — E-mails parecidos
**Pergunta:** No Copilot em um incidente de phishing, que ação pode abrir uma consulta KQL para mensagens semelhantes?
**Opções:** A) Create DCR · B) Live response · C) Enable WEF · D) View similar emails
**Resposta:** D. O recurso leva à caça avançada com consulta gerada para e-mails relacionados.
**Fonte:** [M39]. **Estado:** rascunho com fonte.

### Q117 — Incidentes semelhantes
**Pergunta:** Por que revisar incidentes semelhantes sugeridos pelo Copilot?
**Opções:** A) Para comparar classificação e respostas anteriores · B) Para ignorar o incidente atual · C) Para alterar o tenant · D) Para remover a trilha de auditoria
**Resposta:** A. Casos similares fornecem contexto, mas não substituem a validação.
**Fonte:** [M39]. **Estado:** rascunho com fonte.

### Q118 — Ataque interrompido
**Pergunta:** A interrupção automática isolou um dispositivo. O que o analista deve verificar no incidente?
**Opções:** A) Apenas a data de onboarding do dispositivo · B) Ação executada, entidade afetada e escopo residual do ataque · C) Fechar o incidente sem avaliar outras entidades · D) Liberar a contenção antes de investigar
**Resposta:** B. Contenção automática exige avaliação do resultado e investigação do restante do ataque.
**Fonte:** [M47]. **Estado:** rascunho com fonte.

### Q119 — Identidade e dispositivo
**Pergunta:** O atacante usou uma conta para acessar vários endpoints. Por que conter só um endpoint pode ser insuficiente?
**Opções:** A) Todos os logs deixam de existir · B) O KQL deixa de funcionar · C) A identidade ainda pode manter acesso aos demais recursos · D) A gravidade vira baixa automaticamente
**Resposta:** C. A resposta deve considerar a entidade identidade e o alcance da conta.
**Fonte:** [M47], [M00]. **Estado:** rascunho com fonte.

### Q120 — Phishing pós-entrega
**Pergunta:** Uma mensagem maliciosa já foi entregue a várias caixas. Qual ação de resposta deve ser considerada no Defender for Office 365?
**Opções:** A) Criar regra ASR · B) Alterar retenção do data lake · C) Excluir a DCR · D) Remover ou mover mensagens correspondentes das caixas
**Resposta:** D. A remediação pós-entrega permite atuar sobre mensagens identificadas.
**Fonte:** [M28]. **Estado:** rascunho com fonte.

### Q121 — E-mail e endpoint
**Pergunta:** Um usuário abriu anexo de phishing e um processo suspeito surgiu no endpoint. Qual abordagem amplia a investigação?
**Opções:** A) Correlacionar mensagem, usuário, dispositivo e processo no incidente · B) Examinar apenas o assunto do e-mail · C) Excluir o alerta inicial · D) Gerar um workbook vazio
**Resposta:** A. O encadeamento entre domínios ajuda a delimitar o ataque.
**Fonte:** [M00], [M13], [M18]. **Estado:** rascunho com fonte.

### Q122 — Identidade comprometida
**Pergunta:** Uma conta foi confirmada como comprometida. Qual conjunto de respostas é mais coerente?
**Opções:** A) Apenas renomear o usuário · B) Bloquear acesso, revogar sessões e redefinir credenciais conforme o caso · C) Criar gráfico sem alterar acesso · D) Descartar todos os logs
**Resposta:** B. A remediação deve interromper sessões e recuperar a conta.
**Fonte:** [M17]. **Estado:** rascunho com fonte.

### Q123 — Sinal de risco
**Pergunta:** Uma entrada de alto risco no Entra ID Protection veio de IP e localização inéditos. Qual passo inicial fortalece a conclusão?
**Opções:** A) Marcar comprometido sem olhar contexto · B) Apagar o registro · C) Comparar o evento com atividades e dispositivos habituais do usuário · D) Aumentar a retenção
**Resposta:** C. A triagem deve confrontar o risco com o padrão legítimo e outras evidências.
**Fonte:** [M16]. **Estado:** rascunho com fonte.

### Q124 — Efeito da interrupção automática
**Pergunta:** O Defender XDR conteve ativos durante um ataque. Onde o analista vê um resumo das ações no contexto do incidente?
**Opções:** A) Pacote de investigação de um único endpoint · B) Workbook de ingestão do Sentinel · C) Registro de configuração da DCR · D) Cartão de resumo da interrupção automática no incidente
**Resposta:** D. O cartão do incidente mostra as ações de interrupção e os ativos relacionados.
**Fonte:** [M62]. **Estado:** rascunho com fonte.

### Q125 — Processo suspeito
**Pergunta:** A linha do tempo mostra um processo iniciado logo após download de anexo. Que contexto investigar em seguida?
**Opções:** A) Processo pai, arquivo, usuário e conexões relacionadas · B) Somente o hash do anexo · C) Somente o remetente da mensagem · D) Somente a gravidade do alerta
**Resposta:** A. Relações entre processo, arquivo, usuário e rede ajudam a reconstruir a cadeia.
**Fonte:** [M13], [M22]. **Estado:** rascunho com fonte.

### Q126 — Auditoria de usuário
**Pergunta:** Para verificar uma ação administrativa em Microsoft 365 durante a investigação, que fonte consultar?
**Opções:** A) ASR mode · B) Purview Audit · C) Device isolation · D) Summary rule
**Resposta:** B. O Audit permite pesquisar atividades registradas em serviços Microsoft 365.
**Fonte:** [M21]. **Estado:** rascunho com fonte.

### Q127 — Conteúdo versus atividade
**Pergunta:** Qual recurso é apropriado para localizar o conteúdo de uma mensagem ou documento relevante a um caso?
**Opções:** A) Purview Audit apenas · B) DCR · C) Purview eDiscovery search · D) MITRE coverage
**Resposta:** C. eDiscovery pesquisa conteúdo; Audit pesquisa eventos de atividade.
**Fonte:** [M20], [M21]. **Estado:** rascunho com fonte.

### Q128 — Requisições Graph
**Pergunta:** Uma aplicação realizou chamadas incomuns à API Microsoft Graph. Qual fonte registra requisições HTTP recebidas e processadas pelo serviço?
**Opções:** A) DeviceFileEvents · B) ASR audit · C) Workbook · D) Microsoft Graph activity logs
**Resposta:** D. Esses logs fornecem trilha de chamadas Graph do tenant.
**Fonte:** [M43]. **Estado:** rascunho com fonte.

### Q129 — Destino do Graph
**Pergunta:** Para consultar logs de atividade do Graph no Log Analytics, qual configuração de coleta é usada?
**Opções:** A) Diagnostic settings com destino no workspace · B) Live response · C) ASR exclusion · D) Playbook manual
**Resposta:** A. Diagnostic settings encaminha os logs aos destinos de análise.
**Fonte:** [M43]. **Estado:** rascunho com fonte.

### Q130 — Caso de investigação
**Pergunta:** Um incidente longo reúne evidências, hipóteses e tarefas de vários analistas. Qual prática melhora a continuidade?
**Opções:** A) Manter tudo na memória de um analista · B) Registrar decisões, responsáveis e evidências no gerenciamento do caso · C) Alterar o nome a cada hora · D) Apagar comentários antigos
**Resposta:** B. O gerenciamento do caso mantém rastreabilidade da resposta colaborativa.
**Fonte:** [M63]. **Estado:** rascunho com fonte.

### Q131 — Reabertura
**Pergunta:** Um incidente fechado recebe nova evidência confiável relacionada ao mesmo ataque. Qual ação operacional é coerente?
**Opções:** A) Ignorar a evidência porque houve fechamento · B) Excluir a entidade · C) Reabrir/reavaliar o caso e atualizar a investigação · D) Desativar todas as regras
**Resposta:** C. Novas evidências devem ser incorporadas à triagem e à resposta.
**Fonte:** [M15]. **Estado:** rascunho com fonte.

## 9. Ampliação — caça a ameaças (Q132–Q150)

### Q132 — Hipótese de caça
**Pergunta:** Uma caça parte da suspeita de que contas com privilégios estão autenticando em hosts incomuns. Qual primeiro passo torna o trabalho verificável?
**Opções:** A) Isolar todos os dispositivos · B) Desligar os alertas · C) Criar incidente sem evidências · D) Definir hipótese, fontes e período
**Resposta:** D. A hipótese delimita dados e critérios de análise.
**Fonte:** [M44]. **Estado:** rascunho com fonte.

### Q133 — Hunting query
**Pergunta:** Uma consulta KQL de caça no Sentinel deve ser reutilizada pela equipe. Que recurso ajuda a mantê-la organizada?
**Opções:** A) Hunting query salva · B) DCR sem destino · C) Live response · D) Política ASR
**Resposta:** A. Consultas de hunting podem ser criadas e monitoradas no Sentinel.
**Fonte:** [M44]. **Estado:** rascunho com fonte.

### Q134 — Achado relevante
**Pergunta:** Durante a caça, um evento é suspeito e deve ser preservado para nova análise. O que criar no Sentinel?
**Opções:** A) DCR · B) Bookmark · C) Exceção ASR · D) Regra de cobrança
**Resposta:** B. Bookmarks guardam eventos relevantes e seu contexto para investigação.
**Fonte:** [M44]. **Estado:** rascunho com fonte.

### Q135 — Escalada de achado
**Pergunta:** Um bookmark contém evidência suficiente de possível comprometimento e requer resposta formal. Qual próximo passo?
**Opções:** A) Apagar a consulta · B) Encerrar coleta de logs · C) Escalar o achado para incidente · D) Mudar o tema
**Resposta:** C. Achados importantes podem ser elevados a incidentes.
**Fonte:** [M44]. **Estado:** rascunho com fonte.

### Q136 — Escopo de hunt
**Pergunta:** A equipe precisa acompanhar uma hipótese, consultas, técnicas MITRE e bookmarks como uma atividade de caça coordenada. Qual recurso usar?
**Opções:** A) DCR · B) Action center · C) ASR policy · D) Hunt do Sentinel
**Resposta:** D. Hunts agrupam as etapas e achados de uma campanha de caça.
**Fonte:** [M50]. **Estado:** rascunho com fonte.

### Q137 — Notebook
**Pergunta:** Uma caça exige análise em Python, visualização e enriquecimento de dados. Qual recurso do Sentinel atende melhor?
**Opções:** A) Jupyter notebook · B) Regra ASR · C) Threat Explorer apenas · D) Incidente sem logs
**Resposta:** A. Notebooks permitem código, dados, resultados e visualizações no mesmo fluxo.
**Fonte:** [M44]. **Estado:** rascunho com fonte.

### Q138 — MSTICPy
**Pergunta:** Qual biblioteca da Microsoft ajuda a enriquecer e visualizar investigações em notebooks do Sentinel?
**Opções:** A) React · B) MSTICPy · C) Terraform · D) OpenSSL
**Resposta:** B. MSTICPy reúne funções de consulta, enriquecimento e visualização para hunting.
**Fonte:** [M44]. **Estado:** rascunho com fonte.

### Q139 — MCP do Sentinel
**Pergunta:** Em uma caça assistida por agente, qual capacidade do Sentinel MCP Server permite explorar relações de entidades em grafos?
**Opções:** A) ASR Audit · B) eDiscovery export · C) Ferramentas de data exploration/graph · D) WEF collector
**Resposta:** C. O servidor expõe ferramentas para explorar dados e grafos do Sentinel.
**Fonte:** [M51]. **Estado:** rascunho com fonte.

### Q140 — Grafo de caça
**Pergunta:** A equipe quer visualizar conexões entre usuários, dispositivos, IPs e outros objetos durante uma caça. Qual experiência consultar?
**Opções:** A) DCR editor · B) Audit search · C) Alert tuning · D) Hunting graph
**Resposta:** D. O grafo de caça mostra relações entre entidades.
**Fonte:** [M45]. **Estado:** rascunho com fonte.

### Q141 — Raio de impacto
**Pergunta:** Uma conta comprometida pode alcançar diversos recursos. Qual grafo ajuda a estimar impacto atual e potencial?
**Opções:** A) Blast radius graph · B) Workbook de custos · C) DCR · D) ASR exclusions
**Resposta:** A. O blast radius visualiza alcance de uma possível violação.
**Fonte:** [M45]. **Estado:** rascunho com fonte.

### Q142 — Relações do Sentinel Graph
**Pergunta:** Por que usar Sentinel Graph além de consultar uma tabela isolada?
**Opções:** A) Para substituir autenticação · B) Para analisar relações entre entidades e caminhos de ataque · C) Para desativar retenção · D) Para aumentar CPU do agente
**Resposta:** B. O grafo ajuda a encontrar conexões que uma tabela isolada não mostra diretamente.
**Fonte:** [M45]. **Estado:** rascunho com fonte.

### Q143 — Threat analytics
**Pergunta:** A equipe investiga uma campanha conhecida e precisa de contexto sobre atores, técnicas e exposição. Qual recurso do Defender XDR consultar?
**Opções:** A) DCR · B) Device isolation · C) Threat analytics · D) Purview eDiscovery
**Resposta:** C. Threat analytics reúne relatórios de ameaças e contexto de exposição.
**Fonte:** [M53]. **Estado:** rascunho com fonte.

### Q144 — URL em mensagem
**Pergunta:** Uma hipótese de phishing parte de uma URL presente no corpo ou anexo de e-mails. Qual tabela da caça avançada contém essas URLs?
**Opções:** A) EmailEvents · B) EmailAttachmentInfo · C) DeviceNetworkEvents · D) EmailUrlInfo
**Resposta:** D. EmailUrlInfo registra URLs extraídas de mensagens e anexos processados pelo Defender for Office 365.
**Fonte:** [M57]. **Estado:** rascunho com fonte.

### Q145 — Hash de anexo
**Pergunta:** A equipe quer caçar mensagens que carregaram um arquivo anexo identificado por hash. Qual tabela contém informações dos anexos?
**Opções:** A) EmailAttachmentInfo · B) EmailUrlInfo · C) EmailEvents · D) DeviceProcessEvents
**Resposta:** A. EmailAttachmentInfo contém dados de anexos, incluindo nome e hashes quando disponíveis.
**Fonte:** [M58]. **Estado:** rascunho com fonte.

### Q146 — Filtrar no tempo
**Pergunta:** Qual expressão KQL limita eventos às últimas 24 horas usando Timestamp?
**Opções:** A) summarize Timestamp 24h · B) where Timestamp > ago(24h) · C) join Timestamp 24h · D) render Timestamp
**Resposta:** B. where aplica o predicado temporal; ago calcula o instante relativo.
**Fonte:** [M23]. **Estado:** rascunho com fonte.

### Q147 — Top IPs
**Pergunta:** Após filtrar logs, que operação KQL calcula a quantidade de eventos por IPAddress?
**Opções:** A) where count() by IPAddress · B) join count() by IPAddress · C) summarize count() by IPAddress · D) take IPAddress
**Resposta:** C. summarize agrega as linhas por IPAddress.
**Fonte:** [M24]. **Estado:** rascunho com fonte.

### Q148 — Enriquecer eventos
**Pergunta:** A caça precisa acrescentar a cada evento informações de uma segunda tabela pelo mesmo DeviceId. Qual operador aplicar?
**Opções:** A) render on DeviceId · B) take on DeviceId · C) bin on DeviceId · D) join on DeviceId
**Resposta:** D. join relaciona as tabelas pela chave DeviceId.
**Fonte:** [M25]. **Estado:** rascunho com fonte.

### Q149 — Histórico em uma tabela
**Pergunta:** A equipe precisa pesquisar um período histórico de uma única tabela do data lake e levar resultados para Analytics. Qual recurso considerar?
**Opções:** A) Search job · B) Live response · C) ASR Audit · D) Copilot guided response
**Resposta:** A. Search jobs pesquisam dados históricos de uma tabela e disponibilizam resultados para análise.
**Fonte:** [M26]. **Estado:** rascunho com fonte.

### Q150 — Coluna calculada em KQL
**Pergunta:** A consulta deve acrescentar Duration = EndTime - StartTime sem descartar as colunas originais. Qual operador usar?
**Opções:** A) project · B) extend · C) summarize · D) where
**Resposta:** B. extend adiciona uma coluna calculada ao conjunto de resultados e mantém as demais colunas.
**Fonte:** [M56]. **Estado:** rascunho com fonte.

## 10. Próxima rodada de revisão

1. Conferir cada referência na data da revisão e marcar cada pergunta como **confirmada**, **corrigir**, **desatualizada** ou **remover**.
2. Testar se existe apenas uma alternativa correta, inclusive quando permissões, licenças ou portal alteram a resposta.
3. Aprofundar os subobjetivos ainda pouco cobertos e substituir questões de reconhecimento simples por cenários mais realistas, especialmente em Graph, casos complexos e recursos recentes.
4. Acrescentar dificuldade, tópico granular, data de validação e explicação das alternativas incorretas.
5. Após editar este Markdown, executar `npm run build:questions` para atualizar o banco JavaScript e `npm test` para validar a estrutura. As 150 questões já estão disponíveis no quiz como material de prática em revisão.
