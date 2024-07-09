import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userData = await response.json();
    console.log(userData);
    setUser(userData);
  };

  return (
    <div className="container">
      <h2>Welcome to User Details Component !!!</h2>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.username}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
