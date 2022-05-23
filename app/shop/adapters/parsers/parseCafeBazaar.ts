import { toString } from "../../../library";
import type { IPostCafeBazaarPaymentResult } from "../../types";

export function parseCafeBazaar(payload: any): IPostCafeBazaarPaymentResult {
  const subscriptionTime = parseInt(payload.SubscriptionValidUntil, 10);
  return {
    error: "",
    SubscriptionValidUntil: isNaN(subscriptionTime) ? 0 : subscriptionTime,
    isPremium: Boolean(payload.isPremium),
  };
}
