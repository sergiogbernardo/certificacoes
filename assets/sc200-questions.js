export { questions } from "./sc200-question-bank.js";

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
