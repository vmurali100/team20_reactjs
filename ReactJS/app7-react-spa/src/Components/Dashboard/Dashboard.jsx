import React from "react";
import { NavLink,Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Welcome to Dashboard Component</h2>

      <ul>
        <li>
          <NavLink to={'products'}>Products</NavLink>
        </li>
        <li>
        <NavLink to={'projects'}>Projects</NavLink>
        </li>
        <li>
        <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>

      <Outlet/>
    </div>
  );
};

export default Dashboard;
