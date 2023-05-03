import { Image, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  firstnameValidator,
  lastnameValidator,
} from "../../../helpers/nameValidator";

import { registrationApi } from "../../../api";

import {
  AppButton,
  Background,
  GoBackBtn,
  Header,
  MyInputText,
  Picker,
} from "../../atoms";
import { AuthContext } from "../../../context";

const CompleteProfile = ({ route }) => {
  const { saveUserCredential } = useContext(AuthContext);
  const [firstname, setFirstname] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });

  const onCreatePressed = async () => {
    const firstnameError = firstnameValidator(firstname.value);
    const lastnameError = lastnameValidator(lastname.value);
    if (lastnameError || firstnameError) {
      setFirstname({ ...firstname, error: firstnameError });
      setLastname({ ...lastname, error: lastnameError });
      return;
    }
    const [{ data }, err] = await registrationApi.userPersonalInfo(
      route.params.email,
      firstname.value,
      lastname.value,
      "test"
    );
    if (err) console.log(err);
    if (data.success) {
      saveUserCredential("token", data.user);
    }
  };

  return (
    <Background>
      <View style={{ alignSelf: "flex-start", paddingHorizontal: 20 }}>
        <GoBackBtn />
      </View>
      <Image
        source={require("../../../../assets/login.png")}
        style={{ width: 300, height: 300 }}
      />

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
        <Picker />
      </View>

      <AppButton title="Create" onPress={() => onCreatePressed()} />
    </Background>
  );
};

export default CompleteProfile;
