import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(30),
    height: 130,
    justifyContent: "space-between",
    marginLeft: 24,
  },
  image: {
    width: widthPercentageToDP(30),
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  lineVertical: {
    width: StyleSheet.hairlineWidth,
    height: 16,
    backgroundColor: THEME.COLORS.GREY.DISABLE,
    marginHorizontal: 8,
  },
  titleContainer: {
    height: 30,
    flexDirection: "row-reverse",
    marginTop: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
