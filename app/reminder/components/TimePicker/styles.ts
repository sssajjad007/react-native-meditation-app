import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wheelPickerContainer: {
    width: widthPercentageToDP(64),
    height: 260,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "column",
  },
  pickerContainer: {
    flex: 3,
    flexDirection: "row",
  },
  pickerStyles: {
    flex: 1,
    backgroundColor: "white",
  },
  firstLine: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.PRIMARY.LIGHT,
    position: "absolute",
    top: 80,
  },
  secondLine: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.PRIMARY.LIGHT,
    position: "absolute",
    top: 136,
  },
  pickerSeparator: {
    position: "absolute",
    left: "46%",
    bottom: "47%",
  },
  pickerSeparatorText: {
    fontSize: 40,
    fontWeight: "bold",
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
});
