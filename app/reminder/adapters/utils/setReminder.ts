import { scheduleNotificationAsync } from "expo-notifications";

import { insertIdentifiers, insertReminder } from "../db";
import type { ICreateReminder, IReminder, tWeekDays } from "../../types";

const daysToNum: Record<tWeekDays, number> = {
  sunday: 1,
  monday: 2,
  tuesday: 3,
  wednesday: 4,
  thursday: 5,
  friday: 6,
  saturday: 7,
};

function weekdayToNumber(day: tWeekDays) {
  return daysToNum[day];
}

export async function setReminder(args: ICreateReminder): Promise<IReminder> {
  const { title, hour, minute, weekdays } = args;
  console.log(title, hour, minute, weekdays);
  const id = `${Math.random()}`;
  const identifiers: string[] = [];
  for (let index = 0; index < weekdays.length; index++) {
    const day = weekdays[index];
    const weekday = weekdayToNumber(day);
    const identifier = await scheduleNotificationAsync({
      content: {
        title,
      },
      trigger: {
        weekday,
        hour,
        minute,
      },
    });
    identifiers.push(identifier);
  }
  await Promise.all([
    insertIdentifiers({ id, identifiers }),
    insertReminder({ id, hour, minute, title, weekdays }),
  ]);
  return {
    id,
    hour,
    minute,
    title,
    weekdays,
  };
}
