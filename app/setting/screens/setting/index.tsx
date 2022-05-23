import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView } from "react-native";
import { Container } from "../../../library";
import { exit } from "../../../library/authEvent";
import * as Analytics from "expo-firebase-analytics";

import {
  FavBoldIcon,
  LogoIcon,
  ProfileIcon,
  ShopIcon,
} from "../../../library/Icon";
import { Tile } from "../../components/Tile";
import { exitUsecase } from "../../usecases/exit";
import { styles } from "./styles";
export function Setting() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // const { setValue } = useContext(AuthContext);
  async function shopEvent() {
    try {
      await Analytics.logEvent("store_button_click");
    } catch (error) {
      console.log(error);
    }
  }
  async function Exit() {
    await exitUsecase();
    exit();
  }

  // console.log("usecase: ", exit);
  return (
    <Container headerTitle={"تنظیمات"}>
      <ScrollView style={styles.container}>
        <Tile
          title={"اطلاعات شخصی"}
          onPress={() => {
            navigation.push("UserInfo");
          }}
          isLine={true}
          icon={<ProfileIcon size={24} />}
        />
        <Tile
          title={"فروشگاه دنج"}
          onPress={async () => {
            await shopEvent();
            navigation.push("ShopScreen");
          }}
          isLine={true}
          icon={<ShopIcon size={24} />}
        />
        <Tile
          title={"جلسات مورد علاقه شما"}
          onPress={() => {
            navigation.push("Favorites");
          }}
          isLine={true}
          icon={<FavBoldIcon size={24} />}
        />
        {/* <Tile
          title={"یادآوری"}
          onPress={() => {
            navigation.push("Reminder");
          }}
          isLine={true}
          icon={<NotificationIcon size={24} />}
        /> */}
        {/* <Tile title={"دعوت از دوستان"} onPress={() => {}} isLine={true} />
      <Tile title={"پرسش و پاسخ متداول"} onPress={() => {}} isLine={true} /> */}
        <Tile
          title={"درباره ما"}
          onPress={() => {
            navigation.push("AboutUs");
          }}
          isLine={true}
          icon={<LogoIcon size={24} />}
        />
        <Tile
          title={"خروج از حساب کاربری"}
          onPress={Exit}
          color={"red"}
          isLine={false}
        />
      </ScrollView>
    </Container>
  );
}
