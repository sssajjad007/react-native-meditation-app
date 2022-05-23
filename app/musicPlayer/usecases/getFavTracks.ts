import { storage } from "../../library";
import { fetchGetFavTracks } from "../adapters/network";

export async function retrieveFavTracks() {
  const { error, favTracks } = await fetchGetFavTracks();
  // if (error || !favTracks) {
  //   return error;
  // }
  //TODO: later we can use this for another key
  return { favTracks };
}
