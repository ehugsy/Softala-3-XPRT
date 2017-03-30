import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MyTextField from '../MyTextField';
import theme from '../../utils/theme';

const styles = {
  buttonStyle: {
    border: '1px solid #555555',
    margin: 5,
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'

  },
  LoginButtonStyle: {
    border: '1px solid #555555',
    margin: 5,
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  dialog: {
    width: "100%",
    maxWidth: "350",
    textAlign: 'center'
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
          title='LOGIN'
          titleStyle={{color: theme.palette.primary2Color, fontSize: 17}}
          modal={false}
          open={this.state.open}
          contentStyle={styles.dialog}
          onRequestClose={this.handleClose}>
          <div>
            <MyTextField label="Username" />
            <MyTextField label="Password" type="password"/>
            <p style={{textAlign: 'left', fontSize: 13, color: theme.palette.primary2Color}}>Forgotten password?</p>
            <FlatButton
              label='Cancel'
              style={styles.buttonStyle}
              onTouchTap={this.handleClose}/>
            <FlatButton
              label='Login'
              style={styles.LoginButtonStyle}
              primary={true}
              onTouchTap={this.handleClose}
              href="/profile"
            />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default LoginModal;
