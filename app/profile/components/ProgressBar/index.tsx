import React from "react";
import { View, Text } from "react-native";
import { Caption, Paragraph, THEME, Title } from "../../../library";
import { IProgressProps } from "./types";
import { styles } from "./styles";
export function ProgressBar(props: IProgressProps) {
  const { leftPercent, style } = props;
  const leftStyle = {
    width: `${leftPercent}%`,
  };
  return (
    <View style={[styles.progressBar, style]}>
      <View style={[styles.progressLeft, leftStyle]}>
        {/* <Caption style={{ color: "white" }}>{`${leftPercent}%`}</Caption> */}
      </View>
    </View>
  );
}
