import { IFavTrack } from "./entities";

export interface IFetchGetFavTracksProps {
  error?: string;
  favTracks: string[];
}
