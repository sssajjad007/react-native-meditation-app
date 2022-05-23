import { storage } from "../../library";
import {
  fetchGetAllIntroductionDone,
  fetchGetAllIntroductionMeditation,
} from "../adapters/network";

export async function getAllIntroductionMeditation() {
  const [{ introductionMeditation }, { IntroductionDone }] = await Promise.all([
    fetchGetAllIntroductionMeditation(),
    fetchGetAllIntroductionDone(),
  ]);

  let poster = introductionMeditation.poster;
  let length = IntroductionDone.length;
  const IntroductionDoneTrackId = [];
  for (let index = 0; index < length; index++) {
    IntroductionDoneTrackId.push(IntroductionDone[index].trackId);
  }
  let IntroductionTrackNotDone: string[] = [];

  for (let i = 0; i < introductionMeditation.course.length; i++) {
    let repeat = false;
    for (let j = 0; j < length; j++) {
      if (introductionMeditation.course[i] === IntroductionDoneTrackId[j]) {
        repeat = true;
      }
    }
    if (!repeat) {
      IntroductionTrackNotDone.push(introductionMeditation.course[i]);
    }
  }
  if (IntroductionDoneTrackId.length === introductionMeditation.course.length) {
    const lastTrack = [];
    lastTrack.push(
      introductionMeditation.course[IntroductionDoneTrackId.length - 1]
    );
    IntroductionTrackNotDone = lastTrack;
  }
  let isPremium = storage.retrieve("is_premium", "boolean");

  function findIndexTrackDone(trackId: string) {
    return trackId === IntroductionTrackNotDone[0];
  }
  console.log("isPremium in usecases", isPremium);
  const meditationDoneLength =
    introductionMeditation.course.findIndex(findIndexTrackDone) + 1;
  let totalNumberDone = meditationDoneLength;
  let totalNumber = introductionMeditation.course.length;
  let objectId = introductionMeditation.objectId;
  const introductionMeditationTrack = storage.retrieve(
    IntroductionTrackNotDone[0],
    "string"
  );
  const introductionCourse = JSON.parse(introductionMeditationTrack);
  function isPremiumCheker() {
    if (!isPremium && meditationDoneLength > 3) {
      return false;
    }
    return true;
  }
  const result = {
    isPremium: isPremiumCheker(),
    totalNumber,
    totalNumberDone,
    objectId,
    id: introductionCourse.objectId,
    title: introductionCourse.title,
    url: introductionCourse.url,
    poster,
  };
  return { result };
}
