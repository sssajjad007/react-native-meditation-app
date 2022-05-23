import React from "react";
import { Input } from "../../../library";
import { validatePhoneNumber } from "../../adapters";
import { IAuthInputProps } from "../../types";
export function AuthInput(props: IAuthInputProps) {
  const {
    error,
    setError,
    otpError,
    step,
    phone,
    setPhone,
    genCode,
    setGenCode,
    setShow,
    name,
    setName,
    setStep,
  } = props;
  if (step === "phone") {
    return (
      <Input
        errors={error ? [error] : []}
        value={phone}
        onChangeText={(text) => {
          if (text.length > 10) {
            const isPhoneValid = validatePhoneNumber(text);
            if (isPhoneValid) {
              setError("");
            } else {
              setError("شماره همراه اشتباهه!");
            }
          }
          setPhone(text);
        }}
        mode={"outlined"}
        keyboardType={"phone-pad"}
        title={"شماره همراه"}
        onFocus={() => {
          setShow(false);
        }}
      />
    );
  }
  if (step === "genCode") {
    return (
      <Input
        value={genCode}
        onChangeText={(text) => {
          setGenCode(text);
          setStep("enterGenCode");
        }}
        mode={"outlined"}
        keyboardType={"phone-pad"}
        title={"کد تایید"}
        textContentType={"oneTimeCode"}
      />
    );
  }
  if (step === "enterGenCode") {
    return (
      <Input
        errors={otpError ? [otpError] : []}
        value={genCode}
        onChangeText={setGenCode}
        keyboardType={"phone-pad"}
        mode={"outlined"}
        title={"کد تایید"}
      />
    );
  }
  if (step === "genCodeResend") {
    return (
      <Input
        value={genCode}
        onChangeText={setGenCode}
        keyboardType={"phone-pad"}
        mode={"outlined"}
        title={"کد تایید"}
      />
    );
  }
  if (step === "name") {
    return (
      <Input
        value={name}
        onChangeText={setName}
        mode={"outlined"}
        title={"اسم شما"}
      />
    );
  }
  return null;
}
