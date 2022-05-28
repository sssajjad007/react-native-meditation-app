import React, { useCallback, useEffect, useState } from "react";
import { Authentication } from "./app/authentication";
import * as SplashScreen from "expo-splash-screen";
import { Profile } from "./app/profile/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Player } from "./app/musicPlayer/screens/MusicScreen";
import { Setting } from "./app/setting/screens/setting";
import { HomeScreen } from "./app/homePage/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StartMeditation } from "./app/onBoarding/screens/StartMeditationScreen";
import { Favorites } from "./app/favorites/screens/Favorites";
import { AboutUs } from "./app/aboutUs/screens/AboutUs";
import { UserInfo } from "./app/userInfo/screens/UserInfo";
import { GenderModal } from "./app/userInfo/screens/GenderModal";
import { WheelPicker } from "./app/userInfo/screens/BirthDayPicker";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Platform } from "react-native";
import { useFonts } from "expo-font";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import {
  HomeBoldIcon,
  HomeLightIcon,
  LearnBoldIcon,
  LearnLightIcon,
  MeditationBoldIcon,
  MeditationIcon,
  MusicBoldIcon,
  MusicLightIcon,
} from "./app/library/Icon";
import { LearnScreen } from "./app/learn/screens/LearnScreen";
import { Meditation } from "./app/meditation/screens/MeditationScreen";
import { MeditationCourse } from "./app/meditation/screens/MeditationCourse";
import { THEME, refresh } from "./app/library";
import { Login } from "./app/authentication/screens/Login";
import { exit, onExit, onLogin } from "./app/library/authEvent";
import { MusicScreen } from "./app/music/screens/CategoryScreen";
import { MusicList } from "./app/music/screens/MusicListScreen";
import { ShopScreen } from "./app/shop/screens/Shop";
import { TermsScreen } from "./app/terms/screens";
import { ifIphoneX } from "react-native-iphone-x-helper";
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
Platform.Version;
function MyTabs() {
  const isWeb = Platform.OS === "web";
  return (
    <Tab.Navigator
      initialRouteName="InitialRoot"
      backBehavior={"initialRoute"}
      safeAreaInsets={Platform.select({
        native: {
          top: 0,
          bottom: 0,
        },
      })}
      screenOptions={{
        tabBarInactiveTintColor: THEME.COLORS.LABEL.SECONDARY,
        tabBarActiveTintColor: THEME.COLORS.LABEL.PRIMARY_ACCENT,
        tabBarStyle: Platform.select({
          web: {
            paddingTop: 8,
          },
          android: {
            height: 72,
          },
          ios: {
            height: "10%",
          },
        }),
        tabBarLabelStyle: {
          fontFamily: THEME.FONTS.MEDIUM,
          fontSize: 14,
          // marginTop: 8
        },
        tabBarItemStyle: {
          ...Platform.select({
            ios: {
              ...ifIphoneX(
                {
                  paddingBottom: 20,
                },
                {
                  paddingBottom: 8,
                }
              ),
            },
            android: { paddingBottom: 8 },
            // web: { marginVertical: 12 },
          }),
        },
      }}
    >
      <Tab.Screen
        name="موسیقی"
        component={MusicScreen}
        options={{
          tabBarLabel: "موسیقی",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MusicBoldIcon size={isWeb ? size - 4 : size} />
            ) : (
              <MusicLightIcon size={isWeb ? size - 4 : size} />
            ),
        }}
      />
      <Tab.Screen
        name="مدیتیشن"
        component={Meditation}
        options={{
          headerShown: false,
          tabBarLabel: "مدیتیشن",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MeditationBoldIcon size={isWeb ? size - 4 : size} />
            ) : (
              <MeditationIcon size={isWeb ? size - 4 : size} />
            ),
        }}
      />
      <Tab.Screen
        name="یادگیری"
        component={LearnScreen}
        options={{
          headerShown: false,
          tabBarLabel: "یادگیری",
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <LearnBoldIcon size={isWeb ? size - 4 : size} />
            ) : (
              <LearnLightIcon size={isWeb ? size - 4 : size} />
            ),
        }}
      />
      <Tab.Screen
        name="InitialRoot"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "خانه",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <HomeBoldIcon size={isWeb ? size - 4 : size} />
            ) : (
              <HomeLightIcon size={isWeb ? size - 4 : size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
function Auth() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <AuthStack.Screen name={"Login"} component={Login} />
      <AuthStack.Screen name={"Auth"} component={Authentication} />
      <AuthStack.Screen name="StartMeditation" component={StartMeditation} />
    </AuthStack.Navigator>
  );
}
function Stacks() {
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Group> */}
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="MeditationCourse" component={MeditationCourse} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
        <Stack.Screen name="MusicList" component={MusicList} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
        <Stack.Screen name="LearnScreen" component={LearnScreen} />
        <Stack.Screen name="Meditation" component={Meditation} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="WheelPicker" component={WheelPicker} />

        {/* </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}> */}
        <Stack.Screen name="GenderModal" component={GenderModal} />
        {/* </Stack.Group> */}
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [isAppReady, setAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    ...Platform.select({
      web: {
        "Dana-Light": require("./fonts/Dana-Light.ttf"),
        "Dana-Thin": require("./fonts/Dana-Thin.ttf"),
        "Dana-Regular": require("./fonts/Dana-Regular.ttf"),
        "Dana-Medium": require("./fonts/Dana-Medium.ttf"),
        "Dana-Bold": require("./fonts/Dana-Bold.ttf"),
        "Dana-Black": require("./fonts/Dana-Black.ttf"),
      },
    }),
  });
  const onLayoutRootView = useCallback(async () => {
    if (isAppReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);
  function onExitEvent() {
    console.log("exit on app screen");
    setIsSignedIn(false);
  }
  function onLoginEvent() {
    console.log("on login event on app screen");
    // console.log(isSignedIn);
    setIsSignedIn(true);
  }
  useEffect(() => {
    const exitCleaner = onExit(onExitEvent);
    const loginCleaner = onLogin(onLoginEvent);
    signedInChecker();
    return () => {
      exitCleaner();
      loginCleaner();
    };
  }, []);
  async function signedInChecker() {
    await SplashScreen.preventAutoHideAsync();
    const { shouldLogout } = await refresh();
    if (shouldLogout) {
      // setIsSignedIn(false);
      setAppReady(true);
      return;
    }
    // metrixInit();
    setIsSignedIn(true);
    setAppReady(true);
  }
  if (!isAppReady) {
    return null;
  }
  return (
    <NavigationContainer
      onReady={onLayoutRootView}
      linking={{
        prefixes: ["denj://"],
        config: {
          screens: {
            ShopScreen: {
              path: "shop/:status",
            },
          },
        },
      }}
    >
      {isSignedIn ? <Stacks /> : <Auth />}
    </NavigationContainer>
    // </AuthContext.Provider>
  );
}

serviceWorkerRegistration.register();
