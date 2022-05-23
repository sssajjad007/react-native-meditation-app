import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { ArrowRightIcon } from "../../../library/Icon";
import { Button, Input, Typography } from "../../../library";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { DayPicker } from "../../components/DayPicker";
import { Scroller } from "../../../library/Scroller";
import { TimePicker } from "../../components/TimePicker";
import { setReminder } from "../../adapters";
import { BorderlessButton } from "react-native-gesture-handler";

export function AddReminder() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [day, setDay] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const Hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const Minutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];
  const [hour, setHour] = useState<number>(Hours[4]);
  const [minutes, setMinutes] = useState<string>(Minutes[4]);
  const [value, setValue] = useState("");
  function sendDataToReminderCard() {
    const result = [];
    for (let index = 0; index < Object.keys(day).length; index++) {
      const element = Object.values(day)[index];
      const item = Object.keys(day)[index];
      if (element === true) {
        result.push(item);
      }
    }
    // console.log("result:", result);
    return result;
  }
  function renderDayPicker() {
    return (
      <View
        style={{
          transform: [{ scaleX: -1 }, { scaleY: 1 }],
          flexDirection: "row",
        }}
      >
        <DayPicker title="friday" setDay={setDay} day={day} />
        <DayPicker title="thursday" setDay={setDay} day={day} />
        <DayPicker title="wednesday" setDay={setDay} day={day} />
        <DayPicker title="tuesday" setDay={setDay} day={day} />
        <DayPicker title="monday" setDay={setDay} day={day} />
        <DayPicker title="sunday" setDay={setDay} day={day} />
        <DayPicker title="saturday" setDay={setDay} day={day} />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Typography mode={"boldBody16"} style={styles.toRight}>
          {"یادآوری"}
        </Typography>
        <View style={styles.backIcon}>
          <BorderlessButton
            onPress={() => {
              navigation.goBack();
            }}
            rippleColor={"rgba(53,53,53,0.4)"}
            // style={{ paddingBottom: 4 }}
            hitSlop={{ horizontal: 10, vertical: 10 }}
            borderless
          >
            <ArrowRightIcon size={24} />
          </BorderlessButton>
        </View>
      </View>
      <View style={styles.timePickerContainer}>
        <TimePicker
          hour={hour}
          Hours={Hours}
          Minutes={Minutes}
          minutes={minutes}
          setHour={setHour}
          setMinutes={setMinutes}
        />
      </View>
      <View style={styles.dayPickerContainer}>
        <Typography mode={"regularBody18"} style={{ bottom: 10 }}>
          {"روزها"}
        </Typography>
        <Scroller
          showsHorizontalScrollIndicator={false}
          style={styles.dayPicker}
          horizontal
          rtl
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderDayPicker()}
        </Scroller>
      </View>
      <View style={styles.notificationInputContainer}>
        <Input
          mode={"with-label"}
          title={"متن نوتیفکیشن"}
          placeholder={"متن دلخواه خود را وارد کنید."}
          multiline={true}
          numberOfLines={3}
          onChangeText={(text: string) => {
            setValue(text);
          }}
          value={value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"big"}
          onPress={() => {
            const result = sendDataToReminderCard();
            // console.log("result:", result, "hour:", hour, "minutes:");
            setReminder({
              weekdays: result,
              hour: hour,
              minute: minutes,
              title: value,
            });
          }}
        >
          {"تنظیم کن"}
        </Button>
      </View>
    </ScrollView>
  );
}
