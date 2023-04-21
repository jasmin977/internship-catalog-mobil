import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { theme } from "../../../config";
import { AppButton, MyInputText } from "../../atoms";

const FormInput = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const [departement, setDepartement] = useState("");
  const [superviseName, setSupervisorName] = useState("");
  const [superviseAddress, setSupervisorAddress] = useState("");
  const [supervisePhone, setSupervisorPhone] = useState("");

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        gap: 15,
        paddingVertical: 10,
      }}
    >
      <MyInputText
        label="host company"
        value={companyName}
        onChangeText={(text) => setCompanyName(text)}
        errorText={""}
        hint="maibornwoff.."
        autoCapitalize="none"
      />
      <MyInputText
        label="host company email address"
        value={companyAddress}
        onChangeText={(text) => setCompanyAddress(text)}
        errorText={""}
        hint="company@gmail.com"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="departement"
        value={departement}
        onChangeText={(text) => setDepartement(text)}
        errorText={""}
        hint="artificial intelligence"
        autoCapitalize="none"
      />
      <MyInputText
        label="company supervisor name"
        value={superviseName}
        onChangeText={(text) => setSupervisorName(text)}
        errorText={""}
        hint="flen ben flen"
        autoCapitalize="none"
      />
      <MyInputText
        label="company supervisor email address"
        value={superviseAddress}
        onChangeText={(text) => setSupervisorAddress(text)}
        errorText={""}
        hint="flen@gmail.com"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="company supervisor phone number"
        value={supervisePhone}
        onChangeText={(text) => setSupervisorPhone(text)}
        errorText={""}
        hint="51241715"
        autoCapitalize="none"
        keyboardType="phone-pad"
      />
    </View>
  );
};
const CompanyDetailStep = ({ action }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        //flex: 1,
        width: screenWidth,
        paddingHorizontal: 20,
        paddingVertical: 40,
        borderTopEndRadius: 30,
        marginTop: 30,
        borderTopStartRadius: 30,
        backgroundColor: theme.colors.bg,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: theme.colors.text,

          fontFamily: "title",
          textTransform: "capitalize",
        }}
      >
        enter the company details 🌱
      </Text>

      <View style={{ gap: 5 }}>
        <FormInput />
        <AppButton onPress={action} title={"save and continue"} />
      </View>
    </View>
  );
};

export default CompanyDetailStep;
