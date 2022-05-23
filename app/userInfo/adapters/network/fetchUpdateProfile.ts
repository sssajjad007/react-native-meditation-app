import { request } from "../../../library";

export async function fetchUpdateProfile(
  objectId: string,
  name: string,
  birthday: number,
  email: string | null,
  gender: "male" | "female" | null
): Promise<boolean> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/updateUser/${objectId}`,
    method: "PUT",
    body: { name: name, email: email, birthday: birthday, gender: gender },
  });
  if (!success) {
    return false;
  }
  return true;
}
