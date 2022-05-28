import React from "react";
import renderer from "react-test-renderer";
import { HomeScreen } from "../app/homePage/screens/HomeScreen";
import { MeditationCourse } from "../app/meditation/screens/MeditationCourse";

test("renders correctly", () => {
  const tree = renderer.create(<MeditationCourse />).toJSON();
  expect(tree).toMatchSnapshot();
});
