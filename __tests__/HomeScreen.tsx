import React from "react";
import renderer from "react-test-renderer";
import { HomeScreen } from "../app/homePage/screens/HomeScreen";

test("renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
