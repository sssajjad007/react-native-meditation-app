import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { DayPicker } from "../DayPicker";
import { Subheading, THEME, Title } from "../../../library";
export function ReminderCard() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.textContainer}>
          <Subheading>{"صبح"}</Subheading>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>{"8:30"}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{
              false: THEME.COLORS.LABEL.TERTIARY_WHITE,
              true: THEME.COLORS.PRIMARY.NORMAL,
            }}
            thumbColor={THEME.COLORS.GREY.WHITE}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.dayPickerContainer}>
        <DayPicker />
      </View>
    </View>
  );
}
