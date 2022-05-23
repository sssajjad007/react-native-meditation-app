import { TextProps } from "react-native";

export type tTextProps = TextProps;

export type tTextMode =
  | "lightSub10"
  | "regularSub12"
  | "boldSub12"
  | "regularBody14"
  | "mediumBody14"
  | "boldBody14"
  | "regularBody16"
  | "mediumBody16"
  | "boldBody16"
  | "regularBody18"
  | "mediumBody18"
  | "boldBody18"
  | "regularSubhead20"
  | "mediumSubhead20"
  | "boldSubhead20"
  | "regularHeadline22"
  | "mediumHeadline22"
  | "boldHeadline22"
  | "regularTitle26"
  | "mediumTitle26"
  | "boldTitle26"
  | "regularTitle28"
  | "mediumTitle28"
  | "boldTitle28"
  | "mediumTitle32"
  | "boldTitle32"
  | "blackTitle32"
  | "MediumDisplay"
  | "BoldDisplay"
  | "BlackDisplay";
export interface ITypographyProps extends TextProps {
  mode: tTextMode;
}
