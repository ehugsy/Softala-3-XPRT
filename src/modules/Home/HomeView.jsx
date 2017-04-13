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
import HomeCard from '../../components/HomeCard';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';
import TermsModal from '../../components/TermsModal';
import PrivacyModal from '../../components/PrivacyModal';
import Footer from '../Footer';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import FuturiceLogo from '../../components/FuturiceLogo';
import styles from './homeStyles';

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
              <RegisterModal doRegister={this.props.doRegister}/>
              <LoginModal doLogin={this.props.doLogin}/><br />

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
