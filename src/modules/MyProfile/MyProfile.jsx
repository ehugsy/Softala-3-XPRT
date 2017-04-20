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
  let user = {
    name: 'Scott Sterling',
    email: 'scott@gmail.com',
    city: 'Helsinki',
    phone: '+358 45 23423434',
    supportedLocations:[
      'Helsinki',
      'Espoo',
      'Vantaa'
    ],
    company: 'Sportmrt',
    jobTitle: 'CEO',
    officeVisit: true,
    introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
    subjects:[
      'Java',
      'PHP',
      'NodeJS',
      'Coding'
    ],
    lectureDetails: 'Details about preferred lecture topics'
  }


  let lectures = [
   {
     name: 'Esa Peltonen',
     email: 'esapeltonen@gmail.com',
     datesent: '10.11.2016',
     school: 'The International School of Helsinki',
     subjects:[
       'Mathematics',
       'Physics'
     ],
     educationalstage: 'Upper Secondary School',
     lecturetheme: 'Making Numbers Cool',
     dateoflecture:[
       {option1: '12.03.2017',
       option2: '14.03.2017'}
     ],
     location: 'Mannerheimintie 500, Helsinki',
     description: 'Why mathematics should be considered cool and worth learning. Also Cookiees',
     status: 'accepted',
     responseDate: '22.11.2016'
  },
  {
    name: 'Tim Thomson',
    email: 'tim@yahoo.com',
    datesent: '06.04.2016',
    school: 'Haaga-Helia ammattikorkeakoulu',
    subjects:[
      'Java',
      'PHP',
      'NodeJS',
      'Coding'
    ],
    educationalstage: 'Upper Secondary School',
    lecturetheme: 'Back-End choises',
    dateoflecture:[
      {option1: '12.05.2017',
      option2: '14.05.2017'}
    ],
    location: 'Ratapihantie 13, Helsinki',
    description: 'Pros and cons about back-end coding languages',
    status: 'waiting',
    responseDate: ''
  },
  {
    name: 'Matilda Madison',
    email: 'matilda@gmail.com',
    datesent: '10.04.2016',
    school: 'Aalto yliopisto',
    subjects:[
      'Travelling',
      'Guidance'
    ],
    educationalstage: 'University',
    lecturetheme: 'New opportunities for a travel guide',
    dateoflecture:[
      {option1: '15.05.2017',
      option2: '20.05.2017'}
    ],
    location: 'Yliopistotie 20, Helsinki',
    description: 'Travelling in Africa is getting popular and it is giving more opportunities for travel guides',
    status: 'waiting',
    responseDate: ''
  },
  {
    name: 'Einari Nieminen',
    email: 'einari@hotmail.com',
    datesent: '06.12.2016',
    school: 'Rovaniemen lukio',
    subjects:[
      'Animals',
      'Breeding'
    ],
    educationalstage: 'High School',
    lecturetheme: 'Reindeer breeding',
    dateoflecture:[
      {option1: '12.03.2017',
      option2: '14.03.2017'}
    ],
    location: 'Porokuja 50, Rovaniemi',
    description: 'Things you need to know about reindeer breeding',
    status: 'declined',
    responseDate: '07.12.2016'
  }];

@Radium
class MyProfile extends Component {

  componentDidMount() {
    this.props.refresh();
  }

  render() {
    let expert = this.props.profile.data;
    console.log(expert);

    function LocationsList(props) {
      const locations = props.locations;
      const length = locations.length;
      const list = locations.map((location, i) => {
        if (length === i + 1) {
          return <span>{location}</span>;
        } else {
          return <span>{location}, </span>;
        }
      });
      return (
        <p style={styles.mainDivText}>{list}</p>
      );
    }

    function SubjectChips(props) {
      const subjects = props.subjects;
      const list = subjects.map((subject) =>
      <Chip style={styles.chip}>{subject}</Chip>
      );
      return (
        <div style={styles.wrapper}>{list}</div>
      );
    }

    let invitations = lectures.filter((lecture) => {
      const status = lecture.status.toLowerCase();

      return status === 'waiting';
    });

    let accepted = lectures.filter((lecture) => {
      const status = lecture.status.toLowerCase();

      return status === 'accepted';
    });

    let declined = lectures.filter((lecture) => {
      const status = lecture.status.toLowerCase();

      return status === 'declined';
    });

    function SubjectList(props){
      const subjects = props.subjects;
      const length = subjects.length;
      const list = subjects.map((subjects, i) => {
        if (length === i+1) {
          return <span>{subjects}</span>
        } else {
          return <span>{subjects}, </span>
        }
      });
      return (
        <span>{list}</span>
      )
    }

    invitations = invitations.map((lecture) => (
      <Card style={{
        ...styles.contentCardRight,
          /*
            The next style attribute creates the yellow line
            at the top of the contentCard
          */
        ...styles.colorIndicatorYellow
      }}>
        <CardHeader title={lecture.name} subtitle={lecture.email} titleStyle={{
          ...styles.titleStyle
        }} subtitleStyle={{
          ...styles.subtitleStyle
        }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          <p style={styles.mainDivTextTitle}>SCHOOL:</p>
          <p style={styles.mainDivTextBold}>School name:</p>
          <p style={styles.mainDivText}>{lecture.school}</p>
          <p style={styles.mainDivTextBold}>Subjects:</p>
          <p style={styles.mainDivText}><SubjectList subjects={lecture.subjects}/></p>
          <p style={styles.mainDivTextBold}>Educational stage:</p>
          <p style={styles.mainDivText}>{lecture.educationalstage}</p>
          <p style={styles.mainDivTextTitle}>LECTURE:</p>
          <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.lecturetheme}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
          <p style={styles.mainDivText}>{lecture.dateoflecture[0].option1}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
          <p style={styles.mainDivText}>{lecture.dateoflecture[0].option2}</p>
          <p style={styles.mainDivTextBold}>Location:</p>
          <p style={styles.mainDivText}>{lecture.location}</p>
          <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.description}</p>
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
    ));

