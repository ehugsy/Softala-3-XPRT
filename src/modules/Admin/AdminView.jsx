import { Component } from 'react';
import Radium from 'radium';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
  CardActions,
  CardHeader,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import HomeCard from '../../components/HomeCard';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import SearchIcon from 'material-ui/svg-icons/action/search'

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './adminStyles';
import EditModal from '../../components/AdminEdit/EditModal';
let users = [{
  userType: 'Expert',
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
  officeVisit: 'yes',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Java',
    'PHP',
    'NodeJS',
    'Coding'
  ],
  lectureDetails: 'Details about preferred lecture topics'

}, {
  userType: 'Expert',
  name: 'Tim Thomson',
  email: 'tim@yahoo.com',
  city: 'Tampere',
  phone: '+358 45 23423434',
  supportedLocations:[
    'Helsinki',
    'Espoo',
    'Vantaa'
  ],
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: 'yes',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Mathematics',
    'Physics'
  ],
  lectureDetails: 'Details about preferred lecture topics'
}, {
  userType: 'Teacher',
  name: 'Matilda Madison',
  email: 'matilda@gmail.com',
  city: 'Turku',
  phone: '+358 45 23423434',
  supportedLocations:[
    'Rovaniemi',
    'Kemi',
    'Kuusamo',
    'Oulu'
  ],
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: 'no',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Major Tom',
    'Lalilulelo',
    'Liquid',
    'Snake'
  ],
  lectureDetails: 'Details about preferred lecture topics'
}, {
  userType: 'Expert',
  name: 'Arska Schwarzenegger',
  email: 'arska@gmail.com',
  city: 'Oulu',
  phone: '+358 45 23423434',
  supportedLocations:[
    'Helsinki',
    'Espoo'
  ],
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: 'no',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Major Tom',
    'Lalilulelo',
    'Liquid',
    'Snake'
  ],
  lectureDetails: 'Details about preferred lecture topics'
}, {
  userType: 'Teacher',
  name: 'Jukka Eimonen',
  email: 'ensio@gmail.com',
  city: 'Helsinki',
  phone: '+358 45 23423434',
  supportedLocations:[
    'Helsinki',
    'Espoo'
  ],
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: 'yes',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Travelling',
    'Guidance'
  ],
  lectureDetails: 'Details about preferred lecture topics'
}, {
  userType: 'Teacher',
  name: 'Seppo Eimonen',
  email: 'ensio@gmail.com',
  city: 'Helsinki',
  phone: '+358 45 23423434',
  supportedLocations:[
    'Mikkeli',
    'Pietari',
    'Kouvola'
  ],
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: 'yes',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Travelling',
    'Guidance'
  ],
  lectureDetails: 'Details about preferred lecture topics'
}, {
  userType: 'Teacher',
  name: 'Teppo Eimonen',
  email: 'ensio@gmail.com',
  city: 'Helsinki',
  phone: '+358 45 23423434',
  supportedLocations:[
    'Turku',
    'Alastaro'
  ],
  company: 'Sportmrt',
  jobTitle: 'CEO',
  officeVisit: 'yes',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects:[
    'Travelling',
    'Guidance'
  ],
  lectureDetails: 'Details about preferred lecture topics'
}];

