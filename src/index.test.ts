import { ChCo, sum } from "./index";

test("Dummy unit test", () => {
  const actual = sum(1, 2);
  expect(actual).toBe(3);
});



test("Dummy unit2 test", () => {
  var holder = ChCo.formatString('----');
  expect(holder).not.toBeNull();
});

test("Dummy unit22 test", () => {
  var holder = ChCo.formatString('');
  expect(holder).not.toBeNull();
});


test("Dummy unit22 test", () => {
  var holder = ChCo.formatString('');
  expect(holder).toBeNull();
});