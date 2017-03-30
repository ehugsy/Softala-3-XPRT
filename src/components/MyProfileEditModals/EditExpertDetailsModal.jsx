import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import Radium from 'radium';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import styles from './editModalStyles';

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

const formdata = {
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects: 'Major Tom, Lalilulelo, Liquid, Snake',
  lectureDetails: 'Details about lecture',
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
export default class ExperdDetailsModal extends React.Component {
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
            <form onSubmit={this.props.handleSubmit}>
              <div>
                <Field
                  name='introduction'
                  validate={required}
                  component={renderTextField}
                  label='Short introduction'
                  type='text'
                  hintText={formdata.introduction}
                  floatingLabelFixed={true}/>

                <Field
                  name='subjects'
                  label='Subjects'
                  validate={required}
                  component={renderChipInput}
                  id='subjects'
                  dataSource={subjectList}
                  hintText={formdata.subjects}
                  floatingLabelFixed={true} />

                <Field
                  name='lectureDetails'
                  validate={required}
                  component={renderTextField}
                  label='Lecture details'
                  type='text'
                  hintText={formdata.lectureDetails}
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


          </Dialog>
        </div>
    )
  }
}

ExperdDetailsModal = reduxForm({
  form: 'expertDetailsEditForm',
  destroyOnUnmount: false,
})(ExperdDetailsModal)
