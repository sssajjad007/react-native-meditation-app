import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    width: "100%",
    paddingVertical: 16,
  },
  bottomSheetHeader: {
    width: "90%",
    height: 72,
  },
  bottomSheetTitle: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lineHorizontal: {
    width: "100%",
    bottom: 10,
    height: 0.5,
    backgroundColor: THEME.COLORS.GREY.DIVIDER,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: heightPercentageToDP(2),
    justifyContent: "space-between",
  },
});
