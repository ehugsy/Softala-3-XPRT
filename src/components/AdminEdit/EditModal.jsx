import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import MyTextField from '../MyTextField';
import Radium from 'radium';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import styles from './editModalStyles';
import OccupationFields from '../RegisterForm/OccupationFields';

const cityList = [
  'Helsinki',
  'Espoo',
  'Vantaa',
];

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
  name: 'Esko Esimerkki',
  phone: '+358 45 23423434 ',
  email: 'esko.esimerkki@example.com',
  supportedLocations: 'Helsinki, Espoo',
  companyName: 'Sportmrt',
  title: 'CEO',
  officeAddress: '',
  introduction: 'Short introduction about expert. I can do this and that and tell cool jokes about Scrum etc.',
  subjects: 'Major Tom, Lalilulelo, Liquid, Snake',
  lectureDetails: 'Details about lecture'
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
const renderCheckbox = ({ input, label, style }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
    style={style}
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
class AdminEditModal extends Component {
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
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='phone'
                    validate={required}
                    component={renderTextField}
                    label='Phone' type='text'
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='email'
                    validate={[required, email]}
                    component={renderTextField}
                    label='Email' type='text'
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='area'
                    label='Supported locations'
                    component={renderChipInput}
                    id='supportedLocations'
                    dataSource={cityList}
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='company'
                    label='Company name'
                    component={renderTextField}
                    id='companyName'
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='title'
                    label='Title'
                    component={renderTextField}
                    id='title'
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='officeVisit'
                    id='officeVisitPossible'
                    component={renderCheckbox}
                    label='Office visit possible'
                    style={{marginTop:20}}
                  />

                  <p>Check this box if you agree that teachers can come to your office with
                      a group of students</p>

                  {this.props.officeVisit &&
                  <Field
                    name='address'
                    label='Office address'
                    component={renderTextField}
                    id='officeAddress'
                    floatingLabelFixed={true}
                  />}

                  <Field
                    name='description'
                    validate={required}
                    component={renderTextField}
                    label='Short introduction'
                    type='text'
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='subjects'
                    label='Subjects'
                    validate={required}
                    component={renderChipInput}
                    id='subjects'
                    dataSource={subjectList}
                    floatingLabelFixed={true}
                  />

                  <Field
                    name='details'
                    validate={required}
                    component={renderTextField}
                    label='Lecture details'
                    type='text'
                    floatingLabelFixed={true}
                  />
                </div>
                <FlatButton
                  label="Save"
                  type="submit"
                  primary={true}
                  style={styles.button}
                />
                <FlatButton
                  label="Cancel"
                  type="button"
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

AdminEditModal = reduxForm({
  form: 'myProfileEditForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AdminEditModal)

AdminEditModal = connect(
  (state, ownProps) => ({
    initialValues: ownProps.user,
  }),
)(AdminEditModal)

const selector = formValueSelector('myProfileEditForm')
AdminEditModal = connect(
  state => {
    const officeVisit = selector(state, 'officeVisit')
    return {
      officeVisit,
    }
  }
)(AdminEditModal)


export default AdminEditModal;
