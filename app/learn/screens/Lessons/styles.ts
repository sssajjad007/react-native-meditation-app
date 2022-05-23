import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop: 6,
  },
  cardContainer: {
    width: widthPercentageToDP(90),
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  title: {
    width: widthPercentageToDP(90),
    height: 50,
    top: 20,
  },
  imageContainer: {
    width: widthPercentageToDP(90),
    height: 260,
    alignSelf: "center",
    justifyContent: "center",
  },
});
