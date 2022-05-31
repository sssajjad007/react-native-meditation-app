import React, { useEffect, useState } from "react";
import { View, Image, KeyboardAvoidingView, Platform } from "react-native";
import { Container, THEME, Typography } from "../../../library";
import { login } from "../../../library/authEvent";
import { LogoImage } from "../../assets";
import { AuthButton } from "../../components/AuthButton";
import { AuthInput } from "../../components/AuthInput";
import { styles } from "./styles";
import { register, login as loginUsecase } from "../../usecases";
import { AuthTitle } from "../../components/AuthTitle";
import { tStep } from "../../types";
import * as Analytics from "expo-firebase-analytics";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOtpVerify } from "./useOtpVerify";

export function Authentication() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [phone, setPhone] = useState<string>("");
  const [genCode, setGenCode] = useState<string>("");
  const [step, setStep] = useState<tStep>("phone");
  const [error, setError] = useState<string>("");
  const [otpError, setOtpError] = useState<string>("");
  const [show, setShow] = useState<Boolean>(true);
  const [name, setName] = useState<string>("");
  async function nameEvent() {
    try {
      await Analytics.logEvent("registeration_page2_view");
    } catch (error) {
      // console.log(error);
    }
  }
  async function phoneNumberEvent() {
    try {
      await Analytics.logEvent("registeration_page1_view");
    } catch (error) {
      // console.log(error);
    }
  }
  async function onRegisterPress() {
    const registered = await register(phone);
    if (registered) {
      setStep("genCode");
    }
  }
  async function onLoginPress() {
    const loggedin: string = await loginUsecase(phone, genCode);
    if (loggedin === "error") {
      setOtpError("کد تایید اشتباهه!");
      return;
    }
    if (loggedin === "COMPLETE_USER") {
      login();
      return;
    }
    if (loggedin === "NEW_USER") {
      setStep("name");
      await nameEvent();
      return;
    }
  }
  useEffect(() => {
    phoneNumberEvent();
  }, []);
  useEffect(() => {
    if (genCode.length === 4) {
      onLoginPress();
    }
  }, [genCode]);
  useOtpVerify(setGenCode);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.COLORS.BACKGROUND }}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode={"stretch"}
          style={styles.imageSize}
          source={LogoImage}
        />
      </View>
      <View style={styles.textContainer}>
        <AuthTitle step={step} />
      </View>
      <View style={styles.inputContainer}>
        <AuthInput
          error={error}
          otpError={otpError}
          setError={setError}
          setStep={setStep}
          step={step}
          phone={phone}
          genCode={genCode}
          setGenCode={setGenCode}
          setPhone={setPhone}
          setShow={setShow}
          name={name}
          setName={setName}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.buttonContainer}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <AuthButton
          error={error}
          phone={phone}
          setStep={setStep}
          onLoginPress={onLoginPress}
          onRegisterPress={onRegisterPress}
          step={step}
          name={name}
          setName={setName}
        />
        {step === "phone" ? (
          <Typography
            mode={"regularSub12"}
            style={{ paddingTop: 10, color: THEME.COLORS.LABEL.SECONDARY }}
          >
            با ثبت نام و ورود با
            <Typography
              onPress={() => {
                navigation.push("TermsScreen");
              }}
              mode={"boldSub12"}
              style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
            >
              {" "}
              قوانین دنج{" "}
            </Typography>
            موافقت می کنید.
          </Typography>
        ) : undefined}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
