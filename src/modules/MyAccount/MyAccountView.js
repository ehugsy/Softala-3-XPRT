import { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import {red500} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';



const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20 // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2
  },
  button: {
    height: 68
  },
  card: {
      margin: 20, // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2,
      flex: 1,
      flexBasis: '450px',
      maxWidth: '650px'
  }
};

class HorizontalTransition extends Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex === 0) {
      return this.props.closeRegistration();
    }

    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1
      }));
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <Subheader>Modify your account info.</Subheader>

            <TextField style={{margin: 0}} floatingLabelText="Name" floatingLabelFocusStyle={{color:"#eab94e"}} fullWidth={true}/>
            <TextField style={{margin: 0}} floatingLabelText="Phone" floatingLabelFocusStyle={{color:"#eab94e"}} fullWidth={true} />
            <TextField style={{margin: 0}} floatingLabelText="Email" className="formcontainer"  fullWidth={true}/>
            <br /><br /><Subheader>Change password</Subheader>
            <TextField style={{margin: 0}} floatingLabelText="Old Password" className="formcontainer" type='password' fullWidth={true}/>

            <TextField style={{margin: 0}} floatingLabelText="New Password" className="formcontainer" type='password' fullWidth={true}/>
            <TextField style={{margin: 0}} floatingLabelText="Repeat Password" className="formcontainer" type='password' fullWidth={true}/>

          </div>
        );
      case 1:
        return (
          <div>
            <TextField style={{margin: 0}} floatingLabelText="Company name" className="formcontainer"  fullWidth={true}/>
            <br />
            <TextField style={{margin: 0}} floatingLabelText="Title" className="formcontainer"  fullWidth={true}/>
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
          <TextField style={{margin: 10}} hintText="Tell briefly about you, your expertise and experience" floatingLabelText="Short introduction" floatingLabelFixed={true} className="formcontainer"  fullWidth={true}/>
          <TextField style={{margin: 10}} hintText="List the subjects you could teach about (keywords)" floatingLabelText="Subjects" floatingLabelFixed={true} className="formcontainer"  fullWidth={true}/>
          <TextField style={{margin: 10}} hintText="Preferred topic in mind? Presentation or interactive? Most suitable for which ages? Any special equipment needed?" floatingLabelText="Lecture details (if possible)" floatingLabelFixed={true} className="formcontainer" multiLine={true} rows={2} rowsMax={4} fullWidth={true}/>
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
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel style={{color: "#eab94e"}}>Basic info</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: "#eab94e"}}>Expert profile</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: "#eab94e"}}>Occupation</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

class RegisterExpert extends Component {
  render() {
    console.log(this.props);
    return(
      <div style={styles.wrapper}>
        <Card style={styles.card}>
          <CardText>
            <HorizontalTransition closeRegistration={ this.props.closeRegistration } />
          </CardText>
        </Card>
      </div>
    );
  }
}

RegisterExpert.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default RegisterExpert;
