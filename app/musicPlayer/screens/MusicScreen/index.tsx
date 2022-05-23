import React, { useEffect, useState, useRef } from "react";
import { styles } from "./styles";
import { View, Image } from "react-native";
import TrackPlayer, {
  Capability,
  useProgress,
  useTrackPlayerEvents,
  Event,
  RepeatMode,
} from "react-native-track-player";
import * as Analytics from "expo-firebase-analytics";

import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { storage, THEME, Typography } from "../../../library";
import {
  BackwardIcon,
  ForwardIcon,
  LikeBoldIcon,
  PauseIcon,
  RepeatBoldIcon,
  RepeatIcon,
  ShufFleBoldIcon,
  ShufleIcon,
  UnLikeIcon,
} from "../../../library/Icon";
import { MusicBackground } from "../../assets";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CreateTrackDone } from "../../adapters/network";
import { PutFavTrack, retrieveFavTracks } from "../../usecases";
import { deleteFavTracks } from "../../usecases/deleteFavTracks";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { SafeAreaView } from "react-native-safe-area-context";
TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [
    Capability.Play,
    Capability.Pause,
    // Capability.Stop,
  ],
  compactCapabilities: [Capability.Play, Capability.Pause],
});
export function Player() {
  const onEndCalled = useRef(false);
  const [isUserPremium, setIsUserPremium] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [isFav, setIsFav] = useState<boolean>(false);
  const routes = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { id, title, url, courseId, mode, musics, type } = routes.params;
  const [track, setTrack] = useState({
    id,
    title,
    url,
    courseId,
    artist: "",
  });
  const likeDisabled = mode === "lessson" || mode === "daily" ? true : false;
  const meditationMode =
    mode === "lessson" || mode === "course" || mode === "daily" ? true : false;
  const setUpTrackPlayer = async () => {
    try {
      // console.log("track",track)

      await TrackPlayer.setupPlayer();
      if (musics) {
        await TrackPlayer.add(musics);
        // @ts-expect-error
        await TrackPlayer.skip(musics.findIndex((track) => track.id === id));
      } else {
        await TrackPlayer.add(track);
      }
    } catch (e) {
      console.log(e, "error");
    }
  };
  const [playerState, setPlayerState] = useState<string>("");
  const events = [Event.PlaybackError, Event.RemotePlay, Event.RemotePause];
  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn("An error occured while playing the current track.");
    }
    if (event.type === Event.RemotePause) {
      setPlayerState("paused");
    }
    if (event.type === Event.RemotePlay) {
      setPlayerState("playing");
    }
  });
  useEffect(() => {
    async function prepare() {
      const userPremium = storage.retrieve("is_premium", "boolean");
      if (userPremium) {
        setIsUserPremium(userPremium);
      }
      // const track = await getTrack();
      await setUpTrackPlayer();
      getFavTracks();
      // setTrack(track);
    }
    prepare();

    return () => TrackPlayer.destroy();
  }, []);
  function likeRenderer() {
    if (likeDisabled) {
      return <View style={{ width: 24, height: 24 }} />;
    }
    if (isFav) {
      return (
        <LikeBoldIcon
          size={24}
          onPress={() => {
            onUnFavPress();
          }}
        />
      );
    }
    if (!isFav) {
      return (
        <UnLikeIcon
          size={24}
          onPress={() => {
            onFavPress();
          }}
        />
      );
    }
  }
  const { duration, position } = useProgress();

  async function playEvent() {
    try {
      await Analytics.logEvent(`${type}_played`);
      // console.log(`${type}_played`);
    } catch (error) {
      console.log(error);
    }
  }
  async function finishEvent() {
    try {
      await Analytics.logEvent(`${type}_finished`);
      // console.log(`${type}_finished`);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    playEvent();
  }, []);

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
  async function CreateTrackDoneLog() {
    // console.log("CreateTrackDoneLog will call");
    const userId = storage.retrieve("user_id", "string");
    if (userId) {
      await CreateTrackDone(
        userId,
        track.id,
        track.courseId,
        Math.round(duration)
      );
    }
  }
  async function onEnd() {
    // console.log("onEnd will call");
    // console.log({ shuffle, repeat, musics: typeof musics });
    if (type) {
      finishEvent();
    }
    if (mode === "daily") {
      const date = new Date();
      const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
      // console.log({ today });
      storage.add("dailyPlayed", today);
    }
    if (shuffle) {
      await shuffleMusic();
      if (!isPlaying) {
        await TrackPlayer.play();
        setPlayerState("playing");
      }
      onEndCalled.current = false;
      return;
    }
    if (repeat) {
      if (!isPlaying) {
        await TrackPlayer.play();
        setPlayerState("playing");
      }
      onEndCalled.current = false;
      return;
    }
    if (musics) {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      const length = isUserPremium
        ? musics.length
        : Math.floor(musics.length / 10) - 1;
      // console.log({length, isUserPremium, trackIndex})
      // console.log("length", length, "trackIndex", trackIndex);
      if (!isUserPremium && trackIndex >= length) {
        await TrackPlayer.stop();
        navigation.push("ShopScreen");
        onEndCalled.current = false;

        return;
      }
      setTrack(musics[trackIndex + 1]);
      if (!isPlaying) {
        await TrackPlayer.play();
        setPlayerState("playing");
      }
      onEndCalled.current = false;
      return;
    }

    if (track.courseId) {
      await CreateTrackDoneLog();
    }
    navigation.goBack();
  }
  function toTime(timeInSec: number) {
    const time = Math.floor(timeInSec);
    const minutes = Math.floor(time / 60);
    const second = time % 60;
    return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
      second < 10 ? `0${second}` : `${second}`
    }`;
  }
  const isPlaying = playerState === "playing";
  async function onToggle() {
    try {
      if (isPlaying) {
        await TrackPlayer.pause();
        setPlayerState("paused");
      } else {
        await TrackPlayer.play();
        setPlayerState("playing");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function onSlidingComplete(value: number) {
    await TrackPlayer.seekTo(value);
  }
  async function forward() {
    const newPosition = position + 15;
    if (newPosition > duration) {
      await TrackPlayer.seekTo(duration);
    } else {
      await TrackPlayer.seekTo(newPosition);
    }
  }
  async function onRepeat() {
    if (shuffle) {
      return;
    }
    await TrackPlayer.setRepeatMode(
      !repeat ? RepeatMode.Track : RepeatMode.Off
    );
    onEndCalled.current = false;
    setRepeat(!repeat);
  }
  async function shuffleMusic() {
    // console.log(typeof musics);
    let random: number = 0;
    if (Array.isArray(musics)) {
      if (isUserPremium) {
        random = Math.floor(Math.random() * musics.length);
      } else {
        random = Math.floor(Math.random() * Math.ceil(musics.length / 10));
      }
      // console.log({ random, track: musics[random] });
      setTrack(musics[random]);
      await TrackPlayer.skip(random);
      await TrackPlayer.play();
    }
    // await retrieveRandomMusic(); // should retrieve random music from server here
    // await TrackPlayer.reset(); // clear track player music
    // await TrackPlayer.add(track); // add random track coming from server
    // await TrackPlayer.play();
  }
  function onShuffle() {
    if (repeat) {
      return;
    }
    setShuffle(!shuffle);
  }
  async function backward() {
    const newPosition = position - 15;
    if (newPosition < 0) {
      await TrackPlayer.seekTo(0);
    } else {
      await TrackPlayer.seekTo(newPosition);
    }
  }
  async function getFavTracks() {
    const { favTracks } = await retrieveFavTracks();
    setIsFav(favTracks.includes(track.id));
  }
  async function onFavPress() {
    await PutFavTrack(track.id);
    setIsFav(true);
  }
  async function onUnFavPress() {
    await deleteFavTracks(track.id);
    setIsFav(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBorder}>
          {likeRenderer()}
          <Typography mode={"mediumBody18"} style={{ color: "white" }}>
            {track?.title}
          </Typography>
          <AntDesign
            name="close"
            size={24}
            color="white"
            onPress={async () => {
              await TrackPlayer.destroy(); // TODO: stop player
              navigation.goBack();
            }}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={MusicBackground}
        />
      </View>
      <View style={styles.playerContainer}>
        <View style={styles.controller}>
          <View style={styles.duration}>
            <Typography mode={"mediumBody16"} style={{ color: "white" }}>
              {digitsEnToFa(toTime(position))}
            </Typography>
            <Typography mode={"mediumBody16"} style={{ color: "white" }}>
              {digitsEnToFa(toTime(duration))}
            </Typography>
          </View>
          <Slider
            style={styles.slider}
            value={position}
            onSlidingComplete={onSlidingComplete}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor={THEME.COLORS.PRIMARY.NORMAL}
            maximumTrackTintColor={THEME.COLORS.GREY.ICON}
            thumbTintColor={THEME.COLORS.PRIMARY.NORMAL}
            step={1}
          />
          <View style={styles.actions}>
            {!meditationMode ? (
              shuffle ? (
                <ShufFleBoldIcon onPress={onShuffle} size={24} />
              ) : (
                <ShufleIcon onPress={onShuffle} size={24} />
              )
            ) : null}
            <BackwardIcon onPress={backward} size={40} />

            <PauseIcon
              onPress={onToggle}
              name={isPlaying ? "Pause" : "Play"}
              size={80}
            />
            <ForwardIcon onPress={forward} size={40} />

            {!meditationMode ? (
              repeat ? (
                <RepeatBoldIcon onPress={onRepeat} size={24} />
              ) : (
                <RepeatIcon onPress={onRepeat} size={24} />
              )
            ) : null}
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}
