import React from "react";
import Parent from "./Parent";

const GrandParent = ({message}) => {
  return (
    <div id="grandParent">
      <p>Grand Paren</p>

      <Parent message={message}/>
    </div>
  );
};

export default GrandParent;
