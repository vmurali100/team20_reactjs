import React from "react";
import { useState } from "react";

const UserForm = ({ children }) => {
    const [values, setValues] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = children(values);
      setErrors(validationErrors);
    };  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
