import { digitsEnToFa } from "@persian-tools/persian-tools";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Picker } from "react-native-wheel-pick";
import { Button, THEME } from "../../../library";
import { jalaaliDataGen, jalaaliDaysGen } from "../../adapters";

import { styles } from "./styles";
import { IWheelPickerProps } from "./types";

export function WheelPicker(props: IWheelPickerProps) {
  const { onPress, setBirthDay } = props;
  const { years, month } = jalaaliDataGen();
  const [currentMonth, setMonth] = useState<string>(month[0]);
  const [currentYear, setYear] = useState<string>(years[49]);
  const [currentDay, setDay] = useState<string>(digitsEnToFa(1));
  const [days, setDays] = useState(jalaaliDaysGen(parseInt(years[0], 10), 1));
  // function onYearChange(year: number) {
  //   setYear(year);
  //   setDays(jalaaliDaysGen(currentYear, currentMonth));
  // }
  // function onMonthChange(month: number) {
  //   console.log(object)
  //   setMonth(month);
  //   setDays(jalaaliDaysGen(currentYear, currentMonth));
  // }
  useEffect(() => {
    const jMonth = month.findIndex((item) => item === currentMonth);
    setDays(jalaaliDaysGen(parseInt(currentYear, 10), jMonth + 1));
  }, [currentYear, currentMonth]);

  return (
    <View style={styles.container}>
      <View style={styles.wheelPickerContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.pickerStyles}
            selectedValue={currentYear}
            pickerData={years}
            onValueChange={setYear}
            textSize={18}
            itemSpace={60} // this only support in android
          />
          <Picker
            style={styles.pickerStyles}
            selectedValue={currentMonth}
            pickerData={month}
            onValueChange={setMonth}
            textSize={18}
            itemSpace={64} // this only support in android
          />
          <Picker
            style={styles.pickerStyles}
            selectedValue={currentDay}
            pickerData={days}
            onValueChange={setDay}
            textSize={18}
            itemSpace={64} // this only support in android
          />
          <View style={styles.firstLine} />
          <View style={styles.secondLine} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={() => {
              setBirthDay(
                `${currentYear}-${digitsEnToFa(
                  month.findIndex((item) => item === currentMonth) + 1
                )}-${currentDay}`
              );
              onPress();
            }}
          >
            {"تایید"}
          </Button>
        </View>
      </View>
    </View>
  );
}
