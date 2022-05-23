import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 62, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  gender: {
    width: widthPercentageToDP(64),
    height: 224,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  titleContainer: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    top: 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  line: {
    width: "90%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.GREY.NAV,
  },
  toTop: { top: 20 },
});
