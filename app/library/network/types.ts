export interface IRequest {
  method: "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
  endpoint: string;
  body: Record<string, unknown> | undefined;
}

export interface IResponse {
  success: boolean;
  httpStatus: number;
  payload: Record<string, unknown> | undefined;
  error: string | undefined;
}

export type tFileType = "image";

export interface IUploadFile {
  path: string;
  type: tFileType;
  userId: string;
}

export interface IRefreshResponse {
  shouldLogout: boolean;
  refreshed: boolean;
}
