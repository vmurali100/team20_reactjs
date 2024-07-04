import React from "react";
import Child from "./Child";
import GrandChild from "./GrandChild";

const Parent = ({message}) => {
  return (
    <div id="parent">
      <p>Parent</p>
      <GrandChild message={message}/>
    </div>
  );
};

export default Parent;