let lectures = [
 {
   from: [
     {name: 'Esa Peltonen',
     email: 'esapeltonen@gmail.com'}
   ],
   to: [
     {name: 'Arnold Schwarzenegger',
     email: 'arska@gmail.com'}
   ],
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
  from: [
    {name: 'Tim Thomson',
    email: 'tim@yahoo.com'}
  ],
  to: [
    {name: 'Ensio Eimonen',
    email: 'ensio@gmail.com'}
  ],
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
  from: [
    {name: 'Matilda Madison',
    email: 'matilda@gmail.com'}
  ],
  to: [
    {name: 'Tyson Traveller',
    email: 'tyson@hotmail.com'}
  ],
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
  from: [
    {name: 'Einari Nieminen',
    email: 'einari@hotmail.com'}
  ],
  to: [
    {name: 'Scott Sterling',
    email: 'scott@gmail.com'}
  ],
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
},
{
   from: [
     {name: 'Matti Meikäläinen',
     email: 'mattimeikäläinen@gmail.com'}
   ],
   to: [
     {name: 'Teuvo Teikäläinen',
     email: 'teuvoteikalainen@gmail.com'}
   ],
   datesent: '11.11.2016',
   school: 'Haaga-Helia ammattikorkeakoulu',
   subjects:[
     'React',
     'Git',
     'Coding'
   ],
   educationalstage: 'Upper Secondary School',
   lecturetheme: 'Lets code',
   dateoflecture:[
     {option1: '22.03.2017',
     option2: '16.04.2017'}
   ],
   location: 'Ratapihantie 13, Helsinki',
   description: 'We make a little web application together with React',
   status: 'ignored',
   resposeDate: ''
},
{
   from: [
     {name: 'Matti Meikäläinen',
     email: 'mattimeikäläinen@gmail.com'}
   ],
   to: [
     {name: 'Teuvo Teikäläinen',
     email: 'teuvoteikalainen@gmail.com'}
   ],
   datesent: '11.11.2016',
   school: 'Haaga-Helia ammattikorkeakoulu',
   subjects:[
     'React',
     'Git',
     'Coding'
   ],
   educationalstage: 'Upper Secondary School',
   lecturetheme: 'Basics of using React and Git',
   dateoflecture:[
     {option1: '22.03.2017',
     option2: '16.04.2017'}
   ],
   location: 'Ratapihantie 13, Helsinki',
   description: 'We make a little web application together with React',
   status: 'held',
   resposeDate: ''
},
{
   from: [
     {name: 'Matti Meikäläinen',
     email: 'mattimeikäläinen@gmail.com'}
   ],
   to: [
     {name: 'Teuvo Teikäläinen',
     email: 'teuvoteikalainen@gmail.com'}
   ],
   datesent: '11.11.2016',
   school: 'Haaga-Helia ammattikorkeakoulu',
   subjects:[
     'React',
     'Git',
     'Coding'
   ],
   educationalstage: 'Upper Secondary School',
   lecturetheme: 'Coding lecture',
   dateoflecture:[
     {option1: '22.03.2017',
     option2: '16.04.2017'}
   ],
   location: 'Ratapihantie 13, Helsinki',
   description: 'We make a little web application together with React',
   status: 'held',
   resposeDate: ''
}];


@Radium
class AdminView extends Component {

  /* Gives sorting dropdown menu a default value. 1 = first value of options */
  constructor(props) {
    super(props);
    this.state = {userValue: 'all', lectureValue: 'all', lectureSearch: '', userSearch: ''};
  }

  updateLectureSearch(event){
    this.setState({lectureSearch: event.target.value})
  }

  updateUserSearch(event){
    this.setState({userSearch: event.target.value})
  }

  lectureHandleChange = (event, index, lectureValue) => this.setState({lectureValue});
  userHandleChange = (event, index, userValue) => this.setState({userValue});

