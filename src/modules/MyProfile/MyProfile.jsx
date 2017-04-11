import {Component} from 'react';
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
import EditCompanyDetailsModal from '../../components/MyProfileEditModals/EditCompanyDetailsModal';
import EditBasicInfoModal from '../../components/MyProfileEditModals/EditBasicInfoModal';
import EditExpertDetailsModal from '../../components/MyProfileEditModals/EditExpertDetailsModal';
import EditPictureModal from '../../components/MyProfileEditModals/EditPictureModal';
import Footer from '../Footer';
import styles from './myProfileStyles';

{/*
  Next two constructors contain
  Mocup-data for this page
  */}
const myData = {
  name: 'Esko Esimerkki',
  phone: '+358 45 23423434 ',
  email: 'esko.esimerkki@example.com',
  supportedLocations: 'Helsinki, Espoo',
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: false,
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subject1: 'Major Tom',
  subject2: 'Lalilulelo',
  subject3: 'Liquid',
  subject4: 'Snake',
  lectureDetails: 'Details about preferred lecture topics',
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
  location: 'Helsinki International School',
  description: 'Why mathematics should be considered cool and worth learning. Also Cookiees!',
}

@Radium
class MyProfile extends Component {

  render() {

    return (
      <div>
        <div style={styles.firstWrapper} onClick={EditPictureModal}>
          {/* Profile Picture */}
          <img src={'../../img/placeholder_profilepicture.png'} style={{...styles.profilePicture,...styles.mobileHide}}/>
          <EditPictureModal />
        </div>

        <div style={styles.secondWrapper}>
          <div style={styles.leftDiv}>
            <p style={styles.mainDivTitle}>MY PROFILE</p>
            {/* start of left column */}
              {/* Next div contains Basic info, like name*/}
            <div style={styles.contentCardLeft}>
              {/* This modal opens up editing window of profile's basic info*/}
              <EditBasicInfoModal />
              <p style={styles.mainDivTextTitle}>NAME:</p>
              <p style={styles.mainDivText}>{myData.name}</p>
              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>{myData.phone}</p>
              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>{myData.email}</p>
              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <p style={styles.mainDivText}>{myData.supportedLocations}</p>
            </div>
              {/* next div contains company info */}
            <div style={styles.contentCardLeft}>
                {/*Opens editing modal*/}
              <EditCompanyDetailsModal />
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>{myData.company}</p>
              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>{myData.jobTitle}</p>
              <Checkbox label="Office visit possible" checked={myData.officeVisit} disabled={true} style={styles.checkbox}/>
            </div>
              {/* Contains short introductions, label, etc. */}
            <div style={styles.contentCardLeft}>
              {/*Opens editing modal*/}
              <EditExpertDetailsModal />
              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <p style={styles.mainDivText}>{myData.introduction}</p>
              <p style={styles.mainDivTextTitle}>SUBJECTS:</p>
              {/*Next div wraps subjects chips close todether*/}
              <div style={styles.wrapper}>
                <Chip style={styles.chip}>{myData.subject1}
                </Chip>
                <Chip style={styles.chip}>{myData.subject2}
                </Chip>
                <Chip style={styles.chip}>{myData.subject3}
                </Chip>
                <Chip style={styles.chip}>{myData.subject4}
                </Chip>
              </div>
              <p style={styles.mainDivTextTitle}>LECTURE DETAILS:
              </p>
              <p style={styles.mainDivText}>{myData.lectureDetails}</p>
            </div>
            {/*End of left column*/}
          </div>

          {/*Start of right column*/}
          <div style={styles.rightDiv}>
            <p style={styles.rightDivTitle}>INVITATIONS (2)</p>
            {/*
                This card contains first example of unhandled inviation
                These cards are currently hard-coded in the page
                and do not generate from any database
                Mocup-data is created at the beginning of the code
              */}
            <Card style={{
              ...styles.contentCardRight,
                /*
                  The next style attribute creates the yellow line
                  at the top of the contentCard
                */
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
              <CardHeader title={lectureData1.title} subtitle={lectureData1.theme} titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>Name of school</p>
                <p style={styles.mainDivText}>{lectureData1.school}</p>
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
              <CardHeader title={lectureData1.title} subtitle={lectureData1.theme} titleStyle={{
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
              <CardHeader title={lectureData1.title} subtitle={lectureData1.theme} titleStyle={{
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

      </div>
    );
  }
}
export default MyProfile;
