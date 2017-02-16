import { Component } from 'react';
import theme from '../../utils/theme';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '50px',
    height: '50vmin',
    color: theme.palette.textColor
  },
  secondWrapper: {
    background: 'rgba(38,38,38,1)',
    display: 'flex',
    flexDirection: 'row',
    height: '100vmin',
    color: theme.palette.textColor
  },
  leftDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '50vmin',
    marginTop:'-10%',
  },
  rightDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    background: 'rgba(0,0,250,0.2)',
    height: '50vmin',
    marginTop:'-10%',
  },
  contentCard: {
    width: '90%',
    alignSelf: 'center',
    background: 'rgba(68,68,68,1)',
    padding: '10px',
    marginBottom: '2em',
    color: theme.palette.primary1Color,
    boxShadow: '1px 1px 5px black'
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  divTitle: {
    paddingLeft: '20px',
  },
};

class MyProfile extends Component {

  render() {

    return (
      <div>
        <div style={styles.firstWrapper}>
          <img src={'../../img/placeholder_profilepicture.png'} style={styles.profilePicture}/>
        </div>

        <div style={styles.secondWrapper}>
          <div style={styles.leftDiv}>
            <h3 style={styles.divTitle}>MY PROFILE</h3>
            <div style={styles.contentCard}>
              <p>NAME:</p>
              <p>PHONE:</p>
              <p>E-MAIL:</p>
              <p>SUPPORTED LOCATIONS:</p>
            </div>
            <div style={styles.contentCard}>
              <h3>OCCUPATION</h3>
              <p>Company name</p>
            </div>
          </div>
          <div style={styles.rightDiv}>
            <h3>Invitations</h3>
            <div style={styles.contentCard}>
              Contents here
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyProfile;
