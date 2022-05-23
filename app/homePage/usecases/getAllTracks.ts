import { storage } from "../../library";
import { fetchGetAllTracks } from "../adapters/network/fetchGetAllTracks";
export async function getAllTracks() {
  const { error, tracks } = await fetchGetAllTracks();
  if (error) {
    return error;
  }
  const promises = [];
  for (let index = 0; index < tracks.length; index++) {
    const objectId = tracks[index].objectId;
    const trackStr = JSON.stringify(tracks[index]);
    promises.push(storage.add(objectId, trackStr));
  }
  await Promise.all(promises);
}
