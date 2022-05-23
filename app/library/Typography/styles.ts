import { StyleSheet } from "react-native";
import memoize from "fast-memoize";
import { THEME } from "../theme";

import type { tTextMode } from "./types";

export const styles = StyleSheet.create({
  title: {
    fontFamily: THEME.FONTS.BLACK,
    height: 28,
    paddingTop: 4,
  },
  headline: {
    fontFamily: THEME.FONTS.MEDIUM,
  },
  Subheading: {
    fontFamily: THEME.FONTS.REGULAR,
  },
  paragraph: {
    fontFamily: THEME.FONTS.REGULAR,
  },
  caption: {
    fontFamily: THEME.FONTS.THIN,
  },
});

function styleGenerator(mode: tTextMode) {
  if (mode === "lightSub10") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.LIGHT,
        // fontWeight: "400",
        fontSize: 10,
        // lineHeight: 16,
      },
    });
  }
  if (mode === "regularSub12") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 12,
        // lineHeight: 18,
      },
    });
  }
  if (mode === "boldSub12") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 12,
        // lineHeight: 18,
      },
    });
  }
  if (mode === "regularBody14") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 14,
        // lineHeight: 20,
      },
    });
  }
  if (mode === "mediumBody14") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 14,
        // lineHeight: 20,
      },
    });
  }
  if (mode === "boldBody14") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 14,
        // lineHeight: 20,
      },
    });
  }
  if (mode === "regularBody16") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 16,
        // lineHeight: 24,
      },
    });
  }
  if (mode === "mediumBody16") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 16,
        // lineHeight: 24,
      },
    });
  }
  if (mode === "boldBody16") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 16,
        // lineHeight: 24,
      },
    });
  }
  if (mode === "regularBody18") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 18,
        // lineHeight: 24,
      },
    });
  }
  if (mode === "mediumBody18") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 18,
        // lineHeight: 24,
      },
    });
  }
  if (mode === "boldBody18") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        fontSize: 18,
        // lineHeight: 24,
      },
    });
  }
  if (mode === "regularSubhead20") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 20,
        // lineHeight: 26,
      },
    });
  }
  if (mode === "mediumSubhead20") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 20,
        // lineHeight: 26,
      },
    });
  }
  if (mode === "boldSubhead20") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 20,
        // lineHeight: 26,
      },
    });
  }
  if (mode === "regularHeadline22") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 22,
        // lineHeight: 30,
      },
    });
  }
  if (mode === "mediumHeadline22") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 22,
        // lineHeight: 30,
      },
    });
  }
  if (mode === "boldHeadline22") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 22,
        // lineHeight: 30,
      },
    });
  }
  if (mode === "regularTitle26") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 26,
        // lineHeight: 36,
      },
    });
  }
  if (mode === "mediumTitle26") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 26,
        // lineHeight: 36,
      },
    });
  }
  if (mode === "boldTitle26") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 26,
        // lineHeight: 36,
      },
    });
  }
  if (mode === "regularTitle28") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.REGULAR,
        // fontWeight: "400",
        fontSize: 28,
        // lineHeight: 40,
      },
    });
  }
  if (mode === "mediumTitle28") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 28,
        // lineHeight: 40,
      },
    });
  }
  if (mode === "boldTitle28") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 28,
        // lineHeight: 40,
      },
    });
  }
  if (mode === "mediumTitle32") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 32,
        // lineHeight: 44,
      },
    });
  }
  if (mode === "boldTitle32") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 32,
        // lineHeight: 44,
      },
    });
  }
  if (mode === "blackTitle32") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BLACK,
        // fontWeight: "900",
        fontSize: 32,
        // lineHeight: 44,
      },
    });
  }
  if (mode === "MediumDisplay") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.MEDIUM,
        // fontWeight: "400",
        fontSize: 40,
        // lineHeight: 46,
      },
    });
  }
  if (mode === "BoldDisplay") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BOLD,
        // fontWeight: "700",
        fontSize: 40,
        // lineHeight: 46,
      },
    });
  }
  if (mode === "BlackDisplay") {
    return StyleSheet.create({
      text: {
        fontFamily: THEME.FONTS.BLACK,
        // fontWeight: "900",
        fontSize: 40,
        // lineHeight: 46,
      },
    });
  }
  return StyleSheet.create({
    text: {
      fontFamily: THEME.FONTS.REGULAR,
      // fontWeight: "400",
      fontSize: 18,
      // lineHeight: 24,
    },
  });
}

export const styleGen = memoize(styleGenerator);
