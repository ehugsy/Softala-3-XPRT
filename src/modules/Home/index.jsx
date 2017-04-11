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
    }
  })
)(HomeView);
