import { useBazaar } from "@cafebazaar/react-native-poolakey";
import { storage } from "../../../library";
import { createCafeBazaarPayment } from "../../usecases";

import type { IUseCafeBazaar } from "../../types";

export function useCafeBazaar(args: IUseCafeBazaar) {
  const { setSubscriptionDaysLeft, setUserPremium } = args;
  const bazaar = useBazaar(
    "/y58//example+/+=="
  );
  function SubscriptionValidUntilDate(SubscriptionValidUntil: number) {
    const SubscriptionDays = Math.ceil(
      (SubscriptionValidUntil - Date.now()) / (1000 * 60 * 60 * 24)
    );
    setSubscriptionDaysLeft(SubscriptionDays);
    console.log("SubscriptionDays", SubscriptionDays);
    if (SubscriptionDays > 0) {
      storage.add("subscription_valid_until", SubscriptionDays);
    }
    return;
  }
  async function onCafeBazaarPurchase(sku: string) {
    try {
      const {
        developerPayload,
        orderId,
        packageName,
        productId,
        purchaseState,
        purchaseTime,
        purchaseToken,
      } = await bazaar.subscribeProduct(sku);
      // const subscribed = await bazaar.getPurchasedProducts();
      // console.log({ subscribed });
      // console.log({
      //   developerPayload,
      //   orderId,
      //   packageName,
      //   productId,
      //   purchaseState,
      //   purchaseTime,
      //   purchaseToken,
      // });
      // TODO: use subscription valid until
      const { error, SubscriptionValidUntil, isPremium } =
        await createCafeBazaarPayment({
          developerPayload,
          orderId,
          packageName,
          productId,
          purchaseState,
          purchaseTime: purchaseTime.toISOString(),
          purchaseToken,
        });
      // console.log(error, isPremium);

      if (error) {
        return;
      }
      await bazaar.consumePurchase(purchaseToken);
      // console.log(error, isPremium);

      storage.add("is_premium", isPremium);

      SubscriptionValidUntilDate(SubscriptionValidUntil);

      setUserPremium(isPremium);
    } catch (error) {
      // FIXME : {"cafeBazaarOnPurchase": [Error: Failed to receive response from Bazaar]}
      // This error happens when user is not logged in with cafe bazaar
      console.log({ cafeBazaarOnPurchase: error });
    }
  }
  return { onCafeBazaarPurchase };
}
