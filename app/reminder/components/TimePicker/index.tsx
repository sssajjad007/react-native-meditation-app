import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
// import { Picker } from "react-native-wheel-pick";
import { THEME, Title } from "../../../library";
import { ITimePickerProps } from "../../types";
export function TimePicker(props: ITimePickerProps) {
  const { hour, Hours, setHour, minutes, Minutes, setMinutes } = props;
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        {/* <Picker
          style={styles.pickerStyles}
          textColor={THEME.COLORS.PRIMARY.NORMAL}
          selectedValue={hour}
          pickerData={Hours}
          onValueChange={setHour}
          textSize={40}
          itemSpace={70} // this only support in android
        />
        <View style={styles.pickerSeparator}>
          <Text style={styles.pickerSeparatorText}>{":"}</Text>
        </View>
        <Picker
          style={styles.pickerStyles}
          textColor={THEME.COLORS.PRIMARY.NORMAL}
          selectedValue={minutes}
          pickerData={Minutes}
          onValueChange={setMinutes}
          textSize={40}
          itemSpace={70} // this only support in android
        /> */}
        <View style={styles.firstLine} />
        <View style={styles.secondLine} />
      </View>
    </View>
  );
}
