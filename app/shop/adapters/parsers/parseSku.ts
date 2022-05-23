import { toString } from "../../../library";
import { ISku } from "../../types";

export function parseSku(payload: any): ISku {
  const price = Number(payload.price);
  const duration = Number(payload.duration);
  const pricePerMonth = Number(payload.pricePerMonth);
  return {
    objectId: toString(payload.objectId),
    name: toString(payload.name),
    price: isNaN(price) ? 0 : price,
    sku: toString(payload.sku),
    duration: isNaN(duration) ? 0 : duration,
    deleted: Boolean(payload.deleted),
    disable: Boolean(payload.disable),
    isFeatured: Boolean(payload.isFeatured),
    pricePerMonth: isNaN(pricePerMonth) ? 0 : pricePerMonth,
  };
}
