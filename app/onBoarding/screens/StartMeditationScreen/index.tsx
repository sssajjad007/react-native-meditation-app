import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState, useContext } from "react";
import { View, Text, Image } from "react-native";
import { Container, Paragraph, THEME, Typography } from "../../../library";
import { login } from "../../../library/authEvent";
import * as Analytics from "expo-firebase-analytics";
// import TrackPlayer, {
//   Capability,
//   useProgress,
//   useTrackPlayerEvents,
//   Event,
// } from "react-native-track-player";
import { styles } from "./styles";
import { CloseLightIcon, PauseIcon } from "../../../library/Icon";
import Slider from "@react-native-community/slider";

import { widthPercentageToDP } from "react-native-responsive-screen";
import { MusicBackground } from "../../assets";
const tracks = [
  {
    id: 1,
    url: "https://denjapp.com/public/uploads/track/1640727501593.mp3",
    title: "first song",
    artist: "deadmau5",
    album: "while(1<2)",
    genre: "Progressive House, Electro House",
    date: "2014-05-20T07:00:00+00:00", // RFC 3339
    artwork: "https://cdn01.zoomit.ir/2021/10/great-wall.jpg?w=1300", // Load artwork from the network
  },
];
// TrackPlayer.updateOptions({
//   stopWithApp: false,
//   capabilities: [
//     Capability.Play,
//     Capability.Pause,
//     // Capability.Stop,
//   ],
//   compactCapabilities: [Capability.Play, Capability.Pause],
// });

export function StartMeditation() {
  //   async function playEvent() {
  //     try {
  //       await Analytics.logEvent("onboarding_played");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   async function skipEvent() {
  //     try {
  //       await Analytics.logEvent("onboarding_skipped");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   async function finishEvent() {
  //     try {
  //       await Analytics.logEvent("onboarding_finished");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   const setUpTrackPlayer = async () => {
  //     try {
  //       await TrackPlayer.setupPlayer();
  //       await TrackPlayer.add(tracks);
  //       console.log("Tracks added");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   const [playerState, setPlayerState] = useState<string>("");
  //   const events = [Event.PlaybackError, Event.RemotePlay, Event.RemotePause];
  //   useTrackPlayerEvents(events, (event) => {
  //     if (event.type === Event.PlaybackError) {
  //       console.warn("An error occured while playing the current track.");
  //     }
  //     if (event.type === Event.RemotePause) {
  //       setPlayerState("paused");
  //     }
  //     if (event.type === Event.RemotePlay) {
  //       setPlayerState("playing");
  //     }
  //   });
  //   useEffect(() => {
  //     setUpTrackPlayer();

  //     return () => TrackPlayer.destroy();
  //   }, []);

  //   const { duration, position } = useProgress();
  //   useEffect(() => {
  //     if (duration > 0) {
  //       const intDuration = Math.floor(duration);
  //       const intPosition = Math.floor(position);
  //       if (intDuration === intPosition) {
  //         OnEnd();
  //       }
  //     }
  //   }, [duration, position]);
  //   // const { setValue } = useContext(AuthContext);
  //   async function OnEnd() {
  //     await finishEvent;
  //     login();
  //   }
  //   function toTime(timeInSec: number) {
  //     const time = Math.floor(timeInSec);
  //     const minutes = Math.floor(time / 60);
  //     const second = time % 60;
  //     return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
  //       second < 10 ? `0${second}` : `${second}`
  //     }`;
  //   }
  //   const isPlaying = playerState === "playing";
  //   async function onToggle() {
  //     try {
  //       if (isPlaying) {
  //         await TrackPlayer.pause();
  //         setPlayerState("paused");
  //       } else {
  //         await TrackPlayer.play();
  //         setPlayerState("playing");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   async function onSlidingComplete(value: number) {
  //     await TrackPlayer.seekTo(value);
  //   }
  //   // async function forward() {
  //   //   const newPosition = position + 15;
  //   //   if (newPosition > duration) {
  //   //     await TrackPlayer.seekTo(duration);
  //   //   } else {
  //   //     await TrackPlayer.seekTo(newPosition);
  //   //   }
  //   // }
  //   // async function backward() {
  //   //   const newPosition = position - 15;
  //   //   if (newPosition < 0) {
  //   //     await TrackPlayer.seekTo(0);
  //   //   } else {
  //   //     await TrackPlayer.seekTo(newPosition);
  //   //   }
  //   // }
  //   const navigation = useNavigation<NativeStackNavigationProp<any>>();
  //   const [play, setPlay] = useState<boolean>(false);
  return (
    <Container style={{ backgroundColor: THEME.COLORS.GREY.BACKGROUND }}>
      <View style={{ position: "absolute", top: 32, right: 24, zIndex: 10 }}>
        {/* <CloseLightIcon
          size={16}
          onPress={async () => {
            await skipEvent;
            login();
          }}
        /> */}
      </View>
      <View style={styles.titleContainer}>
        {/* {play ? (
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
        )} */}
      </View>
      <View style={styles.meditationPlayerContainer}>
        {true ? (
          <View style={styles.controller}>
            <View style={styles.duration}>
              {/* <Paragraph style={{ color: "white" }}>
                {toTime(position)}
              </Paragraph>
              <Paragraph style={{ color: "white" }}>
                {toTime(duration)}
              </Paragraph> */}
            </View>
            {/* <Slider
              style={styles.slider}
              value={position}
              onSlidingComplete={onSlidingComplete}
              minimumValue={0}
              maximumValue={duration}
              minimumTrackTintColor={THEME.COLORS.PRIMARY.NORMAL}
              maximumTrackTintColor={THEME.COLORS.GREY.ICON}
              thumbTintColor={THEME.COLORS.PRIMARY.LIGHT}
              step={1}
            /> */}
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
            {/* <PauseIcon
              size={110}
              onPress={async () => {
                onToggle();
                await playEvent();
                setPlay(true);
              }}
            /> */}
          </View>
        )}
      </View>
    </Container>
  );
}
