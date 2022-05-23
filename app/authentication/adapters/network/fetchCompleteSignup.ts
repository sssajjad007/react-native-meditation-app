import { request, toString } from "../../../library";
import { IFetchName } from "../../types";

export async function fetchCompleteSignup(name: string): Promise<IFetchName> {
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/completeSignup",
    method: "PUT",
    body: { name: name },
  });
  if (!success) {
    return {
      error: "some error",
      refreshToken: "",
      Authorization: "",
    };
  }
  return {
    error: "",
    refreshToken: toString(payload?.refreshToken),
    Authorization: toString(payload?.Authorization),
  };
}
