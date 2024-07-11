import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAction,
  deleteUserAction,
  readUserAction,
  updateUserAction,
} from "./Store/Actions";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const usersInfo = useSelector((state) => state.users);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const dispatch = useDispatch();

  const handleCreateUser = () => {
    dispatch(createUserAction(user));
    clearUser();
  };

  const readUsers = () => {
    dispatch(readUserAction());
  };

  const handleDelete = (usr) => {
    dispatch(deleteUserAction(usr));
  };

  const handleChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const handleSubmit = () => {
    if (isEdit) {
      dispatch(updateUserAction({ user, index }));
      setIsEdit(false);
      setIndex(null);
    } else {
      dispatch(createUserAction(user));
    }
    clearUser();
  };

  const handleEdit = (usr, i) => {
    setIsEdit(true);
    setUser(usr);
    setIndex(i);
  };

  useEffect(() => {
    readUsers();
  }, []);

  const clearUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="App">
      <h2>Welcome to Redux Demo !!!</h2>
      <button onClick={handleCreateUser}>Create User</button>
      <hr />
      <form>
        <label>Email : </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Password : </label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit} type="button">
          {isEdit ? "Update User" : "Add User"}
        </button>
      </form>
      <ul>
        {usersInfo.map((usr, i) => (
          <li key={i}>
            {usr.email}{" "}
            <button
              onClick={() => {
                handleDelete(usr);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEdit(usr, i);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
