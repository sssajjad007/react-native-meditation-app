import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { storage, THEME, Typography } from "../../../library";
import { Scroller } from "../../../library/Scroller";
import { Card } from "../../components/Card";
import { IMeditation } from "../../types/adapters";
import { getIntroductoryMeditation } from "../../usecases/getIntroductoryMeditation";
import { styles } from "./styles";

export function Introductory() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [tracks, setTracks] = useState<IMeditation[]>([]);
  const [poster, setPoster] = useState("");
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [courseId, setCourseId] = useState("");
  async function GetIntroductoryMeditation() {
    const isUSerPremium = storage.retrieve("is_premium", "boolean");
    const { tracks, courseId, poster } = await getIntroductoryMeditation();
    if (isUSerPremium != undefined) {
      setIsPremium(isUSerPremium);
    }
    setPoster(poster);
    setTracks(tracks);
    setCourseId(courseId);
  }

  useEffect(() => {
    GetIntroductoryMeditation();
  }, []);
  function renderLessons() {
    if (tracks.length === 0 || isPremium === undefined) {
      return <ActivityIndicator color={THEME.COLORS.PRIMARY.NORMAL} />;
    }
    const result: JSX.Element[] = [];
    for (let index = 0; index < tracks.length; index++) {
      let coursePremium = false;
      const { objectId, title, url } = tracks[index];
      if (isPremium === false) {
        if (index >= Math.floor(tracks.length / 10)) {
          coursePremium = true;
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
          courseId={courseId}
          coursePremium={coursePremium}
        />
      );
    }
    return result;
  }

  async function onCardPress(
    objectId: string,
    title: string,
    url: string,
    courseId: string | undefined
  ) {
    navigation.push("Player", {
      id: objectId,
      title: title,
      url: url,
      courseId: courseId,
      mode: "course",
      type: "introductory",
    });
  }
  return (
    <Scroller>
      <View style={styles.imageContainer}>
        {poster ? (
          <Image
            source={{ uri: poster }}
            resizeMode={"cover"}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <ActivityIndicator size="small" color="blue" />
        )}
      </View>
      <View style={styles.cardContainer}>
        <Typography
          mode={"mediumBody18"}
          style={{ alignSelf: "flex-end", paddingVertical: 24 }}
        >
          {"مدیتیشن مقدماتی"}
        </Typography>
        {renderLessons()}
      </View>
    </Scroller>
  );
}
