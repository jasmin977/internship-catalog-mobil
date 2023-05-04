import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { AppButton, Background, Header, SignUpInSwitch } from "../atoms";
import { theme } from "../../config";

const StartScreen = ({ navigation }) => {
  return (
    <Background>
      <Image
        source={require("../../../assets/getStarted.png")}
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
    fontFamily: "hint",
  },
});

export default StartScreen;
