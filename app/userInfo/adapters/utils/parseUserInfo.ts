import { toString } from "../../../library";
import { IUserInfo } from "../../types";

export function parseUserInfo(payload: any): IUserInfo {
  const gender =
    payload.gender === "male" || "female" || null ? payload.gender : null;
  const email = payload.email === null ? null : toString(payload.email);
  return {
    objectId: toString(payload.objectId),
    name: toString(payload.name),
    birthday: toString(payload.birthday),
    email,
    gender,
  };
}
