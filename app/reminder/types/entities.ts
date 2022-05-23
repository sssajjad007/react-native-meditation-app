export type tWeekDays =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export interface ICreateReminder {
  title: string;
  weekdays: tWeekDays[];
  hour: number;
  minute: number;
}

export interface IReminder extends ICreateReminder {
  id: string;
}
