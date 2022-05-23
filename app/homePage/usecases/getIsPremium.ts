import { storage } from "../../library";
import { fetchGetUserById } from "../adapters/network";

export async function getIsPremium() {
  const { error, isPremium, subscriptionValidUntil } = await fetchGetUserById();
  if (error) {
    return error;
  }
  // console.log("subscriptionValidUntil==>", subscriptionValidUntil);
  storage.add("is_premium", isPremium);

  if (subscriptionValidUntil > 0) {
    storage.add("subscription_valid_until", subscriptionValidUntil);
  }
  return isPremium;
}
