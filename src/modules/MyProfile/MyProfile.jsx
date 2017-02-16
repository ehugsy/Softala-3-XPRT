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
    height: '50vmin',
    marginTop:'-10%',
  },
  contentCard: {
    width: '90%',
    alignSelf: 'center',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    boxShadow: '1px 1px 5px black'
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  mainDivTitle: {
    paddingLeft: '2em',
    fontSize: '18px',
    color: theme.palette.textColor,
  },
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '18px',
    fontWeight: '300',
    paddingLeft: '1em',
  },
  mainDivText: {
    color: theme.palette.textColor,
    fontSize: '18px',
    fontWeight: '300',
    paddingLeft: '1em',
  }
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
            <p style={styles.mainDivTitle}>MY PROFILE</p>
            <div style={styles.contentCard}>
              <p style={styles.mainDivTextTitle}>NAME:</p>
              <p style={styles.mainDivText}>Esko Esimerkki</p>

              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>+358 45 23423434</p>

              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>esko.esimerkki@example.com</p>

              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <p style={styles.mainDivText}>Helsinki, Espoo</p>

            </div>
            <div style={styles.contentCard}>
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>Sportmrt</p>

              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>CEO</p>

            </div>
          </div>
          <div style={styles.rightDiv}>
            <p style={styles.mainDivTitle}>INVITATIONS</p>
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
