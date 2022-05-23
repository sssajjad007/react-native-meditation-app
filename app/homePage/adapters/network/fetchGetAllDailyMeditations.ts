import { request } from "../../../library";
import { IDailyMeditation, IFetchGetAllDailyMeditations } from "../../types";
import { parseDailyMeditaiton } from "../utils";

export async function fetchGetAllDailyMeditations(): Promise<IFetchGetAllDailyMeditations> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/course",
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error: error || "some error",
      dailyMeditations: {
        description: "",
        title: "",
        objectId: "",
        poster: "",
        track: [],
      },
    };
  }

  const courseId = "d47763d0-d330-4eb1-bba0-69e1d233b94d";
  const course = Array.isArray(payload?.courses)
    ? payload?.courses.find((item) => item.objectId === courseId)
    : [];

  const dailyMeditations: IDailyMeditation = parseDailyMeditaiton(course);
  return {
    error: "",
    dailyMeditations,
  };
}
