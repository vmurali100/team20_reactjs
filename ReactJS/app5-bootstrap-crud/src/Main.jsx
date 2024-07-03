import React from "react";
import ClickCounter from "./Components/RenderProps/ClickCounter";
import Counter from "./Components/RenderProps/Counter";
import HoverCounter from "./Components/RenderProps/HoverCounter";

const Main = () => {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => {
          return <ClickCounter count={count} incrementCount={incrementCount} />;
        }}
      />
      <hr />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
};

export default Main;
