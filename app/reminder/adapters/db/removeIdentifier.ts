import { storage } from "../../../library"



export async function removeIdentifier(id: string) {
    storage.remove(id);
}