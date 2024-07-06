const { divide } = require("../src/functionsExceptions");

test("lanza una excepción cuando se divide por cero", () => {
  expect(() => divide(4, 0)).toThrow("No se puede dividir por cero");
});
