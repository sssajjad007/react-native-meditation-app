import React, { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { THEME, Typography } from "../../../library";
import { ImprovementCard } from "../../components";
import { ICourse } from "../../types";
import { retriveMeditationDetails, retriveMeditations } from "../../usecases";
import { styles } from "./styles";

export function Improvement() {
  const [meditations, setMeditations] = useState<ICourse[]>([]);
  const [userTrackType, setUserTrackType] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  async function userTracksDoneTitle() {
    const AllMeditation = await retriveMeditations();
    setMeditations(AllMeditation);
    const { userTracksDone } = await retriveMeditationDetails();
    setUserTrackType(userTracksDone);
    setLoading(false);
  }

  useEffect(() => {
    userTracksDoneTitle();
  }, []);
  function renderImprovementCard() {
    if (loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size={"large"}
            color={THEME.COLORS.PRIMARY.NORMAL}
          />
        </View>
      );
    }
    const meditationCounter = [];
    for (let index = 0; index < meditations.length; index++) {
      meditationCounter.push({
        poster: meditations[index].poster,
        objectId: meditations[index].objectId,
        title: meditations[index].title,
        totalMeditaions: meditations[index].track.length,
        totalMeditationsDone: 0,
      });
    }

    const result: JSX.Element[] = [];
    for (let i = 0; i < meditationCounter.length; i++) {
      let counter = 0;
      for (let j = 0; j < userTrackType.length; j++) {
        if (meditationCounter[i].objectId === userTrackType[j]) {
          counter++;
        }
      }
      meditationCounter[i].totalMeditationsDone = counter;
    }
    for (let index = 0; index < meditationCounter.length; index++) {
      const { title, totalMeditaions, totalMeditationsDone, objectId, poster } =
        meditationCounter[index];
      if (objectId !== "d47763d0-d330-4eb1-bba0-69e1d233b94d") {
        result.push(
          <ImprovementCard
            title={title}
            poster={poster}
            totalMeditaions={totalMeditaions}
            totalMeditationDone={totalMeditationsDone}
            key={objectId}
          />
        );
      }
    }
    return result;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Typography mode={"regularBody16"} style={styles.title}>
          {"پیشرفت شما"}
        </Typography>
        {renderImprovementCard()}
      </View>
    </ScrollView>
  );
}
