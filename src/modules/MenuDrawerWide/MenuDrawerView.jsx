import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { AppBar, Divider, Drawer, MenuItem } from 'material-ui';

import routes from '../../utils/routes';
import theme from '../../utils/theme';

const styles = {
  drawer: {
    backgroundColor:theme.palette.primary1ColorTransparent,
    color: theme.palette.menuTextColor,
    marginLeft:'50px'
  }
}

class MenuDrawer extends Component {
  render() {
    return (
      <Drawer
        open={this.props.drawerOpened}
        docked={false}
        containerStyle={styles.drawer}
        onRequestChange={() => this.props.closeDrawer()} >

        {
          routes.map((route, index) => {
            let active = (this.props.pathname === route.path);
            if (route.path === routes[0].path && this.props.pathname === '/') {
              active = true;
            }

            return(
              <div key={index}>
                {route.separator ? <Divider /> : null}
                <MenuItem
                  style={{color: active ? theme.palette.menuTextColorActive : null}}
                  onTouchTap={() => {this.props.changeView(route.path)}}>

                  <FormattedMessage id={route.name} />
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
