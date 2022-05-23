export interface ISku {
  objectId: string;
  name: string;
  price: number;
  sku: string;
  isFeatured: boolean;
  duration: number;
  deleted: boolean;
  disable: boolean;
  pricePerMonth: number;
}

export interface ICafeBazaarPayment {
  developerPayload: string;
  orderId: string
  packageName: string;
  productId: string;
  purchaseState: number;
  purchaseTime: string;
  purchaseToken: string;
}