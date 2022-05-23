import { useEffect } from "react";
import RNOtpVerify from "react-native-otp-verify";
import { Native } from "sentry-expo";
import { storage, marketFlag } from "../../../library";

export function useOtpVerify(setGenCode: (code: string) => void) {
  function otpHandler(message: any) {
    console.log("otp handler: ", message);
    if (message.toString() === "Timeout Error.") {
      // console.log('otp timeout error');
      RNOtpVerify.removeListener();
      return;
    }
    const otp = /(\d{4})/g.exec(message);
    if (Array.isArray(otp)) {
      setGenCode(otp[1]);
    }
  }
  useEffect(() => {
    async function prepare() {
      try {
        await RNOtpVerify.getOtp();
        await RNOtpVerify.addListener(otpHandler);
        const codeSent = storage.retrieve("otp_code_sent", "boolean");
        if (!codeSent) {
          const otpCode = await RNOtpVerify.getHash();
          Native.captureMessage(
            `otp code hash, marketFlag: ${marketFlag}, otpCode: ${otpCode.join(
              ", "
            )}`
          );
          storage.add("otp_code_sent", true);
        }
      } catch (error) {
        Native.captureException(error);
      }
    }
    prepare();
    return () => {
      return RNOtpVerify.removeListener();
    };
  }, []);
}
