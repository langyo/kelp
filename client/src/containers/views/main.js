import { connect } from 'react-redux'

import Main from '../../components/views/main';

const mapStateToProps = (state) => {
  return {
    ...state.views.theme,
    page: state.views.drawer.show
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);