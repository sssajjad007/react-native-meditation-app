import { storage } from "../../../library";

import { retrieveReminders } from "./retrieveReminders";

export async function removeReminder(id: string) {
  const reminders = await retrieveReminders();
  if (!reminders) {
    return;
  }
  const newReminders = reminders.filter((item) => item.id !== id);
  storage.add(id, JSON.stringify(newReminders));
}
