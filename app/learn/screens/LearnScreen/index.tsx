import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Container, THEME, Title, Typography } from "../../../library";
import { Introductory } from "../Introductory";
import { Lessons } from "../Lessons";
import * as Analytics from "expo-firebase-analytics";

import { styles } from "./styles";
import { useIsFocused } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={"improve"}
      initialLayout={{ width: widthPercentageToDP(100) }}
      style={{ transform: [{ scaleX: -1 }] }}
      sceneContainerStyle={{ transform: [{ scaleX: -1 }] }}
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: THEME.COLORS.GREY.DISABLE,
          backgroundColor: THEME.COLORS.BACKGROUND,
          width: widthPercentageToDP(90),
          alignSelf: "center",
        },

        tabBarLabelStyle: {
          transform: [{ scaleX: -1 }],
          fontFamily: THEME.FONTS.REGULAR,
        },
        tabBarIndicatorStyle: {
          borderRadius: 1,
          backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
        },
      }}
      layoutDirection={"rtl"}
    >
      <Tab.Screen
        name={"introductory"}
        component={Introductory}
        options={{ title: "مقدماتی" }}
      />
      <Tab.Screen
        name={"lessons"}
        component={Lessons}
        options={{ title: "درس ها" }}
      />
    </Tab.Navigator>
  );
}
export function LearnScreen() {
  const isFocused = useIsFocused();

  async function learnTabEvent() {
    try {
      await Analytics.logEvent("navigationbar_learn_click");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (isFocused) {
      learnTabEvent();
    }
  }, [isFocused]);

  return (
    <Container>
      <View style={styles.header}>
        <Typography mode={"boldBody16"} style={{ textAlign: "right" }}>
          {"یادگیری"}
        </Typography>
      </View>
      <View style={styles.tabScreen}>
        <MyTabs />
      </View>
    </Container>
  );
}
