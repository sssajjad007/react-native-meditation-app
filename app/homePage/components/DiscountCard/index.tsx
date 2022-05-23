import { View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Button, Typography } from "../../../library";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
export function DiscountCardComponent() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.disCountContainer}>
        <View style={styles.disCountText}>
          <Typography mode={"boldHeadline22"} style={{ color: "#649EA1" }}>
            {"۵۰%"}
          </Typography>
          <Typography mode={"mediumBody18"} style={{ color: "#649EA1" }}>
            {" تخفیف"}
          </Typography>
        </View>
        <View style={styles.paddingRight}>
          <Typography mode={"regularBody14"} style={{ textAlign: "right" }}>
            {"برای خرید اشتراک یکساله"}
          </Typography>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"xSmall"}
          onPress={() => {
            navigation.push("ShopScreen");
          }}
        >
          {"مشاهده"}
        </Button>
      </View>
    </View>
  );
}
