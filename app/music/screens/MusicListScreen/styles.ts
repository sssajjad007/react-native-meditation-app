import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    top: 10,
    right: 20,
  },
  assets: {
    width: widthPercentageToDP(90),
    alignSelf: "center",
    height: 270,
    borderRadius: 8,
    overflow: "hidden",
  },
  description: {
    width: widthPercentageToDP(90),
    height: 40,
    marginTop: 16,
    alignSelf: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
});
