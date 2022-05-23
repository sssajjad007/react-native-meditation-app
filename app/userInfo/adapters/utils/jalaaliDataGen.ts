import memoize from "fast-memoize";
import {digitsEnToFa,  } from "@persian-tools/persian-tools"
function jalaaliDataGenerator() {
  const years = [];
  const month = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
  for (let year = 1300; year <= 1400; year++) {
    years.push(digitsEnToFa(year));
  }
  return {
    years,
    month,
  };
}

export const jalaaliDataGen = memoize(jalaaliDataGenerator);
