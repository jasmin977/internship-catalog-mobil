import { MyStack } from "./src/navigation/navigation";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import Background from "./src/components/atoms/Background";
import { theme } from "./src/config";
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
        <Text>loaded fonts</Text>
      </Background>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
