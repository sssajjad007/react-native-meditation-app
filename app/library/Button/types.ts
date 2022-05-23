import { ReactChild, ReactElement } from "react";

export type tMode = "text" | "outlined" | "contained";

interface IIconProps {
  color: string;
  size: number;
}

export type tSize = "small" | "xSmall" | "medium" | "xMedium" | "big";

export interface IButtonProps {
  mode: tMode;
  bold?: boolean;
  size: tSize;
  dark?: boolean;
  loading?: boolean;
  Icon?: (props: IIconProps) => ReactElement;
  onPress?: () => void;
  rippleColor: "lightGrey" | "grey" | "darkGrey";
  disabled?: boolean;
  children: string | ReactChild;
  color?: string;
  fullRadius?: boolean;
}

export interface IActivityProps {
  mode: tMode;
}

export interface IButtonStyles {
  mode: tMode;
  bold?: boolean;
  size: tSize;
  dark?: boolean;
  disabled?: boolean;
  color?: string;
  fullRadius?: boolean;
}
