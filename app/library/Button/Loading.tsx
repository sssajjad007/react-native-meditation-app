import React from "react";
import { ActivityIndicator } from "react-native";

import { activityStyleGen } from "./styles";

// types
import { IActivityProps } from "./types";

export function Loading(props: IActivityProps) {
  const { mode } = props;
  const { activityColor, styles } = activityStyleGen(mode);
  return (
    <ActivityIndicator
      style={styles.container}
      size={"small"}
      color={activityColor}
    />
  );
}

