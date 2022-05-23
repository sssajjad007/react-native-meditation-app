import { request } from "../../../library";
import { parseAllMusic } from "../utils";
export async function fetchGetAllMusic() {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/music",
    method: "GET",
    body: undefined,
  });
  if (!success || error) {
    return {
      error: "Error fetching music",
      AllMusic: [],
    };
  }
  //   console.log(payload.musics.track);
  const obj = Object(payload?.musics);
  const AllMusic = [];
  for (let index = 0; index < obj.length; index++) {
    const item = obj[index];
    AllMusic.push(parseAllMusic(item));
  }
  //   console.log("AllMusic: ", AllMusic);
  return {
    error: "",
    AllMusic,
  };
}
