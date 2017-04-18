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
      dispatch(rest.actions.register.post({}, { body: JSON.stringify(
        {name: user.name, email: user.email, password: user.password, description: user.shortIntroduction,
          title: user.title, address: user.officeAddress, phone: user.phone, locale: 'fi', subjects: user.subjects,
        area: user.supportedLocations})
         }));
    } // TODO: Missing fields CompanyName
  })
)(HomeView);
