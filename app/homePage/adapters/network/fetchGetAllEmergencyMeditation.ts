import { request } from "../../../library";
import { IFetchEmergencyMeditation } from "../../types";
import { parseEmergencyMeditation } from "../utils";

export async function fetchGetAllEmergencyMeditations(): Promise<IFetchEmergencyMeditation> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/course",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: "some error",
      emergencyMeditation: undefined,
    };
  }
  const courseId = "d2dea384-10d6-4b8d-b881-4698b03a58c8";
  const course = Array.isArray(payload?.courses)
    ? payload?.courses.find((item) => item.objectId === courseId)
    : [];
  const emergencyMeditation = parseEmergencyMeditation(course);
  return {
    error: "",
    emergencyMeditation,
  };
}
