import { Component } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
} from 'material-ui/Card';

import theme from '../../utils/theme';
import FlatButton from 'material-ui/FlatButton';
import HomeCard from '../../components/HomeCard';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop:'10%'
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  cardTop: {
    display: 'block',
    alignSelf: 'flex-end',
    width: '50%',
    border: 'none',
    background: 'none',
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    marginBottom: '5%'
  },
  cardLeft: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    width: '40%',
    marginLeft: '10%',
    height: '12.5em',
  },
  cardRight: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid #333333',
    textAlign: 'left',
    width: '40%',
    height: '12.5em',
    marginLeft: '3em',
    paddingLeft: '3em'
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
  }
};

class About extends Component {
  render() {


    return(
      <div style={styles.wrapper}>
        <Card style={styles.cardTop}>
          <h1>About</h1>
        </Card>
        <div style={styles.innerWrapper}>
          <Card style={styles.cardLeft}>
            <p style={styles.smallHeader}>TEACHERS</p>
            <p>
              Download and install the app to browse and view the experts profiles. Easily invite experts to your classroom.
            </p>
            <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
            <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>
            <p style={styles.smallHeader}>EXPERTS</p>
              <p>
                Sign up as an expert and to share your skills for the benefit of the future generation
              </p>
              <FlatButton label="CREATE AN ACCOUNT" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpen}/><br />
              <FlatButton label="LOGIN" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
          </Card>
          <Card style={styles.cardRight}>
            <p>
              Xprt connects teachers and experts for the benefit on Finnish school children. Arranging a visiting lecture from a professional expert has become easier
            </p>
            <p>
              See Xprt in action.
            </p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allowfullscreen></iframe>
          </Card>
        </div>
      </div>
    );
  }
}

export default About;
