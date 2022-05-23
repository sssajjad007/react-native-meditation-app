import React from "react";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

import { ITapProps } from "./types";

export function Tap(props: ITapProps) {
  const { children, onPress, enabled } = props;
  function onTapPress(event: TapGestureHandlerGestureEvent) {
    const { state } = event.nativeEvent;
    if (onPress && state === 4) {
      onPress();
    }
  }
  return (
    <TapGestureHandler onHandlerStateChange={onTapPress} enabled={enabled}>
      {children}
    </TapGestureHandler>
  );
}
