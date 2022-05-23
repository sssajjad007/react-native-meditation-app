import React from "react";
import { Text } from "react-native";
import { material } from "react-native-typography";

import { styles } from "./styles";
import { tTextProps } from "./types";

export function Caption(props: tTextProps) {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.caption, styles.caption, style]}>
      {children}
    </Text>
  );
}
