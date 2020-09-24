import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import cookie from 'js-cookie';

import { fetchUserRequest } from '../actions/AuthAction';
import rootReducer from '../reducers/RootReducer';
import GuestRoute from './Auth/GuestRoute';
import AuthRoute from './Auth/AuthRoute';
import todoSaga from '../saga/Todo';
import authSaga from '../saga/Auth';
import Todo from './Todo/Todo';
import Login from './Login/Login';

import jwt from 'jsonwebtoken';


function* rootSaga() {
  yield all([
      ...todoSaga,
      ...authSaga,
  ])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)


function App() {
  const jwt_token = document.getElementById('app').getAttribute('token');
  let token = cookie.get('token');
  jwt.verify(token, jwt_token, function(err, decoded) {
    if (err) {
      token = null;
      cookie.remove('token')
    }
    console.log(decoded);
  });

  const dispatch = useDispatch();

  const auth = useSelector(state => state.authReducer.auth);

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    useEffect(() => {
      dispatch(fetchUserRequest());
    }, [])

    return (
      <div className='app'>
        <Router>
          <Switch>
            <GuestRoute path="/sign">
              <Login />
            </GuestRoute>
            <AuthRoute path="/todo">
              <Todo />
            </AuthRoute>
          </Switch>
        </Router>
      </div>
    )
  } else {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <GuestRoute path="/sign">
              <Login />
            </GuestRoute>
            <AuthRoute path="/todo">
              <Todo />
            </AuthRoute>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('app'));
}
