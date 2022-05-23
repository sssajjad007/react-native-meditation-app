import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  tile: {
    marginVertical: 12,
    width: widthPercentageToDP(90),
    height: 102,
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "flex-start",
    marginLeft: 16,
  },
  textContainer: {
    flex: 3,
  },
  arrowContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageSize: {
    width: 70,
    height: 70,
  },
});
