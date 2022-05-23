import { request } from "../../../library";

export async function fetchDeleteFavTracks(track_id: string) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/favoriteTrack",
    method: "DELETE",
    body: { track_id: track_id },
  });
  if (!success) {
    return {
      error: error || "some error",
    };
  }
  return {
    error: "",
    payload: Boolean(payload),
  };
}
