import { StyleSheet } from "react-native";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 40,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: THEME.COLORS.BACKGROUND,
    height: 56,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingLeft: 24,
  },
  title: {
    marginRight: 16,
  },
});
