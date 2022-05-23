import { fetchRegister, validatePhoneNumber } from "../adapters";

export async function register(phoneNumber: string) {
  if (!validatePhoneNumber(phoneNumber)) {
    return false;
  }
  return await fetchRegister(phoneNumber);
}
