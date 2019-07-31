import React from 'react';
import { render } from 'react-dom';

import { Window, TitleBar } from 'react-desktop/windows';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import AboutDialog from "./containers/dialog/about";

import Fab from "./containers/views/fab";
import Drawer from "./containers/views/drawer";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Window
      chrome
      height="600px"
      width="800px"
      padding="0px">
      <TitleBar title="KELP" controls onCloseClick={() => window.close()} style={{ zIndex: 10000 }}/>
      <div>
        <AboutDialog />

        <Fab />
        <Drawer />
      </div>
    </Window>
  </Provider>,
  document.getElementById('content')
);