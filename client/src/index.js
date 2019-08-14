import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Main from './containers/views/main';
import reducer from './reducer';
import socket from './socketDriver';

const store = createStore(reducer, applyMiddleware(logger, thunk));

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('content')
);