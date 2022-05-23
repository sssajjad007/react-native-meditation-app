import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const THEME_PRIMARY_COLOR_NORMAL = THEME.COLORS.PRIMARY.NORMAL;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    flex: 1,
    alignItems: "center",
    // ...Platform.select({
    //   native: {
    //     left: 30,
    //   },
    //   web: {
    //   },
    // }),
  },
  textContainer: {
    width: widthPercentageToDP(90),
    height: 240,
    alignSelf: "center",
    top: "4%",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
  dayLeftContainer: {
    minWidth: widthPercentageToDP(50),
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
    backgroundColor: "rgba(164, 164, 235, 0.13)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
    marginBottom: 24,
  },
  shopIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "rgba(234, 233, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  shopIcon: {
    width: 32,
    height: 32,
    right: widthPercentageToDP(0.9),
  },

  cardTitle: {
    fontSize: 12,
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
  titlecontainer: {
    height: 40,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    height: 132,
    justifyContent: "space-around",
    marginTop: 10,
    marginRight: 4,
  },
  dayLeft: {
    color: THEME.COLORS.LABEL.SECONDARY,
  },
  buttonContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 32,
  },
  horizontalLine: {
    width: widthPercentageToDP(90),
    height: 0.5,
    backgroundColor: THEME.COLORS.GREY.DIVIDER,
    alignSelf: "center",
    marginTop: 32,
  },
  topBar: {
    height: 80,
    paddingTop: 32,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subscriptionContainer: {
    paddingTop: 6,
    width: widthPercentageToDP(88),
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  closeContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
  },
  questionTitle: {
    ...Platform.select({
      native: {
        left: 8,
      },
      web: {
        paddingRight: 8,
      },
    }),
    color: THEME.COLORS.LABEL.SECONDARY,
  },
});
