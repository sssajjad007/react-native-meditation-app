import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { IRTLView } from "./types";
export function RTLView(props: IRTLView) {
  const { children } = props;
  return (
    <View {...props} style={styles.rtlView}>
      {children}
    </View>
  );
}
