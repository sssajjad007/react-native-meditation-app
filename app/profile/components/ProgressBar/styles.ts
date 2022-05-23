import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {},
  progressBar: {
    // marginTop: 10,
    width: 220,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#F1F4FA",
    // backgroundColor: THEME.COLORS.BACKGROUND,
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  progressLeft: {
    width: "50%",
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    borderRadius: 8,
    height: 8,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20000,
  },
});
