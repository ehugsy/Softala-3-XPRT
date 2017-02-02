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
                onLeftIconButtonTouchTap={() => this.props.toggleDrawer()} />

        {
          routes.map((route, index) => {
            let active = (this.props.pathname === route.path);
            if (route.path === routes[0].path && this.props.pathname === '/') {
              active = true;
            }

            const Icon = route.icon;

            return(
              <div key={index}>
                {route.separator ? <Divider /> : null}
                <MenuItem
                  leftIcon={<Icon color={ theme.palette.textColor }/>}
                  style={{color: theme.palette.textColor}}
                  onTouchTap={() => {this.props.changeView(route.path)}}><br />
                </MenuItem>
              </div>
            );
          })
        }
      </Drawer>
    );
  }
}

export default MenuDrawer;
