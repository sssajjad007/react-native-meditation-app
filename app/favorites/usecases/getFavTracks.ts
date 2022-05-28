import { storage } from "../../library";
import { fetchGetFavTracks } from "../adapters/network/fetchGetFavTracks";

export async function retrieveFavTracks() {
  const { error, favTracks } = await fetchGetFavTracks();
  if (error || !favTracks) {
    return error;
  }
  //TODO: later we can use this for another key
  const favTracksList = [];
  for (let index = 0; index < favTracks.length; index++) {
    const item = favTracks[index];
    if (item) {
      const trackStr = storage.retrieve(item, "string");
      if (trackStr) {
        favTracksList.push(JSON.parse(trackStr));
      }
    } else return;
  }
  return favTracksList;
}
