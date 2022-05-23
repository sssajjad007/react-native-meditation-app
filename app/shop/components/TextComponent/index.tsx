import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Paragraph, THEME, Typography } from "../../../library";
import { Platform, View } from "react-native";
import { styles } from "./styles";
import { ITextProps } from "../../types/components";
import { CheckIcon } from "../../../library/Icon";

export function TextComponent(props: ITextProps) {
  const { title } = props;
  return (
    <View style={styles.containerComponent}>
      <CheckIcon size={14} />
      <Typography
        mode={"mediumBody14"}
        style={{
          ...Platform.select({
            native: {
              left: widthPercentageToDP(3),
            },
            web: {
              paddingRight: widthPercentageToDP(3),
            },
          }),
          color: THEME.COLORS.LABEL.PRIMARY,
        }}
      >
        {title}
      </Typography>
    </View>
  );
}
