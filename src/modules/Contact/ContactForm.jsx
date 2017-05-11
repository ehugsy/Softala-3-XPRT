import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import styles from './contactStyles';


const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

  // TODO Validate max lengths etc. http://redux-form.com/6.6.3/examples/fieldLevelValidation/

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {touched && error &&
        <p style={styles.errorText}>{error}</p>
      }
      <input
        {...input}
        placeholder={label}
        type={type}
        style={touched && error ?
        {...styles.transparentInput,...styles.errorInput} :
        styles.transparentInput}
      />
  </div>
)

const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {touched && error &&
        <p style={styles.errorText}>{error}</p>
      }
      <textarea
        {...input}
        placeholder={label}
        type={type}
        style={touched && error ?
        {...styles.transparentInput,...styles.errorInput} :
        styles.transparentInput}
      />
  </div>
)

const ContactForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (

    <form onSubmit={handleSubmit} style={styles.contactForm}>

      <Field
        name="name"
        type="text"
        label="Your name"
        component={renderTextField}
      />

      <Field
        name="email"
        type="text"
        label="Your email address"
        validate={email}
        component={renderTextField}
      />

      <Field
        name="phone"
        type="text"
        label="Your phone number"
        component={renderTextField}
      />

      <Field
        name="text"
        label="Your message *"
        validate={required}
        component={renderTextArea}
      />
      <FlatButton type="submit" label="SUBMIT" style={styles.buttonStyle}/>
    </form>

  )
}

export default reduxForm({
  form: 'contactForm' // a unique identifier for this form
})(ContactForm)
