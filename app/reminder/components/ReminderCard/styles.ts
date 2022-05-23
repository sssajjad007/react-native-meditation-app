import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 120,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: THEME.COLORS.CARD.NORMAL_CARD,
    backgroundColor: THEME.COLORS.GREY.NAV, //TODO : change to white
    marginVertical: 6,
    flexDirection: "column",
  },
  timeContainer: {
    flex: 1.2,
    flexDirection: "row-reverse",
  },
  dayPickerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    // paddingLeft: 24,
  },
  switchContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 16,
  },
});
