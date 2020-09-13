import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from '../reducers/TodoReducer';

const store = createStore(todoReducer);

function App() {
  return (
    <div className='app'>
        <HashRouter>
          <Header />

          <Main />

          <Footer />
        </HashRouter>
    </div>
  )
}

export default App

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('app'));
}
