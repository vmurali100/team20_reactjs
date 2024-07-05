import React, { useState } from "react";

const HOCComp = (ClickCounter) => {
    console.log(ClickCounter)
  const NewComp = () => {
    const [count, setCount] = useState(0);

    const incrementCount = ()=>{
      setCount(count+1)
    }
    const decrementCount = ()=>{
      setCount(count-1)
    }
    return <ClickCounter count={count} incrementCount={incrementCount} decrementCount={decrementCount}/>;
  };

  return NewComp;
};

export default HOCComp;
