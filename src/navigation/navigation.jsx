import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "../config";

import { View } from "react-native";
import {
  LoginScreen,
  ResetPasswordScreen,
  StartScreen,
} from "../components/pages";
import {
  CompleteProfileScreen,
  CreatePassScreen,
  RegisterScreen,
  VerifEmailScreen,
} from "../components/pages/register";
import { FeedHeader } from "../components/molecules";
import {
  NotificationsScreen,
  SettingScreen,
  FeedScreen,
  SearchScreen,
  ProfileScreen,
  CalendarScreen,
  EditProfileScreen,
} from "../components/pages/app";
import {
  CompaniesScreen,
  LikedCompaniescreen,
  SavedCompaniesScreen,
  WriteReviewScreen,
  companyDetailScreen,
} from "../components/pages/app/company";
import {
  IntershipProcessScreen,
  ResultProcessScreen,
} from "../components/pages/app/process";

const Stack = createStackNavigator();

function AuthStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerifEmailScreen" component={VerifEmailScreen} />
      <Stack.Screen name="CreatePassScreen" component={CreatePassScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export const CompleteProfileStackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="CompleteProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CompleteProfileScreen"
        component={CompleteProfileScreen}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export const StartupStackStackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerifEmailScreen" component={VerifEmailScreen} />
      <Stack.Screen name="CreatePassScreen" component={CreatePassScreen} />

      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerifEmailScreen" component={VerifEmailScreen} />
      <Stack.Screen name="CreatePassScreen" component={CreatePassScreen} />
      <Stack.Screen
        name="CompleteProfileScreen"
        component={CompleteProfileScreen}
      />
      <Stack.Screen name="MainTabs" component={MyTabs} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          zIndex: 1,
          bottom: 10,
          backgroundColor: theme.colors.primary,
          height: 70,
          marginHorizontal: 20,
          borderRadius: 15,
          position: "absolute",
        },
        tabBarInactiveTintColor: theme.colors.input,
        tabBarActiveTintColor: theme.colors.input,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={() => {
          return {
            headerStyle: {
              height: 150,
            },
            gestureEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,

            headerTitle: () => <FeedHeader />,
            tabBarIcon: ({ focused, size, color }) => (
              <View
                style={{
                  backgroundColor: focused
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  focused={focused}
                  color={color}
                  size={size}
                  name={focused ? "home" : "home-outline"}
                />
              </View>
            ),
          };
        }}
      />
      <Tab.Screen
        name="companies"
        component={CompaniesStackScreens}
        options={{
          tabBarStyle: { display: "none" },
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255, 255, 255, 0.3)"
                  : "transparent",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Ionicons
                focused={focused}
                color={color}
                size={size}
                name={focused ? "search" : "search-outline"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="intershipPorcess"
        component={IntershipProcessStackScreens}
        options={{
          tabBarStyle: { display: "none" },
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255, 255, 255, 0.3)"
                  : "transparent",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Ionicons
                focused={focused}
                color={color}
                size={size}
                name={focused ? "school" : "school-outline"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255, 255, 255, 0.3)"
                  : "transparent",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Ionicons
                focused={focused}
                color={color}
                size={size}
                name={focused ? "notifications" : "notifications-outline"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function CompaniesStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="CompaniesSearchScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CompaniesSearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="companyDetailScreen"
        component={companyDetailScreen}
      />
      <Stack.Screen name="reviewScreen" component={WriteReviewScreen} />
    </Stack.Navigator>
  );
}

function IntershipProcessStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="IntershipProcessScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="IntershipProcessScreen"
        component={IntershipProcessScreen}
      />
      <Stack.Screen
        name="ResultProcessScreen"
        component={ResultProcessScreen}
      />
    </Stack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen
        name="LikedCompaniesScreen"
        component={LikedCompaniescreen}
      />
      <Stack.Screen
        name="SavedCompaniesScreen"
        component={SavedCompaniesScreen}
      />
    </Stack.Navigator>
  );
}

function HomeStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="FeedScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen
        name="ProfileStackScreens"
        component={ProfileStackScreens}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
