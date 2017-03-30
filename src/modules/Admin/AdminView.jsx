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

const marginRight = '10em'
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './adminStyles';

const searchList = [
  'pekka',
  'pertti',
  'jonne',
  'seppo',
  'ismo',
  'jamppa',
  'stöge',
  'niki',
];

let contacts = [{
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


@Radium
class AdminView extends Component {

 /* Gives sorting dropdown menu a default value. 1 = first value of options */
  constructor(props) {
    super(props);
    this.state = {value: 1, search: ''};
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    let filteredContacts = contacts.filter((contact) => {
      const contactName = contact.name.toLowerCase();
      const contactEmail = contact.email.toLowerCase();
      //const contactCity = contact.city.toLowerCase();
      const searchString = this.state.search.toLowerCase();

      return contactName.indexOf(searchString) !== -1 ||
        contactEmail.indexOf(searchString) !== -1
        //||contactCity.indexOf(searchString) !== -1
        ;
    });

    filteredContacts = filteredContacts.map((contact) => (
      <div key={contact.name}>
        <Card style={{...styles.colorIndicatorGreen,...styles.cardMargin}}>
          <CardHeader title={contact.name} subtitle={contact.email} titleStyle={{
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
          <div style={styles.headerWrapper}>
            <div style={styles.bigText}>


     <div style={styles.firstWrapper}>

         <div style={styles.rightSpace}><h1 style={styles.bigHeader}>Admin panel</h1></div>


      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false}>
       <MenuItem value={1} primaryText="WAITING FOR RESPONSE" />
       <MenuItem value={2} primaryText="ACCEPTED" />
       <MenuItem value={3} primaryText="DECLINED" />
       <MenuItem value={4} primaryText="IGNORED" />
       <MenuItem value={5} primaryText="placeholder" />
     </DropDownMenu>


       <div style={styles.leftSpace}></div>
       <div style={styles.leftText}>

                <TextField
                onChange={this.updateSearch.bind(this)}
                value={this.state.search}
                style={{margin: 10}} hintText="Search for subjects, teachers, experts"
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFixed={true}
                className="formcontainer"
                fullWidth={true}/>
        </div>

            </div>

<Tabs tabItemContainerStyle={{...styles.contentContainerStyle}}>
    <Tab label="INVITATIONS" style={{...styles.tabStyle}} >
      <br></br>
      <div>
        {filteredContacts}
      </div>
    </Tab>

    <Tab label="PEOPLE" style={styles.tabStyle} >
      <div>
        <br></br>
        <div>
          <Card style={styles.colorIndicatorYellow}>
            <CardHeader title="Hyväksytty hemmo" subtitle="hyväksytty@email.com" titleStyle={{
              ...styles.titleStyle}}
              subtitleStyle={{
              ...styles.subtitleStyle}}
              avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
  <br></br>
  <Card style={styles.colorIndicatorYellow}>
    <CardHeader title="Hyväksytty hemmo" subtitle="hyväksytty@email.com" titleStyle={{
      ...styles.titleStyle}}
      subtitleStyle={{
      ...styles.subtitleStyle}}
      avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
    <br></br>
    <Card style={styles.colorIndicatorYellow}>
      <CardHeader title="Hyväksytty hemmo" subtitle="hyväksytty@email.com" titleStyle={{
        ...styles.titleStyle}}
        subtitleStyle={{
        ...styles.subtitleStyle}}
        avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
        </div>


      </div>
    </Tab>
    <Tab label="PAST LECTURES" style={styles.tabStyle}>
      <div>
        <br></br>
        <div>
          <Card style={styles.colorIndicatorYellow}>
            <CardHeader title="Hylätty hemmo" subtitle="hylätty@email.com" titleStyle={{
              ...styles.titleStyle}}
              subtitleStyle={{
              ...styles.subtitleStyle}}
              avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
  <br></br>
  <Card style={styles.colorIndicatorYellow}>
    <CardHeader title="Hylätty hemmo" subtitle="hylätty@email.com" titleStyle={{
      ...styles.titleStyle}}
      subtitleStyle={{
      ...styles.subtitleStyle}}
      avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
    <br></br>
    <Card style={styles.colorIndicatorYellow}>
      <CardHeader title="Hylätty hemmo" subtitle="hylätty@email.com" titleStyle={{
        ...styles.titleStyle}}
        subtitleStyle={{
        ...styles.subtitleStyle}}
        avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
        </div>



      </div>
    </Tab>
  </Tabs>

            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default AdminView;
