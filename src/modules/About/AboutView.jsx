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

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import Footer from '../Footer';
import styles from './aboutStyles';

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

          <div style={styles.teacherExpertWrapperBottom}>
            <div style={styles.leftSpace}></div>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>TEACHERS</p>
              <p>Download and install the app to browse and view the experts profile. Easily inite experts to your classroom.</p>
              <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
              <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>

              <p style={styles.smallHeaderUnder}>EXPERTS</p>
              <p>Sign up as an expert and  to share your skills for the benefit of the future generation.</p>
              {this.props.isLoggedIn ?
                <FlatButton label="MY PROFILE" style={styles.buttonStyle} onTouchTap={()=>this.props.changeView('/profile')}/>
                :
                <div>
                  <RegisterModal doRegister={this.props.doRegister}/>
                  <LoginModal doLogin={this.props.doLogin}/>
                </div>

              }
            </div>
            <div style={styles.rightText}>
              <p>
                Xprt connects teachers and experts for the benefit on Finnish school children. Arranging a visiting lecture from a professional expert has become easier
              </p>
              <p style={styles.mobileHide}>
                See Xprt in action.
              </p>
              <div style={styles.mobileShow}>
                <h1 style={styles.bigHeader}>About</h1>
              </div>
              <div style={styles.video}>
                <iframe style={styles.videoSize} src="https://www.youtube.com/embed/niGGKthoCNQ" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div style={styles.rightSpace}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
