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



const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop:'10%'
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  secondWrapper: {
    height: '75vmin'
  },
  secondInnerWrapper: {
    background: '#cccccc',
    height: '70vmin',
    marginTop: '12em'
  },
  secondLogos:{
    float: 'right',
    marginTop: '5em',
    marginRight: '10em'
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  cardTop: {
    display: 'block',
    alignSelf: 'flex-end',
    width: '50%',
    border: 'none',
    background: 'none',
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    marginBottom: '5%'
  },
  cardLeft: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    width: '40%',
    marginLeft: '10%',
    height: '12.5em',
  },
  cardRight: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid #333333',
    textAlign: 'left',
    width: '40%',
    height: '12.5em',
    marginLeft: '3em',
    paddingLeft: '3em'
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
        <Card style={styles.cardTop}>
          <XprtLogo />
          <p>TEACH TOGETHER. GROW TOGETHER.</p>
          <p>Xprt connects teachers and experts for the benefit of Finnish school children.
          Arranging a visiting lecture from a professional expert has become easier.</p>



        </Card>
        <div style={styles.innerWrapper}>
        <Card style={styles.cardLeft}>
          <p style={styles.smallHeader}>TEACHERS</p>
          <p>Download and install the app to browse and view the experts' profile. Easily inite experts to your classroom.</p>
          <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
          <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>
        </Card>
        <Card style={styles.cardRight}>
          <p style={styles.smallHeader}>EXPERTS</p>
          <p>Sign up as an expert and  to share your skills for the <br /> benefit of the future generation.</p>
          <FlatButton label="CREATE AN ACCOUNT" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpenRegister}/><br />
          <FlatButton label="LOGIN" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpenLogin}/>
        </Card>


        <LoginModal
          title='Login'
          modal={true}
          open={this.state.openLogin}
          actions={actionsLogin}
        />

        <RegisterModal
          actions={actionsRegister}
          modal={true}
          open={this.state.openRegister}
        />


      </div>
      <div style={styles.secondWrapper}>
        <div style={styles.secondLogos}>
          <HundredLogo/>
          <FuturiceLogo/>
        </div>
        <div style={styles.secondInnerWrapper}>
          <p>Testi</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
