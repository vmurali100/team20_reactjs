import React from "react";
import FormComp from "./FormComp";

const RP1_FormValidation = () => {
  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Required !!";
    }
    if (!values.email) {
      errors.email = "Email is Required !!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is Invalid !!";
    }
    return errors
  };
  return (
    <>
      <FormComp>{validateForm}</FormComp>
    </>
  );
};

export default RP1_FormValidation;
