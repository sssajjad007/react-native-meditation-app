import { StyleSheet } from "react-native";
import { THEME } from "..";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  contentContainerVertical: {
    paddingTop: 32,
    paddingBottom: 40,
  },
  rtlScrollView: {
    transform: [{ scaleX: -1 }],
  },
  rtlView: {
    transform: [{ scaleX: -1 }],
  },
});
