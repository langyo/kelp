import React from 'react';
import { render } from 'react-dom';

import { Window, TitleBar } from 'react-desktop/windows';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Window
      chrome
      height="600px"
      width="800px"
      padding="12px"
      color="#6cf">
      <TitleBar title="KELP" background="#eee" controls onCloseClick={() => process.exit()} />
      <div>
        <App />
      </div>
    </Window>
  </Provider>,
  document.getElementById('content')
);