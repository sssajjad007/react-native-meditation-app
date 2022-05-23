import { setReminder } from "../adapters";

import type { ICreateReminder } from "../types";

export async function createReminder(args: ICreateReminder) {
  await setReminder(args);
}
