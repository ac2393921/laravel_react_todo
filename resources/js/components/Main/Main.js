import React, { useEffect } from 'react'
import {Route, Switch} from 'react-router-dom';

import Add from './Add';
import All from './All';
import NotCompleted from './NotCompleted';
import Completed from './Completed';

import { fetchAllAction } from '../../services/TodoService';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const todos = useSelector(state => state.todos);
  const requestFetch = fetchAllAction();

  const completedTodos = todos.filter(todo => todo.is_checked === true);
  const notCompletedTodos = todos.filter(todo => todo.is_checked === false);

  useEffect(() => {
    requestFetch();
  }, []);

  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <All
            todos={todos}
          />
        </Route>
        <Route path="/not_completed">
          <NotCompleted
            todos={notCompletedTodos}
          />
        </Route>
        <Route path="/completed">
          <Completed
            todos={completedTodos}
          />
        </Route>
      </Switch>

      <Add />
    </div>
  )
}

export default Main
