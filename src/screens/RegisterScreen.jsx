import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";
import Logo from "../components/atoms/Logo";
import MyInputText from "../components/atoms/MyInputText";
import AppButton from "../components/atoms/AppButton";
import { theme } from "../config/theme";
import { emailValidator } from "../helpers/emailValidator";
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });

      return;
    }
    navigation.replace("VerifEmailScreen");
  };
  return (
    <Background>
      <Logo />
      <Header title="create your account" />
      <MyInputText
        returnKeyType="done"
        email={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        errorText={email.error}
        hint="example@issatso-u.tn"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Text style={{ paddingVertical: 30, color: theme.colors.subtext }}>
        Please enter your Institute Email
      </Text>
      <AppButton title="Send" onPress={() => onLoginPressed()} />
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
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
