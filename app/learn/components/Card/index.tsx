import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image } from "react-native";
import { Caption, Subheading, Touchable, Typography } from "../../../library";
import { LockIcon, PauseIcon, PlayIconIcon } from "../../../library/Icon";
import { ICardProps } from "../../types/components";
import { styles } from "./styles";

export function Card(props: ICardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { objectId, session, title, onPress, url, courseId, coursePremium } =
    props;
  function onTouch() {
    if (onPress) {
      onPress(objectId, title, url, courseId);
    }
  }
  return coursePremium ? (
    <View style={styles.tileLocked}>
      <View style={styles.detailsContainer}>
        <Subheading>{title}</Subheading>
        <Typography mode={"regularSub12"} style={styles.bottom}>
          {session}
        </Typography>
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
    <View style={styles.tiles}>
      <View style={styles.detailsContainer}>
        <Subheading>{title}</Subheading>
        <Typography mode={"regularSub12"} style={styles.bottom}>
          {session}
        </Typography>
      </View>
      <View style={styles.iconContainer}>
        <PlayIconIcon size={40} />
      </View>
      <Touchable onPress={onTouch} rippleColor={"lightGrey"} />
    </View>
  );
}
