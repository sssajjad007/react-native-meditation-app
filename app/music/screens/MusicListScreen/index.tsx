import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Container, storage, Typography } from "../../../library";
import { Scroller } from "../../../library/Scroller";
import { MusicCardComponent } from "../../components/MusicCard";
import { IMusicProp, ProfileScreenRouteProp } from "../../types/screen";
import { styles } from "./styles";

export function MusicList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [musics, setMusics] = useState<IMusicProp[]>([
    { duration: 0, id: "", title: "", url: "" },
  ]);
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const route = useRoute<ProfileScreenRouteProp>();

  const track = route.params?.track || [];
  const title = route.params?.title || "";
  const poster = route.params?.poster || "";

  function renderer() {
    const result: JSX.Element[] = [];
    if (musics.length === 0 || isPremium === undefined) {
      return (
        <Typography mode={"boldBody18"}>{"در حال بارگذاری..."}</Typography>
      );
    }
    for (let index = 0; index < musics.length; index++) {
      let coursePremium = false;
      if (isPremium === false) {
        if (index >= Math.floor(musics.length / 10)) {
          coursePremium = true;
        }
      }
      const element = musics[index];
      result.push(
        <MusicCardComponent
          title={element.title}
          key={element.id}
          coursePremium={coursePremium}
          onPress={() => {
            navigation.push("Player", {
              title: element.title,
              url: element.url,
              id: element.id,
              musics: musics,
            });
          }}
        />
      );
    }
    return result;
  }
  async function retriveTracksDetails() {
    const isUSerPremium = storage.retrieve("is_premium", "boolean");
    const result: any = [];
    if (isUSerPremium != undefined) {
      setIsPremium(isUSerPremium);
    }
    for (let index = 0; index < track.length; index++) {
      if (track[index]) {
        const singleTrack = storage.retrieve(track[index], "string");
        if (singleTrack) {
          const parsedSingleTrack = JSON.parse(singleTrack);

          result.push({
            id: parsedSingleTrack.objectId,
            title: parsedSingleTrack.title,
            url: parsedSingleTrack.url,
            artist: "",
          });
        } else return;
      } else return;
    }
    setMusics(result);
  }
  useEffect(() => {
    retriveTracksDetails();
  }, []);

  return (
    <Container headerTitle={title}>
      <Scroller>
        <View style={styles.assets}>
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode={"contain"}
            source={{
              uri: poster,
            }}
          />
        </View>
        <View style={styles.cardContainer}>{renderer()}</View>
      </Scroller>
    </Container>
  );
}
