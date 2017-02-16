import Home from '../modules/Home';
import Preferences from '../modules/Preferences';
import Logout from '../modules/Auth/Logout';
import Registration from '../modules/Registration';
import MyAccount from '../modules/MyAccount';
import Login from '../modules/Auth/Login';
import Contact from '../modules/Contact';
import About from '../modules/About';
import MyProfile from '../modules/MyProfile';

import HomeIcon from 'material-ui/svg-icons/action/home';
import PreferencesIcon from 'material-ui/svg-icons/action/settings';
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import LoginIcon from 'material-ui/svg-icons/action/lock';
import RegisterIcon from 'material-ui/svg-icons/maps/rate-review'

// First route is the index route
export default [{
  path: '/home',
  name: 'Home',
  component: Home,
  icon: HomeIcon,
}, {
  path: '/about',
  name: 'AboutXprt',
  component: About,
  icon: PreferencesIcon,
}, {
  path: '/contact',
  name: 'ContactUs',
  component: Contact,
  icon: PreferencesIcon,
},{
  path: '/profile',
  name: 'MyProfile',
  component: MyProfile,
  icon: PreferencesIcon,
},
/*{
  path: '/logout',
  name: 'Logout',
  component: Logout,
  icon: LogoutIcon,
  {
  path: '/preferences',
  name: 'Preferences',
  component: Preferences,
  icon: PreferencesIcon,
}, {
  path: '/registration',
  name: 'Registration',
  component: Registration,
  icon: RegisterIcon,
}, {
  path: '/myaccount',
  name: 'MyAccount',
  component: MyAccount,
  icon: AccountCircle,
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  icon: LoginIcon,
  seperator: true,
  },
}*/];
