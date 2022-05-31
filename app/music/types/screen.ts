import type { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  MusicCourse: {
    title: string;
    track: string[];
    poster: string;
  };
};
export type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  "MusicCourse"
>;

export interface IMusicProp {
  title: string;
  id: string;
  duration: number;
  url: string;
}
export interface IAllMusicProp {
  title: string;
  objectId: string;
  poster: string;
  track: string[];
}
