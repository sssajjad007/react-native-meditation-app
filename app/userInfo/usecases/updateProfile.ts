import { storage } from "../../library";
import { fetchUpdateProfile } from "../adapters/network/fetchUpdateProfile";

export async function UpdateProfile(
  name: string,
  birthday: number,
  email: string | null,
  gender: "male" | "female" | null,
  objectId: string
) {
  storage.add("name", name);

  return await fetchUpdateProfile(objectId, name, birthday, email, gender);
}
