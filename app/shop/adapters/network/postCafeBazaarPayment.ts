import { request } from "../../../library";
import { parseCafeBazaar } from "../parsers";
import type {
  IPostCafeBazaarPayment,
  IPostCafeBazaarPaymentResult,
} from "../../types";

export async function postCafeBazaarPayment(
  payment: IPostCafeBazaarPayment
): Promise<IPostCafeBazaarPaymentResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/cafeBazaarPayment",
    method: "POST",
    body: Object(payment),
  });
  if (!success) {
    return {
      error: error || "",
      SubscriptionValidUntil: 0,
      isPremium: false,
    };
  }
  return parseCafeBazaar(payload);
}
