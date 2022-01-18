import * as React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import AuthRoute from './Auth.route';
import PrivateRoutes from './Privet.route';

// import tokenRefresh from "../services/refreshService";
// import { loggedIn } from "../services/tokenService";
// import notificationWatch from "../services/notificationService";
import HomeContainer from '../views/home';
import CoreContainer from '../views/core';
import PreviewContainer from '../views/preview';
import SignIn from '../views/Auth/signIn';
import SettingsView from '../views/settings';
import SignUp from '../views/Auth/signUp';

export default function Routes() {
  // const refreshRef = React.useRef(false);

  // const initService = React.useCallback(
  //   (checkLoggedState) => {
  //     setTimeout(() => {
  //       tokenRefresh(checkLoggedState);
  //     }, 1);

  //     setTimeout(() => {
  //       notificationWatch();
  //     }, 1);
  //   },
  //   [notificationWatch, tokenRefresh]
  // );

  // React.useEffect(() => {
  //   const checkLoggedState = loggedIn();

  //   if (!refreshRef.current && checkLoggedState) {
  //     refreshRef.current = true;

  //     initService(checkLoggedState);
  //   }
  // }, [initService, loggedIn]);

  return (
    <Router>
      <Switch>
        {/* Auth Routes */}

        <AuthRoute component={SignUp} path="/signup" />
        <Route path="/register" exact>
          <Redirect to="/signup" />
        </Route>

        <AuthRoute component={SignIn} path="/login" />
        <Route path="/signin" exact>
          <Redirect to="/login" />
        </Route>

        <Route path="/" exact>
          <Redirect to="/recent" />
        </Route>
        <PrivateRoutes exact path="/:workSpace" component={HomeContainer} />

        <PrivateRoutes
          exact
          path="/project/:projectId/:pageId"
          component={CoreContainer}
        />
        <PrivateRoutes
          path="/preview/:projectId/:pageId"
          component={PreviewContainer}
        />
        {/* <Route path="*" component={NotFound} /> */}
        <Route path="/settings" exact>
          <Redirect to="/settings/profile" />
        </Route>
        <PrivateRoutes
          component={SettingsView}
          path="/settings/:settingsType"
        />
      </Switch>
    </Router>
  );
}
