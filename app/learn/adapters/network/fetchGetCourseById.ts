import { request, toString } from "../../../library";
import { IFetchGetCourseById } from "../../types/adapters";

export async function fetchGetCourseById(): Promise<IFetchGetCourseById> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/course",
    method: "GET",
    body: undefined,
  });

  if (!success) {
    return {
      error: "some error",
      poster: " ",
      course: "",
      courseId: "",
    };
  }
  const courseId = "6f0c1701-205d-482b-93ad-740c9d0a61ec";
  const course = Array.isArray(payload?.courses)
    ? payload?.courses.find((item) => item.objectId === courseId)
    : [];
  // console.log(track)
  return {
    error: "",
    poster: course.poster,
    course: course.track,
    courseId: courseId,
  };
}
