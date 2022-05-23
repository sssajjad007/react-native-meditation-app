import "react-native-gesture-handler";
import * as Sentry from "sentry-expo";
if (!__DEV__) {
  Sentry.init({
    enableInExpoDevelopment: false,
    dsn: "https://d45a80a893014cfcb77527cbbd0d6605@sentry.karafsapp.com/2",
  });
}
import { registerRootComponent } from "expo";
// import TrackPlayer from "react-native-track-player";
import App from "./App";
// import { service } from "./app/musicPlayer/usecases/service";

// AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// TrackPlayer.registerPlaybackService(() => service);
