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

const styles = theme => ({
  textAlignRight: {
    textAlign: 'right'
  }
});

class About extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.bool,
    // Dispatcher
    onClose: PropTypes.func
  }

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.show}
        onClose={this.props.onClose}
        scroll='paper'
      >
        <DialogTitle>关于</DialogTitle>
        <DialogContent>
          <Typography paragraph variant='body1'>
            欢迎使用 KELP 校园综合信息系统！
          </Typography>
          <Typography paragraph variant='body1'>
            这是一个混合开发应用，且同时包含客户端与服务端两部分，用于课上的点名、加分等，以提高课堂效率。
          </Typography>
          <Typography paragraph variant='body1'>
            该系统在此之前有两个旧版本，现在这是第三个版本，也是最终决定长期维护的版本。
          </Typography>
          <Typography paragraph variant='body1'>
            该套件最初是为本人的物理老师开发的，但后来恰逢学校提出了加分机制，于是本人就灵光一闪，尝试为这套机制配上实施的硬件。
          </Typography>
          <Typography paragraph variant='body1'>
            海纳百川，有容乃大。这个套件致力于优化课堂体验，不止步于点名，也不止步于加分，一切可能会对课堂有所帮助的功能都会逐渐地加入进来，造福社会。
          </Typography>
          <Typography paragraph variant='body1'>
            Enjoy!
          </Typography>
          <Button variant='contained' onClick={() => window.open('https://github.com/langyo/kelp')}>
            该软件的开源地址
          </Button>
          <Typography paragraph variant='body1'>
            (https://github.com/langyo/kelp)
          </Typography>
          <Typography paragraph variant='body1'>
            目前该软件仍然处于半完工状态，版本在所有基本功能完成之前版本一直会定格在 0.1.0。
          </Typography>
          <Typography paragraph variant='body1' className={classes.textAlignRight}>
            开发者
          </Typography>
          <Typography paragraph variant='body1' className={classes.textAlignRight}>
            伊欧
          </Typography>
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