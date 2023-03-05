import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "../screens";

import VerifEmail from "../screens/register/VerifEmail";
import CreatePass from "../screens/register/CreatePass";
import CompleteProfile from "../screens/register/CompleteProfile";
import Setting from "../screens/app/Setting";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../config";
import Notifications from "../screens/app/Notifications";
import Entreprises from "../screens/app/Entreprises";
import FeedHeader from "../components/molecules/FeedHeader";
import EntrepriseDetail from "../screens/app/EntrepriseDetail";
import Search from "../screens/app/Search";
import Profile from "../screens/app/Profile";

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
      <Stack.Screen name="VerifEmailScreen" component={VerifEmail} />
      <Stack.Screen name="CreatePassScreen" component={CreatePass} />
      <Stack.Screen name="CompleteProfileScreen" component={CompleteProfile} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

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
      <Stack.Screen name="VerifEmailScreen" component={VerifEmail} />
      <Stack.Screen name="CreatePassScreen" component={CreatePass} />
      <Stack.Screen name="CompleteProfileScreen" component={CompleteProfile} />
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
      <Stack.Screen name="VerifEmailScreen" component={VerifEmail} />
      <Stack.Screen name="CreatePassScreen" component={CreatePass} />
      <Stack.Screen name="CompleteProfileScreen" component={CompleteProfile} />
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
        tabBarStyle: { position: "absolute", height: 60 },
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={({ navigation, route }) => {
          return {
            headerStyle: {
              height: 150,
            },
            headerTitle: () => <FeedHeader />,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                focused={focused}
                color={color}
                size={size}
                name={focused ? "home" : "home-outline"}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              focused={focused}
              color={color}
              size={size}
              name={focused ? "settings" : "settings-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="entreprises"
        component={EntrepriseStackScreens}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              focused={focused}
              color={color}
              size={size}
              name={focused ? "layers" : "layers-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              focused={focused}
              color={color}
              size={size}
              name={focused ? "notifications" : "notifications-outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function EntrepriseStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="EntreprisesScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EntreprisesScreen" component={Entreprises} />
      <Stack.Screen
        name="EntrepriseDetailScreen"
        component={EntrepriseDetail}
      />
    </Stack.Navigator>
  );
}

function HomeStackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="entreprises" component={EntrepriseStackScreens} />
    </Stack.Navigator>
  );
}
