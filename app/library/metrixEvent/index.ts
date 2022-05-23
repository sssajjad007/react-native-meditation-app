import { Metrix } from "@metrixorg/react-native-plugin";
import { Platform } from "react-native";

export function newUserEvent() {
  Metrix.newEvent("uugym"); // new user event
}

export function init() {
  if (Platform.OS === "ios") {
    Metrix.initialize("slmncvrhgyvxsuh");
  }
}
