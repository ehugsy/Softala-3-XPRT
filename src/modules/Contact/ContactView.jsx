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
  },
  landingWrapper:{
    minHeight: '100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:'4%',
    paddingRight:'4%',
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
    width: '50%',
    fontSize: '18px',
    fontWeight: '300',
    minWidth: '300px',
    maxWidth: '50%',
    flexGrow: 1,
    flexBasis: 'auto'
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
    flexBasis: '200px'


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
    borderColor: theme.palette.borderColor,
    marginBottom: 10,
    color: theme.palette.textColor,
    width: '100%',
    maxWidth: 350,
    padding: 10,
    borderRadius: 5

  },
  buttonGold: {
    color: theme.palette.primary2Color,
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
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <h1 style={styles.smallHeader}>Contact us</h1>
            </div>
          </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>XPRT</p>
              <p>c/o HundrED <br />
              Merikatu 9 <br />
            00140 Helsinki
          </p>
          <p>info@xprt.fi</p>
          <FlatButton label="F" style={styles.buttonStyle}/>
        </div>
        <div style={styles.rightText}>
          <p>
            Xprt connect teachers and experts for the benefit of Finnish shool children. Arranging a visiting lecture from a professional expert has become easier.
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
      </div>

      <div style={styles.secondLogos}>
        <HundredLogo/>
        <FuturiceLogo/>
      </div>
    </div>
  </div>
);
}
}

export default Contact;
