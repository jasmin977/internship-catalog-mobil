import { View, Text, ScrollView, StatusBar } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../../config";
import { GoBackBtn } from "../../../atoms";
import {
  CompanyDetailStep,
  PersonalDetailStep,
  SupervisorsDetailStep,
} from "../../../templates/process";
import { ProcessFormContext } from "../../../../context";

const StickyHeader = ({ step, action }) => {
  const stepHeaders = [
    "personal details",
    "company details",
    "supervisors details",
  ];

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        paddingVertical: 20,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,
          paddingHorizontal: 15,
          paddingBottom: 20,
        }}
      >
        <GoBackBtn action={action} color={theme.colors.bg} />

        <Text
          style={{
            color: theme.colors.bg,
            fontSize: 20,
            fontFamily: "importantText",
          }}
        >
          PFE/SFE application!
        </Text>
        <Text></Text>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {stepHeaders.map((stepName, idx) => (
          <View
            key={`process_${stepName}_${idx}`}
            index={`${idx}_step_process_${stepName}`}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{
                color:
                  idx === step ? theme.colors.bg : "rgba(255, 255, 255, 0.5)",
                fontSize: 12,
                textTransform: "capitalize",
                fontFamily: "importantText",
              }}
            >
              {stepName}
            </Text>
            <View
              style={{
                backgroundColor:
                  idx === step ? theme.colors.bg : "rgba(255, 255, 255, 0.5)",
                borderRadius: 5,
                width: 100,
                height: 6,
              }}
            ></View>
          </View>
        ))}
      </View>
    </View>
  );
};

const IntershipProcess = () => {
  const navigation = useNavigation();

  const { currentStep } = useContext(ProcessFormContext);

  /*  const handleStepChange = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleStepBack = () => {
    if (currentStep === 0) {
      navigation.goBack();
    }
    if (currentStep <= 2 && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }; */

  const handleStepBack = () => {
    if (currentStep === 1) {
      navigation.goBack();
    }
  };
  const saveProcessHandle = () => {
    navigation.navigate("ResultProcessScreen");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: theme.colors.primary,
      }}
    >
      <ScrollView stickyHeaderIndices={[0]}>
        <StickyHeader action={handleStepBack} step={currentStep} />

        {currentStep === 1 && <PersonalDetailStep />}
        {currentStep === 2 && <CompanyDetailStep />}
        {currentStep === 3 && (
          <SupervisorsDetailStep action={saveProcessHandle} />
        )}
      </ScrollView>
    </View>
  );
};

export default IntershipProcess;
