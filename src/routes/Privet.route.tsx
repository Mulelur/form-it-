import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loggedIn, logOut } from '../services/tokenService';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  exact?: boolean;
  path?: string;
};

// eslint-disable-next-line @typescript-eslint/typedef
export default function PrivateRoute(routeProps: Props) {
  const { component: Component, ...rest } = routeProps;

  const checkSession = () => {
    const session = loggedIn(true);

    if (session) {
      return true;
    }

    logOut(false);

    // window.location.href = `/login?redirect=${window.location.pathname}&lang=en`;

    return false;
  };

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        !checkSession() ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location ? props.location : ''
              }
            }}
          />
        )
      }
    />
  );
}
