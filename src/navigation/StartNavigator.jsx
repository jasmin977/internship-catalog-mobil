import { View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { MyTabs, StartupStackStackScreens } from "./navigation";
import { AuthContext } from "../context";
import { NavigationContainer } from "@react-navigation/native";

const StartNavigator = () => {
  const { isLoading, isAuthenticated } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"}></ActivityIndicator>
        </View>
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
