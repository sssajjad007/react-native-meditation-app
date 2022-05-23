import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { THEME } from "../theme";

import { ITouchableProps } from "./types";

export function Touchable(props: ITouchableProps) {
  const { rippleColor, onPress } = props;
  let color: string;
  switch (rippleColor) {
    case "lightGrey":
      color = THEME.COLORS.GREY.NAV;
      break;
    case "grey":
      color = THEME.COLORS.GREY.DISABLE;
      break;
    case "darkGrey":
      color = THEME.COLORS.GREY.ICON;
      break;
    default:
      throw new Error("color must be of valid types");
  }
  return (
    <RectButton
      onPress={onPress}
      rippleColor={color}
      style={StyleSheet.absoluteFill}
    />
  );
}
