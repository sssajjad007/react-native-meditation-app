import React from "react";
import renderer from "react-test-renderer";
import { ShopScreen } from "../app/shop/screens/Shop";

test("renders correctly", () => {
  const tree = renderer.create(<ShopScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
