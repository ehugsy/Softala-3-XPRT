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



const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: theme.spacing.desktopGutter,
    marginTop:'15%'
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
    height: '12em'
  },
  cardRight: {
    border: 'none',
    backgroundColor: theme.palette.transparentColor,
    boxShadow: 'none',
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid #cccccc',
    textAlign: 'left',
    width: '40%',
    height: '12em',
    marginLeft: '3em',
    paddingLeft: '3em'
  },
  buttonStyle: {
    border: '1px solid #cccccc',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    margin: '0.2em'
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
          <svg width="204px" height="81px" viewBox="0 0 291 116" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                  <polygon id="path-1" points="0.9303 97 76.7503 97 76.7503 0.0424 0.9303 0.0424 0.9303 97"></polygon>
                  <polygon id="path-3" points="5.42101086e-20 0.9111 5.42101086e-20 76.2211 60.6286 76.2211 60.6286 0.9111 0 0.9111"></polygon>
              </defs>
              <g id="Symbols">
                  <g id="xprt_logo">
                      <g id="Page-1">
                          <polygon id="Fill-1" style={{fill:"#14A369"}} points="59.4893 70.1317 78.8193 96.0887 90.0393 96.0887 65.0543 62.7287"></polygon>
                          <polygon id="Fill-2" style={{fill:"#14A369"}} points="65.0078 51.0174 87.8288 20.7794 76.7788 20.7794 59.5908 43.7884"></polygon>
                          <g id="Group-13" transform="translate(0.000000, 0.868000)">
                              <g id="Group-5" transform="translate(102.000000, 18.000000)">
                                  <mask id="mask-2" style={{fill:"#fff"}}>
                                      <use xlinkHref="#path-1"></use>
                                  </mask>
                                  <g id="Clip-4"></g>
                                  <path d="M10.2803,39.4814 C10.2803,57.6704 21.8413,70.2514 38.3303,70.2514 C54.9903,70.2514 66.8893,57.5014 66.8893,39.6514 C66.8893,21.4614 54.9903,8.8814 37.9903,8.8814 C21.8413,8.8814 10.2803,21.8014 10.2803,39.4814 L10.2803,39.4814 Z M0.9303,1.9114 L10.4513,1.9114 L10.4513,14.3214 C17.7603,4.8014 27.2803,0.0424 38.6713,0.0424 C59.9203,0.0424 76.7503,17.5514 76.7503,39.6514 C76.7503,61.5814 59.9203,79.0904 38.6713,79.0904 C27.2803,79.0904 18.1003,74.3314 10.4513,64.8114 L10.4513,97.0004 L0.9303,97.0004 L0.9303,1.9114 Z" id="Fill-3" style={{fill:"#14A369"}} mask="url(#mask-2)"></path>
                              </g>
                              <path d="M203.0254,19.9111 L203.0254,30.2811 C208.1254,23.1411 214.7544,19.9111 224.9554,19.9111 L232.3354,19.9111 L232.3354,28.5811 L225.1254,28.5811 C216.6254,28.5811 209.8254,31.9811 206.5944,37.9311 C203.8754,43.0311 203.0254,47.9621 203.0254,58.6711 L203.0254,95.2211 L193.5044,95.2211 L193.5044,19.9111 L203.0254,19.9111 Z" id="Fill-6" fill="#14A369"></path>
                              <path d="M244.2324,28.5811 L244.2324,19.9111 L258.0724,19.9111 L258.0724,3.8721 L267.5914,0.1321 L267.5914,19.9111 L290.5114,19.9111 L290.5114,28.5811 L267.5914,28.5811 L267.5914,72.7801 C267.5914,82.6411 270.4824,87.2311 276.7724,87.2311 C278.4714,87.2311 279.4924,87.0601 281.5324,86.5511 L281.5324,95.2211 C278.9824,96.0711 277.2824,96.2411 274.9024,96.2411 C263.8524,96.2411 258.0724,88.0811 258.0724,72.7801 L258.0724,28.5811 L244.2324,28.5811 Z" id="Fill-8" style={{fill:"#14A369"}}></path>
                              <g id="Group-12" transform="translate(0.000000, 19.000000)">
                                  <mask id="mask-4" style={{fill:"#fff"}}>
                                      <use xlinkHref="#path-3"></use>
                                  </mask>
                                  <g id="Clip-11"></g>
                                  <polygon id="Fill-10" style={{fill:"#14A369"}} mask="url(#mask-4)" points="33.5996 0.9111 22.3796 0.9111 45.8906 32.4071 -0.0004 32.4071 -0.0004 41.0851 46.4266 41.0851 19.9996 76.2211 31.2196 76.2211 60.6286 36.9511"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
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
