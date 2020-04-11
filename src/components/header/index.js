import React, {useState} from 'react';
import {
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

import './index.css';

export default function Header(props) {
  const userData = localStorage.getItem('userData');
  const userDataParsed = JSON.parse(userData);
  let history = useHistory();

  const logout = () => {
    history.push("/login");
    localStorage.removeItem('userData');
  }

  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected-manager">Protected Manager</Link>
          </li>
          <li>
            <Link to="/protected-admin">Protected Page Admin</Link>
          </li>
          <li>
            <Link to="/protected-owner">Protected Page Owner</Link>
          </li>
          {userDataParsed &&
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  )
}