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
import CircularProgress from 'material-ui/CircularProgress';

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './adminStyles';
import EditModal from '../../components/AdminEdit/EditModal';

@Radium
class AdminView extends Component {

  componentDidMount() {
    this.props.refresh();
  }

  // Gives sorting dropdown menu a default value. 1 = first value of options
  constructor(props) {
    super(props);
    this.state = {userValue: 'all', lectureValue: 'all', lectureSearch: '', userSearch: ''};
  }
//triggered when user types on textfield
  updateLectureSearch(event){
    this.setState({lectureSearch: event.target.value})
  }
//triggered when user types on textfield
  updateUserSearch(event){
    this.setState({userSearch: event.target.value})
  }
//triggered when dropdown is selected
  lectureHandleChange = (event, index, lectureValue) => this.setState({lectureValue});
  //triggered when dropdown is selected
  userHandleChange = (event, index, userValue) => this.setState({userValue});

  render() {

    let users = this.props.users.data;
    let lectures = this.props.adminLectures.data;
    let loading = this.props.users.loading;

    // shows the circular loading animation until users and lectures are loaded
    if (!users || !lectures || loading) {
      return <CircularProgress />;
    }

    // this function checks if any of lecture data mathches with search and makes an array of the matching data
    let filteredLectures = lectures.filter((lecture) => {
      const lectureName = lecture.lecturetheme.toLowerCase();
      const expertName = lecture.ExpertName.toLowerCase();
      const teacherName = lecture.TeacherName.toLowerCase();
      const expertEmail = lecture.ExpertEmail.toLowerCase();
      const teacherEmail = lecture.TeacherEmail.toLowerCase();
      const schoolName = lecture.TeacherSchool.toLowerCase();
      const location = lecture.TeacherAddress.toLowerCase();
      const subjectsList = lecture.subjects.toString().toLowerCase();

      const lectureStatus = lecture.status;
      const searchString = this.state.lectureSearch.toLowerCase();
      const stateValue = this.state.lectureValue;

      //returns if any data matches with the search, also checks if user wants to see all lectures or for example held lectures
      return (lectureName.indexOf(searchString) !== -1
      || expertName.indexOf(searchString) !== -1
      || teacherName.indexOf(searchString) !== -1
      || expertEmail.indexOf(searchString) !== -1
      || teacherEmail.indexOf(searchString) !== -1
      || schoolName.indexOf(searchString) !== -1
      || location.indexOf(searchString) !== -1
      || subjectsList.indexOf(searchString) !== -1)
      && (lectureStatus === stateValue || stateValue === 'all');
    });

    // this function loops trough arrays inside object
    function List(props){
      const values = props.values;
      if (!values) {
        return null;
      }
      const length = values.length;
      // if object has an array, this function loops through array and adds "," after each item
      const list = values.map((value, i) => {
        if (length === i+1) {
          return <span key={value}>{value}</span>
        }
        else {
          return <span key={value}>{value}, </span>
        }
      });
      // returns for example: Helsinki, Vantaa, Espoo
      return (
        <span>{list}</span>
      )
    }
    // if there isn't address, this function returns text "Office visit not possible"
    function OfficeVisit(props){
        if (!props.address) {
          return (
              <span>Office visit not possible</span>
          );
        } else {
          return (
            <span>{props.address}</span>
          );
        }
      }

    //makes dates be in format dd.mm.yyyy
    function DateFormat(props) {
      let date = props.date;
      let day = date.slice(8,10);
      let month = date.slice(5,7);
      let year = date.slice(0, 4);
      return (
        <span>{day}.{month}.{year}</span>
        );
    }

    //if lecture status is 'pending' statusDate is not shown
    function StatusDate(props) {
      let date = props.date;
      let status = props.status;
      let day = date.slice(8,10);
      let month = date.slice(5,7);
      let year = date.slice(0, 4)
      if (status === 'pending') {
        return <span>{status}</span>;
      } else {
        return <span>{status} {day}.{month}.{year}</span>;
        }
    }

    // loops trough every lecture and prints all information of a lecture and returns an expandable div
    filteredLectures = filteredLectures.map((lecture) => (
      <div key={lecture.lecturetheme}>
        <Card style={{...styles.colorIndicatorGreen,...styles.cardMargin}}>
          <CardHeader actAsExpander={true} showExpandableButton={true} style={styles.cardHeaderStyle}>
                <div style={styles.parent}>
                  <div style={styles.left}>
                    <h3 style={styles.header3top}>From:</h3>
                    <p>{lecture.TeacherName}<br/>
                    {lecture.TeacherEmail}
                    </p>
                  </div>
                  <div style={styles.middle}>
                    <h3 style={styles.header3top}>To:</h3>
                    <p>{lecture.ExpertName}<br/>
                    {lecture.ExpertEmail}
                    </p>
                  </div>
                  <div style={styles.right}>
                    <h3 style={styles.header3top}>Date sent:</h3>
                    <p><DateFormat date={lecture.datesent}/><br />
                    <StatusDate status={lecture.status} date={lecture.statusDate}/>
                    </p>
                  </div>
                </div>

              </CardHeader>

              <CardText expandable={true}>
                <div style={styles.parent}>
                  <div style={styles.left}>
                    <p><span style={styles.boldText}>School name:</span><br/>
                    {lecture.TeacherSchool}
                  </p>
                  <p><span style={styles.boldText}>Subjects:</span><br/>
                  <List values={lecture.subjects}/>
                  </p>
                  <p><span style={styles.boldText}>Educational stage:</span><br/>
                  {lecture.educationalstage}
                  </p>
                </div>
                <div style={styles.middle}>
                  <p><span style={styles.boldText}>Lecture theme:</span><br/>
                  {lecture.lecturetheme}
                  </p>
                  <p><span style={styles.boldText}>Date of lecture: (option1)</span><br/>
                  <DateFormat date={lecture.dateOption1}/>
                  </p>
                  <p><span style={styles.boldText}>Date of lecture: (option2)</span><br/>
                  <DateFormat date={lecture.dateOption2}/>
                  </p>
                  <p><span style={styles.boldText}>Location:</span><br/>
                  {lecture.TeacherAddress}
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
      // this function checks if any of user data mathches with search and makes an array of the matching data
        let filteredUsers = users.filter((user) => {
          const contactName = user.name.toLowerCase();
          const contactEmail = user.email.toLowerCase();
          let userType = '';
          if (user.isExpert && user.isTeacher) {
            userType = 'expertteacher';
          } else if (user.isTeacher) {
            userType = 'teacher';
          } else if (user.isExpert) {
            userType = 'expert';
          }
          const supportedLocationsList = user.area.toString().toLowerCase();
          const subjectsList = user.subjects.toString().toLowerCase();
          //const contactCity = contact.city.toLowerCase();
          const searchString = this.state.userSearch.toLowerCase();
          const stateValue = this.state.userValue;

          return (contactName.indexOf(searchString) !== -1 ||
          contactEmail.indexOf(searchString) !== -1 ||
          subjectsList.indexOf(searchString) !== -1 ||
          supportedLocationsList.indexOf(searchString) !== -1)
          && (userType.indexOf(stateValue) || stateValue === 'all');
          //||contactCity.indexOf(searchString) !== -1
          ;
        });

        // loops trough every user and prints all information of a lecture and returns an expandable div
        filteredUsers = filteredUsers.map((user) => (
          <div key={user.name}>
            <Card style={{...styles.colorIndicatorGreen,...styles.cardMargin}}>
              <CardHeader actAsExpander={true} showExpandableButton={true}>


                    <div style={styles.parent}>
                      <div style={{...styles.left, ...styles.sameLine}}>
                        <Avatar src={user.imageUrl} size={60} style={styles.avatarStyle} />
                       <p style ={styles.titleStyle}>{user.name}</p>
                      </div>
                      <div style={styles.middle}>

                            <p>{user.email}</p>
                      </div>
                      <div style={styles.right}>

                           <p>{user.phone}</p>
                     </div>
                  </div>

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
                          <List values={user.area}/>
                        </p>
                        <p>
                          <strong>Company:</strong><br />
                          {user.company}
                        </p>
                        </div>
                        <div style={styles.middle}>
                        <p>
                          <strong>Job title:</strong><br />
                          {user.title}
                        </p>
                        <p>
                          <strong>Office address:</strong><br />
                          <OfficeVisit address={user.address}/>
                        </p>
                        <p>
                          <strong>Introduction</strong><br />
                          {user.description}
                        </p>
                        <p>
                          <strong>Subjects:</strong><br />
                          <List values={user.subjects}/>
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
                          <MenuItem value={'expert'} primaryText="EXPERTS" />
                          <MenuItem value={'teacher'} primaryText="TEACHERS" />
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
                      <MenuItem value={'pending'} primaryText="WAITING FOR RESPONSE" />
                      <MenuItem value={'accepted'} primaryText="ACCEPTED" />
                      <MenuItem value={'rejected'} primaryText="DECLINED" />
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
