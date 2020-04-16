import React, {useContext} from 'react';
import {
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

import './index.css';

import {Context} from '../../Context/theme/ThemeContext.js';

export default function Header(props) {
  const userData = localStorage.getItem('userData');
  const userDataParsed = JSON.parse(userData);
  let history = useHistory();

  const {theme, handleChangeColor} = useContext(Context);
  const themeStorage = localStorage.getItem('theme');
  const themeSt = themeStorage ? JSON.parse(themeStorage) : theme;

  const logout = () => {
    history.push("/login");
    localStorage.removeItem('userData');
  }

  return (
    <header className='header' style={{backgroundColor: themeSt.background}}>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li>
            <Link to="/" style={{color: themeSt.color}}>Home</Link>
          </li>
          <li>
            <Link to="/public" style={{color: themeSt.color}}>Public Page</Link>
          </li>
          <li>
            <Link to="/protected-manager" style={{color: themeSt.color}}>Protected Manager</Link>
          </li>
          <li>
            <Link to="/protected-admin" style={{color: themeSt.color}}>Protected Page Admin</Link>
          </li>
          <li>
            <Link to="/protected-owner" style={{color: themeSt.color}}>Protected Page Owner</Link>
          </li>
          {userDataParsed &&
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          }
          <li>
              <button onClick={handleChangeColor}>Mudar</button>
            </li>
        </ul>
      </nav>
    </header>
  )
}