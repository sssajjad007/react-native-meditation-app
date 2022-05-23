import { request, marketFlag } from "../../../library";

export async function fetchRegister(phoneNumber: string): Promise<boolean> {
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/register",
    method: "POST",
    body: { phone_number: phoneNumber, market: marketFlag },
  });
  if (!success) {
    return false;
  }
  // console.log({error, payload, httpStatus});
  return true;
}
