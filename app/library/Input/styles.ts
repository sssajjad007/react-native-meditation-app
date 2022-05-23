import { StyleSheet, Platform } from "react-native";
import { material } from "react-native-typography";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { IInputStyleGen, tInputMode } from "./types";

const WITH_LABEL_TITLE_HEIGHT = 28;
const ERROR_CONTAINER_HEIGHT = 34;
const FLAT_INPUT_HEIGHT = 58;
const INPUT_NORMAL_HEIGHT = 56;

function containerHeightGen(mode: tInputMode) {
  if (mode === "with-label") {
    // 28 for title
    // 56 for input
    // 34 for errors
    return (
      WITH_LABEL_TITLE_HEIGHT + INPUT_NORMAL_HEIGHT + ERROR_CONTAINER_HEIGHT
    );
  }
  if (mode === "outlined") {
    // 56 for input
    // 34 for errors
    return INPUT_NORMAL_HEIGHT + ERROR_CONTAINER_HEIGHT;
  }
  if (mode === "flat") {
    return FLAT_INPUT_HEIGHT + ERROR_CONTAINER_HEIGHT;
  }

  return INPUT_NORMAL_HEIGHT + ERROR_CONTAINER_HEIGHT;
}
export function inputHeightGen(mode: tInputMode) {
  if (mode === "outlined") {
    // 56 for input
    // 34 for title
    return INPUT_NORMAL_HEIGHT;
  }
  if (mode === "flat") {
    return FLAT_INPUT_HEIGHT;
  }
  return INPUT_NORMAL_HEIGHT;
}
function inputBorderGen(mode: tInputMode) {
  if (mode === "flat") {
    return {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 1,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    };
  }
  if (mode === "raw") {
    return {
      borderWidth: undefined,
      borderRadius: undefined,
    };
  }
  if (mode === "with-label") {
    return {
      borderWidth: 0.5,
      borderColor: THEME.COLORS.CARD.NORMAL_CARD,
      borderRadius: 4,
    };
  }
  return {
    borderWidth: 1,
    borderRadius: 8,
  };
}

function containerStyleGen(mode: tInputMode, height: number) {
  if (mode === "raw") {
    return {
      flex: 1,
    };
  }
  return {
    width: THEME.WIDTH.WIDE,
    height,
  };
}

