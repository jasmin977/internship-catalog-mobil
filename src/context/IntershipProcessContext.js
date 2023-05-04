import React, { createContext, useState } from "react";

export const ProcessFormContext = createContext({
  processForm: {},
  currentStep: {},
  updateprocessForm: () => {},
  goToNextStep: () => {},
  goToPreviousStep: () => {},
});

export default ProcessProvider = ({ children }) => {
  const [processForm, setprocessForm] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  console.log(currentStep);

  const updateprocessForm = (stepData) => {
    setprocessForm({ ...processForm, ...stepData });
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
