import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Background from "../components/atoms/Background";
import { theme } from "../config";
import AppButton from "../components/atoms/AppButton";
import StepsHeader from "../components/molecules/StepsHeader";
import MyInputText from "../components/atoms/MyInputText";
import { Image } from "react-native";

const ResetPasswordScreen = (navigation) => {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });

  return (
    <Background>
      <Image
        source={require("../../assets/forgotPassword.png")}
        style={{ width: 300, height: 300 }}
      />

      <StepsHeader
        headerText="forget your password?"
        subtext="enter your email below to reset your password"
      />

      <MyInputText
        onSubmitEditing={() => onLoginPressed()}
        returnKeyType="done"
        email={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        errorText={email.error}
        hint="example@issatso.u-sousse.tn"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <AppButton title="submit" />
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

  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
export default ResetPasswordScreen;
