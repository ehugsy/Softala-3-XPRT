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
    alignItems: 'flex-end',
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
  },
  landingWrapper:{
    minHeight: '100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:'10%',
    paddingRight:'10%',
    marginTop:'5%'
  },
  secondLogos:{
    display:'flex',
    alignSelf:'flex-end',
    marginTop: '5em',
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  empty:{
    flex: 1,
    flexShrink: 0
  },
  bigText: {
    flex: 1,
    fontSize: '18px',
    fontWeight: '300',
    minWidth: '300px',
    maxWidth: '50%',
    flexGrow: 1,
    flexBasis: 'auto',
    hyphens: 'auto'
  },
  leftText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:5,
    flexBasis: '200px'
  },
  rightText: {
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid #333333',
    textAlign: 'left',
    flex:4,
    marginLeft: '2em',
    paddingLeft: '2em',
    flexBasis: '200px',
    hyphens: 'auto'
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  mockImage: {
    width: '268.4px',
    height: '458.8px'
  },
  emptyImage: {
    flex: 1
  },
  leftImage: {
    flex: 2,
    marginTop: '-12%',
  },
  centerImage: {
    flex: 2,
    marginTop: '-9%',
  },
  rightImage: {
    flex: 2,
    marginTop: '-6%',
  }
};

class Home extends Component {

  render() {


    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>
          <div style={styles.headerWrapper}>
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <XprtLogo />
              <p>TEACH TOGETHER. GROW TOGETHER.</p>
              <p>Xprt connects teachers and experts for the benefit of Finnish school children.
                Arranging a visiting lecture from a professional expert has become easier.</p>
            </div>
          </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>TEACHERS</p>
              <p>Download and install the app to browse and view the experts' profile. Easily inite experts to your classroom.</p>
              <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
              <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>
            </div>
            <div style={styles.rightText}>
              <p style={styles.smallHeader}>EXPERTS</p>
              <p>Sign up as an expert and  to share your skills for the benefit of the future generation.</p>
              <RegisterModal />
              <LoginModal /><br />

              </div>
          </div>

          <div style={styles.secondLogos}>
            <HundredLogo/>
            <FuturiceLogo/>
          </div>
        </div>
        <div style={styles.secondWrapper}>
          <div style={styles.secondInnerWrapper}>
            <div style={styles.imageWrapper}>
              <div style={styles.emptyImage}></div>
              <div style={styles.leftImage}>
                <img src={'../../img/mockup1.png'} style={styles.mockImage} />
              </div>
              <div style={styles.centerImage}>
                <img src={'../../img/mockup2.png'} style={styles.mockImage} />
              </div>
              <div style={styles.rightImage}>
                <img src={'../../img/mockup3.png'} style={styles.mockImage} />
              </div>
              <div style={styles.emptyImage}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
