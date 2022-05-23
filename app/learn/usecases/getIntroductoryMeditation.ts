import { storage } from "../../library";
import { fetchGetCourseById } from "../adapters/network/fetchGetCourseById";

export async function getIntroductoryMeditation() {
  const { error, poster, course, courseId } = await fetchGetCourseById();
  const tracks = [];
  for (let index = 0; index < course.length; index++) {
    const item = course[index];
    if (item) {
      const trackStr = storage.retrieve(item, "string");
      if (trackStr) {
        tracks.push(JSON.parse(trackStr));
      }
    }
  }
  return { tracks, courseId, poster };
}
