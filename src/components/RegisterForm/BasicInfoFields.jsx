import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import MenuItem from 'material-ui/MenuItem';
import DialogButtons from '../DialogButtons';
import styles from './registerFormStyles';

/*const renderTextField = props => (
  <MyTextField
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    underlineFocusStyle={styles.underlineStyle}
    fullWidth={true}
    {...props} />
)*/

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MyTextField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)


class BasicInfoFields extends Component {

    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <div style={{height:394}}>
            <Field name='name' validate={required} component={renderTextField} label='Name' type='text'/>
            <Field name='phone' validate={required} component={renderTextField} label='Phone' type='text'/>
            <Field name='email' validate={[required, email]} component={renderTextField} label='Email' type='text'/>
            <Field name='password' validate={required} component={renderTextField} label='Password' type='password'/>
            <Field name='repeatpassword' validate={required} component={renderTextField} label='Repeat password' type='password'/>
          </div>
          <DialogButtons
            stepIndex={this.props.stepIndex}
            handleCancel={this.props.handleCancel} />
        </form>
    )
  }
}

BasicInfoFields = reduxForm({
  form: 'registerForm',
  destroyOnUnmount: false,
})(BasicInfoFields)

export default BasicInfoFields;
