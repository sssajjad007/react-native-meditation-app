import { ReactElement } from "react";
import type { ViewProps } from "react-native";

export interface IHeaderProps {
  headerTitle?: string;
  headerLeft?: () => ReactElement;
  headerTitleColor?: string;
  backgroundColor?: string;
}

export interface IContainerProps extends ViewProps, IHeaderProps {}
