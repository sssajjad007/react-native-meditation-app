import { request } from "../../../library";
import { IFetchGetUserById } from "../../types/adapters";
import { parseUserInfo } from "../utils";

export async function fetchGetUserById(
  userId: string
): Promise<IFetchGetUserById> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/user/${userId}`,
    method: "GET",
    body: undefined,
  });
  // console.log({payload, error, httpStatus, success});
  if (!success) {
    return {
      error: "some error",
      userInfo: {
        objectId: "",
        name: "",
        birthday: "",
        email: "",
        gender: null,
      },
    };
  }

  const userInfo = parseUserInfo(payload);
  return {
    error: "",
    userInfo,
  };
}
