import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import MyTextField from '../MyTextField';
import theme from '../../utils/theme';
import rest from '../../services/rest';
import styles from './loginModalStyles';
import { push } from 'react-router-redux'

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
    this.setState({
      open: false,
      email: '',
      password: '',
    });
    this.props.clearLogin()
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.doLogin({email: this.state.email, password: this.state.password}, (err) => {
      if (!err){
        this.props.changeView('/profile');
      }
    });
  };

  handleForgottenPassword = (event) => {
    event.preventDefault();
    this.props.changeView('/contact');
  }

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
          <form
            onSubmit={this.handleSubmit}>
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
            <FlatButton
              labelStyle={{fontSize: 13, color: theme.palette.primary2Color}}
              label='Forgotten password?'
              hoverColor='#444444'
              onTouchTap={this.handleForgottenPassword}
              style={{width: '100%'}}
            />
            {errMsg}
            <FlatButton
              type='button'
              label='Cancel'
              style={styles.buttonStyle}
              onTouchTap={this.handleClose}/>
            <FlatButton
              type='submit'
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
  (dispatch) => ({
    changeView(view) {
      dispatch(push(view.toLowerCase()));
    },
    clearLogin() {
      dispatch(rest.actions.auth.reset());
    }
  }),
)(LoginModal);
