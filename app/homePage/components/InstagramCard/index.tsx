import { Image, Linking, View } from "react-native";
import React from "react";
import { styles } from "./styles";

import { ArrowLeftIcon, Touchable, Typography } from "../../../library";
import { instagram } from "../assets";
export function InstagramCardComponent() {
  return (
    <View style={styles.container}>
      <Image source={instagram} style={{ width: 30, height: 30 }} />
      <Typography mode={"mediumBody16"}>
        {"صفحه اینستاگرام دنج رو دنبال کنید."}
      </Typography>
      <ArrowLeftIcon size={30} />
      <Touchable
        rippleColor={"lightGrey"}
        onPress={
          () => Linking.openURL("https://www.instagram.com/denjapp/")
          // Communications.web("https://www.instagram.com/denjapp/")
        }
      />
    </View>
  );
}
