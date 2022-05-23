import { request } from "../../../library";

export async function fetchUpdateUser(
  name: string,
  lastname: string,
  email: string,
  profieId: string
): Promise<boolean> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/updateUser/b980e6c8-3828-46cc-a567-33bcdbf64f71`,
    method: "PUT",
    body: { name: name, lastName: lastname, email: email },
  });
  return success;
}
