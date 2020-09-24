import { put, call, takeLeading } from 'redux-saga/effects';

import cookie from 'js-cookie';

import { loginSuccess, fetchUserSuccess, logoutSuccess } from '../actions/AuthAction';

import loginApi from '../Api/Auth/LoginApi';
import registerApi from '../Api/Auth/RegisterApi';
import fetchAuthenticatedUserApi from '../Api/Auth/FetchAuthenticatedUserApi';
import logoutApi from '../Api/Auth/LogoutApi';

const loginAjax = (email, password) => loginApi(email, password)
  .then((res) => {
      const data = res.data
      console.log(data)
      return { data }
  })
  .catch((error) => {
      return { error }
  })

function* login(payload) {
  const { data, error } = yield call(loginAjax,
    payload.data.email,
    payload.data.password,
  );

  if (data) {
    console.log(data);
    cookie.set('token', data.access_token);
    cookie.set('user', data.user);
    yield put(loginSuccess(data.user));
  } else {
    console.log(error)
  }
}

const registerAjax = (username, email, password, password_confirmation) => registerApi(username, email, password, password_confirmation)
  .then((res) => {
      const data = res.data
      console.log(data)
      return { data }
  })
  .catch((error) => {
      return { error }
  })

function* register(payload) {
  const { data, error } = yield call(registerAjax,
    payload.data.username,
    payload.data.email,
    payload.data.password,
    payload.data.password_confirmation,
  );

  if (data) {
    cookie.set('token', data.access_token);
    cookie.set('user', data.user);
    yield put(loginSuccess(data.user));
  } else {
    console.log(error)
  }
}

const fetchAjax = () => fetchAuthenticatedUserApi()
  .then((res) => {
      const data = res.data
      console.log(data)
      return { data }
  })
  .catch((error) => {
      return { error }
  })

function* fetchAuthenticatedUser() {
  const { data, error } = yield call(fetchAjax);
  console.log(data)

  if (data) {
    yield put(fetchUserSuccess(data));
  } else {
    console.log(error)
  }
}

const logoutAjax = () => logoutApi()
  .then((res) => {
      const data = res.data
      console.log(data)
      return { data }
  })
  .catch((error) => {
      return { error }
  })

function* logout() {
  const { data, error } = yield call(logoutAjax);
  console.log(data)

  if (data) {
    yield put(logoutSuccess());
    cookie.remove('token');
  } else {
    console.log(error)
  }
}

export default [
  takeLeading("REQUEST_LOGIN", login),
  takeLeading("REQUEST_REGISTER", register),
  takeLeading("REQUEST_FETCH_USER", fetchAuthenticatedUser),
  takeLeading("REQUEST_LOGOUT", logout),
];