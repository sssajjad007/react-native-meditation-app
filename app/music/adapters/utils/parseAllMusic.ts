import { toString } from "../../../library";
import { IFetchGetAllMusic } from "../../types/adapters";

export function parseAllMusic(payload: any): IFetchGetAllMusic {
  return {
    objectId: toString(payload?.objectId),
    title: toString(payload?.title),
    poster: toString(payload?.poster),
    track: payload?.track,
  };
}
