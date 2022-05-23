import { request } from "../../../library";

export async function fetchPutFavTrack(track_id: string) {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/favoriteTrack",
    method: "PUT",
    body: { track_id: track_id },
  });
  if (!success) {
    return {
      error: error || "Something went wrong",
    };
  }
  return {
    payload,
  };
}
