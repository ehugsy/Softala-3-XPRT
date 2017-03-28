import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import Radium from 'radium';
import FlatButton from 'material-ui/FlatButton';
import theme from '../../utils/theme';
import Dialog from 'material-ui/Dialog';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    color: theme.palette.primary2Color,
    borderColor: theme.palette.primary2Color,
  },
  button: {
    border: '1px solid #555555',
    padding: 15,
    margin: 5,
    borderRadius: 20,
    lineHeight: '0.4em',
    marginTop: '1em',
    float: 'left',
    color: theme.palette.textColor,
  },
  link: {
    ':hover': {
      cursor:'pointer'
    }
  },
  noborder: {
    border: 0,
  },
  //Styling for editing Pen on left column
  editPen: {
    float: 'right',
    width: '24px',
    height: '24px'
  },
}

const cityList = [
  'Helsinki',
  'Espoo',
  'Vantaa',
];

const formdata = {
  name: 'Esko Esimerkki',
  phone: '+358 45 23423434 ',
  email: 'esko.esimerkki@example.com',
  supportedLocations: 'Helsinki, Espoo',
}
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

const renderChipInput = ({ input, label, hintText, dataSource, meta: { touched, error }, ...custom }) => (
  <ChipInput

    {...input}
    value = { input.value || []}
    onRequestAdd={(addedChip) => {
      let values = input.value || [];
      values = values.slice();
      values.push(addedChip);
      input.onChange(values);
    }}
    onRequestDelete={(deletedChip) => {
      let values = input.value || [];
      values = values.filter(v => v !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}

    onChange={(chips) => handleChange(chips)} // Chips inside textfield
    filter={AutoComplete.fuzzyFilter} // Autocomplete
    maxSearchResults={5} // Autocomplete (number of suggestions shown)
    hintText={hintText}
    floatingLabelText={label}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    underlineFocusStyle={styles.underlineStyle}
    floatingLabelFixed={true}
    className='formcontainer'
    fullWidth={true}
    dataSource={dataSource}
    {...custom}
    />
)

@Radium
export default class BasicInfoModal extends React.Component {
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
      return (
        <div>
          <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}><img src={'../../img/edit.png'} style={styles.editPen}/></a>
          <Dialog
            modal={false}
            autoScrollBodyContent={true}
            open={this.state.open}
            onRequestClose={this.handleClose}
            titleStyle={styles.noborder}
            actionsContainerStyle={styles.noborder}
          >
            <div style={styles.contentCard}>
              <form onSubmit={this.props.handleSubmit}>
                <div>
                  <Field
                    name='name'
                    validate={required}
                    component={renderTextField}
                    label='Name'
                    type='text'
                    hintText={formdata.name}
                    floatingLabelFixed={true}/>

                  <Field
                    name='phone'
                    validate={required}
                    component={renderTextField}
                    label='Phone' type='text'
                    hintText={formdata.phone}
                    floatingLabelFixed={true} />

                  <Field
                    name='email'
                    validate={[required, email]}
                    component={renderTextField}
                    label='Email' type='text'
                    hintText={formdata.email}
                    floatingLabelFixed={true} />

                  <Field
                    name='supportedLocations'
                    label='Supported locations'
                    component={renderChipInput}
                    id='supportedLocations'
                    dataSource={cityList}
                    hintText={formdata.supportedLocations}
                    floatingLabelFixed={true} />

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
            </div>

          </Dialog>
        </div>
    )
  }
}

BasicInfoModal = reduxForm({
  form: 'myProfileEditForm',
  destroyOnUnmount: false,
})(BasicInfoModal)
