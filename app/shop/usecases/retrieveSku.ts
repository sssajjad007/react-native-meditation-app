import { fetchGetAllSkus } from "../adapters";

import type { ISku } from "../types";

export async function retrieveSku() {
  const { error, skus } = await fetchGetAllSkus();
  if (error) {
    return error;
  }
  const sortedSku: ISku[] = [
    {
      duration: 0,
      isFeatured: true,
      objectId: "",
      price: 0,
      sku: "one_year",
      name: "یک سال",
      deleted: false,
      disable: false,
      pricePerMonth: 0,
    },
  ];
  for (let index = 0; index < skus.length; index++) {
    const sku = skus[index];
    if (sku.deleted || sku.disable) continue;
    if (sku.isFeatured) {
      sortedSku[0] = sku;
      continue;
    }
    sortedSku.push(sku);
  }
  return sortedSku;
}
