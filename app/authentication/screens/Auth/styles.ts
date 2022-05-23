import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  logoContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(22),
    alignItems: "center",
    justifyContent: "center",
    bottom: 26,
  },
  textContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(50),
    paddingBottom: heightPercentageToDP(5),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageSize: {
    width: 80,
    height: 80,
  },
});
