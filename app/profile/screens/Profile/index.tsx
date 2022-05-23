import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Platform } from "react-native";
import {
  THEME,
  Typography,
  openGallery,
  uploadFile,
  storage,
  toString,
} from "../../../library";
import { Improvement } from "../Improvement";
import { styles } from "./styles";
import { ArrowRightIcon, SettingIcon } from "../../../library/Icon";
import { retriveMeditationDetails } from "../../usecases";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { ProfileImage } from "../../assets";
import { SafeAreaView } from "react-native-safe-area-context";
export function Profile() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [meditationDuration, setMeditationDuration] = useState(0);
  const [meditationDays, setMeditationDays] = useState(0);
  const [userTracksDoneLength, setUserTracksDoneLength] = useState(0);
  const [profileUrl, setProfileUrl] = useState(
    storage.retrieve("avatar", "string")
  );
  async function getMeditaionDetails() {
    const { userMeditatedDays, userMeditatedDuration, userTracksDoneLength } =
      await retriveMeditationDetails();

    const hour = Math.floor(userMeditatedDuration / 60);
    setMeditationDuration(hour);
    setMeditationDays(userMeditatedDays.length);
    setUserTracksDoneLength(userTracksDoneLength);
  }
  useEffect(() => {
    getMeditaionDetails();
  }, []);
  async function uploadProfileToServer() {
    try {
      const path = await openGallery();
      const userId = storage.retrieve("user_id", "string") || "";
      const response = await uploadFile({
        path,
        type: "image",
        userId,
      });
      
      const imageUrl = toString(response.payload);
      setProfileUrl(imageUrl);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <View style={styles.topBar}>
            <SettingIcon
              size={24}
              onPress={() => {
                navigation.push("Setting");
              }}
            />
            <Typography mode={"boldBody16"}>{"مدیتیشن های شما"}</Typography>
            <BorderlessButton
              onPress={() => {
                navigation.goBack();
              }}
              rippleColor={"rgba(53,53,53,0.4)"}
              hitSlop={{ horizontal: 10, vertical: 10 }}
              borderless
            >
              <ArrowRightIcon size={24} />
            </BorderlessButton>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={uploadProfileToServer}>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.imageSize}
                resizeMode={"stretch"}
                source={profileUrl ? { uri: profileUrl } : ProfileImage}
              />
              <View style={styles.profileCameraBox}>
                <Ionicons name="ios-camera" size={22} color={"white"} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.meditationsContainer}>
          <View style={styles.meditationValue}>
            <View style={styles.meditationDetails}>
              <Typography
                mode={"boldHeadline22"}
                style={{ color: THEME.COLORS.INFO }}
              >
                {digitsEnToFa(meditationDuration)}
              </Typography>
            </View>
            <View style={styles.meditationDetails}>
              <Typography
                mode={"boldHeadline22"}
                style={{ color: THEME.COLORS.INFO }}
              >
                {digitsEnToFa(userTracksDoneLength)}
              </Typography>
            </View>
            <View style={styles.meditationDetails}>
              <Typography
                mode={"boldHeadline22"}
                style={{ color: THEME.COLORS.INFO }}
              >
                {digitsEnToFa(meditationDays)}
              </Typography>
            </View>
          </View>
          <View style={styles.meditationTitle}>
            <View style={styles.meditationDetails}>
              <Typography
                mode={"regularSub12"}
                style={{ color: THEME.COLORS.INFO }}
              >
                {"دقیقه مدیتیشن"}
              </Typography>
            </View>
            <View style={styles.meditationDetails}>
              <Typography
                mode={"regularSub12"}
                style={{ color: THEME.COLORS.INFO }}
              >
                {"مدیتیشن"}
              </Typography>
            </View>
            <View style={styles.meditationDetails}>
              <Typography
                mode={"regularSub12"}
                style={{ color: THEME.COLORS.INFO }}
              >
                {"روز مدیتیشن"}
              </Typography>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabNavigation}>
        <Improvement />
      </View>
    </SafeAreaView>
  );
}
