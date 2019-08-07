import { connect } from 'react-redux'

import Main from '../../components/views/main';

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const mapStateToProps = (state) => {
  return {
    theme: createMuiTheme({
      palette: {
        primary: {
          main: state.views.theme.color.primary
        },
        secondary: {
          main: state.views.theme.color.secondary
        },
        error: red
      },
      typography: {
        useNextVariants: true,
      }
    }),
    page: state.views.drawer.show
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);