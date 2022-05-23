import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { Subheading, THEME, Touchable, Typography } from "../../../library";
import { LockIcon, PlayIconIcon } from "../../../library/Icon";
import { IMusicCardComponentProps } from "../../types";
import { styles } from "./styles";
export function MusicCardComponent(props: IMusicCardComponentProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { title, onPress, coursePremium } = props;
  return coursePremium ? (
    <View style={styles.containerLocked}>
      <View style={styles.titleContainer}>
        <Typography mode={"mediumBody16"}>{title}</Typography>
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
      </View>
      <View style={styles.iconContainer}>
        <PlayIconIcon size={32} />
      </View>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
