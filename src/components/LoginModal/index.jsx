import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import MyTextField from '../MyTextField';
import theme from '../../utils/theme';
import rest from '../../services/rest';
import styles from './loginModalStyles';


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
    console.log(this.props.auth)
    if(this.props.auth.data.token) {this.handleClose()}
  };

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    })
  };

  render() {
    const { auth } = this.props;
    const errMsg = this.props.auth.error && this.props.auth.error.message;

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
          <form>
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
            {errMsg}
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
          </form>
        </Dialog>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  (dispatch) => ({}),
)(LoginModal);
