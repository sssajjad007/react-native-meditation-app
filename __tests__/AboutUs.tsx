import React from "react";
import renderer from "react-test-renderer";
import { AboutUs } from "../app/aboutUs/screens/AboutUs";

test("renders correctly", () => {
  const tree = renderer.create(<AboutUs />).toJSON();
  expect(tree).toMatchSnapshot();
});
