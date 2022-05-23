import { secureStorage, storage } from "../../library";

export async function exitUsecase() {
  await Promise.all([
    secureStorage.remove("refresh_token"),
    secureStorage.remove("authorization"),
  ]);
  storage.remove("user_id"),
    storage.remove("user_type"),
    storage.remove("name"),
    storage.remove("is_premium"),
    storage.remove("subscription_valid_until"),
    console.log("remove done");
}
