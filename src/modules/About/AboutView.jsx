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
    padding: theme.spacing.desktopGutter,
  },
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  cardTop: {
    right: '0',
    border: 'none',
    background: 'none',
    boxShadow: 'none',
    width: '40%',
    float: 'right',
    fontSize: '18px',
    fontWeight: '300',
    margin: 'auto',
    marginTop: '25%',
    marginRight: '5%',
    marginLeft: '75px',
    paddingLeft: '75px',
    textAlign: 'left',
  },
  cardLeft: {
    position: 'absolute',
    left: '0',
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    width: '30%',
    float: 'left',
    fontSize: '18px',
    fontWeight: '300',
    margin: 'auto',
    marginTop: '25%',
    textAlign: 'right',
    marginLeft:'20%',
  },
  cardRight: {
    position: 'absolute',
    right: '0',
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    width: '40%',
    height: '300px',
    float: 'right',
    fontSize: '18px',
    fontWeight: '300',
    margin: 'auto',
    marginTop: '25%',
    marginRight: '5%',
    paddingLeft: '50px',
    borderLeft: '1px solid #cccccc',
    paddingRight: '100px'
  },
  buttonStyle: {
    border: '1px solid #cccccc',
    padding: '15px',
    borderRadius: '20px',
    marginTop: '10px',
    lineHeight: '0.4em'
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
