import React, { useState } from 'react'
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';

import { registerRequest } from '../../actions/AuthAction';

import { Button, Input } from '@material-ui/core';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const dispatch = useDispatch();

  const signUp = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
    }
    dispatch(registerRequest(data));

    clearInput();
  };

  const clearInput = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }

  return (
    <div className="signup">
      <div className="login__form signin__form">
        <Input
          type="text"
          placeholder="ユーザーネーム"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <Input
          type="text"
          placeholder="パスワード確認"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

        <Button
          type="submit"
          onClick={signUp}
        >
          SIGN UP
        </Button>
    </div>
  )
}

export default withRouter(SignUp)