  render() {

    let filteredLectures = lectures.filter((lecture) => {
      const lectureName = lecture.lecturetheme.toLowerCase();
      const expertName = lecture.to[0].name.toLowerCase();
      const teacherName = lecture.from[0].name.toLowerCase();
      const expertEmail = lecture.to[0].email.toLowerCase();
      const teacherEmail = lecture.from[0].email.toLowerCase();
      const schoolName = lecture.school.toLowerCase();
      const location = lecture.location.toLowerCase();
      const subjectsList = lecture.subjects.toString().toLowerCase();

      const lectureStatus = lecture.status;
      //const contactCity = contact.city.toLowerCase();
      const searchString = this.state.lectureSearch.toLowerCase();
      const stateValue = this.state.lectureValue;

      return (lectureName.indexOf(searchString) !== -1 ||
      expertName.indexOf(searchString) !== -1
      || teacherName.indexOf(searchString) !== -1
      || expertEmail.indexOf(searchString) !== -1
      || teacherEmail.indexOf(searchString) !== -1
      || schoolName.indexOf(searchString) !== -1
      || location.indexOf(searchString) !== -1
      || subjectsList.indexOf(searchString) !== -1)
      && (lectureStatus === stateValue || stateValue === 'all');
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

function CityList(props){
const cities = props.cities;
const length = cities.length;
const list = cities.map((cities, i) => {
if (length === i+1) {
  return <span>{cities}</span>
} else {
  return <span>{cities}, </span>
}
});
return (
<span>{list}</span>
)
}

    filteredLectures = filteredLectures.map((lecture) => (
      <div key={lecture.lecturetheme}>
        <Card style={{...styles.colorIndicatorGreen,...styles.cardMargin}}>
          <CardHeader actAsExpander={true} showExpandableButton={true} style={styles.cardHeaderStyle}>
                <div style={styles.parent}>
                  <div style={styles.left}>
                    <h3 style={styles.header3top}>From:</h3>
                    <p>{lecture.from[0].name}<br/>
                    {lecture.from[0].email}
                    </p>
                  </div>
                  <div style={styles.middle}>
                    <h3 style={styles.header3top}>To:</h3>
                    <p>{lecture.to[0].name}<br/>
                    {lecture.to[0].email}
                    </p>
                  </div>
                  <div style={styles.right}>
                    <h3 style={styles.header3top}>Date sent:</h3>

                    <p>{lecture.datesent}<br />
                    {lecture.status} {lecture.responseDate}
                    </p>


                  </div>
                </div>

              </CardHeader>

              <CardText expandable={true}>
                <div style={styles.parent}>
                  <div style={styles.left}>
                    <p><span style={styles.boldText}>Name of school:</span><br/>
                    {lecture.school}
                  </p>
                  <p><span style={styles.boldText}>Subjects:</span><br/>
                  <SubjectList subjects={lecture.subjects}/>
                  </p>
                  <p><span style={styles.boldText}>Educational stage:</span><br/>
                  {lecture.educationalstage}
                  </p>
                </div>
                <div style={styles.middle}>
                  <p><span style={styles.boldText}>Theme of the lecture:</span><br/>
                  {lecture.lecturetheme}
                  </p>
                  <p><span style={styles.boldText}>Date of lecture: (option1)</span><br/>
                  {lecture.dateoflecture[0].option1}
                  </p>
                  <p><span style={styles.boldText}>Date of lecture: (option2)</span><br/>
                  {lecture.dateoflecture[0].option2}
                  </p>
                  <p><span style={styles.boldText}>Location:</span><br/>
                  {lecture.location}
                  </p>
                  <p><span style={styles.boldText}>Short description:</span><br/>
                  {lecture.description}
                  </p>
                </div>
                <div style={styles.right}></div>
              </div>
            </CardText>
          </Card>
        </div>
      ));

        let filteredUsers = users.filter((user) => {
          const contactName = user.name.toLowerCase();
          const contactEmail = user.email.toLowerCase();
          const contactType = user.userType.toLowerCase();
          const supportedLocationsList = user.supportedLocations.toString().toLowerCase();
          const subjectsList = user.subjects.toString().toLowerCase();
          //const contactCity = contact.city.toLowerCase();
          const searchString = this.state.userSearch.toLowerCase();
          const userType = user.userType;
          const stateValue = this.state.userValue;

          return (contactName.indexOf(searchString) !== -1 ||
          contactEmail.indexOf(searchString) !== -1 ||
          contactType.indexOf(searchString) !== -1 ||
          subjectsList.indexOf(searchString) !== -1 ||
          supportedLocationsList.indexOf(searchString) !== -1)
          && (userType === stateValue || stateValue === 'all');
          //||contactCity.indexOf(searchString) !== -1
          ;
        });

        filteredUsers = filteredUsers.map((user) => (
          <div key={user.name}>
            <Card style={{...styles.colorIndicatorGreen,...styles.cardMargin}}>
              <CardHeader title={user.name} subtitle={user.userType}  text={user.email} titleStyle={{
                  ...styles.titleStyle}}
                  subtitleStyle={{
                    ...styles.subtitleStyle}}
                    avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}>

                  </CardHeader>

                  <CardText expandable={true}>
                    <div style={styles.parent}>
                      <div style={styles.left}>
                        <p>
                          <strong>Email:</strong><br />
                          {user.email}
                        </p>
                        <p>
                          <strong>Phone number:</strong><br />
                          {user.phone}
                        </p>
                        <p>
                          <strong>Location:</strong><br />
                          <SubjectList subjects={user.supportedLocations}/>
                        </p>
                        <p>
                          <strong>Company:</strong><br />
                          {user.company}
                        </p>
                        </div>
                        <div style={styles.middle}>
                        <p>
                          <strong>Job title:</strong><br />
                          {user.jobTitle}
                        </p>
                        <p>
                          <strong>Office visit possible:</strong><br />
                          {user.officeVisit}
                        </p>
                        <p>
                          <strong>Introduction</strong><br />
                          {user.introduction}
                        </p>
                        <p>
                          <strong>Subjects:</strong><br />
                          <SubjectList subjects={user.subjects}/>
                        </p>
                    </div>

                    <div style={styles.right}>
                      <EditModal />
                    </div>
                    </div>
                  </CardText>
                </Card>
              </div>
            ));

        return(
          <div style={styles.wrapper}>
            <div style={styles.landingWrapper}>
              <div style={styles.firstWrapper}>
                <div style={styles.rightSpace}><h1 style={styles.bigHeader}>Admin panel</h1></div>
              </div>

              <Tabs tabItemContainerStyle={{...styles.contentContainerStyle}}>
                <Tab label="USERS" style={styles.tabStyle} >
                  <div>
                    <br></br>
                      <div style={styles.firstWrapper}>

                        <DropDownMenu value={this.state.userValue} onChange={this.userHandleChange} openImmediately={false} style={styles.DropDownMenu}>
                          <MenuItem value={'all'} primaryText="ALL" />
                          <MenuItem value={'Expert'} primaryText="EXPERTS" />
                          <MenuItem value={'Teacher'} primaryText="TEACHERS" />
                        </DropDownMenu>
                        <div style={styles.leftSpace}></div>
                          <div style={styles.leftText}>
                            <TextField
                              onChange={this.updateUserSearch.bind(this)}
                              value={this.state.userSearch}
                              style={styles.fullSearchBar}
                              hintText="Search for experts and teachers"
                              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                              underlineFocusStyle={styles.underlineStyle}
                              floatingLabelFixed={true}
                              className="formcontainer"
                              fullWidth={true}/>
                        </div>
                      </div>
                      {filteredUsers}
                  </div>
                </Tab>
                <Tab label="LECTURES" style={{...styles.tabStyle}} >
                  <br></br>
                  <div style={styles.firstWrapper}>

                    <DropDownMenu value={this.state.lectureValue} onChange={this.lectureHandleChange} openImmediately={false} style={styles.DropDownMenu}>
                      <MenuItem value={'all'} primaryText="ALL" />
                      <MenuItem value={'waiting'} primaryText="WAITING FOR RESPONSE" />
                      <MenuItem value={'accepted'} primaryText="ACCEPTED" />
                      <MenuItem value={'declined'} primaryText="DECLINED" />
                      <MenuItem value={'ignored'} primaryText="IGNORED" />
                      <MenuItem value={'held'} primaryText="HELD" />
                    </DropDownMenu>
                    <div style={styles.leftSpace}></div>
                    <div style={styles.leftText}>
                      <TextField
                        onChange={this.updateLectureSearch.bind(this)}
                        value={this.state.lectureSearch}
                        hintText="Search for lecture, location, school etc."
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelFixed={true}
                        className="formcontainer"
                        fullWidth={true}/>
                    </div>
                  </div>
                  <div>
                    {filteredLectures}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        );
      }
    }

    export default AdminView;
