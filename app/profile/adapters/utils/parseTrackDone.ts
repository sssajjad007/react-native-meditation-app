import { toString } from "../../../library";
import { ITrackDone } from "../../types";

export function parseTrackDone(payload: any): ITrackDone {
  const userMeditatedDays: string[] = [];
  const length: number = Array.isArray(payload.userMeditatedDays)
    ? payload.userMeditatedDays.length
    : 0;
  for (let index = 0; index < length; index++) {
    const element = payload.userMeditatedDays[index];
    userMeditatedDays.push(toString(element));
  }
  const userTracksDone: string[] = [];
  const length2: number = Array.isArray(payload.userTracksDone)
    ? payload.userTracksDone.length
    : 0;
  for (let index = 0; index < length2; index++) {
    const element = payload.userTracksDone[index].trackType;
    userTracksDone.push(toString(element));
  }

  return {
    userMeditatedDays,
    userMeditatedDuration: parseInt(payload.userMeditatedDuration),
    userTracksDoneLength: parseInt(payload.userTracksDone.length),
    userTracksDone,
  };
}
