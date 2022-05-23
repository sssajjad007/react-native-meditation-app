import { toString } from "../../../library";
import { IEmergencyMeditation } from "../../types";

export function parseEmergencyMeditation(payload: any): IEmergencyMeditation {
  const course: string[] = [];
  const length: number = Array.isArray(payload.track)
    ? payload.track.length
    : 0;
  for (let index = 0; index < length; index++) {
    const element = payload.track[index];
    course.push(toString(element));
  }

  return {
    objectId: toString(payload.objectId),
    title: toString(payload.title),
    description: toString(payload.description),
    poster: toString(payload.poster),
    course,
  };
}
