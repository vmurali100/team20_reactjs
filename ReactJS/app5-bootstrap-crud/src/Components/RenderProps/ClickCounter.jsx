import React from "react";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2>You Clicked {count} times ....</h2>
      <button onClick={incrementCount}>Clickme </button>
    </div>
  );
};

export default ClickCounter;
