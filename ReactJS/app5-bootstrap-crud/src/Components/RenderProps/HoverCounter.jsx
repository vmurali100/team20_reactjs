import React from "react";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2>You Hovered {count} times ....</h2>
      <button onMouseOver={incrementCount}>Hover On Me </button>
    </div>
  );
};

export default HoverCounter;
