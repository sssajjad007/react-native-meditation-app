export interface IUserInfo {
  objectId: string;
  name: string;
  birthday: string;
  gender: "male" | "female" | null;
  email: string | null;
}
export interface IFetchGetUserById {
  userInfo: IUserInfo;
  error: string;
}
export interface IFetchUpdateProfile {}
