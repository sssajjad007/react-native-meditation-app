import React from "react";
import { View, Platform } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Button,
  THEME,
  Typography,
  ArrowRightIcon,
  BuyIcon,
  toString,
} from "../../../library";

import { CarouselComponent } from "../../components/CarouselComponent";
import { TextComponent } from "../../components/TextComponent";

import { useShopLogic } from "./useShopLogic";
import { styles } from "./styles";
import { Scroller } from "../../../library/Scroller";

export function ShopScreen() {
  const {
    activeItem,
    dataLoaded,
    isUserPremium,
    onPurchasePress,
    skuList,
    onBackPress,
    setActiveItem,
    subscriptionDaysLeft,
  } = useShopLogic();
  // console.log({isUserPremium});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.header}>
          {/* <Button mode={"outlined"} rippleColor={"lightGrey"} size={"small"}>
            {"کد تخفیف"}
          </Button> */}
        </View>
        <View style={styles.header}>
          <Typography mode={"boldBody16"}>{"فروشگاه دنج"}</Typography>
        </View>
        <View style={[styles.header, { alignItems: "flex-end" }]}>
          <View style={styles.closeContainer}>
            <BorderlessButton onPress={onBackPress} rippleColor={"lightGrey"}>
              <ArrowRightIcon size={24} />
            </BorderlessButton>
          </View>
        </View>
      </View>
      <Scroller>
        <View style={styles.subscriptionContainer}>
          {isUserPremium ? (
            <View style={styles.dayLeftContainer}>
              <Typography
                mode={"boldSub12"}
                style={styles.dayLeft}
              >{`از اشتراک شما:  `}</Typography>
              <Typography
                mode={"boldBody18"}
                style={{ color: THEME.COLORS.LABEL.PRIMARY_ACCENT }}
              >
                {subscriptionDaysLeft}
              </Typography>
              <Typography
                mode={"regularSub12"}
                style={styles.dayLeft}
              >{`  روز باقی مانده `}</Typography>
            </View>
          ) : null}
          <Typography
            mode={"regularBody16"}
            style={{
              ...Platform.select({
                web: { marginBottom: 24 },
              }),
            }}
          >
            {"انواع اشتراک ها"}
          </Typography>
        </View>
        <View style={{ width: "100%" }}>
          <CarouselComponent
            dataLoaded={dataLoaded}
            data={skuList}
            setActiveItem={setActiveItem}
          />
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.textContainer}>
          <View style={styles.titlecontainer}>
            <View style={styles.shopIconContainer}>
              <BuyIcon size={20} />
            </View>
            <Typography mode={"mediumHeadline22"} style={styles.questionTitle}>
              {"چرا اشتراک بخرم؟"}
            </Typography>
          </View>
          <View style={styles.bodyContainer}>
            <TextComponent
              title={"دسترسی کامل به همه دوره های مدیتیشن"}
            ></TextComponent>
            <TextComponent title={"دسترسی کامل به همه درس ها"}></TextComponent>
            <TextComponent
              title={"دسترسی کامل به همه موسیقی ها"}
            ></TextComponent>
            <TextComponent title={"دسترسی کامل به دوره خواب"}></TextComponent>
          </View>
        </View>
      </Scroller>
      <View style={styles.buttonContainer}>
        {dataLoaded ? (
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={onPurchasePress}
          >
            {activeItem
              ? `خرید اشتراک ${toString(activeItem.name)}`
              : "خرید اشتراک"}
          </Button>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
