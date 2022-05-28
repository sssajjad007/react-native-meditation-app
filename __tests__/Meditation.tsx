import React from "react";
import renderer from "react-test-renderer";
import { Meditation } from "../app/meditation/screens/MeditationScreen";

test("renders correctly", () => {
  const tree = renderer.create(<Meditation />).toJSON();
  expect(tree).toMatchSnapshot();
});
