import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEME.COLORS.GREY.BACKGROUND,
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleBorder: {
    width: widthPercentageToDP("94"),
    height: heightPercentageToDP("10"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },

  imageContainer: {
    flex: 12,
    alignItems: "center",
  },
  imageBox: {
    width: widthPercentageToDP("74"),
    height: widthPercentageToDP("74"),
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
   
  },
  image: {
    width: "85%",
    height: "85%",
    // borderRadius: 14,
  },
  playerContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  duration: {
    width: widthPercentageToDP("86%"),
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "8%",
    marginTop: 8,
    flexDirection: "row",
  },

  controller: {
    width: widthPercentageToDP("94"),
    // backgroundColor:"black",
    height: 150,
    justifyContent: "space-evenly",
    flexDirection:"column-reverse",
  
  },
  slider: {
    width: widthPercentageToDP("80"),
    alignSelf: "center",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
