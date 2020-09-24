import { put, call, takeLeading } from 'redux-saga/effects';

import { initTodos, fetchAllRequest, fetchAllSuccess } from '../actions/TodoAction';

import fetchAllApi from '../Api/Todo/FetchAllApi';
import createApi from '../Api/Todo/CreateApi';
import checkApi from '../Api/Todo/CheckApi';
import updateApi from '../Api/Todo/UpdateApi';
import deleteApi from '../Api/Todo/DeleteApi';

const fecthAllAjax = () => fetchAllApi()
  .then((res) => {
      const data = res.data
      console.log(data)
      return { data }
  })
  .catch((error) => {
      return { error }
  })

function* fecthAllTodos() {
    const { data, error } = yield call(fecthAllAjax);

    if (data) {
      console.log(data);
      yield put(fetchAllSuccess(data));
    } else {
      console.log(error)
    }
}

const createAjax = (title, date, time, content) => createApi(title, date, time, content)
  .then((res) => {
    const data = res.data
    console.log(data)
    return { data }
  })
  .catch((error) => {
    return { error }
  })

function* createTodo(payload) {
  const { data, error } = yield call(createAjax,
    payload.data.title,
    payload.data.date,
    payload.data.time,
    payload.data.content
  );

  if (data) {
    yield put(fetchAllRequest());
  } else {
    console.log(error)
  }
}

const checkAjax = (id, isChecked) => checkApi(id, isChecked)
  .then((res) => {
    const data = res.data
    console.log(data)
    return { data }
  })
  .catch((error) => {
    return { error }
  })

function* checkTodo(payload) {
  const { data, error } = yield call(checkAjax, payload.data.id, payload.data.is_checked);

  if (data) {
    yield put(fetchAllRequest());
  } else {
    console.log(error)
  }
}

const updateAjax = (id, title, date, time, conten) => updateApi(id, title, date, time, conten)
  .then((res) => {
    const data = res.data
    console.log(data)
    return { data }
  })
  .catch((error) => {
    return { error }
  })

function* updateTodo(payload) {
  const { data, error } = yield call(updateAjax,
    payload.data.id,
    payload.data.title,
    payload.data.date,
    payload.data.time,
    payload.data.content
  );

  if (data) {
    yield put(fetchAllRequest());
  } else {
    console.log(error)
  }
}

const deleteAjax = (id) => deleteApi(id)
  .then((res) => {
    const data = res.data
    console.log(data)
    return { data }
  })
  .catch((error) => {
    return { error }
  })

function* deleteTodo(payload) {
  const { data, error } = yield call(deleteAjax, payload.data);

  if (data) {
    yield put(fetchAllRequest());
  } else {
    console.log(error)
  }
}

export default [
  takeLeading("REQUEST_FETCH_ALL", fecthAllTodos),
  takeLeading("REQUEST_CREATE", createTodo),
  takeLeading("REQUEST_CHECK", checkTodo),
  takeLeading("REQUEST_UPDATE", updateTodo),
  takeLeading("REQUEST_DELETE", deleteTodo)
];