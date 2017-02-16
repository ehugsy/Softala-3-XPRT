import { Component } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import theme from '../../utils/theme';
import HomeCard from '../../components/HomeCard';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import FuturiceLogo from '../../components/FuturiceLogo';

const marginRight = '10em'

const styles = {

  wrapper: {
    color: theme.palette.textColor,
  },
  teacherExpertWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  secondWrapper: {
    height: '75vmin',
    display: 'flex',
    flexDirection: 'column',
  },
  secondInnerWrapper: {
    background: '#cccccc',
    height: '70vmin',
  },
  headerWrapper:{
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  landingWrapper:{
    minHeight: '100vh',
    paddingLeft:'4%',
    paddingRight:'4%',
    marginTop:'200px'
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  empty:{
    flex: 3,
    flexBasis: '200px',
  },
  bigText: {
    flex: 4,
    fontSize: '18px',
    fontWeight: '300',
    flexBasis: '200px',
    marginLeft: '3em',
    paddingLeft: '3em',
  },

  leftSpace: {
    flex: 3,
  },
  rightSpace: {
    flex:3,
  },
  leftText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:3,
    flexBasis: '200px',
  },
  rightText: {
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid #333333',
    textAlign: 'left',
    flex:4,
    marginLeft: '3em',
    paddingLeft: '3em',
    flexBasis: '200px',
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  transparentInput: {
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #555555',
    marginBottom: 10,
    color: theme.palette.textColor,
    width: '100%',
    maxWidth: 350,
    padding: 10,
    borderRadius: 5

  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  iconButtonStyle: {
    border: '1px solid #555555',
    borderRadius: '50%',
    marginLeft: 5
  }
};

class About extends Component {
  render() {


    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>
          <div style={styles.headerWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <h1 style={styles.smallHeader}>About</h1>
            </div>
            <div style={styles.rightSpace}></div>
          </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>TEACHERS</p>
              <p>Download and install the app to browse and view the experts profile. Easily inite experts to your classroom.</p>
              <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
              <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>

              <p style={styles.smallHeader}>EXPERTS</p>
              <p>Sign up as an expert and  to share your skills for the benefit of the future generation.</p>
              <RegisterModal />
              <LoginModal /><br />
            </div>
            <div style={styles.rightText}>
              <p>
                Xprt connects teachers and experts for the benefit on Finnish school children. Arranging a visiting lecture from a professional expert has become easier
              </p>
              <p>
                See Xprt in action.
              </p>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>

            </div>
            <div style={styles.rightSpace}></div>
          </div>


        </div>
      </div>
    );
  }
}

export default About;
