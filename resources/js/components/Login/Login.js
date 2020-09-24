import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

import { Button } from '@material-ui/core';

function Login() {
  const [signRoot, setSignRoot] = useState('signin')

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>Todoアプリ</h1>
        </div>

        <Route path="/sign/in">
          <SignIn />
        </Route>
        <Route path="/sign/up">
          <SignUp />
        </Route>

        <div className="login__footer">
          <Link to="/sign/in" className={"login__footer-btn_wrapper " + (signRoot === 'signin' ? "active" : "")}>
            <Button
              type="submit"
              className="login__footer-btn active"
              onClick = {() => setSignRoot('signin')}
            >
              Sign In
            </Button>
          </Link>

          <Link to="/sign/up" className={"login__footer-btn_wrapper " + (signRoot === 'signup' ? "active" : "")}>
            <Button
              type="submit"
              className="login__footer-btn"
              onClick = {() => setSignRoot('signup')}
            >
              Sign Up
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login
