import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import Radium from 'radium';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import styles from './editModalStyles';

const cityList = [
  'Helsinki',
  'Espoo',
  'Vantaa',
];

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
class BasicInfoModal extends Component {

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
                    floatingLabelFixed={true}/>

                  <Field
                    name='phone'
                    validate={required}
                    component={renderTextField}
                    label='Phone' type='text'
                    floatingLabelFixed={true} />

                  <Field
                    name='email'
                    validate={[required, email]}
                    component={renderTextField}
                    label='Email' type='text'
                    floatingLabelFixed={true} />

                  <Field
                    name='area'
                    label='Supported locations'
                    component={renderChipInput}
                    id='supportedLocations'
                    dataSource={cityList}
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
  enableReinitialize: true,
})(BasicInfoModal)

BasicInfoModal = connect(
  (state, ownProps) => ({
    initialValues: ownProps.expert,
  }),
)(BasicInfoModal)

export default BasicInfoModal;
