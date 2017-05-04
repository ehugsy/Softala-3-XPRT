import { connect } from 'react-redux';

import AdminView from './AdminView';
import rest from '../../services/rest';

export default connect(
  (state) => ({
    users: state.users,
  }),
  (dispatch) => ({
    refresh() {
      dispatch(rest.actions.users());
    }
  })
)(AdminView);
