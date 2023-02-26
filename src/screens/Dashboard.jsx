import { View, Text } from "react-native";
import React from "react";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";
import AppButton from "../components/atoms/AppButton";

const Dashboard = ({ navigation }) => {
  return (
    <Background>
      <Header title="home" />
      <AppButton
        title="logout"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      />
    </Background>
  );
};

export default Dashboard;
