import { connect } from 'react-redux';

import AdminView from './AdminView';
import rest from '../../services/rest';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    getExperts() {
      dispatch(rest.actions.experts());
    }
  })
)(AdminView);
