export interface IFetchLoginResult {
  error: string;
  Authorization: string;
  userType: string;
  refreshToken: string;
  userId: string;
  isPremium: boolean;
}
export interface IFetchName {
  refreshToken: string;
  error: string;
  Authorization: string;
}

export interface ILogin {
  Authorization: string;
  refreshToken: string;
  userType: string;
  userId: string;
  isPremium: boolean;
}
