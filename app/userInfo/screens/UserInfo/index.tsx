import React, { useCallback, useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { toGregorian } from "jalaali-js";
import { Button, Input, storage, Tap, THEME } from "../../../library";
import Modal from "react-native-modal";
import {
  BorderlessButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { styles } from "./styles";
import { GenderModal } from "../GenderModal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ArrowRightIcon, EditIcon } from "../../../library/Icon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WheelPicker } from "../BirthDayPicker";
import { WomanImage } from "../../assets";
import { retrieveProfileName } from "../../usecases/retrieveProfileName";
import { IUserInfo } from "../../types";
import { UpdateProfile } from "../../usecases/updateProfile";
import { digitsFaToEn } from "@persian-tools/persian-tools";
import { SafeAreaView } from "react-native-safe-area-context";
export function UserInfo() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [editable, setEditable] = useState<boolean>(false);
  const [order, setOrder] = useState<"gender" | "birthDay">("gender");
  const [state, setState] = useState<IUserInfo>({
    objectId: "",
    birthday: "",
    email: null,
    gender: null,
    name: "",
  });
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function GetUerInfo() {
    const userId = storage.retrieve("user_id", "string");
    const { userInfo } = await retrieveProfileName(userId);
    const name = storage.retrieve("name", "string") || userInfo.name;
    setState({ ...userInfo, name: userInfo.name });
  }
  function onBirthDayChange(birthday: string) {
    setState({ ...state, birthday });
  }
  function onNameChange(name: string) {
    setState({ ...state, name });
  }
  function onEmailChange(email: string) {
    setState({ ...state, email });
  }
  function onGenderSet(gender: "male" | "female" | null) {
    setState({ ...state, gender });
  }
  function genderRenderer() {
    if (state.gender === "male") {
      return "مرد";
    }
    if (state.gender === "female") {
      return "زن";
    }
    return;
  }
  function emailRenderer() {
    if (state.email === null) {
      return;
    }
    return state.email;
  }
  async function onSavePress() {
    const [year, month, day] = state.birthday.split("-");

    const { gy, gm, gd } = toGregorian(
      parseInt(digitsFaToEn(year), 10),
      parseInt(digitsFaToEn(month), 10),
      parseInt(digitsFaToEn(day), 10)
    );
    const timeStamp = new Date(gy, gm - 1, gd).getTime();

    const result = await UpdateProfile(
      state.name,
      timeStamp,
      state.email,
      state.gender,
      state.objectId
    );
    setEditable(false);
  }
  useEffect(() => {
    GetUerInfo();
  }, []);
  const LeftInputIcon = useCallback(() => <EditIcon size={24} />, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.COLORS.BACKGROUND }}>
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid={true}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.editButton}>
          {editable ? (
            <Button
              mode={"text"}
              rippleColor={"lightGrey"}
              size={"small"}
              color={THEME.COLORS.PRIMARY.NORMAL}
              onPress={onSavePress}
            >
              {"ذخیره"}
            </Button>
          ) : null}
        </View>
        <View style={styles.backIcon}>
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
        </View>
        <View style={styles.avatarContainer}>
          <Image source={WomanImage} style={styles.imageSize} />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={state.name}
            onChangeText={onNameChange}
            mode={"with-label"}
            title={"اسم"}
            onFocus={() => setEditable(true)}
            LeftIcon={LeftInputIcon}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={emailRenderer()}
            onChangeText={onEmailChange}
            mode={"with-label"}
            title={"ایمیل"}
            onFocus={() => setEditable(true)}
            LeftIcon={LeftInputIcon}
            placeholder={"ایمیلتون رو وارد کنید."}
          />
        </View>
        <Tap
          onPress={() => {
            setEditable(true);
            setOrder("birthDay");
            toggleModal();
          }}
        >
          <View style={styles.inputContainer} pointerEvents={"box-only"}>
            <Input
              value={state.birthday}
              mode={"with-label"}
              title={"تاریح تولد"}
              editable={false}
              placeholder={"تاریخ تولدتون رو انتخاب کنید."}
            />
          </View>
        </Tap>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setEditable(true);
            setOrder("gender");
            toggleModal();
          }}
        >
          <View style={styles.inputContainer} pointerEvents={"box-only"}>
            <Input
              value={genderRenderer()}
              mode={"with-label"}
              title={"جنسیت"}
              placeholder={"جنسیت خود را وارد کنید."}
              editable={false}
            />
          </View>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible}>
          <GestureHandlerRootView style={styles.flex}>
            {order === "gender" ? (
              <GenderModal
                onPress={toggleModal}
                gender={state.gender}
                setGender={onGenderSet}
              />
            ) : (
              <WheelPicker
                onPress={toggleModal}
                setBirthDay={onBirthDayChange}
              />
            )}
          </GestureHandlerRootView>
        </Modal>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
