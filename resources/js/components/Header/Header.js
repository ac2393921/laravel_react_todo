import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Header() {
  return (
    <div  className="header">
      <AppBar position="static">
        <Toolbar  className="header__container">
          <div className="header__left">
            <Typography variant="h5">
              <a href="/" className="header__logo">Todoアプリ</a>
            </Typography>
          </div>
          <Button color="inherit"></Button>
          {/* <Button color="inherit">Logout</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
