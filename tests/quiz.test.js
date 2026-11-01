import test from 'node:test';
import assert from 'node:assert/strict';
import { questions, areas, modes } from '../assets/sc200-questions.js';
import { validateBank, shuffled, scoreQuiz } from '../assets/quiz-core.js';

test('150 questions are valid, unique, and enable every mode', () => {
  const bank = validateBank(questions, areas);
  assert.equal(bank.length, 150);
  assert.equal(new Set(bank.map((question) => question.id)).size, bank.length);
  assert.ok(modes.every((mode) => bank.length >= mode.count));
  assert.ok(bank.every((question) => new Set(question.options).size === 4));
  assert.deepEqual(
    Object.fromEntries(Object.keys(areas).map((area) => [area, bank.filter((question) => question.area === area).length])),
    { ambiente: 64, resposta: 55, caca: 31 },
  );
});

test('scores answers and identifies wrong question by area', () => {
  const list = questions.slice(0, 2);
  const result = scoreQuiz(list, [list[0].answer, (list[1].answer + 1) % 4], areas);
  assert.equal(result.correct, 1);
  assert.equal(result.percent, 50);
  assert.equal(result.wrong[0].question.id, list[1].id);
  assert.equal(result.byArea.ambiente.total, 2);
});

test('shuffling does not mutate or repeat questions', () => {
  const input = questions.slice(0, 4);
  const output = shuffled(input, () => 0);
  assert.equal(output.length, input.length);
  assert.deepEqual(new Set(output.map((question) => question.id)), new Set(input.map((question) => question.id)));
  assert.equal(input[0].id, questions[0].id);
});
