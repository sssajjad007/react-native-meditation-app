import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: "90%",
    height: 88,
    borderRadius: 8,
    backgroundColor: "rgba(210, 242, 236, 0.69)",
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  disCountContainer: {
    flex: 1,
    justifyContent: "center",
  },
  disCountText: {
    flexDirection: "row-reverse",
    alignItems: "center",
    ...Platform.select({
      native: {
        paddingLeft: 16,
      },
      web: {
        paddingRight: 16,
      },
    }),
  },
  paddingRight: {
    paddingRight: 16,
  },
});
