import { questions, areas, modes } from "./sc200-questions.js";
import { validateBank, shuffled, scoreQuiz } from "./quiz-core.js";

const byId = (id) => document.getElementById(id);
const state = { list: [], answers: [], index: 0, mode: "" };

function create(tag, text, className) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
}

const bank = validateBank(questions, areas);

function show(section) {
  for (const id of ["setup", "quiz", "results"])
    byId(id).classList.toggle("hidden", id !== section);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderModes() {
  const list = byId("mode-list");
  list.replaceChildren();
  for (const mode of modes) {
    const button = create("button", undefined, "mode-card");
    button.type = "button";
    button.disabled = bank.length < mode.count;
    button.append(
      create("strong", mode.label),
      create("span", `${mode.count} perguntas`, "count"),
      create(
        "small",
        button.disabled
          ? `Aguardando ${mode.count - bank.length} perguntas revisadas`
          : mode.description,
      ),
    );
    button.addEventListener("click", () => start(mode.count, mode.label));
    list.append(button);
  }
  if (bank.length > 0 && bank.length < 50) {
    const button = create("button", undefined, "mode-card demo");
    button.type = "button";
    button.append(
      create("strong", "Demonstração"),
      create("span", `${bank.length} perguntas`, "count"),
      create("small", "Teste o fluxo enquanto o banco é revisado."),
    );
    button.addEventListener("click", () => start(bank.length, "Demonstração"));
    list.append(button);
  }
  byId("bank-status").textContent =
    `${bank.length} perguntas disponíveis para teste; as sessões de 50, 80 e 150 serão ativadas apenas com um banco revisado suficiente.`;
}

function start(count, label) {
  // Não repete perguntas em uma sessão.
  state.list = shuffled(bank).slice(0, count);
  state.answers = Array(state.list.length).fill(null);
  state.index = 0;
  state.mode = label;
  show("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = state.list[state.index];
  byId("quiz-mode").textContent = `SC-200 · ${state.mode}`;
  byId("quiz-progress").textContent =
    `Pergunta ${state.index + 1} de ${state.list.length}`;
  byId("progress-bar").style.width =
    `${((state.index + 1) / state.list.length) * 100}%`;
  byId("question-area").textContent = areas[question.area].name;
  byId("question-title").textContent = question.prompt;
  const form = byId("answer-form");
  form.replaceChildren();
  question.options.forEach((option, index) => {
    const label = create("label", undefined, "answer-option");
    const input = create("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(index);
    input.checked = state.answers[state.index] === index;
    input.addEventListener("change", () => {
      state.answers[state.index] = index;
      byId("next-button").disabled = false;
    });
    label.append(input, create("span", option));
    form.append(label);
  });
  byId("back-button").disabled = state.index === 0;
  byId("next-button").disabled = state.answers[state.index] === null;
  byId("next-button").textContent =
    state.index === state.list.length - 1 ? "Ver resultado →" : "Próxima →";
}

function renderResults() {
  const result = scoreQuiz(state.list, state.answers, areas);
  show("results");
  byId("result-percent").textContent = `${result.percent}%`;
  byId("result-count").textContent =
    `${result.correct} de ${result.total} acertos`;
  byId("result-message").textContent = result.wrong.length
    ? "Veja o que errou e em quais áreas vale concentrar o próximo estudo. Depois, refaça a sessão completa."
    : "Você acertou todas as perguntas desta sessão. Continue praticando e revise os objetivos oficiais antes da prova.";
  const areaRoot = byId("area-results");
  areaRoot.replaceChildren();
  Object.entries(result.byArea)
    .filter(([, data]) => data.total > 0)
    .forEach(([key, data]) => {
      const card = create("article", undefined, "area-card");
      card.append(
        create("strong", areas[key].name),
        create("span", `${Math.round((data.correct / data.total) * 100)}%`),
        create(
          "p",
          `${data.correct} de ${data.total} acertos · peso no exame: ${areas[key].weight}`,
        ),
        create("p", areas[key].recommendation),
      );
      areaRoot.append(card);
    });
  const wrongRoot = byId("wrong-answers");
  wrongRoot.replaceChildren();
  if (!result.wrong.length)
    wrongRoot.append(create("p", "Nenhuma questão errada nesta sessão."));
  result.wrong.forEach(({ question, selected }) => {
    const card = create("article", undefined, "wrong-card");
    card.append(
      create("span", areas[question.area].name, "eyebrow"),
      create("h4", question.prompt),
      create(
        "p",
        `Sua resposta: ${selected === null ? "Não respondida" : question.options[selected]}`,
        "wrong",
      ),
      create(
        "p",
        `Resposta correta: ${question.options[question.answer]}`,
        "correct",
      ),
      create("p", question.explanation),
    );
    const link = create("a", "Conferir fonte ↗");
    link.href = question.source;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    card.append(link);
    wrongRoot.append(card);
  });
}

byId("back-button").addEventListener("click", () => {
  if (state.index > 0) {
    state.index--;
    renderQuestion();
  }
});
byId("next-button").addEventListener("click", () => {
  if (state.answers[state.index] === null) return;
  if (state.index === state.list.length - 1) renderResults();
  else {
    state.index++;
    renderQuestion();
  }
});
byId("retry-button").addEventListener("click", () =>
  start(state.list.length, state.mode),
);
renderModes();
