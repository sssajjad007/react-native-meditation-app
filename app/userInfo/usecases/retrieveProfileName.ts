import { fetchGetUserById } from "../adapters/network/fetchGetUserById";
import { toJalaali } from "jalaali-js";
import { digitsEnToFa } from "@persian-tools/persian-tools";
export async function retrieveProfileName(userId: string) {
  const { error, userInfo } = await fetchGetUserById(userId);
  //   if (error) {
  //     return error;
  //   }
  const birthTimeStamp = Number(userInfo.birthday);
  let jBirth: string = "";
  if (birthTimeStamp) {
    const date = new Date(birthTimeStamp);
    const { jy, jm, jd } = toJalaali(new Date(birthTimeStamp));
    jBirth = `${digitsEnToFa(jy)}-${digitsEnToFa(jm)}-${digitsEnToFa(jd)}`;
  }
  userInfo.birthday = jBirth;

  return {
    userInfo,
  };
}
