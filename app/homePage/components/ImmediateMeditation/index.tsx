import React from "react";
import { View, Image } from "react-native";
import { Touchable, Typography } from "../../../library";
import { IImmeditateMeditationProps } from "../../types/components";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { styles } from "./styles";

export function ImmediateMeditation(props: IImmeditateMeditationProps) {
  const { duration, poster, title, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: poster }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Typography mode={"mediumBody14"}>{title}</Typography>
        <View style={styles.lineVertical} />
        <Typography mode={"lightSub10"}>{`${digitsEnToFa(
          Math.floor(duration / 60)
        )} دقیقه`}</Typography>
      </View>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
