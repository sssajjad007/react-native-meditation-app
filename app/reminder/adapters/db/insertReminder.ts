import { storage } from "../../../library";
import { retrieveReminders } from "./retrieveReminders";
import type { IReminder } from "../../types";

export async function insertReminder(args: IReminder) {
  const reminders = await retrieveReminders();
  reminders.push(args);
  const remindersStr = JSON.stringify(reminders);
  storage.add("reminders", remindersStr);
}
