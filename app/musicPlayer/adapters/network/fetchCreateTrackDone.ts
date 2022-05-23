import { request } from "../../../library";

export async function CreateTrackDone(
  userId: string,
  trackId: string,
  trackType: string,
  trackDuration: number
) {
  if (trackId) {
    const { error, httpStatus, payload, success } = await request({
      endpoint: "/trackDone",
      method: "POST",
      body: {
        userId,
        trackId,
        trackType,
        trackDuration,
      },
    });

    if (!success) {
      return {
        error: "some error",
      };
    }
    return {
      error: "",
    };
  }
}
