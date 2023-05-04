import { View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import {
  CompleteProfileStackScreens,
  MyTabs,
  StartupStackStackScreens,
} from "./navigation";
import { AuthContext } from "../context";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../config";

const StartNavigator = () => {
  const { isLoading, isAuthenticated, completedProfile } =
    useContext(AuthContext);

  console.log(completedProfile);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size={"large"}
          color={theme.colors.primary}
        ></ActivityIndicator>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {isAuthenticated && !completedProfile && <CompleteProfileStackScreens />}

      {isAuthenticated && completedProfile && <MyTabs />}

      {!isAuthenticated && <StartupStackStackScreens />}
    </NavigationContainer>
  );
};

export default StartNavigator;
