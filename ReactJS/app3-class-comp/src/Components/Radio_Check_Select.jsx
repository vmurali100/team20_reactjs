import React from "react";
import { useState } from "react";

const Radio_Check_Select = () => {
  const [gender, setGender] = useState(null);

  const addUser = () => {};
  return (
    <div>
      <h2>Welcome to Radio_Check_Select</h2>
      <form>
        <label htmlFor="">Select Gender : </label>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="Other" /> Other
        <br /> <br />
        <button onClick={addUser} type="button">
          Add User
        </button>
        {/* <button onclick="setUser()" type="button">Set User</button> */}
      </form>
    </div>
  );
};

export default Radio_Check_Select;
