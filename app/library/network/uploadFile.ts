import { uploadAsync, FileSystemUploadType } from "expo-file-system";
import { Platform } from "react-native";
import { secureStorage } from "../storage";
import { serverUrl } from "./constant";
import { IResponse, IUploadFile, tFileType } from "./types";

function endpointGen(type: tFileType, userId: string) {
  switch (type) {
    case "image":
      return `${serverUrl}/avatar/${userId}`;
    default:
      return "no where";
  }
}

export function buildUploadFile() {
  async function getJwtToken() {
    return await secureStorage.retrieve("authorization");
  }
  const isWeb = Platform.OS === "web";
  return async function uploadFile(info: IUploadFile): Promise<IResponse> {
    const { path, type, userId } = info;
    const endPoint = endpointGen(type, userId);
    try {
      const token = await getJwtToken();
      if(isWeb) {
        const form = new FormData();
        form.append("avatar", await (await fetch(path)).blob());
        const response = await fetch(endPoint, {
          method: "PUT",
          headers: {
            Authorization: `${token}`,
            // "Content-type": "multipart/form-data",
            Accept: "application/json",
          },
          body: form,
        })
        if(!response.ok) {
          return {
            success: false,
            error: "",
            httpStatus: 0,
            payload: {},
          };
        }
        const data = await response.json();
        return {
          success: response.ok,
          error: data.error,
          httpStatus: response.status,
          payload: data.result,
        };
       }
      const { body, status } = await uploadAsync(
        endPoint,
        path,
        {
          fieldName: "avatar",
          httpMethod: "PUT",
          uploadType: FileSystemUploadType.MULTIPART,
          headers: {
            Authorization: token || "no-token",
            "Content-type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      const success = status >= 200 && status <= 299;
      const data = JSON.parse(body);
      return {
        success,
        error: success ? "" : data.error,
        httpStatus: status,
        payload: success ? data.result : "",
      };
    } catch (error) {
      return {
        success: false,
        error: "",
        httpStatus: 0,
        payload: {},
      };
    }
  };
}
