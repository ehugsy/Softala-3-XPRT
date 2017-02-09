import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  contentStyle: {
    margin: '0 16px',
  }
};

class RegisterModal extends Component {

  state = {
    stepIndex: 0,
  }

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

  render() {

    const {stepIndex} = this.state;

    return(
      <Dialog
        title={this.props.title}
        modal={this.props.modal}
        open={this.props.open}
        actions={this.props.actions}>

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
      <div style={styles.contentStyle}>
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
    )
  }
}

RegisterModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  actions: PropTypes.string,
  title: PropTypes.string,
};

export default RegisterModal;
