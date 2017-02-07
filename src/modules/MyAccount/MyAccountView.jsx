import { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';


import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import {red500} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import theme from '../../utils/theme';

import MyTextField from '../../components/MyTextField';



const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0 // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2
  },
  button: {
    height: 68
  },
  header: {
    textAlign: 'center',
    padding: 0,
    color: theme.palette.primary1Color,
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
      color: theme.palette.primary2Color
  },
  stepLabel: {
    color: theme.palette.primary2Color,
    fontSize: 17,
  },
  avatarContainer: {
    textAlign: 'center',
  },
};

class MyAccountTabs extends Component {
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

  handleSave = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2
      }));
    }
  };

  handleCancel = () => {
    const {stepIndex} = this.state;
    if (stepIndex === 0) {
      return this.props.closeMyAccount();
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
            <div style={styles.avatarContainer}>
              <Avatar size={160} src='../img/placeholder_profilepicture.png' />
            </div>
            <MyTextField label='Name'/>
            <MyTextField label='Phone' />
            <MyTextField label='Email'/>
            <br /><br /><Subheader style={styles.stepLabel}>CHANGE YOUR PASSWORD</Subheader>
            <MyTextField label='Old password' type='password'/>
            <MyTextField label='New password' type='password'/>
            <MyTextField label='Repeat new password' type='password'/>

          </div>
        );
      case 1:
        return (
          <div>
            <MyTextField label='Company Name'/>
            <br />
            <MyTextField label='Title'/>
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
          <TextField style={{margin: 10}} hintText="Tell briefly about you, your expertise and experience" floatingLabelText="Short introduction" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} fullWidth={true}/>
          <TextField style={{margin: 10}} hintText="List the subjects you could teach about (keywords)" floatingLabelText="Subjects" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} fullWidth={true}/>
          <TextField style={{margin: 10}} hintText="Preferred topic in mind? Presentation or interactive? Most suitable for which ages? Any special equipment needed?" floatingLabelText="Lecture details (if possible)" floatingLabelFixed={true} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} multiLine={true} rows={2} rowsMax={4} fullWidth={true}/>
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
            label='Cancel'
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label='Save'
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
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              <StepLabel style={styles.stepLabel}>BASIC INFO</StepLabel>
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
            <StepLabel style={styles.stepLabel}>OCCUPATION</StepLabel>
          </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
            <StepLabel style={styles.stepLabel}>EXPERT PROFILE</StepLabel>
          </StepButton>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

class ExpertAccount extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <div style={styles.header}>
          <h1>MODIFY YOUR ACCOUNT</h1>
        </div>
        <div style={styles.wrapper}>
          <Card style={styles.card}>
            <CardText>
              <MyAccountTabs closeMyAccount={ this.props.closeMyAccount }/>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

ExpertAccount.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default ExpertAccount;
