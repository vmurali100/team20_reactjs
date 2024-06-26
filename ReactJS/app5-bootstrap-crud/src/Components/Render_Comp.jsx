import React from "react";
import { useState } from "react";
import Child from "./Child";
import Total from "./Total";

const Render_Comp = () => {
  const [messasge, setMessage] = useState(
    "Welcome to New Topic called .. Render props"
  );

  const returnSomeValue = (num1, num2) => {
    var totalNums = num1 + num2;
    return <Total val={totalNums} />;
  };
  return (
    <div>
      <h2>Welcome to ReactJS Render Method ....Concept </h2>
      <hr />
      <br />
      <Child msg={messasge} render={returnSomeValue} />
    </div>
  );
};

export default Render_Comp;
