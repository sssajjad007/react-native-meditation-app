import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: 88,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  line: {
    width: widthPercentageToDP(100),
    // height:StyleSheet.hairlineWidth,
    height: 1,
    backgroundColor: THEME.COLORS.GREY.DIVIDER,
  },
  body: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
    right: 26,
  },
  toLeft: { left: 10 },
});
