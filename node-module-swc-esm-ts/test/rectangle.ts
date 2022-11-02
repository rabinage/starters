/* eslint-disable no-console */
import { jest } from "@jest/globals";
import Rectangle from "../src/index.js";

console.log = jest.fn();

const square = new Rectangle(10, 10);

test("init error", () => {
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-new
    new Rectangle();
  }).toThrow("Rectangle height and width must be an integer.");
});

test("measure", () => {
  expect(square.area).toBe(100);
});

test("print help", () => {
  Rectangle.help();
  expect(console.log).toBeCalledWith(
    "Instantiate a rectangle: 'new Rectangle(height, width)'"
  );
});
