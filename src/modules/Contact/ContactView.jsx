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
import HomeCard from '../../components/HomeCard';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';
import IconButton from 'material-ui/IconButton';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import FacebookIcon from '../../components/FacebookIcon';
import TwitterIcon from '../../components/TwitterIcon';
import Footer from '../Footer';
import styles from './contactStyles';

const marginRight = '10em'

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
