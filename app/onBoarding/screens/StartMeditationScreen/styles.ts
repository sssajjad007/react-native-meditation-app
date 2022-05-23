import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY.BACKGROUND,
  },
  titleContainer: {
    flex: 4,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  playerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  playerOutline: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    backgroundColor: THEME.COLORS.GREY.DISABLE,
    alignItems: "center",
    justifyContent: "center",
  },
  playerInline: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    alignItems: "center",
    justifyContent: "center",
  },
  textAlign: {
    textAlign: "center",
    color: "white",
  },
  image: {
    width: "92%",
    height: "92%",
  },
  meditationPlayerContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  duration: {
    width: widthPercentageToDP("86%"),
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "8%",
    // marginTop: 8,
    flexDirection: "row",
  },

  controller: {
    width: widthPercentageToDP("94"),
    height: 130,
    justifyContent: "space-evenly",
    flexDirection: "column-reverse",
  },
  slider: {
    width: widthPercentageToDP("82"),
    alignSelf: "center",
  },
});
