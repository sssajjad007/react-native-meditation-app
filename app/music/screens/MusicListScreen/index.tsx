//@ts-nocheck
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Container, storage, Typography } from "../../../library";
import { Scroller } from "../../../library/Scroller";
import { MusicCardComponent } from "../../components/MusicCard";
import { styles } from "./styles";

export function MusicList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [musics, setMusics] = useState([]);
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const route = useRoute<any>();

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
    setIsPremium(isUSerPremium);

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
        {/* <View style={styles.header}>
        <Typography mode={"boldBody16"} style={{ right: 10 }}>
          {title}
        </Typography>
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
      </View> */}
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
