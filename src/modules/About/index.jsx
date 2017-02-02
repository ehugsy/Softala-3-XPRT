import { connect } from 'react-redux';

import AboutView from './AboutView';
import rest from '../../services/rest';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    getExperts() {
      dispatch(rest.actions.experts());
    }
  })
)(AboutView);
