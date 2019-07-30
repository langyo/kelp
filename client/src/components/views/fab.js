import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "mdi-material-ui/Menu";
import ReactSVG from "react-svg";

const styles = theme => ({
  menuButton: {
    margin: theme.spacing(2),
    zIndex: theme.zIndex.drawer - 1
  }
});

class MainAppbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="打开侧边栏"
          onClick={this.props.onToggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </div>
    )
  }
}

MainAppbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainAppbar);
