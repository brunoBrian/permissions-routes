import React from 'react';
import {
  Link
} from "react-router-dom";

import './index.css';

export default function Header(props) {
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
        </ul>
      </nav>
    </header>
  )
}