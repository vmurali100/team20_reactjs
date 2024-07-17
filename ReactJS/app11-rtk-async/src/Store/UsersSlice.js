import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

const getAllUsers = async () => {
  const response = await (
    await fetch("http://localhost:3000/nethaji_users")
  ).json();
  return response;
};
// This Method will be Called From Component
export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async () => {
    return await getAllUsers();
  }
);
export const deleteUserInServer = createAsyncThunk(
  "users/deleteUserInServer",
  async (user) => {
    const resposne = await fetch(
      "http://localhost:3000/nethaji_users/" + user.id,
      {
        method: "DELETE",
      }
    );
    return await getAllUsers();
  }
);
export const udpateUserInServer = createAsyncThunk(
  "users/udpateUserInServer",
  async (user) => {
    const response = await fetch(
      "http://localhost:3000/nethaji_users/" + user.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    return await getAllUsers();
  }
);
export const createUserInServer = createAsyncThunk(
  "users/createUserInServer",
  async (user) => {
    const response = await fetch("http://localhost:3000/nethaji_users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await getAllUsers();
  }
);

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: () => {},
    readUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
  },
  // extraReducers Will Watch the createAsyncThunk Calls
  extraReducers: (builder) => {
    // fulfilled means - API Call Success
    builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    // rejected meands - API Failed
    builder.addCase(getUsersFromServer.rejected, (state, action) => {
      console.log("Some ERROR Happened");
      state.users = [];
    });

    builder.addCase(deleteUserInServer.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(udpateUserInServer.fulfilled, (state, action) => {
        state.users = action.payload;
    });
    builder.addCase(createUserInServer.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default UsersSlice.reducer;
