import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    width: "100%",
    height: 50,
    // alignItems: "flex-end",
    // justifyContent: "center",
    right: 24,
    // top: 12,
  },
  tileContainer: {
    width: widthPercentageToDP(100),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
