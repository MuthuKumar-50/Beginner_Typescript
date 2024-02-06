import { expect, it } from "vitest";

// first method : Pass an Object Type Directly
// export const addTwoNumbers = (params: { first: number; second: number }) => {
//   return params.first + params.second;
// };

// second method : Create a Named Type
// type AddTwoNumbersArgs = {
//   first: number;
//   second: number;
// };
// export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
//   return params.first + params.second;
// };

// third Method : Create an Interface
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
