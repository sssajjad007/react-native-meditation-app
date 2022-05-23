import { fetchDeleteFavTracks } from "../adapters/network";

export async function deleteFavTracks(track_id: string) {
  const { error, payload } = await fetchDeleteFavTracks(track_id);
  if (error) {
    return {
      error,
    };
  }
  return {
    payload,
  };
}
