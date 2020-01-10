import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <span style={{fontSize: "24px"}} role='img' aria-label='weights'>🏋️</span>      
      <Link to="/" className="navbar-brand">Exercise Tracker</Link>
      <span style={{fontSize: "24px"}} role='img' aria-label='run'>🏃</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Workout History</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Log New Workout</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/edit" className="nav-link">User List</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
