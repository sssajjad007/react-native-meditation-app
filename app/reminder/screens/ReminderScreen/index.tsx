import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Button, Typography } from "../../../library";
import { ArrowRightIcon, ClockIcon } from "../../../library/Icon";
import { ReminderCard } from "../../components/ReminderCard";
import { styles } from "./styles";
export function Reminder() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [empty, setEmpty] = useState<boolean>(false);
  return (
    <View style={styles.container}>
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
      {empty ? (
        <ScrollView style={styles.reminderCardContainer}>
          <ReminderCard />
        </ScrollView>
      ) : (
        <View style={styles.empty}>
          <ClockIcon size={134} />
          <Typography mode={"regularSub12"} style={styles.toTop}>
            {"فعلا یادآوری ندارید!"}
          </Typography>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"big"}
          rippleColor={"lightGrey"}
          onPress={() => {
            navigation.push("AddReminder");
          }}
        >
          {"افزودن یاداوری جدید"}
        </Button>
      </View>
    </View>
  );
}
