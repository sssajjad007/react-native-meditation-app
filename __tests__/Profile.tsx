import React from "react";
import renderer from "react-test-renderer";
import { Profile } from "../app/profile/screens/Profile";

test("renders correctly", () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});
