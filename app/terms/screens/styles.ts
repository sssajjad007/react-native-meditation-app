import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    top: 38,
    right: 0,
    left: widthPercentageToDP(100) - 52,
    bottom: 0,
  },
  header: {
    width: widthPercentageToDP(90),
    height: 70,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  toRight: {
    right: 24,
    color: "white",
  },
  termContainere: {
    width: widthPercentageToDP(90),
    alignSelf: "center",
    minHeight: 600,
    alignItems: "center",
    // paddingVertical:20,
  },
});
