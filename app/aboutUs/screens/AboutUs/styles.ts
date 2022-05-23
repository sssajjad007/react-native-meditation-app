import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  iconContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    width: "90%",
    minHeight: 400,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonContianer: {
    width: "100%",
    height: 140,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageSize: {
    width: 87,
    height: 93,
  },
});
