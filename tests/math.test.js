const { soma, subtracao, multiplicacao, divisao } = require("../src/math");

test("soma de 2 + 3 = 5", () => {
  expect(soma(2, 3)).toBe(5);
});

test("subtração de 5 - 2 = 3", () => {
  expect(subtracao(5, 2)).toBe(3);
});

test("multiplicação de 4 * 3 = 12", () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test("divisão de 10 / 2 = 5", () => {
  expect(divisao(10, 2)).toBe(5);
});

test("divisão por zero deve lançar erro", () => {
  expect(() => divisao(10, 0)).toThrow("Divisão por zero não permitida");
});
