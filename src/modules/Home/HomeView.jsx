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
    paddingLeft:'150px',
    paddingRight:'150px',
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
    flex: 1
  },
  bigText: {
    flex: 1,
    width: '50%',
    border: 'none',
    background: 'none',
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
  },
  leftText: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:5,
    flexBasis: '200px'
  },
  rightText: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid #333333',
    textAlign: 'left',
    flex:4,
    marginLeft: '2em',
    paddingLeft: '2em',
    flexBasis: '200px'


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
  }
};

class Home extends Component {
  state = {
    openRegister: false,
    openLogin: false,
  };

  handleOpenRegister = () => {
    this.setState({openRegister: true});
  };

  handleCloseRegister = () => {
    this.setState({openRegister: false});
  };

  handleOpenLogin = () => {
    this.setState({openLogin: true});
  };

  handleCloseLogin = () => {
    this.setState({openLogin: false});
  };

  render() {

    const actionsRegister = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCloseRegister}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleCloseRegister}
      />,
    ];
      const actionsLogin = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleCloseLogin}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onTouchTap={this.handleCloseLogin}
        />,
    ];
    return(
      <div style={styles.wrapper}>
        <LoginModal
          title='Login'
          modal={true}
          open={this.state.openLogin}
          actions={actionsLogin}
        />

        <RegisterModal
          title="Create an account"
          actions={actionsRegister}
          modal={true}
          open={this.state.openRegister}
        />

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
              <FlatButton label="CREATE AN ACCOUNT" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpenRegister}/><br />
              <FlatButton label="LOGIN" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpenLogin}/>
            </div>
          </div>

          <div style={styles.secondLogos}>
            <HundredLogo/>
            <FuturiceLogo/>
          </div>
        </div>
        <div style={styles.secondWrapper}>
          <div style={styles.secondInnerWrapper}>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
