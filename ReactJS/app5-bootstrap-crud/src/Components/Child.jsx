import React from "react";

const Child = ({ msg, render }) => {
  return (
    <div>
      <h2>Welcome to Child Component !!!</h2>
      <p>The Message Receieved from Parent is : {msg}</p>
      <p>Value Recived From Parent is : {render(30, 70)}</p>
    </div>
  );
};

export default Child;
