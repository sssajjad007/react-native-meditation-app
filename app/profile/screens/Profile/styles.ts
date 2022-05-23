import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  topBar: {
    width: widthPercentageToDP(100),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileCameraBox: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: THEME.COLORS.PRIMARY.DARK,
    alignItems: "center",
    justifyContent: "center",
  },
  tileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollViewContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 314,
    backgroundColor: THEME.COLORS.BACKGROUND_DARK,
  },
  tabNavigation: {
    flex: 1,
  },
  meditationsContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    // top:20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  meditationValue: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  meditationTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  improvement: {},
  imageSize: { width: 118, height: 118, borderRadius: 118 },
  profileImageContainer: {
    width: 118,
    height: 118,
  },
  meditationDetails: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
