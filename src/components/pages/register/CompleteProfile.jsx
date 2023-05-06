import { Image, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
  const { saveUserCredential, userInfo, userToken } = useContext(AuthContext);
  const [firstname, setFirstname] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [choosenIndex, setChoosenIndex] = useState(0);
  const [Specialities, setSpecialties] = useState([]);

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
      Specialities[choosenIndex].id,
      userToken
    );
    setLoading(false);
    if (err) console.log(err);
    if (data.success) {
      saveUserCredential(userToken, data.user);
    }
  };

  const fetchMajors = async () => {
    const [res, err] = await registrationApi.getMajorLast();
    if (err) return console.log(err);
    const { data, status } = res;
    if (status === 200) {
      setSpecialties(data.majors);
      return;
    }
    // TODO: handle errors or empty response
    console.log("handle failed response");
  };

  useEffect(() => {
    fetchMajors();
  }, []);

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
        <Picker
          values={Specialities}
          selectedIdx={choosenIndex}
          action={(itemValue, itemIndex) => {
            setChoosenIndex(itemIndex);
          }}
        />
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
