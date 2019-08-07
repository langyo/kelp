import { connect } from 'react-redux'

import Broadcast from '../../components/pages/broadcast';

const mapStateToProps = (state) => {
  return {
    ...state.database.broadcast,
    open: state.views.drawer.show === ''
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Broadcast);