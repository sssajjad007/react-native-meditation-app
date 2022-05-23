import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 5,
    alignItems:"center",
    justifyContent:"flex-end"
  },
  textContainer: {
    flex: 3,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  color: {
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
  justify: {
    top: 10,
  },
  image:{
      width:widthPercentageToDP(100),
      height:"100%",
  }
});
