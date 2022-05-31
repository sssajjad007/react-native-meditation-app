import { ReactChild, ReactChildren, ReactNode } from "react";

export interface ITapProps {
  children: ReactNode;
  onPress?: () => void;
  enabled?: boolean;
}
