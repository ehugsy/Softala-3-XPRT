import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import styles from './contactStyles';


const required = value => value ? undefined : 'Required'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {touched && error ?
      <input
        {...input}
        placeholder={label}
        type={type}
        style={{...styles.transparentInput,...styles.errorInput}}
      />
      :
      <input
        {...input}
        placeholder={label}
        type={type}
        style={styles.transparentInput}
      />
    }
  </div>
)

const ContactForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (

    <form onSubmit={handleSubmit} style={styles.contactForm}>

      <Field
        name="name"
        type="text"
        label="Your name *"
        validate={required}
        component={renderTextField}
      />

      <Field
        name="email"
        type="text"
        label="Your email address *"
        validate={required}
        component={renderTextField}
      />

      <Field
        name="phone"
        type="text"
        label="Your phone number"
        component={renderTextField}
      />

      <Field
        name="message"
        label="Your message *"
        validate={required}
        component={renderTextField}
      />
      <FlatButton type="submit" label="SUBMIT" style={styles.buttonStyle}/>
    </form>

  )
}

export default reduxForm({
  form: 'contactForm' // a unique identifier for this form
})(ContactForm)
