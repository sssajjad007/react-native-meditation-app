import React from "react";
import renderer from "react-test-renderer";
import { StartMeditation } from "../app/onBoarding/screens/StartMeditationScreen";

test("renders correctly", () => {
  const tree = renderer.create(<StartMeditation />).toJSON();
  expect(tree).toMatchSnapshot();
});
