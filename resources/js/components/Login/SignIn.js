import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import cookie from 'js-cookie';

import { Button, Input } from '@material-ui/core';

import { loginRequest } from '../../actions/AuthAction';

function SignIn() {
  const dispatch = useDispatch();
  let user = JSON.parse(cookie.get('user'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      setEmail(user.email)
    }
  }, [])

  const signIn = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password
    }
    dispatch(loginRequest(data));

    clearInput();
  };

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <div className="signin">
      <div className="login__form signin__form">
          <Input
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error ? (
          <p className="error">{error}</p>
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
