import { request } from "../../../library";
import { ISku } from "../../types";
import { IFetchGetAllSku } from "../../types/adapters";
import { parseSku } from "../parsers";

export async function fetchGetAllSkus(): Promise<IFetchGetAllSku> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/getAllSku",
    method: "GET",
    body: undefined,
  });
  if (!success || !Array.isArray(payload)) {
    return {
      error: error || "error",
      skus: [],
    };
  }
  const skus: ISku[] = [];
  for (let index = 0; index < payload.length; index++) {
    const sku = payload[index];
    skus.push(parseSku(sku));
  }
  return {
    error: "",
    skus,
  };
}
