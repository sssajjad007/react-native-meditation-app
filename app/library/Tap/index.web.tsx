import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
// import {
//   TapGestureHandler,
//   TapGestureHandlerGestureEvent,
// } from "react-native-gesture-handler";

import { ITapProps } from "./types";

export function Tap(props: ITapProps) {
  const { children, onPress, enabled } = props;
  function onTapPress() {
    // const { state } = event.nativeEvent;
    if (onPress) {
      onPress();
    }
  }
  return (
    <TouchableWithoutFeedback onPress={onTapPress}>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
}
