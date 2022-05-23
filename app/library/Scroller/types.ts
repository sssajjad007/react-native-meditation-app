import { ScrollViewProps, ViewProps } from "react-native";
import { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";

export interface IScroller
  extends ScrollViewProps,
    KeyboardAwareScrollViewProps {
  rtl?: boolean;
  keyboard?: boolean;
}


export interface IRTLView extends ViewProps {}