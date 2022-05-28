import { request, toString } from "../../../library";
import { IFavTrack } from "../../types";
import { IFetchGetFavTracksProps } from "../../types/adapters";
import { parseFavTrack } from "../utils";

export async function fetchGetFavTracks(): Promise<IFetchGetFavTracksProps> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/listFavoriteTrack",
    method: "GET",
    body: undefined,
  });
  if (error) {
    return {
      error,
      favTracks: [],
    };
  }
  const favTracks = parseFavTrack(payload?.user);
  return {
    error: "",
    favTracks,
  };
}
