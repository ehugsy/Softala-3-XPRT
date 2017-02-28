import { Component } from 'react';
import Radium from 'radium';
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
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    },
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
    marginTop:'200px',
    '@media (max-width: 768px)': {
      marginTop: 70
    },
  },
  pText: {
    color: '#CCCCCC',
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  bigHeader: {
    color: theme.palette.primary1Color,
    fontWeight: 300,
  },
  empty:{
    flex: 3,
    flexBasis: '200px',
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  bigText: {
    flex: 4,
    fontSize: '18px',
    fontWeight: '300',
    flexBasis: '200px',
    marginLeft: '3em',
    paddingLeft: '3em',
    '@media (max-width: 768px)': {
      margin: 0,
      padding: 0,
      textAlign: 'center'
    },
  },

  leftSpace: {
    flex: 3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  rightSpace: {
    flex:3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  leftText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:3,
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
    },

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
    '@media (max-width: 768px)':{
      textAlign: 'center',
      margin: 0,
      padding: 0,
      border: 'none'
    },
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
  },
  footerWrapper: {
    height: '20vmin',
    background: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  footerLeft: {
    marginLeft:'5%',
    flex: 1
  },
  footerRight: {
    flex: 1,
    textAlign: 'right',
    marginRight: '5%'
  },
  footerText: {
    fontSize: '16px',
    color: theme.palette.primary3Color
  }
};
@Radium
class About extends Component {
  render() {


    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>
          <div style={styles.headerWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <h1 style={styles.bigHeader}>About</h1>
            </div>
            <div style={styles.rightSpace}></div>
          </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>TEACHERS</p>
              <p style={styles.pText}>Download and install the app to browse and view the experts profile. Easily inite experts to your classroom.</p>
              <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
              <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>

              <p style={styles.smallHeader}>EXPERTS</p>
              <p style={styles.pText}>Sign up as an expert and  to share your skills for the benefit of the future generation.</p>
              <RegisterModal />
              <LoginModal /><br />
            </div>
            <div style={styles.rightText}>
              <p style={styles.pText}>
                Xprt connects teachers and experts for the benefit on Finnish school children. Arranging a visiting lecture from a professional expert has become easier
              </p>
              <p style={styles.pText}>
                See Xprt in action.
              </p>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>

            </div>
            <div style={styles.rightSpace}></div>
          </div>


        </div>

        <div style={styles.footerWrapper}>
          <div style={styles.footerLeft}>
            <XprtLogo />
          </div>
          <div style={styles.footerRight}>
            <p style={styles.footerText}>TERMS OF SERVICE | PRIVACY POLICY</p>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
