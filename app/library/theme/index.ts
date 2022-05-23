import { widthPercentageToDP } from "react-native-responsive-screen";

const COLORS = {
  PRIMARY: {
    LIGHT: "#9593EA",
    NORMAL: "#7766C6",
    DARK:"#7776BE",
  },
  SECONDARY: {
    LIGHT: "#D2F2EC",
    NORMAL: "#76BEB1",
  },
  TERTIARY: {
    LIGHT: "#FAD4FA",
    NORMAL: "#EAE9FF",
  },
  FOURTIARY:{
    LIGHT:"#F1AFC0",
    NORMAL:"#F5D37B",
  },
  LABEL: {
    PRIMARY: "#200E32",
    SECONDARY: "#676773",
    TERTIARY: "#A6A6B3",
    WHITE: "#FFFFFF",
    SECONDARY_WHITE: "#ACACB3",
    TERTIARY_WHITE: "#797980",
    PRIMARY_ACCENT: "#7766C6",
  },
  SUCCESS: "#9ADBDB",
  INFO: "#374354",
  REGULAR_ERROR: "#FF5A5A",
  LIGHT_ERROR: "#FFABAB",

  GREY: {
    WHITE: "#FFFFFF",
    NAV: "#EAEDF4",
    PLACEHOLDER: "#E6E6E6",
    DISABLE: "#DCDDE0",
    DIVIDER: "#DFE3EB",
    ICON: "#676773",
    BACKGROUND: "#061442",
  },
  CARD: {
    NORMAL_CARD: "#F4F5F8",
    PRIMARY_BUTTON: "#A4A4EB",
  },
  BACKGROUND: "#F9FAFC",
  BACKGROUND_LIGHT: "#E5E5E5",
  BACKGROUND_DARK: "#F2F4F8",
};

const FONTS = {
  LIGHT: "Dana-Light",
  THIN: "Dana-Thin",
  REGULAR: "Dana-Regular",
  MEDIUM: "Dana-Medium",
  BOLD: "Dana-Bold",
  BLACK: "Dana-Black",
};

const WIDTH = {
  BIG: widthPercentageToDP("90"),
  WIDE: widthPercentageToDP(90),
  LINE_SIZE: "100%",
};

export const THEME = {
  COLORS,
  FONTS,
  WIDTH,
};
