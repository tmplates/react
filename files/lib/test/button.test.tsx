import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../src/Button";

test("button display slot", () => {
  const button = renderer.create(<Button>123</Button>);
  const result = button.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
});
