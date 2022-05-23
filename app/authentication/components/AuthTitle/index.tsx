import React from "react";
import { Caption, THEME, Title, Typography } from "../../../library";
import { IAuthTitleProps } from "../../types";
export function AuthTitle(props: IAuthTitleProps) {
  const { step } = props;
  if (step === "phone") {
    return (
      <>
        <Typography mode={"mediumHeadline22"} style={{ bottom: 36 }}>
          {"شماره موبایلتون رو وارد کنید."}
        </Typography>
        <Typography
          mode={"regularBody14"}
          style={{ bottom: 20, color: THEME.COLORS.LABEL.SECONDARY }}
        >
          {"کد تایید براتون پیامک خواهد شد"}
        </Typography>
      </>
    );
  }
  if (step === "genCode") {
    return (
      <>
        <Typography mode={"mediumHeadline22"} style={{ bottom: 36 }}>
          {"کد تایید را وارد کنید."}
        </Typography>
      </>
    );
  }
  if (step === "genCodeResend") {
    return (
      <>
        <Typography mode={"mediumHeadline22"} style={{ bottom: 36 }}>
          {"کد تایید را وارد کنید."}
        </Typography>
      </>
    );
  }
  if (step === "enterGenCode") {
    return (
      <>
        <Typography mode={"mediumHeadline22"} style={{ bottom: 36 }}>
          {"کد تایید را وارد کنید."}
        </Typography>
      </>
    );
  }
  if (step === "name") {
    return (
      <>
        <Typography mode={"mediumHeadline22"} style={{ bottom: 36 }}>
          {"اسم خود را وارد کنید."}
        </Typography>
      </>
    );
  }
  return null;
}
