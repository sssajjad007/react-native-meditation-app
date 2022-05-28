import React from "react";
import renderer from "react-test-renderer";
import { MusicScreen } from "../app/music/screens/CategoryScreen";

test("renders correctly", () => {
  const tree = renderer.create(<MusicScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
