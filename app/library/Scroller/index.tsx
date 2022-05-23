import React from "react";
import { ScrollView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RTLView } from "./RTLView";
import { styles } from "./styles";
import { IScroller } from "./types";

export function Scroller(props: IScroller) {
  const { horizontal, rtl, keyboard, children, style, contentContainerStyle } = props;
  const isRtlHorizontal = horizontal && rtl;
  function renderItems() {
    if (!children) {
      return null;
    }
    if (Array.isArray(children)) {
      const items = [];
      if (isRtlHorizontal) {
        for (let index = 0; index < children.length; index++) {
          const item = children[index];
          const key = item?.key || `${index}`;
          items.push(<RTLView key={key}>{item}</RTLView>);
        }
      } else {
        for (let index = 0; index < children.length; index++) {
          const item = children[index];
          const key = item?.key || `${index}`;
          items.push(<View key={key}>{item}</View>);
        }
      }
      return items;
    }
    return children;
  }
  if (keyboard) {
    return (
      <KeyboardAwareScrollView
        {...props}
        style={[
          styles.container,
          isRtlHorizontal ? styles.rtlScrollView : undefined,
          style,
        ]}
        contentContainerStyle={
          [isRtlHorizontal === false ? styles.contentContainerVertical : undefined, contentContainerStyle]
        }
      >
        {renderItems()}
      </KeyboardAwareScrollView>
    );
  }
  return (
    <ScrollView
      {...props}
      style={[
        styles.container,
        isRtlHorizontal ? styles.rtlScrollView : undefined,
        style,
      ]}
      contentContainerStyle={
        [isRtlHorizontal === false ? styles.contentContainerVertical : undefined, contentContainerStyle]
      }
    >
      {renderItems()}
    </ScrollView>
  );
}
