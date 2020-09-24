import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

function AuthRoute({ children, ...rest }) {
  const auth = useSelector(state => state.authReducer.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign/in",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute
