import React from "react";
import { styles } from "./styles";
import {
  Button,
  Container,
  PlusIcon,
  ShareIcon,
  THEME,
  Typography,
} from "../../../library";
import { IIosAddToHomeProps } from "../../types/components";
import { Image, View } from "react-native";
import { assets } from "../../assets";

export function IosAddToHome(props: IIosAddToHomeProps) {
  const { CloseModal } = props;
  return (
    <Container style={styles.container}>
      <Image
        source={assets.Logo}
        style={{ width: 100, height: 100, alignSelf: "center" }}
        resizeMode={"contain"}
      />
      <Typography
        mode={"boldSub12"}
        style={{ paddingTop: 16, textAlign: "center" }}
      >
        {"نسخه وب اپلیکیشن (PWA) دنج را به صفحه اصلی اضافه کنید."}
      </Typography>
      <Typography
        mode={"regularBody16"}
        style={{ paddingVertical: 16, textAlign: "center" }}
      >
        {
          "با این کار، می توانید برای همیشه و بدون نیاز به به بروزرسانی از خدمات دنج استفاده کنید."
        }
      </Typography>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row-reverse" }}>
          <Typography mode={"boldSub12"}>{`۱- در مرورگر سافاری روی دکمه`}</Typography>
          <Typography
            mode={"boldSub12"}
            style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
          >
            {" Share "}
          </Typography>
          <Typography mode={"boldSub12"}>
            {"در نوار پایین کلیک کنید."}
          </Typography>
        </View>
        <ShareIcon size={30} />
      </View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row-reverse" }}>
          <Typography mode={"boldSub12"}>{`۲- گزینه`}</Typography>
          <Typography
            mode={"boldSub12"}
            style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
          >
            {" Add to Home Screen "}
          </Typography>
          <Typography mode={"boldSub12"}>{"را فعال کنید."}</Typography>
        </View>
        <PlusIcon size={30} />
      </View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row-reverse" }}>
          <Typography mode={"boldSub12"}>{`۳- در قسمت بالا روی`}</Typography>
          <Typography
            mode={"boldSub12"}
            style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
          >
            {" Add "}
          </Typography>
          <Typography mode={"boldSub12"}>{"کلیک کنید."}</Typography>
        </View>
        <Typography
          mode={"boldBody16"}
          style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
        >
          {"Add"}
        </Typography>
      </View>
      <Button
        mode={"contained"}
        size={"big"}
        rippleColor={"lightGrey"}
        onPress={() => {
          CloseModal();
        }}
      >
        {"متوجه شدم!"}
      </Button>
    </Container>
  );
}
