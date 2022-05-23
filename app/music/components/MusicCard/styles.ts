import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 72,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row-reverse",
    backgroundColor: "white",
  },
  containerLocked: {
    width: widthPercentageToDP(90),
    height: 72,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row-reverse",
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderWidth: 1,
    borderColor: THEME.COLORS.SECONDARY.NORMAL,
  },
  titleContainer: {
    flex: 4,
    alignItems: "flex-end",
    paddingRight: 24,
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
