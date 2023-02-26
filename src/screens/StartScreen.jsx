import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../config/theme";
import AppButton from "../components/atoms/AppButton";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";
import SignUpInSwitch from "../components/atoms/signUpInSwitch";

const StartScreen = ({ navigation }) => {
  return (
    <Background>
      <Image
        source={require("../../assets/getStarted.png")}
        style={styles.image}
      />

      <View
        style={{
          marginVertical: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header title="let’s get you in" />

        <Text style={styles.subtitle}>
          Our mission is help student find the perfect internship opportunities
          for their career aspirations.
        </Text>
      </View>

      <AppButton
        title="login"
        onPress={() => navigation.replace("LoginScreen")}
      />

      <SignUpInSwitch
        quest="Don’t have an account"
        sol="Sign Up"
        screen="RegisterScreen"
        navigation={navigation}
      />
    </Background>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginBottom: 4,
  },

  subtitle: {
    fontWeight: "300",
    fontSize: 17,
    lineHeight: 20,
    display: "flex",
    color: theme.colors.subtext,
    textAlign: "center",
    width: 300,
    fontFamily: "MyFont-Regular",
  },
});

export default StartScreen;
