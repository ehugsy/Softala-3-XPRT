import { Component } from 'react';
import TextField from 'material-ui/TextField';
import theme from '../../utils/theme'

const styles = {
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    color: theme.palette.primary2Color,
    borderColor: theme.palette.primary2Color,
  },
}

class MyTextField extends Component {

  constructor(props) {
     super(props);

     this.handleChange = this.handleChange.bind(this),
     this.state = {
       value: '',
     };
   }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { label, id, type } = this.props;

    return (<TextField
      floatingLabelText={ label }
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineFocusStyle={styles.underlineStyle}
      type={ type }
      id={id}
      value={this.state.value}
      onChange={this.handleChange}
      fullWidth={true} />
    );
  }
}
export default MyTextField;
