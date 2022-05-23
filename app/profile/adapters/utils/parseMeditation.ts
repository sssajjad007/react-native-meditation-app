import { toString } from "../../../library";
import { ICourse } from "../../types";

export function parseMeditations(payload: any): ICourse {
  const track: string[] = [];
  const length: number = Array.isArray(payload.track)
    ? payload.track.length
    : 0;
  for (let index = 0; index < length; index++) {
    const element = payload.track[index];
    track.push(toString(element));
  }

  return {
    objectId: toString(payload.objectId),
    title: toString(payload.title),
    poster: toString(payload.poster),
    track,
  };
}
