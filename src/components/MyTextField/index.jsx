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
    const { label, type } = this.props;

    return (<TextField
      style={{margin: 0}}
      floatingLabelText={ label }
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineFocusStyle={styles.underlineStyle}
      type={ type }
      fullWidth={true} />);
  }
}
export default MyTextField;
