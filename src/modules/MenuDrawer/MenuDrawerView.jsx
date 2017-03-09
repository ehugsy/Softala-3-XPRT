import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { AppBar, Divider, Drawer, MenuItem } from 'material-ui';
import Radium from 'radium';


import routes from '../../utils/routes';
import theme from '../../utils/theme';

const styles = {
  drawer: {
    backgroundColor:theme.palette.primary1Color,
    color: theme.palette.textColor,
    zIndex: '1301',
    boxShadow: 'none',
  },
  appBar: {
    boxShadow: 'none',
  },
  leftNav: {
    '@media (max-width:768px)': {
      display: 'none',
    },
  },
  topNav: {
    '@media (min-width: 769px)': {
      display: 'none'
    }
  }
};

@Radium
class MenuDrawer extends Component {
  render() {
    return (
      <div>
        <div style={styles.leftNav}>
          <Drawer
            open={true}
            docked={true}
            width={60}
            containerStyle={styles.drawer}
            onRequestChange={() => this.props.closeDrawer()} >

            <AppBar
              style={styles.appBar}
              onLeftIconButtonTouchTap={() => this.props.toggleDrawer()} />

          </Drawer>
        </div>
        <div style={styles.topNav}>
          <AppBar
            style={styles.appBar}
            onLeftIconButtonTouchTap={() => this.props.toggleDrawer()} />
        </div>

      </div>

    );
  }
}

export default MenuDrawer;
