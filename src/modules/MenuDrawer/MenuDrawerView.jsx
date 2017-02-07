import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { AppBar, Divider, Drawer, MenuItem } from 'material-ui';

import routes from '../../utils/routes';
import theme from '../../utils/theme';

const styles = {
  drawer: {
    backgroundColor:theme.palette.primary1Color,
    color: theme.palette.textColor,
    zIndex: '9999'
  },
  appBar: {
    boxShadow: 'none',
  }
}

class MenuDrawer extends Component {
  render() {
    return (
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
    );
  }
}

export default MenuDrawer;
