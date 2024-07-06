import React from "react";
import UserForm from "./UserForm";

const FormValidation = () => {
  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };
  return <div>
    <UserForm>
      {validateForm}
    </UserForm>
  </div>;
};

export default FormValidation;
