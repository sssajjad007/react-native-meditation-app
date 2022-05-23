import { Platform } from "react-native";
import * as Device from "expo-device";
import {
  request,
  toString,
  version as appVersion,
  marketFlag,
} from "../../../library";
import { IFetchLoginResult, ILogin } from "../../types";
import { parseLogin } from "../utils";
export async function fetchLogin(
  phoneNumber: string,
  genCode: string
): Promise<IFetchLoginResult> {
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/login",
    method: "POST",
    body: {
      phone_number: phoneNumber,
      gen_code: genCode,
      market: marketFlag,
      appVersion,
      userDeviceInfo: {
        isDevice: Device.isDevice,
        platform: Platform.OS,
        brand: toString(Device.brand),
        manufacturer: toString(Device.manufacturer),
        model: toString(Device.modelName),
        modelId: toString(Device.modelId),
        designName: toString(Device.designName),
        productName: toString(Device.productName),
        deviceYearClass: toString(Device.deviceYearClass),
        supportedCpuArch: toString(Device.supportedCpuArchitectures?.join(",")),
        os: toString(Device.osName),
        osVersion: toString(Device.osVersion),
        osBuildId: toString(Device.osBuildId),
        osInternalBuildId: toString(Device.osInternalBuildId),
        androidApiLevel: toString(Device.platformApiLevel),
        deviceName: toString(Device.deviceName),
      },
    },
  });
  if (!success) {
    return {
      error: "error",
      Authorization: "",
      refreshToken: "",
      userType: "",
      userId: "",
      isPremium: false,
    };
  }
  const user = Object(payload?.user);
  const info: ILogin = parseLogin(payload, user);
  return {
    error: "",
    Authorization: info.Authorization,
    refreshToken: info.refreshToken,
    userType: info.userType,
    userId: info.userId,
    isPremium: info.isPremium,
  };
}
