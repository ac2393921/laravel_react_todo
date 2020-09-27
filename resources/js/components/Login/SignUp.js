import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { registerRequest } from '../../actions/AuthAction';

import { Button, TextField } from '@material-ui/core';

function SignUp() {
  const auth = useSelector(state => state.authReducer.auth);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    clearInput();
  }, [])

  const signUp = (event) => {
    event.preventDefault();

    if (validate()) {
      const data = {
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirm,
      }
      dispatch(registerRequest(data));
    }
  };

  const validate = () => {
    errorReset();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username && email && password && passwordConfirm) {
      return true
    } else {
      const required = '入力必須です。';
      if (!username) {
        setUsernameError(required);
      }
      if (!emailRegex.test(email)) {
        setEmailError('メールアドレスを入力してください。')
      }
      if (!email) {
        setEmailError(required);
      }
      if (password.length < 8) {
        setPasswordError('8文字以上で入力してください。')
      }
      if (!password) {
        setPasswordError(required);
      }
      if (password !== passwordConfirm) {
        setPasswordConfirmError('パスワードと一致しません。')
      }
      if (!passwordConfirm) {
        setPasswordConfirmError(required);
      }
      return false
    }
  }

  const clearInput = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }

  const errorReset = () => {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setPasswordConfirmError('');
  }

  return (
    <div className="signup">
      <div className="login__form signin__form">
        <TextField
          type="text"
          placeholder="ユーザーネーム"
          value={username}
          error={Boolean(usernameError)}
          helperText={usernameError}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="メールアドレス"
          value={email}
          error={Boolean(emailError)}
          helperText={emailError}
          onChange={(e) => setEmail(e.target.value)}
          autocomplete="off"
        />
        <TextField
          type="text"
          placeholder="パスワード"
          value={password}
          error={Boolean(passwordError)}
          helperText={passwordError}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="off"
        />
        <TextField
          type="text"
          placeholder="パスワード確認"
          value={passwordConfirm}
          error={Boolean(passwordConfirmError)}
          helperText={passwordConfirmError}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          autocomplete="off"
        />
      </div>
      {auth.registerError ? (
        <p className="error">{auth.registerError}</p>
      ) : (
        ""
      )}

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
