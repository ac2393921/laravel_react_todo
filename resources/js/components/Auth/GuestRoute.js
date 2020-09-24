import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

function GuestRoute({ children, ...rest }) {
  const auth = useSelector(state => state.authReducer.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/todo/all",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default GuestRoute
