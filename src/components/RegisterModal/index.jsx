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
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ExpandTransition from 'material-ui/internal/ExpandTransition';


const styles = {
  contentStyle: {
    margin: '0 16px',
    paddingBottom: 0,
  },
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    borderColor: theme.palette.primary2Color,
    color: theme.palette.primary2Color
  },
  button: {
    border: '1px solid #555555',
    padding: '15px',
    margin: 5,
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  iconButton: {
    padding: '6px',
  },
  dialogFixTop: {
    marginTop: 0,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    width: '100%',
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
            <MyTextField label="Name" key={"name"} id='name'/>
            <MyTextField label="Phone" key={"phone"} id='phone'/>
            <MyTextField label="Email" key={"email"} id='email'/>
            <MyTextField label="Password" type="password" key={"password"} id='password'/>
            <MyTextField label="Repeat password" type="password" key={"repeatpassword"} id='repeatpassword'/>
          </div>
        );
      case 1:
        return (
          <div>
            <MyTextField label="Company name" key={"companyName"} id='companyName'/>
            <MyTextField label="Title" key={"title"} id='title'/>
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

      <FlatButton label="CREATE AN ACCOUNT" style={{...styles.button, ...styles.buttonGold}} onTouchTap={this.handleOpen}/><br />

      <Dialog
        modal={true}
        open={this.state.open}
        actions={this.actions}
        autoScrollBodyContent={true}
        style={styles.dialogFixTop}
        contentStyle={{minWidth: 700, marginLeft: 60}}
        >

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
            {this.getStepContent(stepIndex)}
            <div style={{marginTop: 12}}>
              <FlatButton
                label='Cancel'
                onTouchTap={this.handleClose}
                style={styles.button}
              />
              <FlatButton
                label='Back'
                onTouchTap={this.handlePrev}
                labelPosition='after'
                icon={<ArrowBack />}
                disabled={stepIndex === 0}
                style={{...styles.button, ...styles.iconButton}}
              />
              <FlatButton
                label={stepIndex === 2 ? 'Finish' : 'Next'}
                icon={stepIndex === 2 ? '' : <ArrowForward />}
                labelPosition='before'
                primary={stepIndex === 2}
                onTouchTap={stepIndex === 2 ? this.handleClose : this.handleNext}
                style={{...styles.button, ...styles.iconButton}}
              />
            </div>
          </div>

      </Dialog>
    </div>
    )
  }
}

export default RegisterModal;
