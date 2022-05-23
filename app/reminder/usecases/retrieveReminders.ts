import { retrieveReminders as retrieveRemindersFromDb } from "../adapters"



export async function retrieveReminders() {
    return await retrieveRemindersFromDb();
}