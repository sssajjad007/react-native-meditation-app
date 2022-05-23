import { request } from "../../../library";
import { ITrackDone } from "../../types";
import { parseTrackDone } from "../utils";

export async function fetchGetTrackDone(): Promise<ITrackDone> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/trackDone",
    method: "GET",
    body: undefined,
  });
  if (!payload || error) {
    return {
      error: "some error",
      userMeditatedDuration: 0,
      userMeditatedDays: [],
      userTracksDoneLength: 0,
      userTracksDone: [],
    };
  }
  const {
    userMeditatedDays,
    userMeditatedDuration,
    userTracksDone,
    userTracksDoneLength,
  } = parseTrackDone(payload);
  return {
    userMeditatedDuration,
    userMeditatedDays,
    userTracksDoneLength,
    userTracksDone,
  };
}
