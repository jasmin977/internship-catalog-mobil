import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { registrationApi } from "../../../api";
import { AppButton, Background, GoBackBtn, StepsHeader } from "../../atoms";
import { CodeInput } from "../../molecules";
import { theme } from "../../../config";

const VerifEmail = ({ route, navigation }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [errorText, seterrorText] = useState("");
  const { email } = route.params;
  const handleResendCode = async () => {
    const [{ data, status }, err] =
      await registrationApi.requestEmailVerification(email);
    if (err) return console.log(err);
    console.log(`status: ${status}`);
    console.log(data);
    setCode(["", "", "", ""]);
  };

  const hanldeVerifyEmail = async () => {
    const [{ status, data }, err] = await registrationApi.verifyEmail(
      email,
      code.join("")
    );
    if (err) return console.log(err);
    if (data.success) {
      navigation.replace("CreatePassScreen", { email });
    } else {
      console.log(`status: ${status}, ${data.error}`);
      seterrorText(data.error);
      console.log(errorText);
    }
  };

  return (
    <Background>
      <View style={{ alignSelf: "flex-start", paddingHorizontal: 20 }}>
        <GoBackBtn />
      </View>
      <Image
        source={require("../../../icons/email.png")}
        style={{ width: 100, height: 100 }}
      />
      <StepsHeader
        headerText="verify your email"
        subtext="To confirm your account ,enter the 4-digit code sent to"
        email={email}
      />

      {/** code inputs */}
      <View>
        <CodeInput
          code={code}
          setCode={setCode}
          errorText={errorText}
          seterrorText={seterrorText}
        />
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
