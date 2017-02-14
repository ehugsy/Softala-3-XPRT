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
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';


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
  iconButton: {
    border: '1px solid #555555',
    padding: '6px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  dialog: {
    marginBottom: 0,
    height: '1200',
  }
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
    open: false,
    stepIndex: 0,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false, stepIndex: 0});
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
  };

  render() {

    const {stepIndex} = this.state;

    return(
    <div>

      <FlatButton label="CREATE AN ACCOUNT" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpen}/><br />

      <Dialog
        modal={true}
        open={this.state.open}
        actions={this.actions}
        autoScrollBodyContent={true}>

        <div style={{width: '100%', maxWidth: 700, margin: 'auto', height: '100%', paddingBottom: 20}}>
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
                label="Cancel"
                onTouchTap={this.handleClose}
                style={styles.buttonStyle}
              />
              <FlatButton
                label={stepIndex === 2 ? 'Finish' : 'Next'}
                icon={stepIndex === 2 ? '' : <ArrowForward />}
                labelPosition="before"
                primary={stepIndex === 2}
                onTouchTap={stepIndex === 2 ? this.handleClose : this.handleNext}
                style={styles.iconButton}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
    )
  }
}

export default RegisterModal;
