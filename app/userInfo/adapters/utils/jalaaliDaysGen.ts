import { jalaaliMonthLength } from "jalaali-js";
import memoize from "fast-memoize";
import { digitsEnToFa } from "@persian-tools/persian-tools";
function jalaaliDaysGenerator(year: number, month: number) {
  const daysLength = jalaaliMonthLength(year, month);
  const days = [];
  for (let index = 1; index <= daysLength; index++) {
    days.push(digitsEnToFa(index));
  }
  return days;
}

export const jalaaliDaysGen = memoize(jalaaliDaysGenerator);
