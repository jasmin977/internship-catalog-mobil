import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../config/theme";
import AppButton from "../components/atoms/AppButton";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";

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
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default StartScreen;
