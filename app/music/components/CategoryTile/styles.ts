import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    height: 102,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    overflow: "hidden",
  },
  iconContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 5,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  arrowContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
