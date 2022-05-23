import { toString } from "../../../library";
import { ILogin } from "../../types";

export function parseLogin(payload: any, user: any): ILogin {
  const isPremium = Boolean(payload?.isPremium);
  return {
    Authorization: toString(payload?.Authorization),
    refreshToken: toString(payload?.refreshToken),
    userType: toString(payload?.userType),
    userId: toString(user?.userId),
    isPremium,
  };
}
