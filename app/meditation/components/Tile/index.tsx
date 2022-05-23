import { digitsEnToFa } from "@persian-tools/persian-tools";
import React, { useMemo } from "react";
import { View, Text, Image } from "react-native";
import { THEME, Touchable, Typography } from "../../../library";
import { ArrowLeftIcon } from "../../../library/Icon";
import { ITileComponentProps } from "../../types";
import { styles } from "./styles";

export function TileComponent(props: ITileComponentProps) {
  const { poster, title, onPress, section } = props;
  const TileImage = useMemo(
    () => <Image source={{ uri: poster }} style={styles.imageSize} />,
    []
  );
  return (
    <View style={styles.tile}>
      <View style={styles.imageContainer}>{TileImage}</View>
      <View style={styles.textContainer}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Typography mode={"mediumBody16"} style={{ textAlign: "right" }}>
            {title}
          </Typography>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start", top: 8 }}>
          <Typography
            mode={"regularSub12"}
            style={{ color: THEME.COLORS.LABEL.SECONDARY, textAlign: "right" }}
          >
            {`${digitsEnToFa(section)} مدیتیشن `}
          </Typography>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        <ArrowLeftIcon size={24} />
      </View>
      <Touchable rippleColor={"lightGrey"} onPress={onPress} />
    </View>
  );
}
