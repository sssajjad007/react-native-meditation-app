import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Image, Linking } from "react-native";
import {
  Button,
  Container,
  THEME,
  Typography,
  version,
} from "../../../library";
import * as Analytics from "expo-firebase-analytics";
import { styles } from "./styles";
import Communications from "react-native-communications";
import { Scroller } from "../../../library/Scroller";
import { digitsEnToFa } from "@persian-tools/persian-tools";
export function AboutUs() {
  async function callEvent() {
    try {
      await Analytics.logEvent("  customer_service_call");
    } catch (error) {
      // console.log(error);
    }
  }
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Container headerTitle={"درباره ما"}>
      <Scroller>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/Logo.png")}
            style={styles.imageSize}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.bodyContainer}>
          <Typography
            mode={"mediumBody18"}
            style={{ color: THEME.COLORS.LABEL.SECONDARY, textAlign: "right" }}
          >
            {`دنج اپلیکیشنی برای سلامتی ذهن و بدن شماست. در شرایط زندگی امروزی پیدا کردن زمانی برای اینکه قدری تمرکز کنیم و کمتر در افکار غرق باشیم تبدیل شده به یه کار خیلی سخت. ما باور داریم خالی کردن ۱۰ دقیقه در روز برای مدیتیشن امکان‌پذیره. هدف ما در دنج اینه که این فرصت رو به بهترین شکل براتون ایجاد کنیم. در دنج از اپ‌های Calm، Waking Up و Headspace استفاده شده و ترجمه تمام مدیتیشن‌ها در تیم دنج انجام گرفته. برخی از جلسات هم توسط تیم دنج نوشته شده‌اند. با دنج لذت حضور رو تجربه کنید. `}
          </Typography>
        </View>
        <View style={styles.buttonContianer}>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"small"}
            onPress={() => {
              navigation.push("TermsScreen");
            }}
          >
            <Typography
              mode={"boldBody16"}
              style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
            >
              {"قوانین دنج"}
            </Typography>
          </Button>
          <Typography
            mode={"regularSub12"}
            style={{ color: THEME.COLORS.LABEL.TERTIARY, bottom: 12 }}
          >
            {`نسخه ${digitsEnToFa(version)}`}
          </Typography>
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={async () => {
              await callEvent();
              Linking.openURL("tel:02191006901");
              // Communications.phonecall("02191006901", false);
            }}
          >
            {"تماس با ما"}
          </Button>
        </View>
      </Scroller>
    </Container>
  );
}
