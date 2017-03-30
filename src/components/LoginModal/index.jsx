import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MyTextField from '../MyTextField';

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
