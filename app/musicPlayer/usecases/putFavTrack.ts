import { fetchPutFavTrack } from "../adapters/network";

export async function PutFavTrack(track_id: string) {
  const { error, payload } = await fetchPutFavTrack(track_id);
  if (error) {
    return error;
  }
  return payload;
}
