import type { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  MeditationCourse: {
    title: string;
    track: string[];
    poster: string;
    description: string;
    objectId: string;
  };
};
export type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  "MeditationCourse"
>;

export interface ITrackProp {
  title: string;
  objectId: string;
  duration: number;
  url: string;
}
