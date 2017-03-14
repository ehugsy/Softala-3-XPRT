import {Component} from 'react';
import theme from '../../utils/theme';
import Radium from 'radium';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';

import Chip from 'material-ui/Chip';
import MyProfileEditModal from '../../components/MyProfileEditModal';
import MyProfileEditModalCompany from '../../components/MyProfileEditModalCompany';
import MyProfileEditModalIntroduction from '../../components/MyProfileEditModalIntroduction';
import Footer from '../Footer';


const myData = {
  name: 'Esko Esimerkki',
  phone: '+358 45 23423434 ',
  email: 'esko.esimerkki@example.com',
  supportedLocations: 'Helsinki, Espoo',
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: true,
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects: 'Subject1',
  lectureDetails: 'Details about lecture',
}

const lectureData1 = {
  title: 'John McLecturer',
  email: 'john.mclecturer@experts.com',
  school: 'The Internationl School of Helsinki',
  subject1: 'Mathematics',
  subject2: 'Physics',
  educationalStage: 'Upper Secondary School',
  theme: 'Making Numbers Cool',
  date1: '12.03.2017',
  date2: '14.03.2017',
  location: 'Helskinki International School',
  description: 'Why mathematics should be considered cool and worth learning. Also Cookiees!',
}

const styles = {
/*
These first element change the outlook
of the page overall
*/
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '30px',
    height: '360px',
    color: theme.palette.textColor,
    backgroundImage:"url('../img/xprt-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  secondWrapper: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.textColor,
    background:"#262626",
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse'
    },
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  avatarStyle: {
    marginTop: '-10px',
  },
  contentCardLeft: {
    width: '100%',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    padding: '30px',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  contentCardRight: {
    width: '100%',
    background: 'rgba(68,68,68,1)',
    marginBottom: '1em',
    padding: '20px',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  /*Adds a little space between the end of the page and the last card */
  emptyFooter: {
    paddingBottom:'1px',
    background:"#262626",
  },
  //Green titles for the page
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '16px',
    fontWeight: '300'
  },
  mainDivText: {
    color: theme.palette.textColor,
    fontSize: '16px',
    fontWeight: '300',
    marginTop: '-15px'
  },
/*
Next elements change the outlook of the left column.
*/
  leftDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: '-200px',
    paddingLeft: '25px',
    marginRight: 100,
    alignSelf: 'flex-start',
    '@media (max-width: 768px)': {
      marginTop: 0,
      marginRight: 85
    },
  },
  //My profile -title on the left
  mainDivTitle: {
    flex: 1,
    fontSize: '18px',
  },
  //Style for experts own subjects on left column
  chip: {
    margin: 4,
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #eab94e',
    padding: '1px',
    borderRadius: '20px',
    lineHeight: '0.4em'
  },
  //This wraps up subjects together next to each other
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
/*
Next elements change the outlook
of the right column.
*/
rightDivTitle: {
  //paddingLeft: '45px'
  fontSize: '18px',
  marginBottom: '12px',
},
rightDivTitleAccept:{
  color: theme.palette.primary1Color,
  fontSize: '18px',
  //paddingLeft: '45px'
},
rightDivTitleDecline:{
  //paddingLeft: '45px',
  opacity: '0.34',
  fontSize: '18px',
},
//White headings
  mainDivTextBold: {
    color: theme.palette.textColor,
    fontSize: '18px',
    fontWeight: '450'
  },
  //for decline/accept buttons
  buttonStyle: {
    paddingTop: '25px',
    paddingBottom: '27px',
    paddingLeft: '20px',
    paddingRight: '15px',
    borderRadius: '40px',
    lineHeight: '0.4em',
    marginTop: '1em',
    fontSize: '18px',
  },
  //color and border for accept-button
  buttonGold: {
    border: '1px solid #CCCCCC',
    color: theme.palette.primary2Color
  },
  ButtonAlignRight: {
    textAlign: 'right'
  },
