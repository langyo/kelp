import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import PacManIcon from "mdi-material-ui/PacMan";
import StopIcon from "mdi-material-ui/StopCircleOutline";
import MoreVertIcon from "mdi-material-ui/DotsVertical";
import PlusIcon from "mdi-material-ui/Plus";
import MinusIcon from "mdi-material-ui/Minus";

const styles = theme => ({
  button: {
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
    transform: "translateX(60px)"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  card: {
    width: 400,
    opacity: 0.8,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30
  },
  left: {
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto"
  }
});

class Picker extends React.Component {
  static propTypes = {
    // props
    nowSelectingLuckyGuy: PropTypes.string,
    nowSelectingGroup: PropTypes.string,
    nowSelectingGroupType: PropTypes.string,
    nowSelectingClass: PropTypes.string,
    working: PropTypes.bool,
    score: PropTypes.number,
    open: PropTypes.bool,
    // Dispatcher
    onTogglePicking: PropTypes.func,
    onScoreAddOne: PropTypes.func,
    onScoreRemoveOne: PropTypes.func
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {this.props.nowSelectingLuckyGuy}
              </Typography>
              <Typography variant="caption" gutterBottom>
                当前正在抽取 ，共 人
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classNames(classes.button)}
                variant="contained"
                color="primary"
                onClick={this.props.onTogglePicking}
                size="large"
              >
                {!this.props.working && (
                  <PacManIcon className={classes.extendedIcon} />
                )}
                {!this.props.working && "开始点名"}
                {this.props.working && (
                  <StopIcon className={classes.extendedIcon} />

                )}
                {this.props.working && "停！"}
              </Button>
              <IconButton className={classes.right}>
                <MoreVertIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                本节课个人分数
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                className={classes.left}
                variant="outlined"
                color="primary"
                onClick={this.props.onScoreRemoveOne}
              >
                <MinusIcon />
              </IconButton>
              <Typography
                className={classNames(classes.left, classes.right)}
                variant="h2"
              >
                {this.props.score}
              </Typography>
              <IconButton
                className={classes.right}
                color="primary"
                onClick={this.props.onScoreAddOne}
              >
                <PlusIcon />
              </IconButton>
            </CardActions>
          </Card>
          {/* <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                战绩
              </Typography>
              <Typography variant="body1">
                本节课已获得：0
              </Typography>
              <Typography variant="body1">
                今日已获得： 0
              </Typography>
              <Typography variant="body1">
                本周已获得：0
              </Typography>
              <Typography variant="body1">
                本月已获得：0
              </Typography>
              <Typography variant="body1">
                所在小组总分：0
              </Typography>
              <Typography variant="body1">
                所在小组排名：0
              </Typography>
            </CardContent>
          </Card> */}
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Picker);
