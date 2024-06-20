import React, { useEffect, useState } from "react";

const VijayDinesh = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    investment: "",
    dateofjoined: "",
    active: [],
  });
  const [allUsers, setAllUsers] = useState([]);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    const newUsers = JSON.parse(localStorage.getItem("users"));
    newUsers && setAllUsers(newUsers);
  }, []);

  const handleChange = (e) => {
    const newUser = { ...userDetails };
    newUser[e.target.name] = e.target.value;
    setUserDetails(newUser);
  };

  const addUser = () => {
    const newAllUsers = [...allUsers];
    newAllUsers.push(userDetails);
    setAllUsers(newAllUsers);
    localStorage.setItem("users", JSON.stringify(newAllUsers));
  };

  const editUser = (usr, i) => {
    setUserDetails(usr);
    setIndex(i);
  };

  const deleteUser = (index) => {
    const newAllUsers = allUsers.filter((_, i) => i !== index);
    setAllUsers(newAllUsers);
    localStorage.setItem("users", JSON.stringify(newAllUsers));
    Cancel();
  };

  const updateUser = () => {
    const newUsers = [...allUsers];
    newUsers[index] = userDetails;
    setAllUsers(newUsers);
    setIndex(null);
    Cancel();
  };
  const clearForm = () => {
    const newUsers = [...allUsers];
    newUsers[index] = userDetails;
    setAllUsers(newUsers);
    setIndex(null);
    clearForm();
  };
  const Cancel = () => {
    setUserDetails({
      name: "",
      email: "",
      investment: "",
      dateofjoined: "",
      active: [],
    });
  };

  const validate = () => {
    for (let a in userDetails) {
      if (a !== "subjects") {
        if (userDetails[a] === "") {
          return true;
        }
      } else {
        if (userDetails[a].length === 0) {
          return true;
        }
      }
    }
    return false;
  };
  const { name, email, investment, dateofjoined, active } = userDetails;

  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            VijayDinesh form
          </a>
        </div>
      </nav>
      <div className="container ">
        <div className="row ">
          <div className="col-12 ">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="email"
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Date Of Joined
                </label>
                <input
                  type="dateofjoined"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="dateofjoined"
                  value={dateofjoined}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Investment
                </label>
                <input
                  type="investment"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="investment"
                  value={investment}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Active
                </label>
                <input
                  type="active"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="active"
                  value={active}
                />
              </div>
              {index !== null ? (
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
                  onClick={addUser}
                  disabled={validate()}
                >
                  submit
                </button>
              )}
              {/* <button
                id="ram"
                type="button"
                className="btn btn-danger"
                onClick={Cancel}
                disabled={validate()}
              >
                
              </button> */}
            </form>
          </div>
          <div className="col-12">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Investment</th>
                  <th>content</th>
                  <th>activities</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((usr, i) => {
                  return (
                    <tr key={i}>
                      <td>{usr.name}</td>
                      <td>{usr.email}</td>
                      <td>{usr.investment}</td>
                      <td>{usr.dateofjoined}</td>
                      <td>{usr.active}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            editUser(usr, i);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VijayDinesh
