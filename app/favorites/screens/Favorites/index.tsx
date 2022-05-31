import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Container, THEME, Typography } from "../../../library";
import { LikeIcon } from "../../../library/Icon";
import { Scroller } from "../../../library/Scroller";
import { FavCard } from "../../components/FavCard";
import { IFavTracksList } from "../../types/usecases";
import { deleteFavTracks } from "../../usecases";
import { retrieveFavTracks } from "../../usecases/getFavTracks";
import { styles, THEME_COLORS_PRIMARY_NORMAL } from "./styles";

export function Favorites() {
  const isFocused = useIsFocused();
  const [empty, setEmpty] = useState<boolean>(true);
  const [tracks, setTracks] = useState<IFavTracksList[]>([]);
  const [change, setChange] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  async function retrieveFavTrack() {
    const favTracksList = await retrieveFavTracks();
    setTracks(favTracksList);
    setLoading(false);
    if (favTracksList.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }
  async function unFavPress(objectId: string) {
    setChange(true);
    await deleteFavTracks(objectId);
    setChange(false);
  }
  useEffect(() => {
    retrieveFavTrack();
  }, [change, isFocused]);
  function renderFavTrack() {
    const result: JSX.Element[] = [];
    for (let index = 0; index < tracks.length; index++) {
      const { objectId, title, type, url } = tracks[index];
      result.push(
        <FavCard
          objectId={objectId}
          url={url}
          key={objectId}
          title={title}
          description={type}
          onPress={onCardPress}
          unLikePress={unFavPress}
        />
      );
    }
    return result;
  }
  async function onCardPress(objectId: string, title: string, url: string) {
    navigation.push("Player", { id: objectId, title: title, url: url });
  }
  function render() {
    if (empty && !loading) {
      return (
        <View style={styles.empty}>
          <LikeIcon size={134} />
          <Typography
            mode={"regularSub12"}
            style={{ color: THEME.COLORS.LABEL.SECONDARY }}
          >
            {"فعلا جلسه ای رو لایک نکردید!"}
          </Typography>
        </View>
      );
    }
    if (!empty && !loading) {
      return <Scroller>{renderFavTrack()}</Scroller>;
    }
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={THEME_COLORS_PRIMARY_NORMAL} />
        </View>
      );
    }
  }
  return <Container headerTitle={"جلسات مورد علاقه"}>{render()}</Container>;
}
