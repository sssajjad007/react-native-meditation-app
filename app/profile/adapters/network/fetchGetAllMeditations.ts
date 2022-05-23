import { request } from "../../../library";
import { ICourse, IFetchGetAllMeditations } from "../../types";
import { parseMeditations } from "../utils";

export async function fetchGetAllMeditaitions(): Promise<IFetchGetAllMeditations> {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/course",
    method: "GET",
    body: undefined,
  });
  if (!payload || error || !Array.isArray(payload?.courses)) {
    return {
      error: "some error",
      meditations: [
        {
          objectId: "",
          title: "",
          poster: "",
          track: [],
        },
      ],
    };
  }
  const length: number = Array.isArray(payload.courses)
    ? payload.courses.length
    : 0;
  const meditations: ICourse[] = [];
  for (let index = 0; index < length; index++) {
    const element = payload.courses[index];
    meditations.push(parseMeditations(element));
  }
  return {
    error: "",
    meditations,
  };
}
