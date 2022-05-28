import React from "react";
import renderer from "react-test-renderer";
import { TermsScreen } from "../app/terms/screens";

test("renders correctly", () => {
  const tree = renderer.create(<TermsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
