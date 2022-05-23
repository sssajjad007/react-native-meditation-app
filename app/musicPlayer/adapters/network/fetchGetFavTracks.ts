import { request } from "../../../library";
import { IFavTrack } from "../../types";
import { IFetchGetFavTracksProps } from "../../types/adapters";
import { parseFavTrack } from "../utils";

export async function fetchGetFavTracks(): Promise<IFetchGetFavTracksProps> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/listFavoriteTrack",
    method: "GET",
    body: undefined,
  });
  if (!success || !payload?.user) {
    return {
      error: error || "some error",
      favTracks: [],
    };
  }
  const { favTracks }: IFetchGetFavTracksProps = parseFavTrack(payload?.user);
  return {
    error: "",
    favTracks,
  };
}
