import { request, storage, toString } from "../../../library";
import { IFetchGetUserById } from "../../types";

export async function fetchGetUserById(): Promise<IFetchGetUserById> {
  const userId = storage.retrieve("user_id", "string");
  const { error, httpStatus, payload, success } = await request({
    endpoint: `/user/${userId}`,
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error" || error,
      isPremium: false,
      subscriptionValidUntil: -1,
    };
  }
  const SubscriptionDays = Math.ceil(
    (Number(payload?.SubscriptionValidUntil) - Date.now()) /
      (1000 * 60 * 60 * 24)
  );
  storage.add("avatar", toString(payload?.avatar));
  
  storage.add("user_id", toString(payload?.objectId));
  return {
    error: "",
    isPremium: Boolean(payload?.isPremium),
    subscriptionValidUntil: SubscriptionDays,
  };
}
