import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Background from "../../components/atoms/Background";
import MyInputText from "../../components/atoms/MyInputText";
import { passwordValidator } from "../../helpers/passwordValidator";
import Header from "../../components/atoms/Header";
import { theme } from "../../config";
import AppButton from "../../components/atoms/AppButton";
import { registrationApi } from "../../api";

const CreatePass = ({ route, navigation }) => {
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });

  const onContinuePressed = async () => {
    const passwordError = passwordValidator(password.value);
    const cpasswordError = passwordValidator(password.value, cpassword.value);
    if (passwordError || cpasswordError) {
      setCpassword({ ...cpassword, error: cpasswordError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    const [{ data, status }, err] = await registrationApi.createAcount(
      route.params.email,
      password.value,
      cpassword.value
    );
    if (data?.success)
      navigation.replace("CompleteProfileScreen", {
        email: route.params.email,
      });
  };
  return (
    <Background>
      <View
        style={{
          marginVertical: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header title="Create a password" />

        <Text style={styles.subtitle}>
          your password must contain at least 8 characters.
        </Text>
      </View>

      <View>
        <MyInputText
          returnKeyType="next"
          email={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          errorText={password.error}
          hint="**********"
          autoCapitalize="none"
          secureTextEntry
        />
        <MyInputText
          returnKeyType="done"
          email={cpassword.value}
          onChangeText={(text) => setCpassword({ value: text, error: "" })}
          errorText={cpassword.error}
          hint="**********"
          autoCapitalize="none"
          secureTextEntry
        />
      </View>
      <AppButton title="Continue" onPress={() => onContinuePressed()} />
    </Background>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "300",
    fontSize: 17,
    lineHeight: 20,
    display: "flex",
    color: theme.colors.subtext,
    textAlign: "center",
    width: 300,
  },
});

export default CreatePass;
