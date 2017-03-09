import { Component } from 'react';
import Radium from 'radium';
import Slider from 'react-slick';

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
import TermsModal from '../../components/TermsModal';
import PrivacyModal from '../../components/PrivacyModal';
import Footer from '../../components/Footer';

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
    flexWrap: 'no-wrap',
    '@media (max-width: 769px)': {
      flexDirection: 'column'
    },
  },
  secondWrapper: {
    height: '750px',
    display: 'flex',
    '@media (max-width:769px)': {
      height: '100%',
    },
  },
  secondInnerWrapper: {
    background: '#cccccc',
    height: '700px',
    width: '100%',
    '@media (max-width:769px)': {
      height: '100%',
    },
  },
  thirdWrapper: {
    height: '350px',
    '@media (max-width: 769px)': {
      height: '100%'
    }
  },
  headerWrapper:{
    display:'flex'
  },
  landingWrapper:{
    minHeight: '100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:'10%',
    paddingRight:'10%',
    paddingTop:'5%',
    backgroundImage: 'url("../../img/xprt-background.png")',
    backgroundSize: 'cover',
  },
  topLogo: {
    '@media (max-width: 769px)': {
      marginTop: '50px',
      marginBottom: '70px'
    },
  },
  secondLogos:{
    display:'flex',
    alignSelf:'flex-end',
    marginTop: '5em',
    '@media (max-width: 769px)': {
      alignSelf: 'center',
      marginBottom: '3em'
    }
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  empty:{
    flex: 1,
    flexShrink: 0,
    '@media (max-width: 769px)':{
      display:'none'
    },
  },
  bigText: {
    flex: 1,
    fontSize: '18px',
    fontWeight: '300',
    flexGrow: 1,
    flexBasis: 'auto',
    hyphens: 'auto',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottom: '1px solid rgba(204,204,204,0.34)',
    '@media (min-width: 769px)': {
      minWidth: '300px',
      maxWidth: '50%',
      textAlign: 'left',
      border: 'none'
    }
  },
  mobileFont: {
    '@media (max-width: 769px)':{
      fontSize: '16px'
    }
  },
  leftText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:5,
    flexBasis: '200px',
    hyphens: 'auto',
    height: '242px',
    '@media (max-width: 769px)':{
      textAlign: 'center',
    },
  },
  rightText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'center',
    flex:4,
    flexBasis: '200px',
    hyphens: 'auto',
    height: '242px',
    marginTop: '2em',
    '@media (min-width: 769px)': {
      borderLeft: '1px solid #333333',
      marginLeft: '2em',
      paddingLeft: '2em',
      marginTop: 0,
      textAlign: 'left'
    },
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em',
    margin: 5,
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    '@media (max-width:769px)': {
      flexDirection: 'column',
    },
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
    textAlign: 'center',
    '@media (max-width: 769px)': {
      marginTop: '-5%',
      top: '-5%',
    },
  },
  centerImage: {
    flex: 2,
    marginTop: '-5%',
    textAlign: 'center',
    '@media (max-width: 769px)': {
      marginTop: '0',
    },
  },
  rightImage: {
    flex: 2,
    marginTop: '2%',
    textAlign: 'center',
    '@media (max-width: 769px)': {
      marginTop: '0',
    },
  },
  imageNumber: {
    color: theme.palette.primary2Color,
    margin: '0px',
    fontWeight: '300'
  },
  textColor: {
    color: theme.palette.primary3Color,
    fontSize: '16px',
    fontWeight: '300'
  },
  imageDescription: {
    '@media (max-width:769px)': {
      display: 'none'
    }
  },
  descriptionText: {
    fontSize: '20px',
    fontWeight: '300',
  },
  firstRow: {
    minWidth: 0,
    minHeight: 0,
    margin: '0 auto',
    width: '40%'
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  secondRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    '@media (max-width: 769px)': {
      width: '90%'
    }
  },
};

@Radium
class Home extends Component  {

