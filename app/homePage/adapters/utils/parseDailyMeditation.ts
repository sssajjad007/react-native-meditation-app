import { toString } from "../../../library";
import { IDailyMeditation } from "../../types";

export function parseDailyMeditaiton(payload: any): IDailyMeditation {
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
    description: toString(payload.description),
    poster: toString(payload.poster),
    track,
  };
}
