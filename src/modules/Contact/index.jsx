import { connect } from 'react-redux';

import ContactView from './ContactView';
import rest from '../../services/rest';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    getExperts() {
      dispatch(rest.actions.experts());
    }
  })
)(ContactView);
