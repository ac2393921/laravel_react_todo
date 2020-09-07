import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import {Route, Switch, HashRouter} from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import All from './Main/All';
import NotCompleted from './Main/NotCompleted';
import Completed from './Main/Completed';
import Add from './Main/Add';
import Footer from './Footer/Footer';

function App() {
  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {
    await axios.get('/api/todo/get')
    .then((res) => {
      setTodos(res.data)
      setCompletedTodos(res.data.filter(todo => todo.is_checked === true))
      setNotCompletedTodos(res.data.filter(todo => todo.is_checked === false))
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div className='app'>
      <HashRouter>
        <Header />

        <Switch>
          <Route  exact path="/">
            <All />
          </Route>
          <Route  path="/not_completed">
            <NotCompleted />
          </Route>
          <Route  path="/completed">
            <Completed />
          </Route>
        </Switch>

        <Add
          getTodos={() => getTodos()}
        />

        <Footer />
      </HashRouter>
    </div>
  )
}

export default App

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
