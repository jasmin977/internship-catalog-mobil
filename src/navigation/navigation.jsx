import { createStackNavigator } from "@react-navigation/stack";

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
const Stack = createStackNavigator();

export const MyStack = () => {
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
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
