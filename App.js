import { MyStack } from "./src/navigation/navigation";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
