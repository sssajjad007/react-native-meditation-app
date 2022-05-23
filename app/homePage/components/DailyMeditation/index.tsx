import { View, Image, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button, THEME } from "../../../library";
import { styles } from "./styles";
import { GetAllDailyMeditation } from "../../usecases";
import { assets } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IDailyMeditationProps } from "../../types/components";

export function DailyMeditation(props: IDailyMeditationProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { loading } = props;
  const [dailyMeditation, setDailyMeditation] = useState({
    title: "",
    url: "",
    objectId: " ",
    poster: "",
    objectIdCategory: "",
  });
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
  async function DailyMeditation() {
    const { dailyCourse } = await GetAllDailyMeditation();
    setDailyMeditation(dailyCourse);
  }
  useEffect(() => {
    if (!loading) {
      DailyMeditation();
    }
  }, [loading]);

  return loading ? (
    <View style={styles.dailyMeditation}>
      <ActivityIndicator
        size={30}
        color={THEME.COLORS.PRIMARY.NORMAL}
        style={{ flex: 1 }}
      />
    </View>
  ) : (
    <View style={styles.dailyMeditation}>
      <View style={styles.image}>
        {dailyMeditation.poster ? (
          <Image
            source={{ uri: dailyMeditation.poster }}
            style={styles.dailyImage}
            resizeMode={"stretch"}
          />
        ) : (
          <ActivityIndicator size="small" color={THEME.COLORS.PRIMARY.NORMAL} />
        )}
      </View>
      <View style={styles.playMeditation}>
        <Button
          loading={dailyMeditation.title === "" ? true : false}
          mode={"text"}
          rippleColor={"lightGrey"}
          size={"medium"}
          Icon={iconCb}
          onPress={() => {
            navigation.push("Player", {
              courseId: dailyMeditation.objectIdCategory,
              id: dailyMeditation.objectId,
              // title: dailyMeditation.title,
              title: "مدیتیشن روزانه",
              url: dailyMeditation.url,
              mode: "daily",
              type: "daily",
            });
          }}
        >
          {"شروع کنید"}
        </Button>
      </View>
    </View>
  );
}
