import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "../components/atoms/Background";
import Header from "../components/atoms/Header";
import Logo from "../components/atoms/Logo";
import MyInputText from "../components/atoms/MyInputText";
import AppButton from "../components/atoms/AppButton";
import { theme } from "../config/theme";
import { emailValidator } from "../helpers/emailValidator";
import axios from "axios";
import SignUpInSwitch from "../components/atoms/signUpInSwitch";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState({
    value: "user@issatso.u-sousse.tn",
    error: "",
  });

  const onLoginPressed = async () => {
    const error = emailValidator(email);
    if (error) {
      return setEmail({ ...email, error });
    } else {
      try {
        const { data } = await axios.post(
          "http://192.168.1.17:5000/api/v1/user/request_email_verification",
          {
            email: email.value,
          }
        );
        if (data.success) {
          navigation.replace("VerifEmailScreen", { email: email.value });
        }
      } catch (err) {
        console.log(err);
        setEmail({
          ...email,
          error: err?.response?.data.error,
        });
      }
    }
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

      <Text style={{ paddingVertical: 30, color: theme.colors.subtext, fontFamily: "MyFont-Regular", }}>
        Please enter your Institute Email
      </Text>
      <AppButton title="Send" onPress={() => onLoginPressed()} />
      <SignUpInSwitch quest="Have an account already" sol="Sign In" screen="LoginScreen" navigation={navigation}/>

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
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
 
});
