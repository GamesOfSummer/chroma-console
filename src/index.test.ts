// import { sum } from "./index";

const sum = require('./index');

test("Dummy unit test", () => {
  const actual = sum(1, 2);
  expect(actual).toBe(3);
});
