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
import IconButton from 'material-ui/IconButton';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import FuturiceLogo from '../../components/FuturiceLogo';
import PreferencesIcon from 'material-ui/svg-icons/action/settings';
import SearchIcon from 'material-ui/svg-icons/action/search';

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
    minHeight: '70vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:'4%',
    paddingRight:'4%',
    marginTop:'5%'
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
    flex: 1,
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
  iconButtonStyle: {
    border: '1px solid #555555',
    borderRadius: '50%',
    marginLeft: 5
  }
};

class Contact extends Component {

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }
  render() {  

    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>
          <div style={styles.headerWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <h1 style={styles.smallHeader}>Contact us</h1>
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
          <IconButton style={styles.iconButtonStyle}>
            <PreferencesIcon/>
          </IconButton>
          <IconButton style={styles.iconButtonStyle}>
            <SearchIcon/>
          </IconButton>
        </div>
        <div style={styles.rightText}>
          <p>
            Xprt connects teachers and experts for the benefit of Finnish school children. Arranging a visiting lecture from a professional expert has become easier.
          </p>

          <p>Contact us to hear more. * marks a required field</p>
          <form onSubmit={this.handleSubmit}>


            <input style={styles.transparentInput} type="text" placeholder="Your name *" />
            <br />

            <input style={styles.transparentInput} type="text"  placeholder="Your email address *"/>
            <br />

            <input style={styles.transparentInput} type="text" placeholder="Your phone number"/>
            <br />

            <textarea style={styles.transparentInput} placeholder="Your message *">

            </textarea><br />
            <FlatButton label="SUBMIT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
          </form>

        </div>
        <div style={styles.rightSpace}></div>
      </div>
    </div>
  </div>
);
}
}

export default Contact;
