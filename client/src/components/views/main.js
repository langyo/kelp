import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import { Window, TitleBar } from 'react-desktop/windows';

import AboutDialog from '../../containers/dialog/about';

import BroadcastPage from '../../containers/pages/broadcast';
import PickerPage from '../../containers/pages/picker';

import Fab from '../../containers/views/fab';
import Drawer from '../../containers/views/drawer';

const styles = theme => ({
  main: {
    overflow: 'auto',
    height: 'calc(100%)',
    width: '700px',
    marginLeft: "auto",
    marginRight: "auto",
    position: 'relative'
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
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
          <div className={classes.main}>
            { this.props.page === '' && <BroadcastPage /> }
            { this.props.page === 'picker' && <PickerPage /> }
          </div>
        </div>
      </Window>
    )
  }
}

export default withStyles(styles)(Main);
