import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import {
  Step,
  Stepper,
  StepButton,
  StepLabel,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MyTextField from '../MyTextField';
import theme from '../../utils/theme';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';


const styles = {
  contentStyle: {
    margin: '0 16px',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'left',
    padding: 0 // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2
  },
  header: {
    textAlign: 'center',
    padding: 0,
    color: theme.palette.primary1Color,
  },
  button: {
    height: 68
  },
  card: {
    margin: 20, // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2,
    flex: 1,
    flexBasis: '450px',
    maxWidth: '650px'
  },
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    borderColor: theme.palette.primary2Color,
    color: theme.palette.primary2Color

  },
};

const subjectList = [
  'Liikunta',
  'Äidinkieli',
  'Matematiikka',
  'Fysiikka',
  'Kemia',
  'Psykologia',
  'Musiikki',
  'Historia',
];

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
        return (
          <div>
            <MyTextField label="Name" />
            <MyTextField label="Phone" />
            <MyTextField label="Email" />
            <MyTextField label="Password" type="password" />
            <MyTextField label="Repeat password" type="password" />
          </div>
        );
      case 1:
        return (
          <div>
            <MyTextField label="Company name" />
            <br />
            <MyTextField label="Title" />
            <br /><br />
            <Checkbox label="Office visit possible" style={styles.checkbox}/>
            <p>Check this box if you agree that teachers can come to your office with
                a group of students
            </p>
          </div>
        );
      case 2:
        return (
          <div>
          <TextField
            style={{margin: 10}}
            hintText="Tell briefly about you, your expertise and experience"
            floatingLabelText="Short introduction"
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFixed={true}
            className="formcontainer"
            fullWidth={true}/>
          <ChipInput
            onChange={(chips) => handleChange(chips)} // Chips inside textfield
            filter={AutoComplete.fuzzyFilter} // Autocomplete
            dataSource={subjectList} // Autocomplete (source of suggestions)
            maxSearchResults={5} // Autocomplete (number of suggestions shown)
            style={{margin: 10}} hintText="List the subjects you could teach about (keywords)"
            floatingLabelText="Subjects" floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFixed={true}
            className="formcontainer"
            fullWidth={true}/>
          <TextField
            style={{margin: 10}}
            hintText="Preferred topic in mind? Presentation or interactive? Most suitable for which ages? Any special equipment needed?"
            floatingLabelText="Lecture details (if possible)"
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFixed={true}
            className="formcontainer"
            multiLine={true}
            rows={2}
            rowsMax={4}
            fullWidth={true}/>
          </div>
        );
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label={stepIndex === 0 ? 'Cancel' : 'Back'}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {

    const {stepIndex} = this.state;

    return(

      <Dialog
        title={this.props.title}
        modal={this.props.modal}
        open={this.props.open}
        actions={this.props.actions}>

        <div style={{width: '100%', maxWidth: 700, margin: 'auto', height: '100%'}}>
      <Stepper activeStep={stepIndex}>
        <Step>
          <StepLabel style={{color: theme.palette.primary2Color, fontSize:'17px'}}>BASIC INFO</StepLabel>
        </Step>
        <Step>
          <StepLabel style={{color: theme.palette.primary2Color, fontSize:'17px'}}>OCCUPATION</StepLabel>
        </Step>
        <Step>
          <StepLabel style={{color: theme.palette.primary2Color, fontSize:'17px'}}>EXPERT PROFILE</StepLabel>
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
  actions: PropTypes.array,
  title: PropTypes.string,
};

export default RegisterModal;
