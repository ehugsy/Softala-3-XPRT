import { Component } from 'react';
import theme from '../../utils/theme';


const styles = {
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '50px',
    height: '50vmin',
  },
  secondWrapper: {
    background: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    height: '100vmin'
  },
  leftDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    background: 'rgba(200,0,0,0.2)',
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
    background: '#cccccc',
    marginBottom: '2em',
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
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
            <h3>MY PROFILE</h3>
            <div style={styles.contentCard}>
              <p>Name: NAEMMEMEM</p>
              <p>Phone: NAEMMEMEM</p>
              <p>Email: NAEMMEMEM</p>
              <p>Thiing: NAEMMEMEM</p>
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
