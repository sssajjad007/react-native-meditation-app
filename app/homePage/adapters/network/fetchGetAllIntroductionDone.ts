import { request } from "../../../library";

export async function fetchGetAllIntroductionDone() {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/trackDone?trackType=6f0c1701-205d-482b-93ad-740c9d0a61ec",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error occured in fetchGetAllDailyMeditation",
      IntroductionDone: [],
    };
  }

  if (success && payload) {
    const IntroductionDone = Array.isArray(payload?.userTracksDone)
      ? payload?.userTracksDone
      : [];
    return {
      IntroductionDone,
    };
  }
  return {
    IntroductionDone: [],
  };
}
