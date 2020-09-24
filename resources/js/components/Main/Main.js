import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { initTodos, fetchAllRequest } from '../../actions/TodoAction';
import Add from './Add';
import All from './All';
import Completed from './Completed';
import NotCompleted from './NotCompleted';



function Main() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);
  const auth = useSelector(state => state.authReducer.auth);

  useEffect(() => {
    dispatch(initTodos());
    dispatch(fetchAllRequest());
  }, [])

  return (
    <div className="main">
      <Route exact path="/todo/all">
        <All
          todos={todos.items}
        />
      </Route>
      <Route path="/todo/not_completed">
        <NotCompleted
          todos={todos.items.filter(todo => todo.is_checked === false)}
        />
      </Route>
      <Route path="/todo/completed">
        <Completed
          todos={todos.items.filter(todo => todo.is_checked === true)}
        />
      </Route>

      <Add />
    </div>
  )
}

export default Main
