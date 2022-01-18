import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loggedIn } from '../services/tokenService';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  exact?: boolean;
  path?: string;
};

/**
 * Routes for only authentication pages
 */
const AuthRoute = (routeProps: Props) => {
  const { component: Component, ...rest } = routeProps;

  const redirect = localStorage.getItem('redirect') || `/`;

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) => {
        if (!loggedIn()) {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Component {...props} />;
        }

        return <Redirect to={redirect} />;
      }}
    />
  );
};

export default AuthRoute;
