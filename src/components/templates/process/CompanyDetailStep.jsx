import { View, Text, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { theme } from "../../../config";
import { AppButton, MyInputText } from "../../atoms";
import { useForm } from "../../../hooks";
import { ProcessFormContext } from "../../../context";
const FormInput = ({ formData, errors, handleChange, handleBlur }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        gap: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <MyInputText
        label="company name"
        value={formData.company_name}
        onChangeText={(text) => handleChange("company_name", text)}
        onBlur={handleBlur}
        errorText={errors.company_name}
        hint="maibornwoff.."
        autoCapitalize="none"
      />
      <MyInputText
        label="host company email address"
        value={formData.company_address}
        onChangeText={(text) => handleChange("company_address", text)}
        errorText={errors.company_address}
        onBlur={handleBlur}
        hint="company@gmail.com"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="departement"
        value={formData.company_departement}
        onChangeText={(text) => handleChange("company_departement", text)}
        onBlur={handleBlur}
        errorText={errors.company_departement}
        hint="artificial intelligence"
        autoCapitalize="none"
      />
      <MyInputText
        label="company supervisor name"
        value={formData.supervisor_name}
        onChangeText={(text) => handleChange("supervisor_name", text)}
        onBlur={handleBlur}
        errorText={errors.supervisor_name}
        hint="flen ben flen"
        autoCapitalize="none"
      />
      <MyInputText
        label="company supervisor email address"
        value={formData.supervisor_address}
        onChangeText={(text) => handleChange("supervisor_address", text)}
        onBlur={handleBlur}
        errorText={errors.supervisor_address}
        hint="flen@gmail.com"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <MyInputText
        label="company supervisor phone number"
        value={formData.supervisor_phone}
        onChangeText={(text) => handleChange("supervisor_phone", text)}
        onBlur={handleBlur}
        errorText={errors.supervisor_phone}
        hint="51241715"
        autoCapitalize="none"
        keyboardType="phone-pad"
      />
    </View>
  );
};
const CompanyDetailStep = ({ action }) => {
  const { updateprocessForm, goToNextStep, processForm } =
    useContext(ProcessFormContext);
  const screenWidth = Dimensions.get("window").width;
  const [loading, setLoading] = useState(false);

  let step_2_state = {};
  if (!processForm["step2"]) {
    step_2_state = {
      company_name: "proxy",
      company_address: "proxy@gmail.com",
      company_departement: "ai",
      supervisor_name: "flen",
      supervisor_address: "flen@gmail.com",
      supervisor_phone: "51241715",
    };
  } else {
    step_2_state = {
      company_name: processForm["step2"].company_name,
      company_address: processForm["step2"].company_address,
      company_departement: processForm["step2"].company_departement,
      supervisor_name: processForm["step2"].supervisor_name,
      supervisor_address: processForm["step2"].supervisor_address,
      supervisor_phone: processForm["step2"].supervisor_phone,
    };
  }

  const validateForm = (values) => {
    let errors = {};

    if (!values.company_name) {
      errors.company_name = "company name is required";
    } else {
      errors.company_name = null;
    }
    if (!values.company_address) {
      errors.company_address = "company address is required";
    } else {
      errors.company_address = null;
    }

    if (!values.company_departement) {
      errors.company_departement = "company departement is required";
    } else {
      errors.company_departement = null;
    }

    if (!values.supervisor_name) {
      errors.supervisor_name = "supervisor name is required";
    } else {
      errors.supervisor_name = null;
    }
    if (!values.supervisor_address) {
      errors.supervisor_address = "supervisor address Number is required";
    } else {
      errors.supervisor_address = null;
    }
    if (!values.supervisor_phone) {
      errors.supervisor_phone = "supervisor phone is required";
    } else {
      errors.supervisor_phone = null;
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
  } = useForm(step_2_state, validateForm);

  const submitStep2 = () => {
    handleSubmit();

    //store it in local storage and move on to next page step+1
    if (isSubmitted) {
      updateprocessForm({ step2: formData });
      goToNextStep();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,

        marginTop: 30,

        backgroundColor: theme.colors.bg,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: theme.colors.text,
          paddingHorizontal: 20,
          fontFamily: "title",
          textTransform: "capitalize",
        }}
      >
        enter the company details 🌱
      </Text>

      <View style={{ gap: 5, alignItems: "center" }}>
        <FormInput
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <AppButton
          loading={loading}
          onPress={submitStep2}
          title={"save and continue"}
        />
      </View>
    </View>
  );
};

export default CompanyDetailStep;
