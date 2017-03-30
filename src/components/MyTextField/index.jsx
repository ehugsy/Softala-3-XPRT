import { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './myTextFieldStyles';

class MyTextField extends Component {

  render() {
    const { label, id, type, ...rest } = this.props;

    return (<TextField
      floatingLabelText={ label }
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineFocusStyle={styles.underlineStyle}
      errorStyle={styles.errorStyle}
      type={ type }
      id={id}
      fullWidth={true}
      {...rest} />
    );
  }
}
export default MyTextField;
