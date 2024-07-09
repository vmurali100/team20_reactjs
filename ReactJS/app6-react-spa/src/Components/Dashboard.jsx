import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container'>
      <h2>Welcome to Dashboard !!</h2>
      <nav className='dashboard'>
        <ul>
          <li>
            <Link to="stats">Stats</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> 
    </div>
  )
}

export default Dashboard
