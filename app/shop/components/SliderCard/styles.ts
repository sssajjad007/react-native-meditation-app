import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../../library";
export const THEME_PRIMARY_COLOR_NORMAL = THEME.COLORS.PRIMARY.NORMAL;

export const styles = StyleSheet.create({
  specialCard: {
    ...Platform.select({
      native: {
        transform: [{ scaleX: -1 }],
      },
    }),
    width: 297,
    backgroundColor: THEME.COLORS.GREY.WHITE,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.BACKGROUND_DARK,
    height: 160,
    marginLeft: 25,
    overflow: "visible",
  },
  card: {
    ...Platform.select({
      native: {
        transform: [{ scaleX: -1 }],
      },
    }),
    width: 290,
    backgroundColor: THEME.COLORS.GREY.WHITE,
    borderRadius: 8,
    height: 160,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: THEME.COLORS.BACKGROUND_DARK,
  },
  cardTitleContainer: {
    width: 82,
    height: 24,
    borderRadius: 8,
    backgroundColor: "rgba(164, 164, 235, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitleContainerAbsoulte: {
    position: "absolute",
    zIndex: 10000,
    // bottom: 150,
    overflow: "visible",
    top: -10,
    right: 12,
    width: 107,
    height: 26,
    borderRadius: 8,
    backgroundColor: "#EBEBFF",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    zIndex: 0,
    marginRight: 20,
    paddingVertical: 10,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  textStyle: {
    // fontSize: 20,
    color: THEME.COLORS.LABEL.PRIMARY,
    top: 6,
  },
  descriptionStyle: {
    // fontSize: 20,
    color: "#000107",
  },
  price: {
    // fontSize: 14,
    color: "#575757",
  },
  dayLeft: {
    // fontSize: 12,
    color: "#575757",
  },
  cardTitle: {
    // fontSize: 12,
    color: THEME.COLORS.LABEL.PRIMARY_ACCENT,
  },
  periodContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  perMonthContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
});
