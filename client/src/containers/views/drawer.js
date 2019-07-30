import { connect } from 'react-redux'

import Drawer from '../../components/views/drawer';

const mapStateToProps = (state) => {
  return state.views.drawer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTogglePage: (name) => {
      dispatch({
        type: 'views.drawer.onTogglePage',
        name
      });
    },
    onToggleDialog: (name) => {
      dispatch({
        type: 'views.drawer.onToggleDialog',
        name
      });
    },
    onToggleDrawer: () => {
      dispatch({
        type: 'views.drawer.onToggleDrawer',
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);