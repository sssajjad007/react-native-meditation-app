import { postCafeBazaarPayment } from "../adapters";

import type { ICafeBazaarPayment } from "../types";

export async function createCafeBazaarPayment(payment: ICafeBazaarPayment) {
  return await postCafeBazaarPayment(payment);
}
