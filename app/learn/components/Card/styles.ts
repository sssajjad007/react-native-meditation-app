import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  tiles: {
    width: widthPercentageToDP(90),
    height: 86,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: "white",
    justifyContent: "flex-end",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.CARD.NORMAL_CARD,
    flexDirection: "row-reverse",
  },
  body: {
    flex: 1,
    flexDirection: "row-reverse",
    backgroundColor: "red",
  },
  detailsContainer: {
    flex: 6,
    alignItems: "flex-end",
    // left: 24,
    paddingRight: 24,
    justifyContent: "space-around",
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bottom: {
    // bottom: 10,
    paddingBottom: 10,
    color: THEME.COLORS.LABEL.SECONDARY,
  },
  tileLocked: {
    borderWidth: 1,
    borderColor: "#9AD0DB",
    width: widthPercentageToDP(90),
    height: 86,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: THEME.COLORS.BACKGROUND,
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
  },
});
