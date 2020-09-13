import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchAllApi from '../Api/Todo/FetchAllApi';
import createApi from '../Api/Todo/CreateApi';
import updateApi from '../Api/Todo/UpdateApi';
import checkApi from '../Api/Todo/CheckApi';
import deleteApi from '../Api/Todo/DeleteApi';

export function fetchAllAction() {
  const dispatch = useDispatch();

  const requestFetch = useCallback(async () => {
    await fetchAllApi()
    .then((res) => {
      const result = res.data
      dispatch({type: 'FETCH_SUCCESS', result})
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return requestFetch;
}

export function createAction() {
  const dispatch = useDispatch();
  const requestFetch = fetchAllAction();

  const requestCreate = useCallback((title, date, time, content) => {
    createApi(title, date, time, content)
    .then(() => {
      requestFetch();
      const result = todos;
      dispatch({type: 'CREATE_SUCCESS', result})
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return requestCreate;
}

export function updateAction() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const requestFetch = fetchAllAction();

  const requestUpdate = useCallback((id, title, date, time, content) => {
    updateApi(id, title, date, time, content)
    .then(() => {
      requestFetch();
      const result = todos;
      dispatch({type: 'UPDATE_SUCCESS', result})
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return requestUpdate;
}

export function checkAction() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const requestFetch = fetchAllAction();

  const requestCheck = useCallback((id, isChecked) => {
    checkApi(id, isChecked)
    .then(() => {
      requestFetch();
      const result = todos;
      dispatch({type: 'CHECK_SUCCESS', result})
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return requestCheck;
}

export function deleteAction() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const requestDelete = useCallback((id) => {
    deleteApi(id)
    .then(() => {
      const newTodos = todos.slice();
      const result = newTodos.filter(todo => todo.id !== id);
      console.log(newTodos);
      console.log(result);
      dispatch({type: 'DELETE_SUCCESS', id})
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return requestDelete;
}

