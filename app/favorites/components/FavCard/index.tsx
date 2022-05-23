import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { Caption, Paragraph, Tap, THEME, Typography } from "../../../library";
import { LikeBoldIcon } from "../../../library/Icon";
import { styles } from "./styles";
import { IFavCardProps } from "./types";

export function FavCard(props: IFavCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { description, title, onPress, url, objectId, unLikePress } = props;
  function onTouch() {
    if (onPress) {
      onPress(objectId, title, url);
    }
  }
  function onUnLikePress() {
    if (unLikePress) {
      unLikePress(objectId);
    }
  }
  return (
    <View style={styles.container}>
      <Tap onPress={onTouch}>
        <View style={styles.card}>
          {/* <View style={styles.iconContainer}>
            <View style={styles.icon} />
          </View> */}
          <View style={styles.bodyContainer}>
            <View style={styles.titleContainer}>
              <Typography
                mode={"mediumBody16"}
                style={{
                  color: THEME.COLORS.LABEL.PRIMARY,
                  textAlign: "right",
                }}
              >
                {title}
              </Typography>
            </View>
            {/* <View style={styles.descriptionContainer}>
              <Typography
                mode={"regularSub12"}
                style={{
                  textAlign: "right",
                  color: THEME.COLORS.LABEL.SECONDARY,
                }}
              >
                {description}
              </Typography>
            </View> */}
          </View>

          <View style={styles.favoritesContainer}>
            <LikeBoldIcon size={24} onPress={onUnLikePress} />
          </View>
        </View>
      </Tap>
    </View>
  );
}
