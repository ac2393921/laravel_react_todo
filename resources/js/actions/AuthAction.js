import { createAction } from 'redux-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginRequest = (data) => ({
  type: REQUEST_LOGIN,
  data
});
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data
});
export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error
});

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const registerRequest = (data) => ({
  type: REQUEST_REGISTER,
  data
});
export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  data
});
export const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  error
});

export const REQUEST_FETCH_USER = 'REQUEST_FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserRequest = createAction(REQUEST_FETCH_USER);
export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  data
});

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutRequest = (data) => ({
  type: REQUEST_LOGOUT,
  data
});
export const logoutSuccess = (data) => ({
  type: LOGOUT_SUCCESS,
  data
});