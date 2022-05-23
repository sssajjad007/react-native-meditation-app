import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 64,
    backgroundColor: THEME.COLORS.GREY.WHITE,
    borderRadius: 8,
    borderColor: THEME.COLORS.CARD.NORMAL_CARD,
    flexDirection: "row-reverse",
    marginVertical: 24,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
