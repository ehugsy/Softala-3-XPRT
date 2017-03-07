import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import MenuItem from 'material-ui/MenuItem';
import theme from '../../utils/theme';
import DialogButtons from '../DialogButtons';


const styles = {
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    color: theme.palette.primary2Color,
    borderColor: theme.palette.primary2Color,
  },
}

/*const renderTextField = props => (
  <MyTextField
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    underlineFocusStyle={styles.underlineStyle}
    fullWidth={true}
    {...props} />
)*/

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
            <Field name='name' component={renderTextField} label='Name' type='text'/>
            <Field name='phone' component={renderTextField} label='Phone' type='text'/>
            <Field name='email' component={renderTextField} label='Email' type='text'/>
            <Field name='password' component={renderTextField} label='Password' type='password'/>
            <Field name='repeatpassword' component={renderTextField} label='Repeat password' type='password'/>
          </div>
          <DialogButtons stepIndex={this.props.stepIndex} handleClose={this.props.handleClose} />
        </form>
    )
  }
}

BasicInfoFields = reduxForm({
  form: 'registerForm',
  destroyOnUnmount: false,
})(BasicInfoFields)

export default BasicInfoFields;
