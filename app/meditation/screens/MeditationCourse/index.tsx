import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Container, storage, THEME, Typography } from "../../../library";
import { Scroller } from "../../../library/Scroller";
import { MeditationCardComponent } from "../../components/MeditationCard";
import { styles } from "./styles";

export function MeditationCourse() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [course, setCourse] = useState([]);
  const routes = useRoute<any>();
  const { track, title, poster, description, objectId } = routes.params;
  const [isPremium, setIsPremium] = useState<boolean>(false);
  async function retriveCourseDetails() {
    const isUSerPremium = storage.retrieve("is_premium", "boolean");
    if (isUSerPremium != undefined) {
      setIsPremium(isUSerPremium);
    }
    const result: any = [];
    for (let index = 0; index < track.length; index++) {
      if (track[index]) {
        const allCourse = storage.retrieve(track[index], "string");
        if (allCourse) {
          result.push(JSON.parse(allCourse));
        } else return;
      } else return;
    }
    setCourse(result);
  }
  function typeRender(title: string) {
    if (title.includes("پیاده")) {
      return "walk";
    }
    if (title.includes("اضطراب")) {
      return "stress";
    }
    if (title.includes("اضطراری")) {
      return "emergency";
    }
    if (title.includes("عزت")) {
      return "selfesteem";
    }
    if (title.includes("خواب")) {
      return "sleep";
    }
    if (title.includes("اسکن")) {
      return "bodyscan";
    }
    return "";
  }
  function renderer() {
    const result: JSX.Element[] = [];
    if (course.length === 0 || isPremium === undefined) {
      return (
        <Typography mode={"boldBody16"} style={{ textAlign: "right" }}>
          {"در حال بارگذاری..."}
        </Typography>
      );
    }
    for (let index = 0; index < course.length; index++) {
      let coursePremium = false;
      const element = course[index];
      if (isPremium === false) {
        if (course.length < 10) {
          if (index > Math.floor(course.length / 10)) {
            coursePremium = true;
          }
        } else {
          if (index >= Math.floor(course.length / 10)) {
            coursePremium = true;
          }
        }
      }
      result.push(
        <MeditationCardComponent
          title={element.title}
          key={element.objectId}
          duration={element.duration}
          coursePremium={coursePremium}
          onPress={() => {
            navigation.push("Player", {
              courseId: objectId,
              id: element.objectId,
              title: element.title,
              url: element.url,
              mode: "course",
              type: typeRender(title),
            });
          }}
        />
      );
    }
    return result;
  }
  useEffect(() => {
    retriveCourseDetails();
  }, []);

  return (
    <Container headerTitle={title}>
      <Scroller>
        <View style={{ minHeight: 700 }}>
          <View style={styles.assets}>
            <Image
              source={{ uri: poster }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.description}>
            <Typography
              mode={"regularSub12"}
              style={{
                textAlign: "right",
                color: THEME.COLORS.LABEL.SECONDARY,
              }}
            >
              {description}
            </Typography>
          </View>
          <View style={styles.cardContainer}>{renderer()}</View>
        </View>
      </Scroller>
    </Container>
  );
}
