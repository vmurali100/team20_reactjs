import { useState } from "react";

export const PersonFunctional = () => {
  const [myname, setMyname] = useState("Raghu Ram");
  const [userDetails, setUserDetails] = useState({
    fname: "Ram",
    lname: "Krishna",
    email: "ramn@fmail.com",
  });

  const [usersInfo, setUsersInfo] = useState(["Guru", "Tilak", "Syamn", "Sundar"])
  const changeMyName = () => {
    setMyname("Thulasi Ram ");
  };

  const changeUserDetails = () => {
    setUserDetails({
      fname: "Kiran",
      lname: "Kumar",
      email: "Kiran@fmail.com",
    });
  };

  const changeUsersInfo=()=>{
    setUsersInfo(["Ram","Ravi","Samn","Suresh","Kiran"])
  }
  return (
    <div>
      <h2>Welcome to Functional Component !!</h2>
      <button onClick={changeMyName}>Change My Name</button>
      <h2>My name is {myname}</h2>
      <br />
      <hr />
      <br />
      <button onClick={changeUserDetails}>Change User Details</button>
      <ul>
        {Object.values(userDetails).map((val) => (
          <li>{val}</li>
        ))}
      </ul>

      <hr />
      <br />

      <ul>
        {usersInfo.map((val) => (
          <li>{val}</li>
        ))}
      </ul>
      <button onClick={changeUsersInfo}>Chane Users</button>
    </div>
  );
};
