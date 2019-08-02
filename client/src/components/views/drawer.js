import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Badge from '@material-ui/core/Badge';

import ClassroomIcon from 'mdi-material-ui/GoogleClassroom';
import AccountIcon from 'mdi-material-ui/AccountCircleOutline';
import PickStudentIcon from 'mdi-material-ui/CursorDefaultClickOutline';
import TableIcon from 'mdi-material-ui/TableLarge';
import RankIcon from 'mdi-material-ui/TrophyVariantOutline';
import PaperIcon from 'mdi-material-ui/NoteOutline';
import ManagementIcon from 'mdi-material-ui/AccountGroup';
import SettingIcon from 'mdi-material-ui/SettingsOutline';
import InfoIcon from 'mdi-material-ui/InformationOutline';
import ThemeIcon from 'mdi-material-ui/Palette';
import HomeIcon from 'mdi-material-ui/Home';

const styles = theme => ({
  list: {
    width: 160,
    opacity: 0.9,
  },
  toolbar: {
    marginTop: 30
  },
  line: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  }
});

class MainDrawer extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.string,
    open: PropTypes.bool,
    // Dispatcher
    onTogglePage: PropTypes.func,
    onToggleDialog: PropTypes.func,
    onToggleDrawer: PropTypes.func
  };

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        open={this.props.open}
        onClose={this.props.onToggleDrawer}
        className={classes.list}
        variant={'temporary'}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Badge color='error' variant='dot'>
                <ClassroomIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary='当前设备未关联班级' secondary='当前班级' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Badge color='error' variant='dot'>
                <AccountIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary='未登录' secondary='当前教师' />
          </ListItem>
          <Divider className={classes.line} />
          <ListItem button
            onClick={() => this.props.onTogglePage('')}
            selected={
              ['']
                .indexOf(this.props.show) != -1
            }
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='主页' />
          </ListItem>
          <ListItem button
            onClick={() => this.props.onTogglePage('picker')}
            selected={
              ['picker', 'randomizer', 'groupPicker']
                .indexOf(this.props.show) != -1
            }
          >
            <ListItemIcon>
              <PickStudentIcon />
            </ListItemIcon>
            <ListItemText primary='点名' />
          </ListItem>
          <ListItem button
            onClick={() => this.props.onTogglePage('classTable')}
            selected={
              ['classTable', 'classMap']
                .indexOf(this.props.show) != -1
            }
          >
            <ListItemIcon>
              <TableIcon />
            </ListItemIcon>
            <ListItemText primary='座位表' />
          </ListItem>
          <ListItem button
            onClick={() => this.props.onTogglePage('rankGroup')}
            selected={
              ['rankGroup', 'rankClass']
                .indexOf(this.props.show) != -1
            }
          >
            <ListItemIcon>
              <RankIcon />
            </ListItemIcon>
            <ListItemText primary='排行榜' />
          </ListItem>
          <Divider className={classes.line} />
          <ListItem button
            onClick={() => this.props.onTogglePage('classManagement')}
            selected={
              ['classManagement', 'schoolManagement']
                .indexOf(this.props.show) != -1
            }
          >
            <ListItemIcon>
              <ManagementIcon />
            </ListItemIcon>
            <ListItemText primary='班级管理' />
          </ListItem>
          <ListItem button onClick={() => this.props.onToggleDialog('setting')}>
            <ListItemIcon>
              <SettingIcon />
            </ListItemIcon>
            <ListItemText primary='设置' />
          </ListItem>
          <ListItem button onClick={() => this.props.onToggleDialog('about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='关于' />
          </ListItem>
          <ListItem button onClick={() => this.props.onToggleDialog('theme')}>
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText primary='皮肤主题' />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(MainDrawer);
