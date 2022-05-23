import { View, ActivityIndicator, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { styles } from "./styles";
import { Button, THEME, Typography } from "../../../library";
import { digitsEnToFa, numberToWords } from "@persian-tools/persian-tools";
import { assets } from "../../assets";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAllIntroductionMeditation } from "../../usecases";
import { IIntroductionMeditationProps } from "../../types/components";

export function IntroductionMeditation(props: IIntroductionMeditationProps) {
  const { loading } = props;
  const isFocused = useIsFocused();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const iconCb = useCallback(
    () => (
      <Image
        source={assets.homePlayIcon}
        style={{ width: 24, height: 24 }}
        resizeMode={"contain"}
      />
    ),
    []
  );

  const [introductionMeditations, setIntroductionMeditation] = useState({
    isPremium: false,
    poster: "",
    objectId: "",
    totalNumber: 0,
    totalNumberDone: -1,
    id: "",
    title: "",
    url: "",
  });
  async function init() {
    const { result } = await getAllIntroductionMeditation();
    setIntroductionMeditation({
      isPremium: result.isPremium,
      poster: result.poster,
      objectId: result.objectId,
      totalNumber: result.totalNumber,
      totalNumberDone: result.totalNumberDone,
      id: result.id,
      title: result.title,
      url: result.url,
    });
  }

  useEffect(() => {
    if (!loading) {
      init();
    }
  }, [isFocused, loading]);

  return loading ? (
    <View style={styles.introductory}>
      <ActivityIndicator
        size={30}
        color={THEME.COLORS.PRIMARY.NORMAL}
        style={{ flex: 1 }}
      />
    </View>
  ) : (
    <View style={styles.introductory}>
      <View style={styles.introductoryBody}>
        <Typography mode={"regularSubhead20"}>{"مدیتیشن مقدماتی"}</Typography>
        <View style={styles.introductoryDetails}>
          <Typography mode={"lightSub10"}>
            {introductionMeditations.totalNumber === 0
              ? `-- جلسه`
              : `${digitsEnToFa(introductionMeditations.totalNumber)} جلسه`}
          </Typography>
          <View style={styles.lineVertical} />
          <Typography mode={"boldSub12"}>{"مبتدی"}</Typography>
        </View>
        <View style={styles.introductoryDetails}>
          <Button
            mode={"text"}
            Icon={iconCb}
            rippleColor={"lightGrey"}
            size={"small"}
            loading={
              introductionMeditations.totalNumberDone === -1 ? true : false
            }
            onPress={() => {
              if (introductionMeditations.isPremium === false) {
                navigation.push("ShopScreen");
                return;
              }
              navigation.push("Player", {
                courseId: introductionMeditations.objectId,
                id: introductionMeditations.id,
                title: introductionMeditations.title,
                url: introductionMeditations.url,
                mode: "course",
                type: "introductory",
              });
            }}
          >
            {introductionMeditations.totalNumberDone === -1 ? (
              <ActivityIndicator />
            ) : (
              `جلسه ${numberToWords(introductionMeditations.totalNumberDone, {
                ordinal: true,
              })}`
            )}
          </Button>
        </View>
      </View>
      <View style={styles.introductoryCard}>
        {introductionMeditations.poster ? (
          <Image
            source={{ uri: introductionMeditations.poster }}
            style={{ width: 120, height: 100 }}
            // resizeMode={"contain"}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
}
