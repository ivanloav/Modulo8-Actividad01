const { fetchData, fetchPromiseData } = require("../src/functionsAsync");

test("fetchData llama al callback con los datos", (done) => {
  function callback(data) {
    expect(data).toBe("datos");
    done();
  }

  fetchData(callback);
});

test("fetchPromiseData resuelve con los datos", async () => {
  await expect(fetchPromiseData()).resolves.toBe("datos");
});
