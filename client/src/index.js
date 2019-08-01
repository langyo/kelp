import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Main from './containers/views/main';

import reducer from './reducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('content')
);