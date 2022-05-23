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
    overflow: "hidden",
  },
  containerLocked: {
    width: widthPercentageToDP(90),
    height: 72,
    borderWidth: 1,
    borderColor: "#9AD0DB",
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row-reverse",
    backgroundColor: THEME.COLORS.BACKGROUND,
    overflow: "hidden",
  },
  titleContainer: {
    flex: 4,
    alignItems: "flex-end",
    // left: 24,
    paddingRight:24,
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
