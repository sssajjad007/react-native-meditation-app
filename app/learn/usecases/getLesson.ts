import { storage } from "../../library";
import { fetchGetLesson } from "../adapters/network/fetchGetLesson";

export async function getLesson() {
  const { error, lessons } = await fetchGetLesson();
  const promises = [];
  for (let index = 0; index < lessons.length; index++) {
    const lesson = lessons[index];
    const lessonStr = JSON.stringify(lesson);
    promises.push(storage.add(lesson.objectId, lessonStr));
  }
  const lessonsStr = JSON.stringify(lessons);
  promises.push(storage.add("lessons", lessonsStr));
  await Promise.all(promises);
  return { error, lessons };
}
