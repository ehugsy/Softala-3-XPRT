import Home from '../modules/Home';
import Preferences from '../modules/Preferences';
import Logout from '../modules/Auth/Logout';
import Registration from '../modules/Registration';
import Login from '../modules/Auth/Login';

import HomeIcon from 'material-ui/svg-icons/action/home';
import PreferencesIcon from 'material-ui/svg-icons/action/settings';
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app';

// First route is the index route
export default [{
  path: '/home',
  name: 'Home',
  component: Home,
  icon: HomeIcon,
}, {
  path: '/preferences',
  name: 'Preferences',
  component: Preferences,
  icon: PreferencesIcon,
  separator: true,
}, {
  path: '/registration',
  name: 'Registration',
  component: Registration,
  icon: LogoutIcon,
  seperator: true,
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  icon: LogoutIcon,
  seperator: true,
},/*{
  path: '/logout',
  name: 'Logout',
  component: Logout,
  icon: LogoutIcon,
}*/];
