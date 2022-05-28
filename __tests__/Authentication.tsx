import React from "react";
import renderer from "react-test-renderer";
import { Authentication } from "../app/authentication";

test("renders correctly", () => {
  const tree = renderer.create(<Authentication />).toJSON();
  expect(tree).toMatchSnapshot();
});
