import { connect } from 'react-redux';

import AboutView from './AboutView';
import rest from '../../services/rest';
import { push } from 'react-router-redux';

export default connect(
  (state) => ({
    isLoggedIn:!!state.auth.data.token,
  }),
  (dispatch) => ({
    getExperts() {
      dispatch(rest.actions.experts());
    },
    changeView(view) {
      dispatch(push(view.toLowerCase()));
    },
    doLogin(creds, callback) {
      dispatch(rest.actions.auth({}, { body: JSON.stringify(creds) }, callback));
    },
    doRegister(user) {
      dispatch(rest.actions.register.post({}, { body: JSON.stringify(
        {name: user.name, email: user.email, password: user.password, description: user.shortIntroduction, isExpert: true, details: user.lectureDetails,
          title: user.title, address: user.officeAddress, phone: user.phone, company: user.companyName, locale: 'fi', subjects: user.subjects,
        area: user.supportedLocations})
         }));
    }
  })
)(AboutView);
