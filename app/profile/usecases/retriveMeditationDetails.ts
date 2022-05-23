import { fetchGetTrackDone } from "../adapters/network";

export async function retriveMeditationDetails() {
  const {
    error,
    userMeditatedDays,
    userMeditatedDuration,
    userTracksDoneLength,
    userTracksDone,
  } = await fetchGetTrackDone();

  return {
    userMeditatedDays,
    userMeditatedDuration,
    userTracksDoneLength,
    userTracksDone,
  };
}
