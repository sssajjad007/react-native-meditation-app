import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image } from "react-native";
import { Container, Paragraph, THEME, Typography } from "../../../library";
import { login } from "../../../library/authEvent";
import { Audio, AVPlaybackStatus } from "expo-av";
import { MusicBackground } from "../../assets";

import * as Analytics from "expo-firebase-analytics";

import { styles } from "./styles";
import { CloseLightIcon, PauseIcon } from "../../../library/Icon";
import Slider from "@react-native-community/slider";
import { widthPercentageToDP } from "react-native-responsive-screen";
const tracks = {
  id: 1,
  url: "https://denjapp.com/public/uploads/track/1640727501593.mp3",
  title: "first song",
  artist: "deadmau5",
  album: "while(1<2)",
  genre: "Progressive House, Electro House",
  date: "2014-05-20T07:00:00+00:00", // RFC 3339
  artwork: "https://cdn01.zoomit.ir/2021/10/great-wall.jpg?w=1300", // Load artwork from the network
};

export function StartMeditation() {
  const onEndCalled = useRef(false);
  const [playerState, setPlayerState] = useState<string>("");
  const isPlaying = playerState === "playing";

  const [play, setPlay] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  function setPlayBackStatus(status: AVPlaybackStatus) {
    // @ts-expect-error
    const dur = Number(status.durationMillis);

    // @ts-expect-error
    const pos = Number(status.positionMillis);

    if (!isNaN(dur) && !duration) {
      setDuration(dur / 1000);
    }
    if (!isNaN(pos)) {
      setPosition(pos / 1000);
    }
  }
  const setUpTrackPlayer = async () => {
    try {
      const { sound: expoSound, status } = await Audio.Sound.createAsync(
        { uri: tracks.url },
        { shouldPlay: false }
      );
      expoSound?.setOnPlaybackStatusUpdate(setPlayBackStatus);

      setSound(expoSound);
    } catch (e) {
      console.log(e, "error");
    }
  };
  async function playEvent() {
    try {
      await Analytics.logEvent("onboarding_played");
    } catch (error) {
      console.log(error);
    }
  }
  async function skipEvent() {
    try {
      await Analytics.logEvent("onboarding_skipped");
    } catch (error) {
      console.log(error);
    }
  }
  async function finishEvent() {
    try {
      await Analytics.logEvent("onboarding_finished");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // console.log({ duration, position, onEndCalled: onEndCalled.current });
    if (duration > 0) {
      const intDuration = Math.floor(duration);
      const intPosition = Math.floor(position);

      if (intDuration === intPosition && !onEndCalled.current) {
        onEndCalled.current = true;
        onEnd();
      }
    }
  }, [duration, position]);
  useEffect(() => {
    async function prepare() {
      // const track = await getTrack();
      await setUpTrackPlayer();
      // setTrack(track);
    }
    prepare();

    return () => {
      sound?.unloadAsync();
      sound?.setOnPlaybackStatusUpdate(null);
    };
  }, []);
  function toTime(timeInSec: number) {
    const time = Math.floor(timeInSec);
    const minutes = Math.floor(time / 60);
    const second = time % 60;
    return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
      second < 10 ? `0${second}` : `${second}`
    }`;
  }
  async function onEnd() {
    login();
  }
  async function onToggle() {
    if (!sound) {
      return;
    }
    try {
      if (isPlaying) {
        await sound.pauseAsync();
        setPlayerState("paused");
      } else {
        await sound.playAsync();
        setPlayerState("playing");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function onSlidingComplete(value: number) {
    await sound?.setPositionAsync(value * 1000);
  }
  return (
    <Container style={{ backgroundColor: THEME.COLORS.GREY.BACKGROUND }}>
      <View style={{ position: "absolute", top: 32, right: 24, zIndex: 10 }}>
        <CloseLightIcon
          size={16}
          onPress={async () => {
            // await skipEvent;
            login();
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        {play ? (
          <View
            style={{
              top: 80,
              height: 380,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={MusicBackground}
            />
            <View
              style={{
                position: "absolute",
                right: widthPercentageToDP(50) - 144 / 2 - 6,
              }}
            >
              {isPlaying ? (
                <PauseIcon size={144} name={"Pause"} onPress={onToggle} />
              ) : (
                <PauseIcon size={144} name={"Play"} onPress={onToggle} />
              )}
            </View>
          </View>
        ) : (
          <View style={{ top: "60%" }}>
            <Typography mode={"regularHeadline22"} style={[styles.textAlign]}>
              {"صدای گوشیتون رو روشن کنید و بیاید از اینجا شروع کنیم."}
            </Typography>
          </View>
        )}
      </View>
      <View style={styles.meditationPlayerContainer}>
        {play ? (
          <View style={styles.controller}>
            <View style={styles.duration}>
              <Paragraph style={{ color: "white" }}>
                {toTime(position)}
              </Paragraph>
              <Paragraph style={{ color: "white" }}>
                {toTime(duration)}
              </Paragraph>
            </View>
            <Slider
              style={styles.slider}
              value={position}
              onSlidingComplete={onSlidingComplete}
              minimumValue={0}
              maximumValue={duration}
              minimumTrackTintColor={THEME.COLORS.PRIMARY.NORMAL}
              maximumTrackTintColor={THEME.COLORS.GREY.ICON}
              thumbTintColor={THEME.COLORS.PRIMARY.LIGHT}
              step={1}
            />
            {/* <View style={styles.actions}>
              <ShufleIcon onPress={backward} size={20} />
              <BackwardIcon onPress={backward} size={40} />
              <PauseIcon
                onPress={onToggle}
                name={isPlaying ? "Pause" : "Play"}
                size={80}
              />
              <ForwardIcon onPress={forward} size={40} />
              <RepeatIcon onPress={forward} size={20} />
            </View> */}
          </View>
        ) : (
          <View style={{ marginBottom: 100 }}>
            <PauseIcon
              size={110}
              onPress={async () => {
                onToggle();
                // await playEvent();
                setPlay(true);
              }}
            />
          </View>
        )}
      </View>
    </Container>
  );
}
