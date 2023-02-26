import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Background from "../../components/atoms/Background";

import { theme } from "../../config/theme";
import CodeInput from "../../components/molecules/codeInput";
import AppButton from "../../components/atoms/AppButton";
import axios from "axios";
import StepsHeader from "../../components/molecules/StepsHeader";

const VerifEmail = ({ route, navigation }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  //const { email } = route.params;
  const email = "example@issatso-u.tn";
  const handleResendCode = async () => {
    try {
      const { data } = await axios.post(
        "http://192.168.1.17:5000/api/v1/user/request_email_verification",
        {
          email,
        }
      );
      if (data.success) {
        setCode(["", "", "", ""]);
        // navigation.replace("VerifEmailScreen", { email: email.value });
      }
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const hanldeVerifyEmail = async () => {
    console.log(email, code.join(""));
    try {
      const { data } = await axios.post(
        "http://192.168.1.17:5000/api/v1/user/verify_email",
        {
          email,
          code: code.join(""),
        }
      );
      if (data.success) {
        navigation.replace("CreatePassScreen", { email });
      }
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  return (
    <Background>
      <StepsHeader
        headerText="verify your email"
        subtext="To confirm your account ,enter the 4-digit code sent to"
        email={email}
      />

      {/** code inputs */}
      <View>
        <CodeInput code={code} setCode={setCode} />
      </View>

      <View style={styles.row}>
        <Text>Didn’t get the codet? </Text>
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.link}>Resend</Text>
        </TouchableOpacity>
      </View>

      <AppButton title="Continue" onPress={hanldeVerifyEmail} />
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
export default VerifEmail;
