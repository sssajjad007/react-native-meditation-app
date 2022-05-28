import React from "react";
import renderer from "react-test-renderer";
import { Setting } from "../app/setting/screens/setting";

test("renders correctly", () => {
  const tree = renderer.create(<Setting />).toJSON();
  expect(tree).toMatchSnapshot();
});
