import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUserInServer, deleteUserInServer, getUsersFromServer, udpateUserInServer } from "../Store/UsersSlice";

const UsersComp = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state)=>state.usersState.users);

  const handleGetUsers = () => {
    dispatch(getUsersFromServer())
  };

  const handleDelete = (user)=>{
    dispatch(deleteUserInServer(user))
  }

  const handleCreateUser=()=>{
    const userInfo={
        "email": "Ram.vmt@gmail.com",
        "password": 123
      };
    dispatch(createUserInServer(userInfo))
  }

  const handleUpdateUser=()=>{
    const userInfo={
        "email": "Ram.VMRInfoTech@gmail.com",
        "password": 1111,
        "id": 4
      };
      dispatch(udpateUserInServer(userInfo))
  }

  return (
    <div>
      <button onClick={handleGetUsers}>Get Users</button>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <ul>
        {usersDetails.map((user,i)=> <li key={i}>{user.email} <button onClick={()=>{handleDelete(user)}}>Delete User</button></li> )}
      </ul>
    </div>
  );
};

export default UsersComp;
