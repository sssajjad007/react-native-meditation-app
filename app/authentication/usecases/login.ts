import { cleanPhoneNumber, fetchLogin } from "../adapters";
import { secureStorage, storage, newUserEvent } from "../../library";
export async function login(phoneNumber: string, genCode: string) {
  const phoneNumberClean = cleanPhoneNumber(phoneNumber);
  const { error, userId, userType, refreshToken, Authorization, isPremium } =
    await fetchLogin(phoneNumberClean, genCode);
  if (error) {
    return error;
  }
  if (userType === "NEW_USER") {
    newUserEvent();
  }
  storage.add("user_id", userId);
  storage.add("user_type", userType);
  storage.add("is_premium", isPremium);
  storage.add("shop_pop_up_shown", true);

  await Promise.all([
    secureStorage.add("refresh_token", refreshToken),
    secureStorage.add("authorization", Authorization),
  ]);

  return userType;
}
