import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
  AppButton,
  Background,
  GoBackBtn,
  Header,
  MyInputText,
} from "../../atoms";
import { theme } from "../../../config";
import { passwordValidator } from "../../../helpers";
import { registrationApi } from "../../../api";

const CreatePass = ({ route, navigation }) => {
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const onContinuePressed = async () => {
    const passwordError = passwordValidator(password.value);
    const cpasswordError = passwordValidator(password.value, cpassword.value);
    if (passwordError || cpasswordError) {
      setCpassword({ ...cpassword, error: cpasswordError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    setLoading(true);
    const [{ data, status }, err] = await registrationApi.createStudentAcount(
      route.params.email,
      password.value,
      cpassword.value
    );
    setLoading(false);
    if (data?.success)
      navigation.replace("CompleteProfileScreen", {
        email: route.params.email,
      });
  };
  return (
    <Background>
      <View style={{ alignSelf: "flex-start", paddingHorizontal: 20 }}>
        <GoBackBtn />
      </View>
      <Image
        source={require("../../../icons/lock.png")}
        style={{ width: 100, height: 100 }}
      />
      <View
        style={{
          marginVertical: 15,
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
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          errorText={password.error}
          hint="**********"
          autoCapitalize="none"
          secureTextEntry
          type="psw"
        />
        <MyInputText
          returnKeyType="done"
          value={cpassword.value}
          onChangeText={(text) => setCpassword({ value: text, error: "" })}
          errorText={cpassword.error}
          hint="**********"
          autoCapitalize="none"
          secureTextEntry
          type="psw"
        />
      </View>
      <AppButton
        loading={loading}
        title="Continue"
        onPress={() => onContinuePressed()}
      />
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
