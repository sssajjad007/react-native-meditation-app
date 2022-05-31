import { fetchGetAllMusic } from "../adapters/network";

export async function getAllMusic() {
  const { error, AllMusic } = await fetchGetAllMusic();

  return AllMusic;
}
