export interface ITrackDone {
  error?: string;
  userMeditatedDuration: number;
  userMeditatedDays: string[];
  userTracksDoneLength: number;
  userTracksDone: string[];
}
export interface ICourse {
  objectId: string;
  poster: string;
  title: string;
  track: string[];
}
export interface IFetchGetAllMeditations {
  error: string;
  meditations: ICourse[];
}
