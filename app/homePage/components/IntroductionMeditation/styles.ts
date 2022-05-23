import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({

    introductory: {
        width: widthPercentageToDP(90),
        height: 122,
        marginVertical: 24,
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: "row-reverse",
      },
      introductoryBody: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: "space-evenly",
      },

      introductoryDetails: {
        flexDirection: "row-reverse",
        alignItems: "center",
      },
      lineVertical: {
        width: StyleSheet.hairlineWidth,
        height: 14,
        backgroundColor: THEME.COLORS.GREY.DIVIDER,
        marginHorizontal: 8,
      },
      introductoryCard: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
});
