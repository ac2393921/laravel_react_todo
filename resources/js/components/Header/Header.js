import React from 'react'

import { logoutRequest } from '../../actions/AuthAction';
import { initTodos } from '../../actions/TodoAction';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();

  const logout = (event) => {
    event.preventDefault();
    dispatch(logoutRequest());
    dispatch(initTodos());
  }

  return (
    <div  className="header">
      <AppBar position="static">
        <Toolbar  className="header__container">
          <div className="header__left">
            <Typography variant="h5">
              <a href="/" className="header__logo">Todoアプリ</a>
            </Typography>
          </div>
          <Button
            color="inherit"
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
