import { secureStorage } from "../storage";
import { toString } from "../toString";
import { serverUrl } from "./constant";
import { IRequest, IResponse } from "./types";

export function buildRequest() {
  async function getJwtToken() {
    return await secureStorage.retrieve("authorization");
  }
  return async function request(info: IRequest): Promise<IResponse> {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    try {
      const controller = new AbortController();
      const { method, endpoint, body } = info;
      timeoutId = setTimeout(() => controller.abort(), 8000);
      const response: Response = await fetch(`${serverUrl}${endpoint}`, {
        method,
        headers: {
          Authorization: (await getJwtToken()) || "no-token",
          "Content-type": "application/json",
          Accept: "application/json",
          "Accept-Encoding": "gzip",
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const status = response.status;
      const data = await response.json();
      const { ok } = response;
      return {
        success: ok,
        httpStatus: status,
        payload: ok ? data?.result : undefined,
        error: !ok ? data?.err : undefined,
      };
    } catch (error: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const errName = error?.name;
      if (errName === "AbortError") {
        return {
          success: false,
          httpStatus: 0,
          payload: undefined,
          error: "timeout",
        };
      }
      return {
        success: false,
        httpStatus: 0,
        payload: undefined,
        error: toString(error?.toString()),
      };
    }
  };
}
