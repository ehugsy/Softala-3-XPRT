import { Component } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import theme from '../../utils/theme';
import HomeCard from '../../components/HomeCard';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import FuturiceLogo from '../../components/FuturiceLogo';



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
  secondWrapper: {
    height: '75vmin'
  },
  secondInnerWrapper: {
    background: '#cccccc',
    height: '70vmin',
    marginTop: '12em'
  },
  secondLogos:{
    float: 'right',
    marginTop: '5em',
    marginRight: '10em'
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

class Home extends Component {
  state = {
  stepIndex: 0,
};

handleNext = () => {
  const {stepIndex} = this.state;
  if (stepIndex < 2) {
    this.setState({stepIndex: stepIndex + 1});
  }
};

handlePrev = () => {
  const {stepIndex} = this.state;
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex - 1});
  }
};

getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'You\'re a long way from home sonny jim!';
  }
}
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {stepIndex} = this.state;
const contentStyle = {margin: '0 16px'};

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return(
      <div style={styles.wrapper}>
        <Card style={styles.cardTop}>
          <XprtLogo />
          <p>TEACH TOGETHER. GROW TOGETHER.</p>
          <p>Xprt connects teachers and experts for the benefit of Finnish school children.
          Arranging a visiting lecture from a professional expert has become easier.</p>



        </Card>
        <div style={styles.innerWrapper}>
        <Card style={styles.cardLeft}>
          <p style={styles.smallHeader}>TEACHERS</p>
          <p>Download and install the app to browse and view the experts' profile. Easily inite experts to your classroom.</p>
          <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
          <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>
        </Card>
        <Card style={styles.cardRight}>
          <p style={styles.smallHeader}>EXPERTS</p>
          <p>Sign up as an expert and  to share your skills for the <br /> benefit of the future generation.</p>
          <FlatButton label="CREATE AN ACCOUNT" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpen}/><br />
          <FlatButton label="LOGIN" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
        </Card>
      </div>
      <div style={styles.secondWrapper}>
        <div style={styles.secondLogos}>
          <HundredLogo/>
          <FuturiceLogo/>
        </div>
      <div style={styles.secondInnerWrapper}>
        <p>Testi</p>
      </div>
      </div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label="Next"
              disabled={stepIndex === 2}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
        </Dialog>
      </div>
    );
  }
}

export default Home;
