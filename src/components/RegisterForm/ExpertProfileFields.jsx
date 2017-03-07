import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import MyTextField from '../MyTextField';
import ChipInput from 'material-ui-chip-input';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
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

const cityList = [
  'Helsinki',
  'Espoo',
  'Vantaa',
];

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MyTextField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

/*const renderChipInput = props => (
  <ChipInput
    onChange={(chips) => handleChange(chips)} // Chips inside textfield
    filter={AutoComplete.fuzzyFilter} // Autocomplete
    dataSource={props.dataSource} // Autocomplete (source of suggestions)
    maxSearchResults={5} // Autocomplete (number of suggestions shown)
    hintText={props.hintText}
    floatingLabelText={props.label}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    underlineFocusStyle={styles.underlineStyle}
    floatingLabelFixed={true}
    className='formcontainer'
    fullWidth={true}/>
)*/

const renderChipInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <ChipInput
    onChange={(chips) => handleChange(chips)} // Chips inside textfield
    filter={AutoComplete.fuzzyFilter} // Autocomplete
    maxSearchResults={5} // Autocomplete (number of suggestions shown)
    floatingLabelText={label}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    underlineFocusStyle={styles.underlineStyle}
    floatingLabelFixed={true}
    className='formcontainer'
    fullWidth={true}
    {...input}
    {...custom}/>
)


class ExpertProfileFields extends Component {

    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <Field
            name='shortIntroduction'
            label='Short introduction'
            component={renderTextField}
            type='text'
            hintText='Tell briefly about you, your expertise and experience'
            floatingLabelFixed={true}/>

          <Field
            name='subjects'
            label='Subjects'
            component={renderChipInput}
            id='subjects'
            dataSource={subjectList}
            hintText='List of subjects you could teach about'/>

          <Field
            name='lectureDetails'
            label='Lecture details (if possible)'
            component={renderTextField}
            hintText='Preferred topic in mind? Presentation or interactive? Most suitable for which ages? Any special equipment needed?'
            floatingLabelFixed={true}
            multiLine={true}
            rows={2}
            rowsMax={4}/>

          <Field
            name='supportedLocations'
            label='Supported locations'
            component={renderChipInput}
            id='supportedLocations'
            dataSource={cityList}
            hintText='List the cities you could teach in'/>

          <DialogButtons stepIndex={this.props.stepIndex} handlePrev={this.props.handlePrev} handleClose={this.props.handleClose} />
        </form>
    )
  }
}

ExpertProfileFields = reduxForm({
  form: 'registerForm',
  destroyOnUnmount: false,
})(ExpertProfileFields)

export default ExpertProfileFields;
