import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    width: widthPercentageToDP(90),
    paddingTop: 32,
    paddingBottom: 12,
    color: THEME.COLORS.LABEL.PRIMARY,
    textAlign: "right",
  },
});
