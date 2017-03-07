import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import theme from '../../utils/theme';
import BasicInfoFields from '../RegisterForm/BasicInfoFields';
import OccupationFields from '../RegisterForm/OccupationFields';
import ExpertProfileFields from '../RegisterForm/ExpertProfileFields';
import Radium from 'radium';
import MediaQuery from 'react-responsive';


const styles = {
  fieldsStyle: {
    width: '100%',
    minHeight: 450,
  },
  contentStyle: {
    marginLeft: 60,
    width: 708,
  },
  contentStyleResponsive: {
    width: '98%',
  },
  button: {
    border: '1px solid #555555',
    padding: 15,
    margin: 5,
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  dialogFixTop: {
    zIndex: '99999',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'baseline',
  },
  stepLabel: {
    color: theme.palette.primary2Color,
    fontSize: 17,
  },
};

@Radium
class RegisterModal extends Component {

  state = {
    open: false,
    stepIndex: 0,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false, stepIndex: 0});
  };

  handleNext = (values) => {
    const {stepIndex} = this.state;
    console.log(values)
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

  handleSubmit(values) {
    console.log(values);
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <BasicInfoFields
            onSubmit={this.handleNext}
            stepIndex={stepIndex}
            handleClose={this.handleClose} />
        );
      case 1:
        return (
          <OccupationFields
            onSubmit={this.handleNext}
            stepIndex={stepIndex}
            handleClose={this.handleClose}
            handlePrev={this.handlePrev}
            officeVisitPossible={false}/>
        );
      case 2:
        return (
          <ExpertProfileFields
            stepIndex={stepIndex}
            handleClose={this.handleClose}
            handlePrev={this.handlePrev} />
        );
    }
  };

  render() {

    const {stepIndex} = this.state;

    return(
    <div>
      <FlatButton label='CREATE AN ACCOUNT' style={{...styles.button, ...styles.buttonGold}} onTouchTap={this.handleOpen}/><br />

      <MediaQuery query='(min-width: 769px)'>
      <Dialog
        modal={true}
        open={this.state.open}
        autoScrollBodyContent={true}
        style={styles.dialogFixTop}
        contentStyle={styles.contentStyle}>

          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel style={styles.stepLabel}>BASIC INFO</StepLabel>
            </Step>
            <Step>
              <StepLabel style={styles.stepLabel}>OCCUPATION</StepLabel>
            </Step>
            <Step>
              <StepLabel style={styles.stepLabel}>EXPERT PROFILE</StepLabel>
            </Step>
          </Stepper>

          <div style={styles.fieldsStyle}>
            {this.getStepContent(stepIndex)}
          </div>

      </Dialog>
      </MediaQuery>

      <MediaQuery query='(max-width: 768px)'>
      <Dialog
        modal={true}
        open={this.state.open}
        autoScrollBodyContent={true}
        style={styles.dialogFixTop}
        contentStyle={styles.contentStyleResponsive}>

          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel style={styles.stepLabel}>BASIC INFO</StepLabel>
            </Step>
            <Step>
              <StepLabel style={styles.stepLabel}>OCCUPATION</StepLabel>
            </Step>
            <Step>
              <StepLabel style={styles.stepLabel}>EXPERT PROFILE</StepLabel>
            </Step>
          </Stepper>

          <div style={styles.fieldsStyle}>
            {this.getStepContent(stepIndex)}
          </div>

      </Dialog>
      </MediaQuery>
    </div>
  )
  }
}

export default RegisterModal;
