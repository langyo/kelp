import { connect } from 'react-redux'

import Fab from '../../components/views/fab';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
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
)(Fab);