import React, { useEffect, useState } from 'react'

const fakeAuthService = {
    currentUser: { name: 'John Doe', email: 'john@example.com' },
    isAuthenticated: true,
    login(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    logout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      if (fakeAuthService.isAuthenticated) {
        setUser(fakeAuthService.currentUser);
        setIsAuthenticated(true);
      }
    }, []);
  
    const login = (cb) => {
      fakeAuthService.login(() => {
        setUser(fakeAuthService.currentUser);
        setIsAuthenticated(true);
        cb();
      });
    };
  
    const logout = (cb) => {
      fakeAuthService.logout(() => {
        setUser(null);
        setIsAuthenticated(false);
        cb();
      });
    };
  
    return children({ user, isAuthenticated, login, logout });
}

export default AuthProvider
