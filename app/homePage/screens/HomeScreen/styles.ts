import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  contentContainer: {
    alignItems: "center",
  },
  modal: {
    // marginHorizontal: "5%",
    height: "100%",
    paddingBottom:"90%",
  },
  header: {
    width: widthPercentageToDP(90),
    height: 100,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lineHorizontal: {
    width: "100%",
    bottom: 10,
    height: 0.5,
    backgroundColor: THEME.COLORS.GREY.DIVIDER,
  },

  emergencyCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  emergency: {
    width: widthPercentageToDP(90),
    height: 122,
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row-reverse",
  },
  emergencyBody: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "space-evenly",
  },
  emergencyDetails: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  emergencyImage: {
    width: 120,
    height: 100,
  },
  lineVertical: {
    width: StyleSheet.hairlineWidth,
    height: 14,
    backgroundColor: THEME.COLORS.GREY.DIVIDER,
    marginHorizontal: 8,
  },
});
