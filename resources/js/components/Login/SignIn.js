import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'js-cookie';

import { loginRequest } from '../../actions/AuthAction';

import { Button, TextField } from '@material-ui/core';

function SignIn() {
  const dispatch = useDispatch();
  let user = JSON.parse(cookie.get('user'));

  const auth = useSelector(state => state.authReducer.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email)
    }
    clearInput();
  }, [])

  const signIn = (event) => {
    event.preventDefault();

    if (validate()) {
      const data = {
        email: email,
        password: password
      }
      dispatch(loginRequest(data));
    }
  };

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const errorReset = () => {
    setEmailError('');
    setPasswordError('');
  }

  const validate = () => {
    errorReset();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email && password) {
      return true
    } else {
      const required = '入力必須です。';
      if (!emailRegex.test(email)) {
        setEmailError('メールアドレスを入力してください。')
      }
      if (!email) {
        setEmailError(required);
      }
      if (!password) {
        setPasswordError(required);
      }
      return false
    }
  }

  return (
    <div className="signin">
      <div className="login__form signin__form">
        <TextField
          type=""
          name="email"
          placeholder="メールアドレス"
          value={email}
          error={Boolean(emailError)}
          helperText={emailError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="text"
          name="password"
          placeholder="パスワード"
          value={password}
          error={Boolean(passwordError)}
          helperText={passwordError}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="off"
        />
      </div>
      {auth.loginError ? (
        <p className="error">{auth.loginError}</p>
      ) : (
        ""
      )}

      <Button
        type="submit"
        onClick={signIn}
      >
        SIGN IN
      </Button>
    </div>
  )
}

export default withRouter(SignIn)
