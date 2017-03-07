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
import IconButton from 'material-ui/IconButton';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import FacebookIcon from '../../components/FacebookIcon';
import TwitterIcon from '../../components/TwitterIcon';
import Footer from '../../components/Footer';

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
      flexDirection: 'column-reverse'
    },
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
    marginTop:'20vmin',
    '@media (max-width: 768px)': {
      marginTop: 10
    },
  },
  smallHeader: {
    color: theme.palette.primary1Color,
    letterSpacing: '4px'
  },
  bigHeader: {
    color: theme.palette.primary1Color,
    fontWeight: 300,
    '@media (max-width: 768px)': {
          fontSize: 24,
    },
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
      paddingTop: 30,
      fontSize: '16px',
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
      borderLeft: 0,
      borderBottom: '1px solid rgba(204, 204, 204, .34)',
      paddingBottom: 60,
      fontSize: '16px',
    },
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em',
    color: theme.palette.primary2Color,
  },
  transparentInput: {
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #555555',
    marginBottom: 10,
    color: theme.palette.textColor,
    fontSize: 16,
    width: '100%',
    maxWidth: 350,
    padding: '10px 0px 10px 10px',
    borderRadius: 5,
    fontFamily: ('Catamaran' : 'sans-serif'),
    fontSize: 16,
    '@media (max-width: 768px)': {
      maxWidth: 768,
      width: '100%',
      borderRadius: 0
    },
  },
  requiredText: {
    color: '#999999'
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  contactForm: {
    paddingRight: 10
  }
};
@Radium
class Contact extends Component {
  render() {

    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>
          <div style={styles.headerWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <h1 style={styles.bigHeader}>Contact us</h1>
            </div>
            <div style={styles.rightSpace}></div>
          </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>XPRT</p>
              <p>c/o HundrED <br />
              Merikatu 9 <br />
            00140 Helsinki
          </p>
          <p>info@xprt.fi</p>
          <IconButton>
            <FacebookIcon/>
          </IconButton>
          <IconButton>
            <TwitterIcon/>
          </IconButton>
        </div>
        <div style={styles.rightText}>
          <p>
            Xprt connects teachers and experts for the benefit of Finnish school children. Arranging a visiting lecture from a professional expert has become easier.
          </p>

          <p>Contact us to hear more. <span style={{...styles.requiredText, ...styles.mobileHide}}>* marks a required field</span></p>
          <form onSubmit={this.handleSubmit}style={styles.contactForm}>

            <input style={styles.transparentInput} type="text" placeholder="Your name *" />
            <br />
            <input style={styles.transparentInput} type="text" placeholder="Your email address *"/>
            <br />
            <input style={styles.transparentInput} type="text" placeholder="Your phone number"/>
            <br />
            <textarea style={styles.transparentInput} placeholder="Your message *">
            </textarea><br />
            <FlatButton label="SUBMIT" style={styles.buttonStyle}/>
          </form>
        </div>
        <div style={styles.rightSpace}></div>
      </div>
    </div>
    <Footer />
  </div>
  );
  }
}

export default Contact;
