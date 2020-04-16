import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from '../pages/Home';
import ProtectAdmin from '../pages/ProtectAdmin';
import ProtectManager from '../pages/ProtectManager';
import ProtectOwner from '../pages/ProtectOwner';
import PublicPage from '../pages/PublicPage';
import Login from '../pages/Login';

import Header from '../components/header';
import {getProfileRequiredRoute} from '../utils/routes';

import { ThemeProvider } from '../Context/theme/ThemeContext';

export default function AuthExample(props) {

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/protected-owner" userProfileRequired={getProfileRequiredRoute('owner')}>
            <ProtectOwner />
          </PrivateRoute>
          <PrivateRoute path="/protected-manager" userProfileRequired={getProfileRequiredRoute('manager')}>
            <ProtectManager />
          </PrivateRoute>
          <PrivateRoute path="/protected-admin" userProfileRequired={getProfileRequiredRoute('admin')}>
            <ProtectAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

function PrivateRoute({ children, userProfileRequired, ...rest }) {
  const userData = localStorage.getItem('userData');
  const userDataParsed = JSON.parse(userData);
  const userProfile = userDataParsed ? userDataParsed.userData[0].profile : '';
  
  const havePermission = userProfileRequired.includes(userProfile);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        havePermission && userDataParsed ? (
          children
        ) : (
          userDataParsed ? (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            /> 
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            /> 
          )
        )
      }
    />
  );
}