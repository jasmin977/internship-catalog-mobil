import { View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { MyTabs, StartupStackStackScreens } from "./navigation";
import { AuthContext } from "../context";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../config";

const StartNavigator = () => {
  const { isLoading, isAuthenticated } = useContext(AuthContext);
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
      {isAuthenticated ? <MyTabs /> : <StartupStackStackScreens />}
    </NavigationContainer>
  );
};

export default StartNavigator;
