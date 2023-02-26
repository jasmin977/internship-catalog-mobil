import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";
import Logo from "../components/atoms/Logo";
import MyInputText from "../components/atoms/MyInputText";
import AppButton from "../components/atoms/AppButton";
import { theme } from "../config";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };
  return (
    <Background>
      <Logo />
      <Header title="welcome back" />
      <MyInputText
        returnKeyType="next"
        email={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        errorText={email.error}
        hint="example@issatso-u.tn"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        returnKeyType="done"
        email={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        errorText={password.error}
        hint="**********"
        autoCapitalize="none"
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <AppButton title="login" onPress={() => onLoginPressed()} />
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default LoginScreen;
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
