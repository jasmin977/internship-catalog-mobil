import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Background from "../../components/atoms/Background";
import Header from "../../components/atoms/Header";
import { theme } from "../../config/theme";
import CodeInput from "../../components/molecules/codeInput";
import AppButton from "../../components/atoms/AppButton";

const VerifEmail = ({ navigation }) => {
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
        <Header title="Cheeck ur email" />

        <Text style={styles.subtitle}>
          To confirm your account ,enter the 4-digit code sent to emai@test.com.
        </Text>
      </View>
      {/** code inputs */}
      <View>
        <CodeInput />
      </View>

      <View style={styles.row}>
        <Text>didn’t get the codet? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Resend</Text>
        </TouchableOpacity>
      </View>

      <AppButton
        title="Continue"
        onPress={() => navigation.navigate("CreatePassScreen")}
      />
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
