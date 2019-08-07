import { connect } from 'react-redux'

import Picker from '../../components/pages/picker';

const mapStateToProps = (state) => {
  return {
    ...state.pages.picker,
    open: state.views.drawer.show === 'picker'
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTogglePicking: () => dispatch({
    type: 'pages.picker.togglePicker'
  }),
  onScoreAddOne: () => dispatch({
    type: 'pages.picker.score.addOne'
  }),
  onScoreRemoveOne: () => dispatch({
    type: 'pages.picker.score.removeOne'
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);