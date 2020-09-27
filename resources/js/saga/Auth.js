import { put, call, takeLeading, takeEvery } from 'redux-saga/effects';

import cookie from 'js-cookie';

import { loginSuccess, loginFailed, fetchUserSuccess, registerSuccess, registerFailed, logoutSuccess } from '../actions/AuthAction';

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
  .catch((res) => {
      const error = res.response.data.error;
      console.log(error);
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
    console.log(error);
    yield put(loginFailed(error));
  }
}

const registerAjax = (username, email, password, password_confirmation) => registerApi(username, email, password, password_confirmation)
  .then((res) => {
    const data = res.data
    console.log(data)
    return { data }
  })
  .catch((res) => {
    const error = res.response.data.message;
    console.log(error);
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
    yield put(registerSuccess(data.user));
  } else {
    console.log(error)
    yield put(registerFailed(error));
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
  takeEvery("REQUEST_LOGIN", login),
  takeEvery("REQUEST_REGISTER", register),
  takeLeading("REQUEST_FETCH_USER", fetchAuthenticatedUser),
  takeLeading("REQUEST_LOGOUT", logout),
];