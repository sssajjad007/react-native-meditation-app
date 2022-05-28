import React from "react";
import renderer from "react-test-renderer";
import { Favorites } from "../app/favorites/screens/Favorites";

test("renders correctly", () => {
  const tree = renderer.create(<Favorites />).toJSON();
  expect(tree).toMatchSnapshot();
});
