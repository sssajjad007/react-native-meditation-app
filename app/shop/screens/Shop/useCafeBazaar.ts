import type { IUseCafeBazaar } from "../../types"
export function useCafeBazaar(args: IUseCafeBazaar) {
  async function onCafeBazaarPurchase(sku: string) {}
  return { onCafeBazaarPurchase };
}
