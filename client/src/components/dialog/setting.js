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

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  content: {
    width: 400
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
});

class Setting extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.bool,
    native: PropTypes.bool,
    // Dispatcher
    onClose: PropTypes.func,
    onToggleNativeMode: PropTypes.func
  };

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.show}
        onClose={this.props.onClose}
        scroll='paper'
      >
        <DialogTitle>设置</DialogTitle>
        <DialogContent className={classes.content}>
          <FormLabel>显示</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.props.native}
                  onChange={this.props.onToggleNativeMode}
                  value={this.props.native}
                  color='primary'
                />
              }
              label='本地窗口渲染'
            />
          </FormGroup>
          <FormHelperText>这将会取消手动绘制窗口框体，转而使用您正在使用的操作系统的本地窗口框体</FormHelperText>
          <Divider className={classes.divider}/>
          <FormLabel>语言 / Language</FormLabel>
          <FormGroup>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>
                语言
            </InputLabel>
              <Select
                value={this.props.language}
                onChange={null}
                input={<OutlinedInput labelWidth={150} name='language' />}
              >
                <MenuItem value='zh-chs'>简体中文</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
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

export default withStyles(styles)(Setting);