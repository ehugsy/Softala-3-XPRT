import { connect } from 'react-redux';

import AdminView from './AdminView';
import rest from '../../services/rest';

export default connect(
  (state) => ({
    users: state.users,
    adminLectures: state.adminLectures,
  }),
  (dispatch) => ({
    refresh() {
      dispatch(rest.actions.users());
      dispatch(rest.actions.adminLectures());
    }
  })
)(AdminView);
