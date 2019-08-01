import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'translateX(40px)'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  card: {
    width: 400,
    opacity: 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 5
  },
  left: {
    marginRight: 'auto'
  },
  right: {
    marginLeft: 'auto'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'Right'
  },
  textMargin: {
    marginBottom: 5
  }
});

class Broadcast extends React.Component {
  static propTypes = {
    // State
    broadcasts: PropTypes.array,
    open: PropTypes.bool
    // Dispatcher
    // ---
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          {
            this.props.broadcasts.map((n, index) => (
              <Card className={classes.card} key={index}>
                <CardContent>
                  <div key={index}>
                    <Typography variant='h5' className={classes.textLeft}>
                      {n.title}
                    </Typography>
                    <Typography variant='caption' className={classes.textLeft}>
                      {n.date}
                    </Typography>
                    {
                      n.description.split('\n').map((str, subIndex) => (
                        <Typography variant='body1' className={classNames(classes.textLeft, classes.textMargin)} key={subIndex}>
                          {str}
                        </Typography>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Broadcast);