//Yellow line for invitations that are not handled yet
  colorIndicatorYellow: {
    borderTop: 'solid',
    borderMargin:'#585858',
    borderOffset:{height: 10},
    color: theme.palette.primary2Color
  },
  //Green line for accpted invitations
  colorIndicatorGreen: {
    borderTop: 'solid',
    color: theme.palette.primary1Color
  },
  rightDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: '-195px',
    marginRight: 25,
    '@media (max-width: 768px)': {
      marginTop: 0,
      marginLeft: 25
    },
  },
  /*
Titlestyle & subtitleStyle are used to stylize
contentcards on the right side of page
*/
  titleStyle: {
    fontSize: '16px',
    color: theme.palette.textColor,
    fontWeight: '300',
  },
  subtitleStyle: {
    fontSize: '16px',
    textDecorationLine: 'underline',
    color: theme.palette.textColor,
    marginTop: '7px',
    fontWeight: '300'
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
};
@Radium
class MyProfile extends Component {

  render() {

    return (
      <div>
        <div style={styles.firstWrapper}>
          <img src={'../../img/placeholder_profilepicture.png'} style={{...styles.profilePicture,...styles.mobileHide}}/>
        </div>

        <div style={styles.secondWrapper}>
          <div style={styles.leftDiv}>
            <p style={styles.mainDivTitle}>MY PROFILE</p>
            <div style={styles.contentCardLeft}>
              <MyProfileEditModal />

              <p style={styles.mainDivTextTitle}>NAME:</p>
              <p style={styles.mainDivText}>{myData.name}</p>

              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>{myData.phone}</p>

              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>{myData.email}</p>

              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <p style={styles.mainDivText}>{myData.supportedLocations}</p>
            </div>



            <div style={styles.contentCardLeft}>
              <MyProfileEditModalCompany />

              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>{myData.company}</p>
              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>{myData.jobTitle}</p>
              <Checkbox label="Office visit possible" checked={myData.officeVisit} disabled={true} style={styles.checkbox}/>
            </div>


            <div style={styles.contentCardLeft}>
              <MyProfileEditModalIntroduction />

              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <p style={styles.mainDivText}>{myData.introduction}</p>
              <p style={styles.mainDivTextTitle}>SUBJECTS:</p>
              <div style={styles.wrapper}>
                <Chip style={styles.chip}>{myData.subjects}
                </Chip>
                <Chip style={styles.chip}>{myData.subjects}
                </Chip>
              </div>
              <p style={styles.mainDivTextTitle}>LECTURE DETAILS:
              </p>
              <p style={styles.mainDivText}>{myData.lectureDetails}</p>
            </div>
          </div>

          <div style={styles.rightDiv}>
            <p style={styles.rightDivTitle}>INVITATIONS (2)</p>
            <Card style={{
              ...styles.contentCardRight,
              ...styles.colorIndicatorYellow
            }}>
              <CardHeader title={lectureData1.title} subtitle={lectureData1.email} titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>{lectureData1.school}</p>
                <p style={styles.mainDivText}>The Internationl School of Helsinki</p>
                <p style={styles.mainDivTextBold}>Subjects:</p>
                <p style={styles.mainDivText}>{lectureData1.subject1}, {lectureData1.subject2}</p>
                <p style={styles.mainDivTextBold}>Educational stage:</p>
                <p style={styles.mainDivText}>{lectureData1.educationalStage}</p>
                <p style={styles.mainDivTextTitle}>LECTURE:</p>
                <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.theme}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
                <p style={styles.mainDivText}>{lectureData1.date1}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
                <p style={styles.mainDivText}>{lectureData1.date2}</p>
                <p style={styles.mainDivTextBold}>Location:</p>
                <p style={styles.mainDivText}>{lectureData1.location}</p>
                <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.description}</p>

                <div style={styles.ButtonAlignRight}>
                  <FlatButton expandable={true} label="DECLINE" style={{
                    ...styles.buttonStyle
                  }}/>
                  <FlatButton expandable={true} label="ACCEPT" style={{
                    ...styles.buttonStyle,
                    ...styles.buttonGold
                  }}/>
                </div>
              </CardText>
            </Card>

