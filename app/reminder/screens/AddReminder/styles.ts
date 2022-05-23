import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  backIcon: {
    position: "absolute",
    top: 38,
    right: 0,
    left: widthPercentageToDP(100) - 52,
    bottom: 0,
  },
  header: {
    width: widthPercentageToDP(90),
    height: 70,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  toRight: {
    right: 24,
  },
  timePickerContainer: {
    width: widthPercentageToDP(90),
    height: 260,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: THEME.COLORS.CARD.NORMAL_CARD,
    overflow: "hidden",
    paddingTop: 10,
    alignSelf: "center",
  },
  dayPickerContainer: {
    width: widthPercentageToDP(90),
    height: 90,
    alignSelf: "center",
    paddingVertical: 10,
  },
  dayPicker: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GREY.WHITE,
    borderColor: THEME.COLORS.CARD.NORMAL_CARD,
    borderWidth: 0.5,
    // flexDirection: "row",
  },
  notificationInputContainer: {
    width: widthPercentageToDP(90),
    height: 120,
    alignSelf: "center",
  },
  buttonContainer: {
    width: widthPercentageToDP(90),
    height: 92,
    paddingTop: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
});
