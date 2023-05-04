import { View, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  AppButton,
  Background,
  GoBackBtn,
  MyInputText,
  StepsHeader,
} from "../atoms";
import { theme } from "../../config";

const ResetPasswordScreen = (navigation) => {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });

  return (
    <Background>
      <View style={{ alignSelf: "flex-start", paddingHorizontal: 20 }}>
        <GoBackBtn />
      </View>

      <Image
        source={require("../../../assets/forgotPassword.png")}
        style={{ width: 300, height: 300 }}
      />

      <StepsHeader
        headerText="forget your password?"
        subtext="enter your email below to reset your password"
      />

      <MyInputText
        onSubmitEditing={() => onLoginPressed()}
        returnKeyType="done"
        value={email.value}
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
