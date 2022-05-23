import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  contaienr: {
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
  tileContainer: {
    flex: 10,
    alignItems:"center",
  },
});
