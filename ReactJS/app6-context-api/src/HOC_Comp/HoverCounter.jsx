import React, { useState } from "react";
import HOCComp from "./HOCComp";

const HoverCounter = (props) => {
  const { count, incrementCount, decrementCount } = props;
  return (
    <div>
      <h2>You Hovered {count} times !!!</h2>
      <button onMouseOver={incrementCount}>Increment</button>
      <button onMouseOut={decrementCount}>Decrement</button>
    </div>
  );
};

export default HOCComp(HoverCounter);
