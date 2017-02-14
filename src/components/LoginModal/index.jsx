import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import theme from '../../utils/theme';


const styles = {
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  }
}

class LoginModal extends Component {

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

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
  ];

    return(

      <div>
        <FlatButton label="LOGIN" style={{...styles.buttonStyle, ...styles.buttonGold}} onTouchTap={this.handleOpen}/>

        <Dialog
          title='Login'
          modal={true}
          open={this.state.open}
          actions={this.actions}>
          <div><a href="/login">LOGIN</a> modaliksi -> <a href="/myaccount">My Account</a></div>
        </Dialog>
      </div>
    )
  }
}

export default LoginModal;
