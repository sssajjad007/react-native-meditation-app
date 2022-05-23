import React from "react";
import { Text } from "react-native";
import { material } from "react-native-typography";

import { styles } from "./styles";
import { tTextProps } from "./types";

export function Headline(props: tTextProps) {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.headline, styles.headline, style]}>
      {children}
    </Text>
  );
}
