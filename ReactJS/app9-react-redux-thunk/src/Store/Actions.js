import { CREATE_USER, DELETE_USER, READ_USER, UPDATE_USER } from "./Constants";

export const createUserAction = (user) => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost:3000/nethaji_users/",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getLatestUsers(dispatch);
  };
};

const getLatestUsers = async (dispatch) => {
  const users = await (
    await fetch("http://localhost:3000/nethaji_users")
  ).json();

  dispatch({
    type: READ_USER,
    payload: users,
  });
};
export const readUserAction = () => {
  return async (dispatch) => {
    getLatestUsers(dispatch);
  };
};
export const updateUserAction = ({ user }) => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost:3000/nethaji_users/" + user.id,
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getLatestUsers(dispatch);
  };
};
export const deleteUserAction = (user) => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost:3000/nethaji_users/" + user.id,
      {
        method: "DELETE",
      }
    );
    getLatestUsers(dispatch);
  };
};
