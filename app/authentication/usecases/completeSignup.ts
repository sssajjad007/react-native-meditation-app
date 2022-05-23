import { fetchCompleteSignup } from "../adapters";
import { secureStorage, storage } from "../../library";
export async function completeSignup(name: string) {
  const { error, refreshToken, Authorization } = await fetchCompleteSignup(
    name
  );
  storage.add("name", name);

  if (error) {
    console.log(error);
  }
  await Promise.all([
    secureStorage.add("refresh_token", refreshToken),
    secureStorage.add("authorization", Authorization),
  ]);
}
