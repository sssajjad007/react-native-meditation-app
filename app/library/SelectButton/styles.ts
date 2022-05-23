import { StyleSheet } from "react-native";
import memoize from "fast-memoize";

function styleGenerator(size: number) {
  return StyleSheet.create({
    container: {
      minWidth: size * 2,
      height: size * 2,
      flexDirection: "row-reverse",
    },
    selectorContainer: {
      width: size * 2,
      height: size * 2,
      alignItems: "center",
      justifyContent: "center",
    },
    labelContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
}

export const styleGen = memoize(styleGenerator);
