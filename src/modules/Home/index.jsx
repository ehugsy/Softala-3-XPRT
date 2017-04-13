import { connect } from 'react-redux';

import HomeView from './HomeView';
import rest from '../../services/rest';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    getExperts() {
      dispatch(rest.actions.experts());
    },
    doLogin(creds) {
      dispatch(rest.actions.auth({}, { body: JSON.stringify(creds) }));
    },
    doRegister(user) {
      dispatch(rest.actions.register.post({}, { body: JSON.stringify({name: user.name, email: user.email, password: user.password, description: user.description, title: user.title, address: user.address, phone: user.phone, locale: 'fi'}) }));
    } // TODO: doRegister dispatch missing isExpert and 'area: user.area, subjects: user.subjects' because convert to json is required for these two in backend
  })
)(HomeView);
