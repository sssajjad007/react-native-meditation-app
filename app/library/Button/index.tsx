import React from "react";
import { View } from "react-native";
import { Touchable } from "../Touchable";
import { Typography } from "../Typography";
import { Loading } from "./Loading";
// styles
import { styleGen } from "./styles";
// types
import { IButtonProps } from "./types";
export function Button(props: IButtonProps) {
  const {
    mode,
    bold,
    size,
    Icon,
    loading,
    dark,
    onPress,
    rippleColor,
    disabled,
    color,
    children,
    fullRadius,
  } = props;
  const { styles, iconStyle } = styleGen({
    dark,
    bold,
    disabled,
    mode,
    size,
    color,
    fullRadius,
  });
  function renderChild() {
    if(typeof children === "string") {
      return  <Typography
      mode={size === "small" ? "boldBody14" : "boldBody18"}
      numberOfLines={1}
      style={styles.text}
    >
      {children}
    </Typography>
    }
    return children;
  }
  return (
    <View style={[styles.container]}>
      {Icon && !loading && (
        <View style={styles.icon}>
          <Icon size={iconStyle.size} color={iconStyle.color} />
        </View>
      )}
      {loading && <Loading mode={mode} />}
      {renderChild()}
      {disabled || loading ? null : (
        <Touchable onPress={onPress} rippleColor={rippleColor} />
      )}
    </View>
  );
}