    accepted = accepted.map((lecture) => (
      <Card style={{
        ...styles.contentCardRight,
        ...styles.colorIndicatorGreen
      }}>
        <CardHeader title={lecture.name} subtitle={lecture.lecturetheme} titleStyle={{
          ...styles.titleStyle
        }} subtitleStyle={{
          ...styles.subtitleStyle
        }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          <p style={styles.mainDivTextTitle}>SCHOOL:</p>
          <p style={styles.mainDivTextBold}>Name of school</p>
          <p style={styles.mainDivText}>{lecture.school}</p>
          <p style={styles.mainDivTextBold}>Subjects:</p>
          <p style={styles.mainDivText}><SubjectList subjects={lecture.subjects}/></p>
          <p style={styles.mainDivTextBold}>Educational stage:</p>
          <p style={styles.mainDivText}>{lecture.educationalstage}</p>
          <p style={styles.mainDivTextTitle}>LECTURE:</p>
          <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.lecturetheme}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
          <p style={styles.mainDivText}>{lecture.dateoflecture[0].option1}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
          <p style={styles.mainDivText}>{lecture.dateoflecture[0].option2}</p>
          <p style={styles.mainDivTextBold}>Location:</p>
          <p style={styles.mainDivText}>{lecture.location}</p>
          <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.description}</p>

        </CardText>
      </Card>
    ));

    declined = declined.map((lecture) => (
      <Card style={styles.contentCardRight}>
        <CardHeader title={lecture.name} subtitle={lecture.lecturetheme} titleStyle={{
          ...styles.titleStyle
        }} subtitleStyle={{
          ...styles.subtitleStyle
        }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          <p style={styles.mainDivTextTitle}>SCHOOL:</p>
          <p style={styles.mainDivTextBold}>Name of school:</p>
          <p style={styles.mainDivText}>{lecture.school}</p>
          <p style={styles.mainDivTextBold}>Subjects:</p>
          <p style={styles.mainDivText}><SubjectList subjects={lecture.subjects}/></p>
          <p style={styles.mainDivTextBold}>Educational stage:</p>
          <p style={styles.mainDivText}>{lecture.educationalstage}</p>
          <p style={styles.mainDivTextTitle}>LECTURE:</p>
          <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.lecturetheme}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
          <p style={styles.mainDivText}>{lecture.dateoflecture[0].option1}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
          <p style={styles.mainDivText}>{lecture.dateoflecture[0].option2}</p>
          <p style={styles.mainDivTextBold}>Location:</p>
          <p style={styles.mainDivText}>{lecture.location}</p>
          <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.description}</p>
        </CardText>
      </Card>
    ));


    return (
      <div>
        <div style={styles.firstWrapper} onClick={EditPictureModal}>
          {/* Profile Picture */}
          <img src={expert.imageUrl} style={{...styles.profilePicture,...styles.mobileHide}}/>
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
              <p style={styles.mainDivText}>{expert.name}</p>
              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>{expert.phone}</p>
              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>{expert.email}</p>
              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <LocationsList locations={user.supportedLocations}/>
            </div>
              {/* next div contains company info */}
            <div style={styles.contentCardLeft}>
                {/*Opens editing modal*/}
              <EditCompanyDetailsModal />
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>{user.company}</p>
              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>{expert.title}</p>
              <Checkbox label="Office visit possible" checked={user.officeVisit} disabled={true} style={styles.checkbox}/>
            </div>
              {/* Contains short introductions, label, etc. */}
            <div style={styles.contentCardLeft}>
              {/*Opens editing modal*/}
              <EditExpertDetailsModal />
              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <p style={styles.mainDivText}>{expert.description}</p>
              <p style={styles.mainDivTextTitle}>SUBJECTS:</p>
              {/*Next div wraps subjects chips close todether*/}
              <SubjectChips subjects={user.subjects}/>
              <p style={styles.mainDivTextTitle}>LECTURE DETAILS:
              </p>
              <p style={styles.mainDivText}>{user.lectureDetails}</p>
            </div>
            {/*End of left column*/}
          </div>

          {/*Start of right column*/}
          <div style={styles.rightDiv}>
            <p style={styles.rightDivTitle}>INVITATIONS</p>
            {invitations}

            <p style={styles.rightDivTitleAccept}>UPCOMING</p>
            {accepted}

            <p style={styles.rightDivTitleDecline}>DECLINED</p>
            {declined}
            {/* Adds a little space between the end of the page and the last card */}
            <div style={styles.emptyFooter} />
          </div>
        </div>

      </div>
    );
  }
}
export default MyProfile;
