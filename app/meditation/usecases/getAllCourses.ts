import { fetchGetAllCourses } from "../adapters/network";

export async function getAllCourses() {
  const { error, AllCourse } = await fetchGetAllCourses();
  // if (error) {
  //   return error;
  // }
  return AllCourse;
}
