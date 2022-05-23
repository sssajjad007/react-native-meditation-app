import { request, toString } from "../../../library";
import { IFetchGetLesson } from "../../types/adapters";

export async function fetchGetLesson(): Promise<IFetchGetLesson> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/lesson",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error",
      lessons: [],
    };
  }
  const lessons = payload?.lessons;
  if (Array.isArray(lessons)) {
    const length = lessons.length || 0;
    const result = [];
    for (let index = 0; index < length; index++) {
      const lesson = lessons[index];

      result.push({
        objectId: toString(lesson.objectId),
        title: toString(lesson.title),
        type: toString(lesson.type),
        url: toString(lesson.url),
        posterURL: toString(lesson.posterURL),
      });
    }
    return { error: "", lessons: result };
  }
  return {
    error: "no data",
    lessons: [],
  };
}
