import { request, toString } from "../../../library";
import { IFetchGetAllTracks } from "../../types/adapters";

export async function fetchGetAllTracks(): Promise<IFetchGetAllTracks> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tracks",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error",
      tracks: [],
    };
  }
  const tracks = Array.isArray(payload?.tracks) ? payload?.tracks : [];
  return {
    error: "",
    tracks: tracks,
  };
}