  render() {
    const settings = {
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10000,
        }
    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>
          <div style={styles.headerWrapper}>
            <div style={styles.empty} />
            <div style={styles.bigText}>
              <div style={styles.topLogo}>
                <XprtLogo/>
              </div>
              <p>TEACH TOGETHER. GROW TOGETHER.</p>
              <p style={styles.mobileFont}>Xprt connects teachers and experts for the benefit of Finnish school children.
                Arranging a visiting lecture from a professional expert has become easier.</p>
            </div>
            </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>TEACHERS</p>
              <p style={styles.mobileFont}>Download and install the app to browse and view the experts' profile. Easily inite experts to your classroom.</p>
              <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
              <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>
            </div>
            <div style={styles.rightText}>
              <p style={styles.smallHeader}>EXPERTS</p>
              <p style={styles.mobileFont}>Sign up as an expert and  to share your skills for the benefit of the future generation.</p>
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
                <p style={styles.imageNumber}>01</p>
                <p style={styles.textColor}>BACON IPSUM</p>
                <p style={[styles.textColor, styles.imageDescription]}>Bacon ipsum dolor amet short loin landjaeger tongue,
                  filet mignon ribeye hamburger spare ribs. Pork hamburger
                  turkey tongue drumstick boudin ball tip beef ribs pancetta
                  tail turducken pig chuck.</p>
              </div>
              <div style={styles.centerImage}>
                <img src={'../../img/mockup2.png'} style={styles.mockImage} />
                <p style={styles.imageNumber}>02</p>
                <p style={styles.textColor}>BACON IPSUM</p>
                <p style={[styles.textColor, styles.imageDescription]}>Bacon ipsum dolor amet short loin landjaeger tongue,
                  filet mignon ribeye hamburger spare ribs. Pork hamburger
                  turkey tongue drumstick boudin ball tip beef ribs pancetta
                  tail turducken pig chuck.</p>
              </div>
              <div style={styles.rightImage}>
                <img src={'../../img/mockup3.png'} style={styles.mockImage} />
                <p style={styles.imageNumber}>03</p>
                <p style={styles.textColor}>BACON IPSUM</p>
                <p style={[styles.textColor, styles.imageDescription]}>Bacon ipsum dolor amet short loin landjaeger tongue,
                  filet mignon ribeye hamburger spare ribs. Pork hamburger
                  turkey tongue drumstick boudin ball tip beef ribs pancetta
                  tail turducken pig chuck.</p>
              </div>
              <div style={styles.emptyImage}></div>
            </div>
          </div>
        </div>
        <div style={styles.thirdWrapper}>
          <div style={styles.firstRow}>
             <Slider {...settings}>
      	      <div>
                 <img src={'../../img/placeholder_profilepicture.png'} style={{...styles.profilePicture, filter: 'grayscale(100%)', margin:'0 auto'}}/>
                 <div style={styles.secondRow}>
                   <p style={[styles.descriptionText, styles.mobileFont]}>
                     "Bacon ipsum dolor amet short loin landjaeger tongue,
                     filet mignon ribeye hamburger spare ribs. Pork
                     hamburger turkey tongue drumstick boudin ball tip beef
                     ribs pancetta tail turducken pig chuck. Tongue shoulder
                     landjaeger short loin hamburger. Meatball alcatra ham hock ribeye.
                     Tenderloin ham swine picanha sausage."
                   </p>
                 </div>
              </div>
              <div>
                 <img src={'../../img/placeholder_profilepicture.png'} style={{...styles.profilePicture, filter: 'grayscale(0%)', margin:'0 auto'}}/>
                 <div style={styles.secondRow}>
                   <p style={[styles.descriptionText, styles.mobileFont]}>
                     "Bacon ipsum dolor amet short loin landjaeger tongue,
                     filet mignon ribeye hamburger spare ribs. Pork
                     hamburger turkey tongue drumstick boudin ball tip beef
                     ribs pancetta tail turducken pig chuck. Tongue shoulder
                     landjaeger short loin hamburger. Meatball alcatra ham hock ribeye.
                     Tenderloin ham swine picanha sausage."
                   </p>
                 </div>
              </div>
              <div>
                 <img src={'../../img/placeholder_profilepicture.png'} style={{...styles.profilePicture, filter: 'contrast(1000%)', margin:'0 auto'}}/>
                 <div style={styles.secondRow}>
                   <p style={[styles.descriptionText, styles.mobileFont]}>
                     "Bacon ipsum dolor amet short loin landjaeger tongue,
                     filet mignon ribeye hamburger spare ribs. Pork
                     hamburger turkey tongue drumstick boudin ball tip beef
                     ribs pancetta tail turducken pig chuck. Tongue shoulder
                     landjaeger short loin hamburger. Meatball alcatra ham hock ribeye.
                     Tenderloin ham swine picanha sausage."
                   </p>
                 </div>
               </div>
             </Slider>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
