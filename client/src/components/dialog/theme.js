import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  content: {
    width: 400
  },
  text: {
    marginLeft: 20
  }
});

class About extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.bool,
    // Dispatcher
    onClose: PropTypes.func,
    onChangePrimaryColor: PropTypes.func,
  }

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.show}
        onClose={this.props.onClose}
        scroll='paper'
      >
        <DialogTitle>主题</DialogTitle>
        <DialogContent className={classes.content}>
          <List>
            {
              [
                {
                  color: '#39C5BB',
                  name: "初音绿"
                },
                {
                  color: '#FFA500',
                  name: "镜音铃橙"
                },
                {
                  color: '#FFE211',
                  name: "镜音连黄"
                },
                {
                  color: '#FAAFBE',
                  name: "巡音粉"
                },
                {
                  color: '#66CCFF',
                  name: "天依蓝"
                },
                {
                  color: '#99FFFF',
                  name: "言和青"
                },
                {
                  color: '#EE0000',
                  name: "正绫红"
                }].map(n => (
                  <ListItem button onClick={() => this.props.onChangePrimaryColor(n.color)} key={n.color}>
                    <Avatar style={{ backgroundColor: n.color }} />
                    <ListItemText className={classes.text} primary={n.name} secondary={this.props.color.primary == n.color ? "已选中" : ""} />
                  </ListItem>
                ))
              }
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color='primary'>
            {'确定'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(About);