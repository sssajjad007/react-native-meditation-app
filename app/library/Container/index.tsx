import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "./Header";

import { styles } from "./styles";

import type { IContainerProps } from "./types";

export function Container(props: IContainerProps) {
  const { style, children, headerTitle, backgroundColor } = props;
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <Header {...props} />
      <View
        {...props}
        style={[
          styles.container,
          backgroundColor ? { backgroundColor } : undefined,
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
