import { IDailyMeditation } from "./entities";

export interface IFetchGetAllTracks {
  error: string;
  tracks: any;
}
export interface IFetchGetAllDailyMeditations {
  error: string;
  dailyMeditations: IDailyMeditation;
}
export interface IFetchGetAllIntroductionMeditations {
  title: string;
  description: string;
  error: string;
  poster: string;
  course: string;
  courseId: string;
}
export interface IFetchGetAllEmergencyMeditation {
  title: string;
  description: string;
  error: string;
  poster: string;
  course: string;
  courseId: string;
}
export interface IFetchGetUserById {
  error: string;
  isPremium: boolean;
  subscriptionValidUntil: number;
}
export interface IFetchEmergencyMeditation {
  error: string;
  emergencyMeditation: IEmergencyMeditation | undefined;
}
export interface IFetchIntroductionMeditations {
  error: string;
  introductionMeditation: IAllIntroductionMeditation;
}
export interface IEmergencyMeditation {
  objectId: string;
  title: string;
  description: string;
  poster: string;
  course: string[];
}
export interface IAllIntroductionMeditation {
  objectId: string;
  title: string;
  description: string;
  poster: string;
  course: string[];
}
