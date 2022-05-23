import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    alignSelf: "center",
  },
  card: {
    width: widthPercentageToDP(90),
    height: 82,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.GREY.DISABLE,
    backgroundColor: "white",
    flexDirection: "row-reverse",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 48,
    height: 48,
    backgroundColor: THEME.COLORS.GREY.DISABLE,
  },
  bodyContainer: {
    flex: 3,
    flexDirection: "column",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center", //TODO: change to flex-end when icon and description is availabe
    // bottom: 4,
    paddingRight: 24,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    bottom: 6,
  },
  favoritesContainer: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});
