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
  const { saveUserCredential, userInfo } = useContext(AuthContext);
  const [firstname, setFirstname] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const onCreatePressed = async () => {
    const firstnameError = firstnameValidator(firstname.value);
    const lastnameError = lastnameValidator(lastname.value);
    if (lastnameError || firstnameError) {
      setFirstname({ ...firstname, error: firstnameError });
      setLastname({ ...lastname, error: lastnameError });
      return;
    }
    setLoading(true);
    const [{ data }, err] = await registrationApi.userPersonalInfo(
      userInfo.email,
      firstname.value,
      lastname.value,
      "test"
    );
    setLoading(false);
    if (err) console.log(err);
    if (data.success) {
      saveUserCredential("token", data.user);
    }
  };

  return (
    <Background>
      <Image
        source={require("../../../../assets/login.png")}
        style={{ width: 250, height: 250 }}
      />

      <Header title="Tell us about urself" />

      <View>
        <MyInputText
          returnKeyType="next"
          value={firstname.value}
          onChangeText={(text) => setFirstname({ value: text, error: "" })}
          errorText={firstname.error}
          hint="firstname"
          autoCapitalize="none"
        />
        <MyInputText
          returnKeyType="done"
          value={lastname.value}
          onChangeText={(text) => setLastname({ value: text, error: "" })}
          errorText={lastname.error}
          hint="lastname"
          autoCapitalize="none"
        />
        <Picker />
      </View>

      <AppButton
        loading={loading}
        title="Create"
        onPress={() => onCreatePressed()}
      />
    </Background>
  );
};

export default CompleteProfile;