function styleGenerator(args: IInputStyleGen) {
  const {
    mode,
    focused,
    inputHeightState,
    multiline,
    numberOfLines,
    hasError,
    limit,
    value,
    style,
  } = args;
  const inputHeight = inputHeightGen(mode);
  const height = containerHeightGen(mode);
  const isFlat = mode === "flat";
  const isRaw = mode === "raw";
  const flatBackgroundColor = isFlat ? "rgba(0,0,0,0.12)" : undefined;
  const styles = StyleSheet.create({
    container: containerStyleGen(mode, height),
    titleContainer: {
      width: "100%",
      height: WITH_LABEL_TITLE_HEIGHT,
      flexDirection: "row-reverse",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    titleRaw: {
      position: "absolute",
      right: 20,
      top: 14,
    },
    focusedTitle: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    inputContainer: {
      flexDirection: "row",
      width: THEME.WIDTH.WIDE,
      height: inputHeight,
      backgroundColor: mode === "with-label" ? "#fff" : flatBackgroundColor,
      paddingRight: 16,
      ...inputBorderGen(mode),
    },
    inputRawContainer: {
      width: "100%",
      height: "100%",
      paddingTop: 4,

      paddingHorizontal: 16,
    },
    input: {
      flex: 9,
      paddingBottom: isFlat || isRaw ? 0 : undefined,
      textAlign: "right",
      ...Platform.select({
        web: {
          outlineStyle: "none",
        },
      }),
    },
    inputFont: {
      fontFamily: THEME.FONTS.REGULAR,
      color: THEME.COLORS.LABEL.SECONDARY,
    },
    activeBorderColor: {
      borderColor: THEME.COLORS.PRIMARY.NORMAL,
      borderWidth: 2,
    },
    disabledBorderColor: {
      borderColor: THEME.COLORS.LABEL.SECONDARY,
    },
    limit: { position: "absolute", top: isRaw ? 4 : -18, left: isRaw ? 4 : 0 },
    limitActive: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    limitReached: {
      color: THEME.COLORS.REGULAR_ERROR,
    },
    clearButtonContainer: {
      flex: 1,
      zIndex: 1,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    errorContainer: {
      width: "100%",
      height: ERROR_CONTAINER_HEIGHT,
      flexDirection: "row-reverse",
      // paddingLeft: 16,
      paddingTop: 8,
      overflow: "hidden",
    },
    error: {
      width: "100%",
      height: "100%",
      color: THEME.COLORS.REGULAR_ERROR,
      marginLeft: 8,
      textAlign: "right",
    },
    inputError: {
      borderColor: THEME.COLORS.REGULAR_ERROR,
    },
    animatedTextContainer: {
      position: "absolute",
      zIndex: 1,
      paddingHorizontal: 4,
      backgroundColor: isFlat ? undefined : THEME.COLORS.BACKGROUND,
      top: inputHeight / 2 - 10,
      right: 16,
      overflow: "hidden",
    },
    animatedText: {
      ...material.subheadingObject,
      fontFamily: THEME.FONTS.REGULAR,
      textAlign: "right",
      color: THEME.COLORS.LABEL.SECONDARY,
    },
    animatedTextActive: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    animatedTextError: {
      color: THEME.COLORS.REGULAR_ERROR,
    },
  });

  // theses styles are based on states
  // they change on state changes and should be passed like this
  const containerStyles = [
    styles.container,
    /**
     * if input is not in raw mode and multiline is enabled
     * if number of lines is defined, for each line 16 size is added to
     * container style
     */
    !isRaw && multiline && numberOfLines
      ? {
          height:
            inputHeight +
            numberOfLines * 16 +
            (mode === "with-label"
              ? WITH_LABEL_TITLE_HEIGHT + ERROR_CONTAINER_HEIGHT
              : ERROR_CONTAINER_HEIGHT),
        }
      : undefined,
    /**
     * if input is not in raw mode and multiline is enabled
     * if number of lines is NOT defined, text input will grow
     * based on content size dynamically
     */
    !isRaw && multiline && !numberOfLines
      ? {
          height:
            inputHeightState +
            (mode === "with-label"
              ? WITH_LABEL_TITLE_HEIGHT + ERROR_CONTAINER_HEIGHT
              : ERROR_CONTAINER_HEIGHT),
        }
      : undefined,
  ];
  const inputContainerStyles = isRaw
    ? styles.inputRawContainer
    : [
        styles.inputContainer,
        focused && mode !== "with-label"
          ? styles.activeBorderColor
          : styles.disabledBorderColor,
        value && mode !== "with-label" ? styles.activeBorderColor : undefined,
        hasError ? styles.inputError : undefined,
        multiline && numberOfLines
          ? { height: inputHeight + numberOfLines * 16 }
          : undefined,
        multiline && !numberOfLines ? { height: inputHeightState } : undefined,
      ];
  const inputStyles = [
    material.subheading,
    styles.input,
    !isRaw && multiline && numberOfLines
      ? { height: inputHeight + numberOfLines * 16 }
      : undefined,
    !isRaw && multiline && !numberOfLines
      ? { height: inputHeightState }
      : undefined,
    styles.inputFont,
    style,
  ];
  const limitStyle = [
    styles.limit,
    focused ? styles.limitActive : undefined,
    Number(value?.length) === Number(limit) ? styles.limitReached : undefined,
  ];
  const animatedTextStyle = [
    styles.animatedText,
    focused ? styles.animatedTextActive : undefined,
    hasError ? styles.animatedTextError : undefined,
  ];
  const selectionColor = THEME.COLORS.SECONDARY.LIGHT;
  return {
    styles,
    containerStyles,
    inputContainerStyles,
    inputStyles,
    limitStyle,
    animatedTextStyle,
    selectionColor,
    INPUT_HEIGHT: inputHeight,
    clearIconSize: 24,
    clearIconColor: hasError ? THEME.COLORS.REGULAR_ERROR : undefined,
  };
}
export const styleGen = memoize(styleGenerator);
