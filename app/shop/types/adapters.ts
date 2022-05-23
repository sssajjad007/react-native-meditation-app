import { ISku, ICafeBazaarPayment } from "./entities";

export interface IFetchGetAllSku {
  error: string;
  skus: ISku[];
}
export interface IFetchPayment {
  error: string;
  url: any;
}

export interface IPostCafeBazaarPayment extends ICafeBazaarPayment {}

export interface IPostCafeBazaarPaymentResult {
  error: string;
  isPremium: boolean;
  SubscriptionValidUntil: number;
}
