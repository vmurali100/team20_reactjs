
import { useState } from "react";
import { DisplayObejct } from "./DisplayObject";
import { MainChild } from "./main child"
import { MainUsers } from "./MainUsers";

export const MainPerson = () => {
  const [message, setMessage] = useState("Welcome to ReactJS Training ");
  const [mainObject, setMainObject] = useState({
    fname: "Kiran",
    lname: "kumar",
    email: "kiran@gmail.com",
  });
  const [mainUsers, setMainUsers] = useState(["Ram", "Ravi", "Kumar", "Sam"]);
  return (
    <div>
      <button
        onClick={() => {
          setMessage("New Welcome Message !!!");
        }}
      >
        Change Messagse
      </button>
      <MainChild abc={message} some={"helo"} ram={"dummy"} />

      <button
        onClick={() => {
          setMainObject({
            fname: "reddy",
            lname: "ravi",
            email: "ravi@gmail.com",
          });
        }}
      >
        Change Person
      </button>
      <DisplayObejct info={mainObject} />
      <MainUsers users={mainUsers} />
    </div>
  );
};
