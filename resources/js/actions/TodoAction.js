import { createAction } from 'redux-actions';

export const INIT_TODOS = 'INIT_TODOS';
export const initTodos = createAction(INIT_TODOS);

export const REQUEST_FETCH_ALL = 'REQUEST_FETCH_ALL';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const fetchAllRequest = createAction(REQUEST_FETCH_ALL);
export const fetchAllSuccess = (data) => ({
  type: FETCH_ALL_SUCCESS,
  data
});

export const REQUEST_CREATE = 'REQUEST_CREATE';
export const createRequest = (data) => ({
  type: REQUEST_CREATE,
  data
});

export const REQUEST_CHECK = 'REQUEST_CHECK';
export const checkRequest = (data) => ({
  type: REQUEST_CHECK,
  data
});

export const REQUEST_UPDATE = 'REQUEST_UPDATE';
export const updateRequest = (data) => ({
  type: REQUEST_UPDATE,
  data
});

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const deleteRequest = (data) => ({
  type: REQUEST_DELETE,
  data
});