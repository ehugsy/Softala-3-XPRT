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

let users = [{
  name: 'Scott Sterling',
  email: 'scott@gmail.com',
  city: 'Helsinki'
}, {
  name: 'Tim Thomson',
  email: 'tim@yahoo.com',
  city: 'Tampere'
}, {
  name: 'Matilda Madison',
  email: 'matilda@gmail.com',
  city: 'Turku'
}, {
  name: 'Arska Schwarzenegger',
  email: 'arska@gmail.com',
  city: 'Oulu'
}, {
  name: 'Ensio Eimonen',
  email: 'ensio@gmail.com',
  city: 'Helsinki'
}, {
  name: 'Einari Nieminen',
  email: 'einari@hotmail.com',
  city: 'Tampere'
}, {
  name: 'Matti Meikäläinen',
  email: 'matti@gmail.com',
  city: 'Helsinki'
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
    'NodeJS'
  ],
  educationalstage: 'Upper Secondary School',
  lecturetheme: 'Back-End choises',
  dateoflecture:[
    {option1: '12.05.2017',
    option2: '14.05.2017'}
  ],
  location: 'Ratapihantie 13, Helsinki',
  description: 'Pros and cons of back-end coding languages',
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
     'Git'
   ],
   educationalstage: 'Upper Secondary School',
   lecturetheme: 'Basics of using React and Git',
   dateoflecture:[
     {option1: '22.03.2017',
     option2: '16.04.2017'}
   ],
   location: 'Ratapihantie 13, Helsinki',
   description: 'We make a little web application together with React',
   status: 'ignored',
   resposeDate: ''
}];


@Radium
class AdminView extends Component {

  /* Gives sorting dropdown menu a default value. 1 = first value of options */
  constructor(props) {
    super(props);
    this.state = {value: 'all', lectureSearch: '', userSearch: ''};
  }

  updateLectureSearch(event){
    this.setState({lectureSearch: event.target.value})
  }

  updateUserSearch(event){
    this.setState({userSearch: event.target.value})
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    let filteredLectures = lectures.filter((lecture) => {
      const lectureName = lecture.lecturetheme.toLowerCase();
      const expertName = lecture.to[0].name.toLowerCase();
      const teacherName = lecture.from[0].name.toLowerCase();
      const expertEmail = lecture.to[0].email.toLowerCase();
      const teacherEmail = lecture.from[0].email.toLowerCase();
      const lectureStatus = lecture.status;
      //const contactCity = contact.city.toLowerCase();
      const searchString = this.state.lectureSearch.toLowerCase();
      const stateValue = this.state.value;

      return (lectureName.indexOf(searchString) !== -1 ||
      expertName.indexOf(searchString) !== -1
      || teacherName.indexOf(searchString) !== -1
      || expertEmail.indexOf(searchString) !== -1
      || teacherEmail.indexOf(searchString) !== -1)
      && (lectureStatus === stateValue || stateValue === 'all');
    });

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
                  {lecture.subjects}
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
          //const contactCity = contact.city.toLowerCase();
          const searchString = this.state.userSearch.toLowerCase();

          return contactName.indexOf(searchString) !== -1 ||
          contactEmail.indexOf(searchString) !== -1
          //||contactCity.indexOf(searchString) !== -1
          ;
        });

        filteredUsers = filteredUsers.map((user) => (
          <div key={user.name}>
            <Card style={{...styles.colorIndicatorGreen,...styles.cardMargin}}>
              <CardHeader title={user.name} subtitle={user.email} titleStyle={{
                  ...styles.titleStyle}}
                  subtitleStyle={{
                    ...styles.subtitleStyle}}
                    avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}>

                  </CardHeader>

                  <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
                        <div style={styles.leftSpace}></div>
                          <TextField
                            onChange={this.updateUserSearch.bind(this)}
                            value={this.state.userSearch}
                            style={styles.fullSearchBar}
                            hintText="Search for subjects, teachers, experts"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelFixed={true}
                            className="formcontainer"
                            fullWidth={true}/>

                      </div>
                      {filteredUsers}
                  </div>
                </Tab>
                <Tab label="LECTURES" style={{...styles.tabStyle}} >
                  <br></br>
                  <div style={styles.firstWrapper}>

                    <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false} style={styles.DropDownMenu}>
                      <MenuItem value={'all'} primaryText="ALL" />
                      <MenuItem value={'waiting'} primaryText="WAITING FOR RESPONSE" />
                      <MenuItem value={'accepted'} primaryText="ACCEPTED" />
                      <MenuItem value={'declined'} primaryText="DECLINED" />
                      <MenuItem value={'ignored'} primaryText="IGNORED" />
                    </DropDownMenu>
                    <div style={styles.leftSpace}></div>
                    <div style={styles.leftText}>
                      <TextField
                        onChange={this.updateLectureSearch.bind(this)}
                        value={this.state.lectureSearch}
                        hintText="Search for subjects, teachers, experts"
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
