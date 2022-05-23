import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  dailyMeditation: {
    width: widthPercentageToDP(90),
    height: 324,
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    height: 252,
    alignItems: "center",
    justifyContent: "center",
  },
  dailyImage: {
    width: "100%",
    height: "100%",
  },
  playMeditationContainer: {
    flex: 1,
  },
  playMeditation: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
});
