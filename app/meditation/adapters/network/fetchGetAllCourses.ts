import { request } from "../../../library";
import { parseAllCourses } from "../utils";
export async function fetchGetAllCourses() {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/course",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "Error fetching all courses",
      AllCourse: [],
    };
  }
  const obj = Object(payload?.courses);
  const AllCourse = [];
  for (let index = 0; index < obj.length; index++) {
    const item = obj[index];
    AllCourse.push(parseAllCourses(item));
  }
  return {
    error: "",
    AllCourse,
  };
}
