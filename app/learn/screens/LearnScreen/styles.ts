import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    flex: 1,
    // alignItems: "flex-end",
    // justifyContent: "center",
    right: 24,
    // top: 10,
  },
  tabScreen: {
    flex: 10,
  },
});
