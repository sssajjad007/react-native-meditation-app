import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
// import { useBazaar } from "@cafebazaar/react-native-poolakey";
import { useBackHandler } from "@react-native-community/hooks";
import * as Analytics from "expo-firebase-analytics";
import { storage, marketFlag } from "../../../library";

import { retrieveSku } from "../../usecases";

import { useCafeBazaar } from "./useCafeBazaar";
import type { ISku } from "../../types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function useShopLogic() {
  const route = useRoute();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isUserPremium, setUserPremium] = useState(false);
  const [activeItem, setActiveItem] = useState<ISku | undefined>(undefined);
  const [skuList, setSkuList] = useState<ISku[] | undefined>(undefined);
  const [subscriptionDaysLeft, setSubscriptionDaysLeft] = useState(-1);
  const { onCafeBazaarPurchase } = useCafeBazaar({
    setSubscriptionDaysLeft,
    setUserPremium,
  });

  async function retrieveSkuAsync() {
    // @ts-expect-error
    if (route.params?.status === "success") {
      storage.add("is_premium", true);
      setUserPremium(true);
    } else {
      const userPremium = storage.retrieve("is_premium", "boolean");
      // console.log("typeof", typeof userPremium);
      // console.log(userPremium);

      const SubscriptionDaysLeft = storage.retrieve(
        "subscription_valid_until",
        "number"
      );
      // console.log(SubscriptionDaysLeft);
      if (SubscriptionDaysLeft) {
        setSubscriptionDaysLeft(Number(SubscriptionDaysLeft));
      }
      if (userPremium) {
        setUserPremium(userPremium);
      }
    }

    const skus = await retrieveSku();
    if (typeof skus === "string") {
      // TODO: handle error here
      // console.log({ retrieveSkuError: skus });
      return;
    }
    setSkuList(skus);
    setActiveItem(skus[0]);
    setDataLoaded(true);
  }
  async function onSamanPurchase() {
    const userId = storage.retrieve("user_id", "string");
    if (activeItem) {
      const sku = activeItem["sku"];
      await skuEvent(sku);
      Linking.openURL(
        `https://denjapp.com/api/v1/indexPayment?sku=${sku}&user_id=${userId}&market=${marketFlag}`
      );
    }
  }
  async function onPurchasePress() {
    if (!activeItem) return;
    if (marketFlag === "CAFE_BAZAAR") {
      await onCafeBazaarPurchase(activeItem.sku);
    } else {
      await onSamanPurchase();
    }
  }
  async function closeEvent() {
    try {
      await Analytics.logEvent("store_button_click");
    } catch (error) {
      console.log("error", error);
    }
  }
  async function viewEvent() {
    try {
      await Analytics.logEvent("store_view");
    } catch (error) {
      console.log("error", error);
    }
  }
  async function skuEvent(sku: string) {
    try {
      await Analytics.logEvent(`${sku}_click`);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    viewEvent();
    retrieveSkuAsync();
    return () => {
      closeEvent().catch((err) => {
        // console.log("shop screen close event error");
      });
    };
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useBackHandler(() => {
    // @ts-expect-error
    if (route.params?.status) {
      navigation.replace("MyTabs");
      return true;
    }
    return false;
  });
  function onBackPress() {
    // @ts-expect-error
    if (route.params?.status) {
      navigation.replace("MyTabs");
      return;
    }
    navigation.goBack();
  }
  return {
    dataLoaded,
    isUserPremium,
    activeItem,
    setActiveItem,
    onPurchasePress,
    skuList,
    onBackPress,
    subscriptionDaysLeft,
  };
}
