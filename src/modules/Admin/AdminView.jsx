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
import theme from '../../utils/theme';
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


const styles = {
  headline: {
   fontSize: 24,
   paddingTop: 16,
   marginBottom: 12,
   fontWeight: 400,
 },
 tabStyle: {
  backgroundColor: 'rgba(68,68,68,1)',


},
contentContainerStyle: {
backgroundColor: 'rgba(68,68,68,1)'

},


  wrapper: {
    color: theme.palette.textColor,

  },
  firstWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse'
    },
  },
  secondWrapper: {
    height: '75vmin',
    display: 'flex',
    flexDirection: 'column',
  },
  secondInnerWrapper: {
    background: '#cccccc',
    height: '70vmin',
  },
  headerWrapper:{
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
      '@media (max-width: 768px)':{
        display: 'none'
      }
  },
  landingWrapper:{
    minHeight: '80vh',
    paddingLeft:'4%',
    paddingRight:'4%',
    marginTop:'20vh',
    '@media (max-width: 768px)': {
      marginTop: 10
    },
  },

  bigHeader: {
    color: theme.palette.primary1Color,
    fontWeight: 300,
    '@media (max-width: 768px)': {
          fontSize: 24,
    },
  },

  // bigText is used in dropdown menu
  bigText: {
    flex: 4,
    fontSize: '18px',
    fontWeight: '300',
    flexBasis: '200px',
    marginLeft: '3em',
    paddingLeft: '3em',
    '@media (max-width: 768px)': {
      margin: 0,
      padding: 0,
      textAlign: 'center'
    },
  },
  leftSpace: {
    flex: 3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  rightSpace: {
    flex:3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  leftText: {
    fontSize: '16px',
    fontWeight: '300',
    textAlign: 'right',
    flex:3,
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
      fontSize: '16px',
    },
  },
  rightText: {
    fontSize: '16px',
    fontWeight: '300',
    borderLeft: '1px solid rgba(204, 204, 204, .34)',
    borderBottom: 0,
    textAlign: 'left',
    flex:4,
    marginLeft: '3em',
    paddingLeft: '3em',
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
      margin: 0,
      padding: 0,
      borderLeft: 0,
      borderBottom: '1px solid rgba(204, 204, 204, .34)',
      display: 'flex',
      flexDirection: 'column-reverse',
      flexBasis: '0px',
      fontSize: '16px',
    },
  },
  buttonStyle: {
    border: '1px solid rgba(204, 204, 204, .34)',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },

  mobileShow: {
    '@media (min-width: 768px)':{
      display: 'none'
    }
  },

  contentCard: {
    width: '100%',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    padding: '30px',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  /*
  Titlestyle, subtitleStyle & avatarStyle are used to stylize
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
  avatarStyle: {
    marginTop: '-5px',
  },
  //Yellow line for invitations that are not handled yet
    colorIndicatorYellow: {
      borderLeft: 'solid',
      borderMargin:'#585858',
      borderOffset:{height: 10},
      color: theme.palette.primary2Color
    },
    //Green line for accpted invitations
    colorIndicatorGreen: {
      borderLeft: 'solid',
      color: theme.palette.primary1Color
    },
    cardMargin: {
      marginBottom: 20
    }
};

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
