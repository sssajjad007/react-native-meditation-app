import { toString } from "../../../library";
import { IFetchGetAllCourses } from "../../types";

export function parseAllCourses(payload: any): IFetchGetAllCourses {
  return {
    objectId: toString(payload?.objectId),
    title: toString(payload?.title),
    poster: toString(payload?.poster),
    description: toString(payload?.description),
    track: payload?.track,
  };
}
