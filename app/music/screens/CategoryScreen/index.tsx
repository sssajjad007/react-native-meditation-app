//@ts-nocheck
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Container, Typography } from "../../../library";
import { CategoryTile } from "../../components/CategoryTile";
import { getAllMusic } from "../../usecases";
import * as Analytics from "expo-firebase-analytics";

import { styles } from "./styles";
export function MusicScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const isFocused = useIsFocused();

  const [musicCategory, setMusicCategory] = useState([]);

  async function musicTabEvent() {
    try {
      await Analytics.logEvent("navigationbar_music_click");
    } catch (error) {
      console.log(error);
    }
  }

  async function getMusics() {
    const { AllMusic } = await getAllMusic();
    // console.log(AllMusic[0].track);
    setMusicCategory(AllMusic);
  }
  useEffect(() => {
    if (isFocused) {
      musicTabEvent();
    }
  }, [isFocused]);

  useEffect(() => {
    getMusics();
  }, []);
  function renderer() {
    if (musicCategory.length === 0 || musicCategory === undefined) {
      return (
        <Typography mode={"boldBody18"} style={{ textAlign: "right" }}>
          {"در حال بارگذاری..."}
        </Typography>
      );
    }
    const result: JSX.Element[] = [];
    for (let index = 0; index < musicCategory.length; index++) {
      const element = musicCategory[index];
      result.push(
        <CategoryTile
          title={element.title}
          url={element.poster}
          section={element.track.length}
          onPress={() => {
            navigation.push("MusicList", {
              track: element.track,
              title: element.title,
              poster: element.poster,
            });
          }}
          key={element.objectId}
        />
      );
    }
    return result;
  }
  return (
    <Container>
      <View style={styles.header}>
        <Typography mode={"boldBody16"} style={{ textAlign: "right" }}>
          {"موسیقی"}
        </Typography>
      </View>
      <View style={styles.tileContainer}>{renderer()}</View>
    </Container>
  );
}
