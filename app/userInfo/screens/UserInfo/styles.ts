import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  flex: { flex: 1 },
  avatarContainer: {
    height: heightPercentageToDP(20),
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    height: heightPercentageToDP(16),
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    position: "absolute",
    top: 38,
    right: 0,
    left: widthPercentageToDP(100) - 44,
    bottom: 0,
  },
  imageSize: { width: 100, height: 100 },
  editButton: {
    position: "absolute",
    top: 34,
    left: 16,
  },
});
