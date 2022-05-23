import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, Paragraph, Subheading, Timer } from "../../../library";
import { IAuthButtonProps, tStep } from "../../types";
import { completeSignup } from "../../usecases";
export function AuthButton(props: IAuthButtonProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {error, phone, step, onRegisterPress, onLoginPress, setStep, name } = props;
  async function nameOnPress() {
    await completeSignup(name);
    navigation.navigate("StartMeditation");
  }
  if (step === "phone") {
    return (
      <Button
        size={"big"}
        mode={"contained"}
        rippleColor={"lightGrey"}
        onPress={onRegisterPress}
        disabled={error || phone.length < 11}
      >
        {"ارسال کد تایید"}
      </Button>
    );
  }
  if (step === "genCode") {
    return (
      <Button
        size={"big"}
        color={"red"}
        mode={"contained"}
        rippleColor={"lightGrey"}
        disabled
      >
        <Paragraph>
          <Timer
            // minute={0}
            second={59}
            onEnd={() => {
              setStep("genCodeResend");
            }}
          />
          {" ثانیه تا درخواست مجدد "}
        </Paragraph>
      </Button>
    );
  }
  if (step === "genCodeResend") {
    return (
      <Button
        size={"big"}
        mode={"contained"}
        rippleColor={"lightGrey"}
        onPress={onRegisterPress}
      >
        {"ارسال دوباره کد تایید"}
      </Button>
    );
  }
  if (step === "name") {
    return (
      <Button
        size={"big"}
        mode={"contained"}
        rippleColor={"lightGrey"}
        onPress={nameOnPress}
      >
        {"بعدی"}
      </Button>
    );
  }
  if (step === "enterGenCode") {
    return (
      <Button
        size={"big"}
        mode={"contained"}
        rippleColor={"lightGrey"}
        onPress={onLoginPress}
      >
        {"بعدی"}
      </Button>
    );
  }
  return null;
}
