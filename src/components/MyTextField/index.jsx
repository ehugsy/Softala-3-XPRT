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

  render() {
    const { label, id, type, ...rest } = this.props;

    return (<TextField
      floatingLabelText={ label }
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineFocusStyle={styles.underlineStyle}
      type={ type }
      id={id}
      fullWidth={true}
      {...rest} />
    );
  }
}
export default MyTextField;
