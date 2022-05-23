import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { storage, Typography } from "../../../library";
import { ILesson } from "../../types/adapters";
import { getLesson } from "../../usecases";
import { Card } from "../../components/Card";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Scroller } from "../../../library/Scroller";

export function Lessons() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [tracks, setTracks] = useState<ILesson[]>([]);
  const [isPremium, setIsPremium] = useState<boolean>(false);
  async function GetLessonDetails() {
    const isUSerPremium = storage.retrieve("is_premium", "boolean");
    const { error, lessons } = await getLesson();
    if (isUSerPremium != undefined) {
      setIsPremium(isUSerPremium);
    }
    setTracks(lessons);
  }

  useEffect(() => {
    GetLessonDetails();
  }, []);

  async function onCardPress(objectId: string, title: string, url: string) {
    navigation.push("Player", {
      id: objectId,
      title: title,
      url: url,
      mode: "lessson",
      type: "lesson",
    });
  }
  function renderLessons() {
    if (tracks.length === 0 || isPremium === undefined) {
      return <Typography mode={"boldBody18"}>{"در حال بارگذاری"}</Typography>;
    }
    const result: JSX.Element[] = [];
    for (let index = 0; index < tracks.length; index++) {
      let coursePremium = false;

      const { objectId, title, url } = tracks[index];
      if (isPremium === false) {
        if (tracks.length < 10) {
          if (index > Math.floor(tracks.length / 10)) {
            coursePremium = true;
          }
        } else {
          if (index >= Math.floor(tracks.length / 10)) {
            coursePremium = true;
          }
        }
      }
      result.push(
        <Card
          key={objectId}
          title={title}
          url={url}
          objectId={objectId}
          onPress={onCardPress}
          session={`جلسه ${digitsEnToFa(index + 1)}`}
          courseId={undefined}
          coursePremium={coursePremium}
        />
      );
    }
    return result;
  }

  return (
    <Scroller>
      <View style={styles.imageContainer}>
        {tracks.length === 0 ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <Image
            source={{ uri: tracks[0].posterURL }}
            resizeMode={"contain"}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </View>
      <View style={styles.cardContainer}>
        <Typography
          mode={"boldBody16"}
          style={{ alignSelf: "flex-end", paddingVertical: 24 }}
        >
          {"درس ها"}
        </Typography>
        {renderLessons()}
      </View>
    </Scroller>
  );
}
