import { ReactChild, ReactChildren } from "react";

export interface ITapProps {
  children: ReactChild | ReactChildren;
  onPress?: () => void;
  enabled?: boolean;
}
