const axios = require("axios");
const { getUser } = require("../src/apiService");

jest.mock("axios");

test("getUser obtiene el usuario con id 1", async () => {
  const user = { id: 1, name: "John Doe" };
  axios.get.mockResolvedValue({ data: user });

  const result = await getUser(1);
  expect(result).toEqual(user);
});
