import { Component } from 'react';
import theme from '../../utils/theme';
import { Card, CardHeader, CardText, CardActions, CardTitle, CardMedia, } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';

import Chip from 'material-ui/Chip';

const styles = {
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '50px',
    height: '50vmin',
    color: theme.palette.textColor
  },
  secondWrapper: {
    background: 'rgba(38,38,38,1)',
    display: 'flex',
    flexDirection: 'row',
    height: '100vmin',
    color: theme.palette.textColor
  },
  leftDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '50vmin',
    marginTop:'-10%',
  },
  rightDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '50vmin',
    marginTop:'-10%',
  },
  contentCard: {
    width: '90%',
    alignSelf: 'center',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    boxShadow: '1px 1px 5px black',
    padding: '30px',

  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  mainDivTitle: {
    paddingLeft: '2em',
    fontSize: '18px',
    color: theme.palette.textColor,
  },
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '18px',
    fontWeight: '300',

  },
  mainDivText: {
    color: theme.palette.textColor,
    fontSize: '18px',
    fontWeight: '300',

  },
  divTitle: {
    paddingLeft: '20px',
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  greenHeader: {
    color: theme.palette.primary1Color,
    fontSize: '16pt',
  },
  whiteHeader: {
    fontSize: '16pt',
  },
  alignRight: {
    textAlign: 'right',

  },
  p: {
    fontSize: '14pt',
  },
  colorIndicatorYellow: {
    borderTop: 'solid',
    color: theme.palette.primary2Color,
  },
  colorIndicatorGreen: {
    borderTop: 'solid',
    color: theme.palette.primary1Color,
  },

  chip: {
    margin: 4,
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #eab94e',
    padding: '1px',
    borderRadius: '20px',
    lineHeight: '0.4em',
},

wrapper: {
  display: 'flex',
  flexWrap: 'wrap',
},

edit: {
  float: 'right',
  width: '15px',
  height: '15px'
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
              <img src={''} style={styles.edit}/>
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
              <img src={''} style={styles.edit}/>
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>Sportmrt</p>

              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>CEO</p>
              <Checkbox label="Office visit possible"
                checked={true}
                disabled={true}
                style={styles.checkbox}/>
            </div>

            <div style={styles.contentCard}>
              <img src={''} style={styles.edit}/>
              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <p style={styles.mainDivText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p style={styles.mainDivTextTitle}>SUBJECTS: </p>
              <div style={styles.wrapper}>
                <Chip style={styles.chip}>Text Chip </Chip>
                <Chip style={styles.chip}>Text Chip </Chip>
              </div>
              <p style={styles.mainDivTextTitle}>LECTURE DETAILS: </p>
              <p style={styles.mainDivText}>Sportmrt</p>

            </div>

          </div>
          <div style={styles.rightDiv}>
              <h3 style={styles.divTitle}>INVITATIONS</h3>





              <Card style={{...styles.contentCard, ...styles.colorIndicatorYellow}}>
                <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com"
                 avatar="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
          <CardText expandable={true}>
            <p style={styles.greenHeader}>SCHOOL:</p>
            <p style={styles.whiteHeader}>Name of school:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Subjects:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Educational stage:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>

            <p style={styles.greenHeader}>LECTURE:</p>
            <p style={styles.whiteHeader}>Theme of the lecture:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Date of lecture: (option 1):</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Date of lecture: (option 2):</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Location:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Short description of the lecture:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>

            <div style={styles.alignRight}>
          <FlatButton expandable={true} label="DECLINE" style={{...styles.buttonStyle}}/>
          <FlatButton expandable={true} label="ACCEPT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
</div>


            </CardText>
        </Card>

        <h3 style={styles.divTitle}>UPCOMING:</h3>
          <Card style={{...styles.contentCard, ...styles.colorIndicatorGreen}}>
          <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com"
           avatar="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"
           actAsExpander={true}
           showExpandableButton={true}
         />
        <CardText expandable={true}>
          <p style={styles.greenHeader}>SCHOOL:</p>
          <p style={styles.whiteHeader}>Name of school:</p>
          <p>Hyväksytyn keissin infot</p>
        <div style={styles.alignRight}>
      <FlatButton expandable={true} label="DECLINE" style={{...styles.buttonStyle}}/>
      <FlatButton expandable={true} label="ACCEPT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
</div>
</CardText>
</Card>



        <h3 style={styles.divTitle}>DECLINED:</h3>
          <Card style={styles.contentCard}>
          <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com"
           avatar="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"
           actAsExpander={true}
           showExpandableButton={true}
         />
        <CardText expandable={true}>
          <p style={styles.greenHeader}>SCHOOL:</p>
          <p style={styles.whiteHeader}>Name of school:</p>
          <p>Hylätyn keissin infot</p>
        <div style={styles.alignRight}>
      <FlatButton expandable={true} label="DECLINE" style={{...styles.buttonStyle}}/>
      <FlatButton expandable={true} label="ACCEPT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
</div>
</CardText>
</Card>
</div>
</div>
</div>
    );
  }
}
export default MyProfile;
