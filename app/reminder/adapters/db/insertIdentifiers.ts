import { storage } from "../../../library";

import type { IInsertIdentifier } from "../../types";

export async function insertIdentifiers(args: IInsertIdentifier) {
  const { id, identifiers } = args;
 storage.add(id, JSON.stringify(identifiers));
}
