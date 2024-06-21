import React from "react";
import { useState } from "react";
import Users_Form from "./Users_Form";
import Users_Table from "./Users_Table";
import axios from "axios";
import { useEffect } from "react";
const Nethaji_Users = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [allUsers,setAllUsers] = useState([]);
  const [isEdit,setIsEdit] = useState(false);

  useEffect(()=>{
    getUsersFromServer()
  },[])
  const createUser = () => {
    axios.post("http://localhost:4200/nethaji_users", user).then(() => {
      console.log("User Added Successfully !!!");
      clearUser();
      getUsersFromServer();
    });
  };
  const editUser = (usr) => {
    setUser(usr);
    setIsEdit(true);
  };
  const deleteUser = (usr) => {
    axios.delete("http://localhost:4200/nethaji_users/"+usr.id).then(()=>{
      getUsersFromServer();
    })
  };
  const updateUser = () => {
    axios.put("http://localhost:4200/nethaji_users/"+user.id,user).then(()=>{
      getUsersFromServer();
      clearUser();
      setIsEdit(false);
    })
  };
  const clearUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  const getUsersFromServer = () => {
    axios.get("http://localhost:4200/nethaji_users").then(({data})=>{
      setAllUsers(data)
    })
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Users_Form
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Users_Table 
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
};

export default Nethaji_Users;
