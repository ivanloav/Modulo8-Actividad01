const {
  isUpperCase,
  isLowerCase,
  longitud,
  suma,
  elementoEnArray,
} = require("../src/functions");

test("verifica si una cadena está en mayúsculas", () => {
  expect(isUpperCase("HELLO")).toBe(true);
  expect(isUpperCase("Hello")).toBe(false);
});

test("verifica si una cadena está en minúsculas", () => {
  expect(isLowerCase("hello")).toBe(true);
  expect(isLowerCase("Hello")).toBe(false);
});

test("verifica la longitud de una cadena", () => {
  expect(longitud("Hola")).toBe(4);
  expect(longitud("")).toBe(0);
});

test("suma dos números correctamente", () => {
  expect(suma(1, 2)).toBe(3);
  expect(suma(-1, 1)).toBe(0);
});

test("verifica si un elemento está en un array", () => {
  expect(elementoEnArray([1, 2, 3], 2)).toBe(true);
  expect(elementoEnArray([1, 2, 3], 4)).toBe(false);
});

test("verifica condiciones con toBeGreaterThan y toBeLessThanOrEqual", () => {
  expect(suma(5, 3)).toBeGreaterThan(7);
  expect(suma(2, 2)).toBeLessThanOrEqual(4);
});

test("verifica si una cadena coincide con una expresión regular usando toMatch", () => {
  expect("jest@testing.com").toMatch(/@\w+\.\w+/);
});

test("verifica si un array contiene un elemento usando toContain", () => {
  expect(["apple", "banana", "grape"]).toContain("banana");
});

test("verifica la longitud de un array usando toHaveLength", () => {
  expect([1, 2, 3, 4]).toHaveLength(4);
});

test("verifica si un valor es nulo usando toBeNull", () => {
  const valorNulo = null;
  expect(valorNulo).toBeNull();
});

test("verifica si un valor es indefinido usando toBeUndefined", () => {
  let valorIndefinido;
  expect(valorIndefinido).toBeUndefined();
});
