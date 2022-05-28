import "react-native-gesture-handler/jestSetup";
import "react-native-reanimated";
import "@react-navigation/native";
import "@gorhom/bottom-sheet";
import "@react-navigation/material-top-tabs";
require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();
global.__reanimatedWorkletInit = jest.fn();
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock("@gorhom/bottom-sheet", () => {
  const reactNative = jest.requireActual("react-native");
  const { View } = reactNative;

  return {
    __esModule: true,
    default: View,
    BottomSheetView: View,
    BottomSheetModal: View,
    BottomSheetModalProvider: View,
    useBottomSheetModal: () => ({
      present: () => {},
      dismiss: () => {},
    }),
  };
});

jest.mock("@react-navigation/material-top-tabs", () => {
  const actualNav = jest.requireActual("@react-navigation/material-top-tabs");
  return {
    ...actualNav,
    createMaterialTopTabNavigator: () => ({
      Navigator: jest.fn(),
      Screen: jest.fn(),
    }),
  };
});

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useRoute: () => jest.fn(),
    useIsFocused: () => jest.fn(),
    useNavigation: () => ({
      goBack: jest.fn(),
      push: jest.fn(),
    }),
  };
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