            <Card style={{
              ...styles.contentCardRight,
              ...styles.colorIndicatorYellow
            }}>
              <CardHeader title={lectureData1.title} subtitle={lectureData1.email} titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>{lectureData1.school}</p>
                <p style={styles.mainDivText}>The Internationl School of Helsinki</p>
                <p style={styles.mainDivTextBold}>Subjects:</p>
                <p style={styles.mainDivText}>{lectureData1.subject1}, {lectureData1.subject2}</p>
                <p style={styles.mainDivTextBold}>Educational stage:</p>
                <p style={styles.mainDivText}>{lectureData1.educationalStage}</p>
                <p style={styles.mainDivTextTitle}>LECTURE:</p>
                <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.theme}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
                <p style={styles.mainDivText}>{lectureData1.date1}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
                <p style={styles.mainDivText}>{lectureData1.date2}</p>
                <p style={styles.mainDivTextBold}>Location:</p>
                <p style={styles.mainDivText}>{lectureData1.location}</p>
                <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.description}</p>

                <div style={styles.ButtonAlignRight}>
                  <FlatButton expandable={true} label="DECLINE" style={{
                    ...styles.buttonStyle
                  }}/>
                  <FlatButton expandable={true} label="ACCEPT" style={{
                    ...styles.buttonStyle,
                    ...styles.buttonGold
                  }}/>
                </div>
              </CardText>
            </Card>

            <p style={styles.rightDivTitleAccept}>UPCOMING (1)</p>
            <Card style={{
              ...styles.contentCardRight,
              ...styles.colorIndicatorGreen
            }}>
              <CardHeader title={lectureData1.title} subtitle={lectureData1.theme + " " + lectureData1.date1 + " / " + lectureData1.date2} titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>{lectureData1.school}</p>
                <p style={styles.mainDivText}>The Internationl School of Helsinki</p>
                <p style={styles.mainDivTextBold}>Subjects:</p>
                <p style={styles.mainDivText}>{lectureData1.subject1}, {lectureData1.subject2}</p>
                <p style={styles.mainDivTextBold}>Educational stage:</p>
                <p style={styles.mainDivText}>{lectureData1.educationalStage}</p>
                <p style={styles.mainDivTextTitle}>LECTURE:</p>
                <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.theme}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
                <p style={styles.mainDivText}>{lectureData1.date1}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
                <p style={styles.mainDivText}>{lectureData1.date2}</p>
                <p style={styles.mainDivTextBold}>Location:</p>
                <p style={styles.mainDivText}>{lectureData1.location}</p>
                <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.description}</p>

              </CardText>
            </Card>

            <p style={styles.rightDivTitleDecline}>DECLINED (2)</p>
            <Card style={styles.contentCardRight}>
              <CardHeader title={lectureData1.title} subtitle={lectureData1.theme + " " + lectureData1.date1 + " / " + lectureData1.date2} titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>{lectureData1.school}</p>
                <p style={styles.mainDivText}>The Internationl School of Helsinki</p>
                <p style={styles.mainDivTextBold}>Subjects:</p>
                <p style={styles.mainDivText}>{lectureData1.subject1}, {lectureData1.subject2}</p>
                <p style={styles.mainDivTextBold}>Educational stage:</p>
                <p style={styles.mainDivText}>{lectureData1.educationalStage}</p>
                <p style={styles.mainDivTextTitle}>LECTURE:</p>
                <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.theme}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
                <p style={styles.mainDivText}>{lectureData1.date1}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
                <p style={styles.mainDivText}>{lectureData1.date2}</p>
                <p style={styles.mainDivTextBold}>Location:</p>
                <p style={styles.mainDivText}>{lectureData1.location}</p>
                <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.description}</p>
              </CardText>
            </Card>
            <Card style={styles.contentCardRight}>
              <CardHeader title={lectureData1.title} subtitle={lectureData1.theme + " " + lectureData1.date1 + " / " + lectureData1.date2} titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>{lectureData1.school}</p>
                <p style={styles.mainDivText}>The Internationl School of Helsinki</p>
                <p style={styles.mainDivTextBold}>Subjects:</p>
                <p style={styles.mainDivText}>{lectureData1.subject1}, {lectureData1.subject2}</p>
                <p style={styles.mainDivTextBold}>Educational stage:</p>
                <p style={styles.mainDivText}>{lectureData1.educationalStage}</p>
                <p style={styles.mainDivTextTitle}>LECTURE:</p>
                <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.theme}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
                <p style={styles.mainDivText}>{lectureData1.date1}</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
                <p style={styles.mainDivText}>{lectureData1.date2}</p>
                <p style={styles.mainDivTextBold}>Location:</p>
                <p style={styles.mainDivText}>{lectureData1.location}</p>
                <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
                <p style={styles.mainDivText}>{lectureData1.description}</p>
              </CardText>
            </Card>
            {/* Adds a little space between the end of the page and the last card */}
            <div style={styles.emptyFooter} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default MyProfile;
