import { connect } from 'react-redux';

import MyProfile from './MyProfile';
import rest from '../../services/rest';

export default connect(
  (state) => ({
    profile: state.profile,
    lectures: state.expertLectures,
  }),
  (dispatch) => ({
    refresh() {
      dispatch(rest.actions.profile());
      dispatch(rest.actions.expertLectures());
    },
    editProfile(data) {
      dispatch(rest.actions.profile.post({}, { body: JSON.stringify(
        {image: file.image})
      }));
    },
  })
)(MyProfile);
