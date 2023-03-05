import { MyStack } from "./src/navigation/navigation";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import Background from "./src/components/atoms/Background";
import { theme } from "./src/config";
import StartNavigator from "./src/navigation/StartNavigator";
import { AuthProvider } from "./src/context";
export default function App() {
  //load fonts
  const [fontsLoaded, setfontsLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(theme.fonts);
      setfontsLoaded(true);
    }
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return (
      <Background>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Background>
    );
  }
  return (
    <AuthProvider>
      <StartNavigator />
    </AuthProvider>
  );
}
