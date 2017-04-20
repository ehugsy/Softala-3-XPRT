import { connect } from 'react-redux';

import MyProfile from './MyProfile';
import rest from '../../services/rest';

export default connect(
  (state) => ({
    profile: state.profile,
  }),
  (dispatch) => ({
    refresh() {
      dispatch(rest.actions.profile());
      // dispatch(rest.actions.invitations());
    }
  })
)(MyProfile);
