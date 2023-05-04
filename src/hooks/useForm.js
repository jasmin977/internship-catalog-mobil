import { useEffect, useState } from "react";

const useForm = (initialState, validateForm) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /*  useEffect(() => {
    if (isSubmitting) {
      const formIsValid = Object.values(errors).every(
        (value) => value === null
      );
      console.log("formIsValid", formIsValid);
      if (formIsValid) {
        console.log("Form submitted successfully!", formData);
      }
      setIsSubmitted(false);
    }
  }, [errors, formData, isSubmitting]); */

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
    const formIsValid = Object.values(errors).every((value) => value === null);

    if (!formIsValid) return null;

    setIsSubmitted(true);
    console.log("Form submitted successfully!", formData);
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
