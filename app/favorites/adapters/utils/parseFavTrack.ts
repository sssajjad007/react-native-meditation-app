import { toString } from "../../../library";

export function parseFavTrack(payload: any): string[] {
  const favTracks: string[] = [];
  const length: number = Array.isArray(payload.fav_track)
    ? payload.fav_track.length
    : 0;
  for (let index = 0; index < length; index++) {
    const element = payload.fav_track[index];
    favTracks.push(toString(element));
  }
  return favTracks;
}
