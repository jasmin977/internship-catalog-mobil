import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  CompanyDetailStep,
  PersonalDetailStep,
  SupervisorsDetailStep,
} from "../../../templates/process";
import { ProcessFormContext } from "../../../../context";
import { ScrollableList } from "../../../templates";
import { useEffect } from "react";

const IntershipProcess = () => {
  const navigation = useNavigation();

  const { currentStep, processForm, goToPreviousStep } =
    useContext(ProcessFormContext);
  console.log("processForm", processForm);

  const handleStepBack = () => {
    if (currentStep === 1) {
      navigation.goBack();
    }

    if (currentStep <= 3 && currentStep > 1) {
      goToPreviousStep();
    }
  };
  useEffect(() => {
    if (currentStep === 4) {
      navigation.navigate("ResultProcessScreen");
    }
  }, []);

  return (
    <ScrollableList
      action={handleStepBack}
      step={currentStep}
      list={
        <>
          {currentStep === 1 && <PersonalDetailStep required={true} />}
          {currentStep === 2 && <CompanyDetailStep />}
          {currentStep === 3 && <SupervisorsDetailStep />}
        </>
      }
    />
  );
};

export default IntershipProcess;
