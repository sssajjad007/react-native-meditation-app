import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const THEME_COLORS_PRIMARY_NORMAL = THEME.COLORS.PRIMARY.NORMAL;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  contentContainer: {
    alignItems: "center",
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  toRight: { right: 24 },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
