import React from "react";
import AuthProvider from "./AuthProvider";

const Authentication = () => {
  return (
    <div>
      <h1>Authentication Example</h1>
      <AuthProvider>
      {({ user, isAuthenticated, login, logout }) => (
          isAuthenticated ? (
            <div>
              <p>Welcome, {user.name}!</p>
              <button onClick={() => logout(() => console.log('Logged out'))}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <p>Please log in.</p>
              <button onClick={() => login(() => console.log('Logged in'))}>
                Login
              </button>
            </div>
          )
        )}
      </AuthProvider>
    </div>
  );
};

export default Authentication;
