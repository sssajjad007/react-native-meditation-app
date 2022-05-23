import React from "react";
import { Text } from "react-native";

import { styleGen } from "./styles";

import type { ITypographyProps } from "./types";

export function Typography(props: ITypographyProps) {
  const { mode, children, style } = props;
  const styles = styleGen(mode);
  return (
    <Text {...props} style={[[styles.text, style]]}>
      {children}
    </Text>
  );
}
