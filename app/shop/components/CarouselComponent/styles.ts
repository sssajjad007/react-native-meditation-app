import { StyleSheet, Platform } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const THEME_PRIMARY_COLOR_NORMAL = THEME.COLORS.PRIMARY.NORMAL;

export const styles = StyleSheet.create({
  sliderContainer: {
    paddingTop: 20,
    height: 210,
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "70%",
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "40%",
  },
  button: {
    width: widthPercentageToDP(80),
    height: 50,
  },
  paginationContainer: {
    transform: [{ scaleX: -1 }],
    alignItems: "center",
    justifyContent: "center",
  },
    carouselContainer: {
    ...Platform.select({
      native: {
        transform: [{ scaleX: -1 }],
      },
      web: {
        height: 210,
        width: "100%",
      },
    }),
  },
  dotStyle: {
    width: 21,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 0,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  paginationContainerStyles: {
    marginTop: 20,
    paddingVertical: -10,
  },
  inactiveDotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: THEME.COLORS.GREY.DIVIDER,
  },
  loading: { flex: 1, alignItems: "center", justifyContent: "center" },
});
