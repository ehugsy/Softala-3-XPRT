import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import theme from '../../utils/theme';
import Checkbox from 'material-ui/Checkbox';
import OccupationFields from '../RegisterForm/OccupationFields';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import MyTextField from '../MyTextField';
import { connect } from 'react-redux';
import styles from './editModalStyles';

const formdata = {
  companyName: 'Sportmrt',
  title: 'CEO',
  officeAddress: ''
}

const required = value => value ? undefined : 'Required'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MyTextField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
)

@Radium
export default class EditCompanyDetailsModal extends React.Component {
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
    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}><img src={'../../img/edit.png'} style={styles.editPen}/></a>
        <Dialog
          modal={false}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.noborder}
          actionsContainerStyle={styles.noborder}>

          <form onSubmit={this.props.handleSubmit}>
            <div>
              <Field
                name='companyName'
                label='Company name'
                component={renderTextField}
                id='companyName'
                validate={required}
                hintText={formdata.companyName}
                floatingLabelFixed={true}/>

              <Field
                name='title'
                label='Title'
                component={renderTextField}
                id='title'
                validate={required}
                hintText={formdata.title}
                floatingLabelFixed={true}/>

              <Field
                name='officeVisitPossible'
                id='officeVisitPossible'
                component={renderCheckbox}
                label='Office visit possible'
                value='checked'/>

              <p>Check this box if you agree that teachers can come to your office with
                  a group of students</p>

              {this.props.officeVisitPossible &&
              <Field
                name='officeAddress'
                label='Office address'
                component={renderTextField}
                id='officeAddress'
                floatingLabelFixed={true}/>
              }
              </div>
              <FlatButton
                label="Save"
                primary={true}
                onTouchTap={this.handleClose}
                style={styles.button}
              />
              <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                style={styles.button}
              />
            </form>

        </Dialog>
      </div>
    );
  }
}

EditCompanyDetailsModal = reduxForm({
  form: 'companyDetailsForm',
  destroyOnUnmount: false,
})(EditCompanyDetailsModal)

const selector = formValueSelector('companyDetailsForm')
EditCompanyDetailsModal = connect(
  state => {
    // can select values individually
    const officeVisitPossible = selector(state, 'officeVisitPossible')
    return {
      officeVisitPossible,
    }
  }
)(EditCompanyDetailsModal)
