import React from 'react';
import { render } from 'react-dom';

import { Window, TitleBar } from 'react-desktop/windows';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import AboutDialog from './containers/dialog/about';

import BroadcastPage from './containers/pages/broadcast';

import Fab from './containers/views/fab';
import Drawer from './containers/views/drawer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Window
      chrome
      height='600px'
      width='800px'
      padding='0px'>
      <TitleBar title='KELP' controls onCloseClick={() => window.close()} style={{ zIndex: 10000 }} />
      <div>
        {/* Dialogs */}
        <AboutDialog />
        {/* Views*/}
        <Fab />
        <Drawer />
        {/* Pages */}
        <div style={{
          overflow: 'hidden',
          height: 'calc(100%)',
          width: '700px',
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative"
        }}>
          <BroadcastPage />
        </div>
      </div>
    </Window>
  </Provider>,
  document.getElementById('content')
);