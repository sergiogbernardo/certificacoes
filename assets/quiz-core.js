export function validateBank(items, areas) {
  const ids = new Set();
  return items.filter((question) => {
    const valid =
      typeof question.id === "string" &&
      question.id.length > 0 &&
      typeof question.prompt === "string" &&
      question.prompt.length > 0 &&
      Array.isArray(question.options) &&
      question.options.length === 4 &&
      question.options.every(
        (option) => typeof option === "string" && option.length > 0,
      ) &&
      Number.isInteger(question.answer) &&
      question.answer >= 0 &&
      question.answer < 4 &&
      Object.hasOwn(areas, question.area) &&
      typeof question.explanation === "string" &&
      question.explanation.length > 0 &&
      /^https:\/\//.test(question.source) &&
      !ids.has(question.id);
    if (valid) ids.add(question.id);
    return valid;
  });
}

export function shuffled(items, random = Math.random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const swap = Math.floor(random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

export function scoreQuiz(list, answers, areas) {
  if (list.length === 0 || list.length !== answers.length)
    throw new Error("Sessão inválida");
  const byArea = Object.fromEntries(
    Object.keys(areas).map((area) => [area, { total: 0, correct: 0 }]),
  );
  const wrong = [];
  let correct = 0;
  list.forEach((question, index) => {
    const selected = answers[index];
    byArea[question.area].total++;
    if (selected === question.answer) {
      correct++;
      byArea[question.area].correct++;
    } else wrong.push({ question, selected });
  });
  return {
    correct,
    total: list.length,
    percent: Math.round((correct / list.length) * 100),
    byArea,
    wrong,
  };
}
