import { useBazaar } from "@cafebazaar/react-native-poolakey";
import { storage } from "../../../library";
import { createCafeBazaarPayment } from "../../usecases";

import type { IUseCafeBazaar } from "../../types";

export function useCafeBazaar(args: IUseCafeBazaar) {
  const { setSubscriptionDaysLeft, setUserPremium } = args;
  const bazaar = useBazaar(
    "MIHNMA0GCSqGSIb3DQEBAQUAA4G7ADCBtwKBrwDQz15/y58/rsYeQFCUz52x6sKl7rvJOMdRgMOt01RTVtca1ZcveT5kXamMQxwUXjt7o/bPpCJXD4YMIf88Sp9QaiZjTPtFvQxViLvS+zX7tM0Gd3oFuriaiCTn/0URxpD01TysASKOGKNevbE9qR9iM6V7mhEDR1e8yg9jn9+3blRMBuTCjSINRBzpQGSjWnaf63uIx61pFxS1vHl5uKn5kgkgu4IBzf9FkmwiqgECAwEAAQ=="
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
