import { secureStorage } from "../storage";
import { toString } from "../toString";
import { serverUrl } from "./constant";

import type { IRefreshResponse } from "./types";

export async function refresh(): Promise<IRefreshResponse> {
  const refreshToken = await secureStorage.retrieve("refresh_token");
  if (!refreshToken) {
    // console.log("refresh not defined");
    return {
      refreshed: false,
      shouldLogout: true,
    };
  }
  try {
    const refreshResponse = await fetch(
      `${serverUrl}/authentication/refresh_token`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: refreshToken,
        },
      }
    );
    if (refreshResponse.status === 403) {
      // console.log("api error. status code:", refreshResponse.status);
      return {
        refreshed: false,
        shouldLogout: true,
      };
    }
    const refreshData = await refreshResponse.json();
    // console.log({refreshData});
    const token = toString(refreshData?.result?.Authorization);
    const refresh = toString(refreshData?.result?.refreshToken);
    if (!token || !refresh) {
      // console.log("refresh or token note defined", {token, refresh});
      return {
        refreshed: false,
        shouldLogout: false,
      };
    }
    try {
      await secureStorage.add("authorization", token);
      await secureStorage.add("refresh_token", refresh);
    } catch (error) {
      // console.log("add to secure storage error", error);
      return {
        refreshed: false,
        shouldLogout: false,
      };
    }
  } catch (error) {
    // console.log("refresh token request error ", error);
    return {
      refreshed: false,
      shouldLogout: false,
    };
  }
  return {
    refreshed: true,
    shouldLogout: false,
  };
}
