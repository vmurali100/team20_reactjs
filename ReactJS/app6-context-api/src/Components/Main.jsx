import React from "react";
import { useState } from "react";
import GrandParent from "./GrandParent";
import { UserContextProvider } from "./UserContext";

const Main = () => {
  const [message, setMessage] = useState("Welcome to Context API");
  const [greting,setGreeting] = useState("Hello ... I am from Content API .. ")
  return (
    <div id="mainDiv">
      <p>Main</p>

      <UserContextProvider value={greting}>
        <GrandParent message={message} />
      </UserContextProvider>
    </div>
  );
};

export default Main;
