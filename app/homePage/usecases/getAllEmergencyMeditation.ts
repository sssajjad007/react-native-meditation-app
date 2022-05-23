import { fetchGetAllEmergencyMeditations } from "../adapters/network";

export async function getAllEmergencyMeditation() {
  const { emergencyMeditation, error } =
    await fetchGetAllEmergencyMeditations();
  return { emergencyMeditation };
}
