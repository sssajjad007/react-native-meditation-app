import { cancelScheduledNotificationAsync } from "expo-notifications";

export async function cancelReminder(identifier: string[]) {
  const promises = [];
  for (let index = 0; index < identifier.length; index++) {
    const id = identifier[index];
    promises.push(cancelScheduledNotificationAsync(id));
  }
  await Promise.all(promises);
}
