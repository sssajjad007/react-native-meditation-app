import React from "react";
import { View, Text } from "react-native";
import {
  Subheading,
  THEME,
  Title,
  Touchable,
  Typography,
} from "../../../library";
import { ExitIcon, SettingIcon } from "../../../library/Icon";
import { styles } from "./styles";
import { ITileProps } from "./types";

export function Tile(props: ITileProps) {
  const { title, icon, onPress, color, isLine } = props;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {color === "red" ? <ExitIcon size={24} /> : icon}
        <Typography
          mode={"mediumBody16"}
          style={[
            styles.toLeft,
            color ? { color: color } : { color: THEME.COLORS.LABEL.PRIMARY },
          ]}
        >
          {title}
        </Typography>
      </View>

      {isLine ? <View style={styles.line} /> : undefined}
      <Touchable rippleColor={"lightGrey"} onPress={onPress} />
    </View>
  );
}
