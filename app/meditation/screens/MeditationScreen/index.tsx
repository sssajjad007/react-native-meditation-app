import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Container, Typography } from "../../../library";
import { Scroller } from "../../../library/Scroller";
import { TileComponent } from "../../components/Tile";
import * as Analytics from "expo-firebase-analytics";
import { IFetchGetAllCourses } from "../../types";
import { getAllCourses } from "../../usecases/getAllCourses";
import { styles } from "./styles";

export function Meditation() {
  const isFocused = useIsFocused();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [allCourse, setAllCourse]: any = useState([]);

  async function meditationTabEvent() {
    try {
      await Analytics.logEvent("navigationbar_med_click");
    } catch (error) {
      console.log(error);
    }
  }
  async function getAllCourse() {
    const AllCourse = await getAllCourses();
    const courses = AllCourse.filter((item: IFetchGetAllCourses) => {
      return !(
        item.objectId === "6f0c1701-205d-482b-93ad-740c9d0a61ec" ||
        item.objectId === "d47763d0-d330-4eb1-bba0-69e1d233b94d"
      );
    });

    setAllCourse(courses);
  }
  useEffect(() => {
    if (isFocused) {
      meditationTabEvent();
    }
  }, [isFocused]);

  useEffect(() => {
    getAllCourse();
  }, []);
  function renderer() {
    if (allCourse.length === 0) {
      return (
        <Typography mode={"boldBody16"} style={{ textAlign: "right" }}>
          {"در حال بارگذاری..."}
        </Typography>
      );
    }

    const result: JSX.Element[] = [];
    for (let index = 0; index < allCourse.length; index++) {
      const element = allCourse[index];
      const section = element.track.length;
      result.push(
        <TileComponent
          poster={element.poster ? element.poster : null}
          title={element.title}
          key={element.objectId}
          section={section}
          onPress={() => {
            navigation.push("MeditationCourse", {
              objectId: element.objectId,
              track: element.track,
              title: element.title,
              poster: element.poster ? element.poster : null,
              description: element.description,
            });
          }}
        />
      );
    }
    return result;
  }
  return (
    <Container>
      <View style={styles.header}>
        <Typography mode={"boldBody16"} style={{ textAlign: "right" }}>
          {"مدیتیشن موضوعی"}
        </Typography>
      </View>
      <Scroller>
        <View style={styles.tileContainer}>{renderer()}</View>
      </Scroller>
    </Container>
  );
}
