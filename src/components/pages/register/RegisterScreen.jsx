import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { theme } from "../../../config";
import { emailValidator } from "../../../helpers/emailValidator";
import { registrationApi } from "../../../api";
import {
  AppButton,
  Background,
  Header,
  MyInputText,
  SignUpInSwitch,
} from "../../atoms";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState({
    value: "user@issatso.u-sousse.tn",
    error: "",
  });

  const [loading, setLoading] = useState(false);

  const onSendEmailPressed = async () => {
    const error = emailValidator(email.value);
    if (error) return setEmail({ ...email, error });
    setLoading(true);
    const [{ data, status }, err] =
      await registrationApi.requestEmailVerification(email.value);
    setLoading(false);
    if (err) return setEmail({ ...email, error: "Oops, Something went wrong" });
    if (data.success)
      navigation.replace("VerifEmailScreen", { email: email.value });
    else setEmail({ ...email, error: data.error });
  };

  return (
    <Background>
      <Image
        source={require("../../../../assets/register.png")}
        style={{ width: 300, height: 300 }}
      />
      <Header title="create your account" />
      <MyInputText
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        errorText={email.error}
        hint="example@issatso.u-sousse.tn"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Text
        style={{
          paddingVertical: 30,
          color: theme.colors.subtext,
          fontFamily: "text",
        }}
      >
        Please enter your Institution Email
      </Text>
      <AppButton
        loading={loading}
        title="Send"
        onPress={() => onSendEmailPressed()}
      />
      <SignUpInSwitch
        quest="Have an account already"
        sol="Sign In"
        screen="LoginScreen"
        navigation={navigation}
      />
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
