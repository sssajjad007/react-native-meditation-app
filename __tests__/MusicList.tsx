import React from "react";
import renderer from "react-test-renderer";
import { MusicList } from "../app/music/screens/MusicListScreen";

test("renders correctly", () => {
  const tree = renderer.create(<MusicList />).toJSON();
  expect(tree).toMatchSnapshot();
});
