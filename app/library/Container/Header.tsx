import React from "react";
import { Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Typography } from "../Typography";
import { ArrowRightIcon } from "../Icon";

import { headerStyles } from "./styles";
import type { IHeaderProps } from "./types";

export function Header(props: IHeaderProps) {
  const { headerTitle, backgroundColor, headerLeft, headerTitleColor } = props;
  if (!headerTitle) {
    return null;
  }
  const navigator = useNavigation();
  return (
    <View
      style={[
        headerStyles.header,
        backgroundColor ? { backgroundColor } : undefined,
      ]}
    >
      <BorderlessButton
        onPress={navigator.goBack}
        rippleColor={"rgba(53,53,53,0.4)"}
        style={{
          paddingBottom: 4,
          ...Platform.select({ web: { paddingRight: 24 } }),
        }}
        hitSlop={{ horizontal: 10, vertical: 10 }}
        borderless
      >
        <ArrowRightIcon size={24} />
      </BorderlessButton>
      <Typography
        mode={"boldBody16"}
        style={[
          headerStyles.title,
          headerTitleColor ? { color: headerTitleColor } : undefined,
        ]}
      >
        {headerTitle}
      </Typography>
    </View>
  );
}
