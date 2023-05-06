import { View, TextInput, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { theme } from "../../../config";
import { Text } from "react-native";
import { AppButton, MyInputText, Picker } from "../../atoms";
import { useForm } from "../../../hooks";
import { ProcessFormContext } from "../../../context";
import { Specialities } from "../../../data/Specialities";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const FormInput = ({ formData, errors, handleChange, handleBlur }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 15,
        paddingVertical: 10,
      }}
    >
      <MyInputText
        name={"email"}
        label="email address"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        onBlur={handleBlur}
        errorText={errors.email}
        hint="example@issatso-u.tn"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="firstname"
        value={formData.firstname}
        onChangeText={(text) => handleChange("firstname", text)}
        onBlur={handleBlur}
        errorText={errors.firstname}
        hint="yasmine"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="lastname"
        value={formData.lastname}
        onChangeText={(text) => handleChange("lastname", text)}
        onBlur={handleBlur}
        errorText={errors.lastname}
        hint="ben abdeljelil"
        autoCapitalize="none"
      />
      <MyInputText
        label="cin"
        value={formData.cin}
        onChangeText={(text) => handleChange("cin", text)}
        onBlur={handleBlur}
        errorText={errors.cin}
        hint="0000000"
        autoCapitalize="none"
        keyboardType="number-pad"
      />
      <MyInputText
        label="phone number"
        value={formData.phone}
        onChangeText={(text) => handleChange("phone", text)}
        onBlur={handleBlur}
        errorText={errors.phone}
        hint="51241715"
        keyboardType="phone-pad"
      />

      <Picker
        values={Specialities}
        selectedIdx={formData.major}
        action={(itemValue, itemIndex) => {
          handleChange("major", itemIndex);
        }}
        label={"major"}
      />
    </View>
  );
};
const PersonalDetailStep = ({ savedEdit, title, required }) => {
  const navigation = useNavigation();

  const { updateprocessForm, goToNextStep, processForm } =
    useContext(ProcessFormContext);
  const screenWidth = Dimensions.get("window").width;
  const [loading, setLoading] = useState(false);

  let step_1_state = {};
  if (processForm["step1"] === "") {
    step_1_state = {
      firstname: "",
      lastname: "",
      email: "",
      cin: "",
      phone: "",
      major: 1,
    };
  } else {
    step_1_state = {
      firstname: processForm["step1"].firstname,
      lastname: processForm["step1"].lastname,
      email: processForm["step1"].email,
      cin: processForm["step1"].cin,
      phone: processForm["step1"].phone,
      major: processForm["step1"].major,
    };
  }

  const validateForm = (values) => {
    let errors = {};
    if (required) {
      if (!values.firstname) {
        errors.firstname = "Lirstname is required";
      } else {
        errors.firstname = null;
      }
      if (!values.lastname) {
        errors.lastname = "Lastname is required";
      } else {
        errors.lastname = null;
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else {
        errors.email = null;
      }

      if (!values.cin) {
        errors.cin = "CIN is required";
      } else {
        errors.cin = null;
      }
      if (!values.phone) {
        errors.phone = "Phone Number is required";
      } else {
        errors.phone = null;
      }
      if (!values.major) {
        errors.major = "Major is required";
      } else {
        errors.major = null;
      }
    }

    return errors;
  };
  const {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitted,
  } = useForm(step_1_state, validateForm);

  const submitStep1 = () => {
    if (required) {
      handleSubmit();
      if (isSubmitted) {
        updateprocessForm({ step1: formData });
        goToNextStep();
      }
    } else {
      updateprocessForm({ step1: formData });
      navigation.goBack();
    }
  };

  useEffect(() => {
    if (savedEdit) {
      submitStep1();
    }
  }, [savedEdit]);

  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,

        paddingTop: 30,
        backgroundColor: theme.colors.bg,
      }}
    >
      {title ? (
        <></>
      ) : (
        <Text
          style={{
            fontSize: 20,
            paddingHorizontal: 20,
            fontFamily: "title",
            textTransform: "capitalize",
            color: theme.colors.text,
          }}
        >
          enter your details 🌱
        </Text>
      )}

      <View style={{ gap: 5, alignItems: "center" }}>
        <FormInput
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        {required && (
          <AppButton
            loading={loading}
            onPress={submitStep1}
            title={title ? title : "save and continue"}
          />
        )}
      </View>
    </View>
  );
};

export default PersonalDetailStep;
