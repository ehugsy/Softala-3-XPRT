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
    },
    doEdit(user) {
      dispatch(rest.actions.profile.post({}, { body: JSON.stringify(
        {image: user.image})
      }));
    },
  })
)(MyProfile);
