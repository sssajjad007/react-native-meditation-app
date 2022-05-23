import { digitsEnToFa } from "@persian-tools/persian-tools";
import React from "react";
import { View, Image } from "react-native";
import { THEME, Touchable, Typography } from "../../../library";
import { ArrowLeftIcon } from "../../../library/Icon";
import { ITileProps } from "../../types";
import { styles } from "./styles";

export function CategoryTile(props: ITileProps) {
  const { onPress, section, title, url } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: url }} style={styles.icon} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Typography mode={"boldBody16"} style={{ textAlign: "right" }}>
            {title}
          </Typography>
        </View>
        <View style={styles.sectionContainer}>
          <Typography
            mode={"regularSub12"}
            style={{ textAlign: "right", color: THEME.COLORS.LABEL.SECONDARY }}
          >
            {`${digitsEnToFa(section)} موسیقی`}
          </Typography>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        <ArrowLeftIcon size={24} />
      </View>
      <Touchable onPress={onPress} rippleColor={"grey"} />
    </View>
  );
}
