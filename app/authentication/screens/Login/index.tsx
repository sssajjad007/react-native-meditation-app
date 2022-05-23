import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Image } from "react-native";
import { Button, Typography, THEME, Container } from "../../../library";
import { LogoImage } from "../../assets";
import { styles } from "./styles";

export function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Container style={styles.containerStyles}>
      <View style={{ flex: 1 }}>
        <Image style={styles.imageSize} source={LogoImage} />
      </View>
      <View style={{ flex: 0.5, justifyContent: "center" }}>
        <Typography
          mode={"mediumHeadline22"}
          style={{
            color: THEME.COLORS.LABEL.PRIMARY,
          }}
        >
          {"به دنج خوش اومدید !"}
        </Typography>
      </View>
      <View style={{ flex: 1 }}>
        <Typography
          mode={"mediumBody16"}
          style={{ color: THEME.COLORS.LABEL.SECONDARY }}
        >
          {"با دنج میتونید مدیتیشن رو یاد بگیرید و تمرین کنید."}
        </Typography>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"big"}
          onPress={() => {
            navigation.push("Auth");
          }}
        >
          {"ورود"}
        </Button>
      </View>
    </Container>
  );
}
