import { connect } from 'react-redux'

import About from '../../components/dialog/about';

const mapStateToProps = (state) => {
  return state.views.dialog;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClose: () => {
      dispatch({
        type: 'views.dialog.reset'
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);