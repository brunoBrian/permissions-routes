import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from '../pages/Home';
import ProtectAdmin from '../pages/ProtectAdmin';
import ProtectManager from '../pages/ProtectManager';
import ProtectOwner from '../pages/ProtectOwner';
import PublicPage from '../pages/PublicPage';

import Header from '../components/header';
import {getProfileRequiredRoute} from '../utils/routes';

export default function AuthExample() {
  const userProfile = 'owner';

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/public">
          <PublicPage />
        </Route>
        <PrivateRoute path="/protected-owner" userProfile={userProfile} userProfileRequired={getProfileRequiredRoute('owner')}>
          <ProtectOwner />
        </PrivateRoute>
        <PrivateRoute path="/protected-manager" userProfile={userProfile} userProfileRequired={getProfileRequiredRoute('manager')}>
          <ProtectManager />
        </PrivateRoute>
        <PrivateRoute path="/protected-admin" userProfile={userProfile} userProfileRequired={getProfileRequiredRoute('admin')}>
          <ProtectAdmin />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, userProfile, userProfileRequired, ...rest }) {
  const havePermission = userProfileRequired.includes(userProfile);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        havePermission ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}