import { View } from "react-native";
import React, { useState } from "react";
import Background from "../../components/atoms/Background";
import Header from "../../components/atoms/Header";
import MyInputText from "../../components/atoms/MyInputText";

import {
  firstnameValidator,
  lastnameValidator,
} from "../../helpers/nameValidator";
import AppButton from "../../components/atoms/AppButton";
import SpecialityPicker from "../../components/atoms/Picker";

const CompleteProfile = ({ navigation }) => {
  const [firstname, setFirstname] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });

  const onCreatePressed = () => {
    const firstnameError = firstnameValidator(firstname.value);
    const lastnameError = lastnameValidator(lastname.value);
    if (lastnameError || firstnameError) {
      setFirstname({ ...firstname, error: firstnameError });
      setLastname({ ...lastname, error: lastnameError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <Background>
      <Header title="Tell us about urself" />

      <View>
        <MyInputText
          returnKeyType="next"
          email={firstname.value}
          onChangeText={(text) => setFirstname({ value: text, error: "" })}
          errorText={firstname.error}
          hint="firstname"
          autoCapitalize="none"
        />
        <MyInputText
          returnKeyType="done"
          email={lastname.value}
          onChangeText={(text) => setLastname({ value: text, error: "" })}
          errorText={lastname.error}
          hint="lastname"
          autoCapitalize="none"
        />
        <SpecialityPicker />
      </View>

      <AppButton title="Create" onPress={() => onCreatePressed()} />
    </Background>
  );
};

export default CompleteProfile;
