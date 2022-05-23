import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
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
    <TouchableOpacity
      onPress={onPress}
    //   rippleColor={color}
      style={StyleSheet.absoluteFill}
    />
  );
}
