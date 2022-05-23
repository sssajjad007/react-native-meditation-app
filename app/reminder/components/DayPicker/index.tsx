import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "../../../library";
import { IDayPickerProps } from "../../types";
import { styles } from "./styles";

export function DayPicker(props: IDayPickerProps) {
  const { title, setDay, day, disable } = props;
  const [active, setActive] = useState<boolean>(false);

  function onPress() {
    setDay({ ...day, [title]: !active });
    setActive(!active);
  }
  function transformTitle() {
    switch (title) {
      case "sunday":
        return "یکشنبه";
      case "monday":
        return "دوشنبه";
      case "tuesday":
        return "سه شنبه";
      case "wednesday":
        return "چهار شنبه";
      case "thursday":
        return "پنجشنبه";
      case "friday":
        return "جمعه";
      case "saturday":
        return "شنبه";
    }
    return "";
  }
  return (
    <View style={styles.container}>
      {active ? (
        <Button
          mode={"outlined"}
          size={"small"}
          rippleColor={"lightGrey"}
          onPress={disable ? undefined : onPress}
        >
          {transformTitle()}
        </Button>
      ) : (
        <Button
          mode={"text"}
          size={"small"}
          rippleColor={"lightGrey"}
          onPress={disable ? undefined : onPress}
        >
          {transformTitle()}
        </Button>
      )}
    </View>
  );
}
