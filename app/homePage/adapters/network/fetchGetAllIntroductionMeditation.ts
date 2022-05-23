import { request } from "../../../library";
import { IFetchIntroductionMeditations } from "../../types";
import { parseAllIntroductionMeditation } from "../utils";

export async function fetchGetAllIntroductionMeditation(): Promise<IFetchIntroductionMeditations> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/course",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error",
      introductionMeditation: {
        course: [],
        description: "",
        objectId: "",
        poster: "",
        title: "",
      },
    };
  }
  const courseId = "6f0c1701-205d-482b-93ad-740c9d0a61ec";
  const course = Array.isArray(payload?.courses)
    ? payload?.courses.find((item) => item.objectId === courseId)
    : [];
  const introductionMeditation = parseAllIntroductionMeditation(course);
  return {
    error: "",
    introductionMeditation,
  };
}
