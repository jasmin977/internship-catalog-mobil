import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";
import Logo from "../components/atoms/Logo";
import MyInputText from "../components/atoms/MyInputText";
import AppButton from "../components/atoms/AppButton";
import { theme } from "../config";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import SignUpInSwitch from "../components/atoms/signUpInSwitch";
import { registrationApi } from "../api";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({
    value: "user@issatso.u-sousse.tn",
    error: "",
  });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };
  return (
    <Background>
      <Image
        source={require("../../assets/login.png")}
        style={{ width: 300, height: 300 }}
      />
      <Header title="welcome back" />
      <MyInputText
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
        type="psw"
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
      <SignUpInSwitch
        quest="Don't have an account"
        sol="Sign Up"
        screen="RegisterScreen"
        navigation={navigation}
      />
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

  forgot: {
    fontSize: 13,
    color: theme.colors.text,
    fontFamily: "MyFont-SemiBold",
  },
});
