import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as Analytics from "expo-firebase-analytics";
import {
  View,
  Image,
  ActivityIndicator,
  BackHandler,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useBackHandler } from "@react-native-community/hooks";
import { Button, CustomBackdrop, storage, Typography } from "../../../library";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { getAllEmergencyMeditation, getAllTracks } from "../../usecases";
import { ProfileIcon, ShopBoldIcon, HomeShopIcon } from "../../../library/Icon";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { getIsPremium } from "../../usecases/getIsPremium";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DailyMeditation,
  DiscountCardComponent,
  InstagramCardComponent,
  IntroductionMeditation,
  ExitSheet,
} from "../../components";
import { IosAddToHome } from "../../components/IosAddToHome";
import { UAParser } from "ua-parser-js";
export function HomeScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const isSet = useRef(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [emergencyCourse, setEmergencyCourse] = useState([]);
  const [state, setState] = useState({
    course: [""],
    courseId: "",
    description: "",
    poster: "",
    title: "",
  });
  const snapPointsModal = useMemo(() => ["100%", "100%"], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const closeModal = useCallback(() => {
    // for ios modal
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    //for ios modal
    BottomSheetModalRef.current?.present();
  }, []);

  useBackHandler(() => {
    if (!isFocused) return false;
    if (exitModalOpen.current) {
      closeExitModalPress();
      return true;
    }
    handleExitModalPress();
    return true;
  });

  async function init() {
    await Promise.all([getAllTracks(), EmergencyMeditation()]);
    setLoading(false);
  }
  async function shopEvent() {
    try {
      await Analytics.logEvent("store_popup_click");
    } catch (error) {
      console.log(error);
    }
  }
  async function shopSkipEvent() {
    try {
      await Analytics.logEvent("store_popup_skipped");
    } catch (error) {
      console.log(error);
    }
  }
  async function profileEvent() {
    try {
      await Analytics.logEvent("profile_home_click");
    } catch (error) {
      console.log(error);
    }
  }
  async function homeTabEvent() {
    try {
      await Analytics.logEvent("navigationbar_home_click");
      // console.log("homeTabEvent");
    } catch (error) {
      console.log(error);
    }
  }

  async function EmergencyMeditation() {
    const { emergencyMeditation } = await getAllEmergencyMeditation();
    if (emergencyMeditation) {
      setState({
        course: emergencyMeditation.course,
        courseId: emergencyMeditation.objectId,
        description: emergencyMeditation.description,
        poster: emergencyMeditation.poster,
        title: emergencyMeditation.title,
      });
      const result: any = [];
      for (let index = 0; index < emergencyMeditation.course.length; index++) {
        if (emergencyMeditation.course[index]) {
          const allCourse = storage.retrieve(
            emergencyMeditation.course[index],
            "string"
          );
          if (allCourse) {
            result.push(JSON.parse(allCourse));
          }
        }
      }
      setEmergencyCourse(result);
    }
  }

  function shopPopUpShown() {
    const showIosModal = storage.retrieve("show_ios_modal", "boolean");
    const isPremium = storage.retrieve("is_premium", "boolean");
    const shopPopUpShown = storage.retrieve("shop_pop_up_shown", "boolean");
    if (shopPopUpShown === true && isPremium === false) {
      storage.add("shop_pop_up_shown", false);
      handlePresentModalPress(); //shop
    }

    if (!showIosModal) {
      storage.add("show_ios_modal", true);
      // use ua parser safely
      const ua = new UAParser();
      ua.setUA(navigator?.userAgent);
      if (ua.getOS().name === "iOS") {
        setModalVisible(true);

        // onCollapsePressModal(); //ios
      }
    }
    return;
  }
  async function getData() {
    await getIsPremium();
    shopPopUpShown();
  }
  useEffect(() => {
    if (isFocused) {
      homeTabEvent();
      getData();
      if (!isSet.current) {
        init();
        isSet.current = true;
      }
    }
  }, [isFocused]);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const exitSheetModalRef = useRef<BottomSheetModal>(null);
  const exitModalOpen = useRef<boolean>(false);

  function handleExitModalPress() {
    //for exit modal
    exitModalOpen.current = true;
    exitSheetModalRef.current?.present();
  }
  function closeExitModalPress() {
    //for exit modal
    exitModalOpen.current = false;
    exitSheetModalRef.current?.close();
  }
  const snapPoints = useMemo(() => [270, 270], []);
  const handlePresentModalPress = useCallback(() => {
    //for shop modal
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSnapPress = useCallback(() => {
    //for shop modal
    bottomSheetModalRef.current?.close();
  }, []);
  function onPress() {
    setModalVisible(!modalVisible);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <View style={styles.iconsContainer}>
            <HomeShopIcon
              size={24}
              onPress={() => {
                navigation.push("ShopScreen");
              }}
            />
            <ProfileIcon
              size={24}
              onPress={async () => {
                await profileEvent();
                navigation.push("Profile");
              }}
            />
          </View>

          <Typography mode={"regularBody16"} style={{ textAlign: "right" }}>
            {"مدیتیشن روزانه"}
          </Typography>
        </View>
        <DailyMeditation loading={loading} />
        <DiscountCardComponent />
        <IntroductionMeditation loading={loading} />
        <View style={styles.emergency}>
          <View style={styles.emergencyBody}>
            <Typography mode={"regularSubhead20"}>
              {"مدیتیشن اضطراری"}
            </Typography>
            <View style={styles.emergencyDetails}>
              <Typography mode={"lightSub10"}>
                {emergencyCourse.length === 0
                  ? `-- جلسه`
                  : `${digitsEnToFa(emergencyCourse.length)} جلسه`}
              </Typography>
              <View style={styles.lineVertical} />
              <Typography mode={"boldSub12"}>{"خستگی، خشم، ترس"}</Typography>
            </View>
            <View style={styles.emergencyDetails}>
              <Button
                mode={"text"}
                rippleColor={"lightGrey"}
                size={"small"}
                onPress={() => {
                  navigation.push("MeditationCourse", {
                    objectId: state.courseId,
                    track: state.course,
                    title: state.title,
                    poster: state.poster,
                    description: state.description,
                  });
                }}
              >
                {"مشاهده همه"}
              </Button>
            </View>
          </View>
          <View style={styles.emergencyCard}>
            {state.poster ? (
              <Image
                // source={{ uri: introductionPoster }}
                source={{ uri: state.poster }}
                style={styles.emergencyImage}
                resizeMode={"contain"}
              />
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </View>
        <InstagramCardComponent />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          backdropComponent={(props) => (
            <BottomSheetBackdrop pressBehavior={"close"} {...props} />
          )}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableHandlePanningGesture={false}
          handleIndicatorStyle={{ backgroundColor: "transparent" }}
        >
          <BottomSheetView
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View style={styles.bottomSheetHeader}>
              <View style={styles.bottomSheetTitle}>
                <ShopBoldIcon size={32} />
                <Typography mode={"mediumBody18"} style={{ paddingRight: 8 }}>
                  {"دنج پلاس"}
                </Typography>
              </View>
              <View style={styles.lineHorizontal} />
            </View>
            <View
              style={{
                width: "90%",
                flexDirection: "column",
              }}
            >
              <Typography mode={"mediumBody18"}>
                {"برای دسترسی به تمام دوره ها اشتراک دنج را خریداری کنید."}
              </Typography>
              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  marginTop: heightPercentageToDP(2),
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  mode={"contained"}
                  size={"xMedium"}
                  rippleColor={"lightGrey"}
                  onPress={async () => {
                    await shopEvent();
                    navigation.push("ShopScreen");
                    handleSnapPress();
                  }}
                >
                  {"برو به فروشگاه"}
                </Button>
                <Button
                  mode={"outlined"}
                  size={"xSmall"}
                  rippleColor={"lightGrey"}
                  onPress={async () => {
                    await shopSkipEvent();
                    handleSnapPress();
                  }}
                >
                  {"فعلا نه"}
                </Button>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
        <BottomSheetModal
          ref={exitSheetModalRef}
          index={1}
          backdropComponent={(props) => (
            <BottomSheetBackdrop pressBehavior={"close"} {...props} />
          )}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableHandlePanningGesture={false}
          handleIndicatorStyle={{ backgroundColor: "transparent" }}
        >
          <ExitSheet
            onCancelPress={closeExitModalPress}
            onExitPress={() => {
              BackHandler.exitApp();
            }}
          />
        </BottomSheetModal>
        <Modal
          // ref={BottomSheetModalRef}
          // snapPoints={snapPointsModal}
          // backdropComponent={CustomBackdrop}
          // detached={true}
          // bottomInset={0}
          // style={styles.modal}
          // index={1}
          // enablePanDownToClose={false}
          // handleIndicatorStyle={{ backgroundColor: "transparent" }}
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          // onRequestClose={() => {
          //   setModalVisible(!modalVisible);
          // }}
        >
          <IosAddToHome CloseModal={onPress} />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
