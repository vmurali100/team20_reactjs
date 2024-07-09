import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [usersDetails, setUsersDetails] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then();
    const users = await response.json();
    setUsersDetails(users);
  };
  return (
    <div className="container">
      {usersDetails.map((usr, i) => (
        <p key={i}>
          <Link to={`${usr.id}`}>{usr.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Users;
