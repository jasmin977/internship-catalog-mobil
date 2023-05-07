import { useEffect, useState } from "react";

const useForm = (initialState, validateForm) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (isSubmitting) {
  //     const formIsValid = Object.values(errors).every(
  //       (value) => value === null
  //     );

  //     console.log("formIsValid", formIsValid);
  //     console.log("formData", formData);
  //     console.log("errors", errors);
  //     if (formIsValid) {
  //       console.log("Form submitted successfully!", formData);
  //       setIsSubmitted(true);
  //     }
  //     setIsSubmitting(false);
  //   }
  // }, [errors, formData, isSubmitting]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  /* function is called when an input field loses focus*/
  const handleBlur = () => {
    const formErrors = validateForm(formData);
    setErrors(formErrors);
  };

  const handleSubmit = () => {
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    setIsSubmitting(true);
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitted,
  };
};

export default useForm;
