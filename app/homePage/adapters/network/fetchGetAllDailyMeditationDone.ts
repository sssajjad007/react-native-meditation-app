import { request } from "../../../library";

export async function fetchGetAllDailyMeditationDone() {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/trackDone?trackType=d47763d0-d330-4eb1-bba0-69e1d233b94d",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error occured in fetchGetAllDailyMeditation",
      dailyMeditationDone: [],
    };
  }
  if (success && payload) {
    const dailyMeditationDone = Array.isArray(payload.userTracksDone)
      ? payload?.userTracksDone
      : [];
    return {
      dailyMeditationDone,
    };
  }

  return {
    dailyMeditationDone: [],
  };
}
