import { CREATE_USER, DELETE_USER, READ_USER, UPDATE_USER } from "./Constants";

export const createUserAction = (username) => {
  return {
    type: CREATE_USER,
    payload: username,
  };
};
export const readUserAction = () => {
  return {
    type: READ_USER,
  };
};
export const updateUserAction = ({ username, index }) => {
  return {
    type: UPDATE_USER,
    payload: {
      username,
      index,
    },
  };
};
export const deleteUserAction = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};
