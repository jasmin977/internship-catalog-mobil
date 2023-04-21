import { View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import { theme } from "../../../config";
import { Text } from "react-native";
import { AppButton, MyInputText, Picker } from "../../atoms";

const FormInput = () => {
  const [address, setAdress] = useState("");
  const [firstname, setFirstname] = useState("");

  const [lastname, setLastname] = useState("");
  const [cin, setCin] = useState("");
  const [phone, setPhone] = useState("");
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
        label="email address"
        value={address}
        onChangeText={(text) => setAdress(text)}
        errorText={""}
        hint="example@issatso-u.tn"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="firstname"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
        errorText={""}
        hint="yasmine"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="lastname"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
        errorText={""}
        hint="ben abdeljelil"
        autoCapitalize="none"
      />
      <MyInputText
        label="cin"
        value={cin}
        onChangeText={(text) => setCin(text)}
        errorText={""}
        hint="0000000"
        autoCapitalize="none"
        keyboardType="number-pad"
      />
      <MyInputText
        label="phone number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        errorText={""}
        hint="51241715"
        keyboardType="phone-pad"
      />
      <Picker label={"major"} />
    </View>
  );
};
const PersonalDetailStep = ({ action, title }) => {
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
      {title ? (
        <></>
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "title",
            textTransform: "capitalize",
            color: theme.colors.text,
          }}
        >
          enter your details 🌱
        </Text>
      )}

      <View style={{ gap: 5 }}>
        <FormInput />
        <AppButton
          onPress={action}
          title={title ? title : "save and continue"}
        />
      </View>
    </View>
  );
};

export default PersonalDetailStep;
