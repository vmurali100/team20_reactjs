import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="button" class="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={goToRegister}
            >
              Go To Register
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Login;
