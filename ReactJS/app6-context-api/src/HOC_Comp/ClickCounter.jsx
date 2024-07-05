import React from "react";
import { useState } from "react";
import HOCComp from "./HOCComp";

const ClickCounter = (props) => {
  const { count, incrementCount, decrementCount } = props;
  return (
    <div>
      <h2>You Clickked {count} times !!!</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default HOCComp(ClickCounter);
