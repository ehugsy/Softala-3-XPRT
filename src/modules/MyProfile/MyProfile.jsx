import {Component} from 'react';
import theme from '../../utils/theme';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';

import Chip from 'material-ui/Chip';
import MyProfileEditModal from '../../components/MyProfileEditModal';


const styles = {
/*
These first element change the outlook
of the page overall
*/
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '50px',
    height: '360px',
    color: theme.palette.textColor
  },
  secondWrapper: {
    background: 'rgba(38,38,38,1)',
    display: 'flex',
    flexDirection: 'row',
    height: '800px',
    color: theme.palette.textColor
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  avatarStyle: {
    marginTop: '-10px',
  },
  contentCard: {
    width: '90%',
    alignSelf: 'center',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    padding: '30px',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  /*Adds a little space between the end of the page and the last card */
  emptyFooter: {
    paddingBottom:'1px',
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
    height: '50vmin',
    marginTop: '-20%',
    paddingLeft: '25px'
  },
  //My profile -title on the left
  mainDivTitle: {
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
  paddingLeft: '30px'
},
rightDivTitleAccept:{
  color: theme.palette.primary1Color,
  paddingLeft: '30px'
},
rightDivTitleDecline:{
  paddingLeft: '30px',
  opacity: '0.34'
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
    height: '50vmin',
    marginTop: '-20%'
  },
  /*
Titlestyle & subtitleStyle are used to stylize
contentcards on the right side of page
*/
  titleStyle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#CCCCCC'
  },
  subtitleStyle: {
    fontSize: '18px',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#CCCCCC',
    marginTop: '7px'
  }
};

class MyProfile extends Component {

  render() {

    return (
      <div>
        <div style={styles.firstWrapper}>
          <img src={'../../img/placeholder_profilepicture.png'} style={styles.profilePicture}/>
        </div>

        <div style={styles.secondWrapper}>
          <div style={styles.leftDiv}>
            <p style={styles.mainDivTitle}>MY PROFILE</p>
            <div style={styles.contentCard}>
              <MyProfileEditModal />

              <p style={styles.mainDivTextTitle}>NAME:</p>
              <p style={styles.mainDivText}>Esko Esimerkki</p>

              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>+358 45 23423434</p>

              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>esko.esimerkki@example.com</p>

              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <p style={styles.mainDivText}>Helsinki, Espoo</p>
            </div>

            <div style={styles.contentCard}>
              <MyProfileEditModal />
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>Sportmrt</p>
              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>CEO</p>
              <Checkbox label="Office visit possible" checked={true} disabled={true} style={styles.checkbox}/>
            </div>

            <div style={styles.contentCard}>
              <MyProfileEditModal />
              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <p style={styles.mainDivText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p style={styles.mainDivTextTitle}>SUBJECTS:</p>
              <div style={styles.wrapper}>
                <Chip style={styles.chip}>Text Chip
                </Chip>
                <Chip style={styles.chip}>Text Chip
                </Chip>
              </div>
              <p style={styles.mainDivTextTitle}>LECTURE DETAILS:
              </p>
              <p style={styles.mainDivText}>Sportmrt</p>
            </div>
          </div>

          <div style={styles.rightDiv}>
            <h3 style={styles.rightDivTitle}>INVITATIONS (1)</h3>
            <Card style={{
              ...styles.contentCard,
              ...styles.colorIndicatorYellow
            }}>
              <CardHeader title="Esa Peltonen" subtitle="esapeltonen@email.com" titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>Name of school:</p>
                <p style={styles.mainDivText}>The Internationl School of Helsinki</p>
                <p style={styles.mainDivTextBold}>Subjects:</p>
                <p style={styles.mainDivText}>Mathematics, Physics</p>
                <p style={styles.mainDivTextBold}>Educational stage:</p>
                <p style={styles.mainDivText}>Upper Secondary School</p>
                <p style={styles.mainDivTextTitle}>LECTURE:</p>
                <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
                <p style={styles.mainDivText}>Making Numbers Cool</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
                <p style={styles.mainDivText}>12.03.2017</p>
                <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
                <p style={styles.mainDivText}>14.03.2017</p>
                <p style={styles.mainDivTextBold}>Location:</p>
                <p style={styles.mainDivText}>Helskinki International School</p>
                <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
                <p style={styles.mainDivText}>Why mathematics should be considered cool and worth learning. Also Cookiees</p>

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

            <h3 style={styles.rightDivTitleAccept}>UPCOMING (1):</h3>
            <Card style={{
              ...styles.contentCard,
              ...styles.colorIndicatorGreen
            }}>
              <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com" titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>Name of school:</p>
                <p style={styles.mainDivText}>Hyväksytyn keissin infot</p>

              </CardText>
            </Card>

            <h3 style={styles.rightDivTitleDecline}>DECLINED (1):</h3>
            <Card style={styles.contentCard}>
              <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com" titleStyle={{
                ...styles.titleStyle
              }} subtitleStyle={{
                ...styles.subtitleStyle
              }} avatar={<Avatar src='../../img/Arska.jpg' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
              <CardText expandable={true}>
                <p style={styles.mainDivTextTitle}>SCHOOL:</p>
                <p style={styles.mainDivTextBold}>Name of school:</p>
                <p style={styles.mainDivText}>Hylätyn keissin infot</p>

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
