import { parsePhoneNumber } from "libphonenumber-js";

export function cleanPhoneNumber(phoneNumber: string): string {
  if (!phoneNumber) {
    return "";
  }

  phoneNumber = phoneNumber.replace(/[^0-9&^۰-۹]/g, "");

  phoneNumber = parsePhoneNumber(phoneNumber, "IR")
    .formatNational()
    .replace(/[^0-9&^۰-۹]/g, "");

  return phoneNumber;
}
