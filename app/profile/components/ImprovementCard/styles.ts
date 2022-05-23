import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  tiles: {
    width: widthPercentageToDP(90),
    height: 90,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: "white",
    justifyContent: "flex-end",
    // overflow: "hidden",
    flexDirection: "row-reverse",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 3,
    flexDirection: "row-reverse",
  },
  detailsContainer: {
    flex: 6,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    bottom: 10,
    color: THEME.COLORS.LABEL.SECONDARY,
  },
  imageSize: { width: 50, height: 50 },
});
