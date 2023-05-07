import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProcessFormContext = createContext({
  isLoading: {},
  processForm: {},
  currentStep: {},
  updateprocessForm: () => { },
  goToNextStep: () => { },
  goToPreviousStep: () => { },
});

export default ProcessProvider = ({ children }) => {
  const [processForm, setprocessForm] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setisloading] = useState(false);

  //setCurrentStep(1);
  console.log("currentStep", currentStep);

  const getProcessDataFromStorage = async () => {
    setisloading(true);

    let doesHeGotData = await AsyncStorage.getItem("processFormData");

    if (doesHeGotData) {
      let processForm = JSON.parse(
        await AsyncStorage.getItem("processFormData")
      );
      let step = JSON.parse(await AsyncStorage.getItem("processStep"));

      setprocessForm(processForm);
      setCurrentStep(step);
    } else {
      //set him in first step
      AsyncStorage.setItem("processStep", JSON.stringify(1));
      AsyncStorage.setItem("processFormData", JSON.stringify(""));
      setprocessForm(processForm);
      setCurrentStep(step);
    }
    setisloading(false);
  };
  useEffect(() => {
    getProcessDataFromStorage();
  }, []);

  const saveProcess = async (data, step) => {
    try {
      setisloading(true);
      AsyncStorage.setItem("processFormData", JSON.stringify(data));

      let savedStep = await AsyncStorage.getItem("processStep");
      if (savedStep) {
        if (step > savedStep) {
          AsyncStorage.setItem("processStep", JSON.stringify(step));
        }
      } else {
        AsyncStorage.setItem("processStep", JSON.stringify(step));
      }

      setisloading(false);
    } catch (error) {
      console.log("Error writing process to local storage");
      console.log(error);
    }
  };

  const updateprocessForm = (stepData) => {
    setprocessForm({ ...processForm, ...stepData });
    saveProcess(processForm, currentStep);
    console.log(currentStep, processForm);
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <ProcessFormContext.Provider
      value={{
        isLoading,
        processForm,
        currentStep,
        updateprocessForm,
        goToNextStep,
        goToPreviousStep,
      }}
    >
      {children}
    </ProcessFormContext.Provider>
  );
};
