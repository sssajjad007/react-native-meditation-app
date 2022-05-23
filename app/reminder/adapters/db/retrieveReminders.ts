import { storage } from "../../../library";

import type { IReminder } from "../../types";

export async function retrieveReminders(): Promise<IReminder[]> {
  const remindersStr = storage.retrieve("reminders", "string");
  if (!remindersStr) {
    return [];
  }
  try {
    const reminders = JSON.parse(remindersStr);
    if (Array.isArray(reminders)) {
      return reminders;
    }
    return [];
  } catch (error) {
    return [];
  }
}
