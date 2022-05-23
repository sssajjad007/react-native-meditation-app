import { storage } from "../../../library";

export async function retrieveIdentifiers(
  id: string
): Promise<string[] | undefined> {
  if (id) {
    const identifiersStr = storage.retrieve(id, "string");

    if (identifiersStr) {
      return JSON.parse(identifiersStr);
    } else return;
  } else return;
}
