import { fetchGetAllMeditaitions } from "../adapters/network";

export async function retriveMeditations() {
  const { error, meditations } = await fetchGetAllMeditaitions();
  
  return meditations;
}
