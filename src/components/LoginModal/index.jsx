import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MyTextField from '../MyTextField';
import theme from '../../utils/theme';
import rest from '../../services/rest';

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
    email: '',
    password: '',
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.props.doLogin({email: this.state.email, password: this.state.password});
  };

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    })
  };

  render() {

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
            <MyTextField label="Email"
                value={this.state.email}
                onChange={event => {
                  this.handleChange(event, 'email');
                }}
            />
            <MyTextField label="Password" type="password"
                value={this.state.password}
                onChange={event => {
                  this.handleChange(event, 'password');
                }}
            />
            <p style={{textAlign: 'left', fontSize: 13, color: theme.palette.primary2Color}}>Forgotten password?</p>
            <FlatButton
              label='Cancel'
              style={styles.buttonStyle}
              onTouchTap={this.handleClose}/>
            <FlatButton
              label='Login'
              style={styles.LoginButtonStyle}
              primary={true}
              onTouchTap={this.handleSubmit}
            />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default LoginModal;
