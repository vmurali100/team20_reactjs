import React from "react";

const Users_Form = ({ handleChange, user, createUser, isEdit,updateUser }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        {isEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateUser}
          >
            Update User
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={createUser}
            disabled
          >
            Create User
          </button>
        )}
      </form>
    </div>
  );
};

export default Users_Form;
