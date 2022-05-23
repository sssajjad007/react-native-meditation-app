import { ReactElement } from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
} from "react-native";

export type tInputMode = "outlined" | "flat" | "with-label" | "raw";
export interface IInputProps extends TextInputProps {
  title: string;
  mode: tInputMode;
  errors?: string[];
  clearButton?: boolean;
  limit?: number;
  LeftIcon?: () => ReactElement
}

export interface IInputStyleGen {
  mode: tInputMode;
  focused: boolean;
  value: string | undefined;
  multiline: boolean | undefined;
  numberOfLines: number | undefined;
  inputHeightState: number;
  hasError: boolean;
  limit: number | undefined;
  style: StyleProp<TextStyle>;
}

export type tOnContentSize =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
export type tNativeEvent = NativeSyntheticEvent<TextInputFocusEventData>;