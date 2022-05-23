import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { Touchable, Typography } from "../../../library";
import { LockIcon, PlayIconIcon } from "../../../library/Icon";
import { IMeditationCardProps } from "../../types";
import { styles } from "./styles";

export function MeditationCardComponent(props: IMeditationCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { title, onPress, duration, coursePremium } = props;
  function durationToMin() {
    const minutes = Math.floor(duration / 60);
    return `${digitsEnToFa(minutes)} دقیقه`;
  }
  return coursePremium ? (
    <View style={styles.containerLocked}>
      <View style={styles.titleContainer}>
        <Typography mode={"mediumBody16"}>{title}</Typography>
        <Typography mode={"regularSub12"}>{durationToMin()}</Typography>
      </View>
      <View style={styles.iconContainer}>
        <LockIcon size={32} />
      </View>
      <Touchable
        onPress={() => {
          navigation.push("ShopScreen");
        }}
        rippleColor={"lightGrey"}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography mode={"mediumBody16"}>{title}</Typography>
        <Typography mode={"regularSub12"}>{durationToMin()}</Typography>
      </View>
      <View style={styles.iconContainer}>
        <PlayIconIcon size={40} />
      </View>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
