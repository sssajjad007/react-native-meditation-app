import { storage } from "../../library";
import {
  fetchGetAllDailyMeditationDone,
  fetchGetAllDailyMeditations,
} from "../adapters/network";

export async function GetAllDailyMeditation() {
  const [{ dailyMeditationDone }, { dailyMeditations }] = await Promise.all([
    fetchGetAllDailyMeditationDone(),
    fetchGetAllDailyMeditations(),
  ]);

  const dailyPlayed = storage.retrieve("dailyPlayed", "string");
  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  let length = dailyMeditationDone.length;
  if (length === dailyMeditations?.track.length) {
    length = Math.floor(Math.random() * dailyMeditations.track.length);
  }
  if (dailyPlayed === today) {
    length = Math.max(0, length - 1);
  }
  const dailyMeditationTrack =
    storage.retrieve(dailyMeditations.track[length], "string") || "";
  const dailyCourse = JSON.parse(dailyMeditationTrack);

  dailyCourse.poster = dailyMeditations.poster;
  dailyCourse.objectIdCategory = dailyMeditations.objectId;

  return { dailyCourse };
}
