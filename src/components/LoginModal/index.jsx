import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';


class LoginModal extends Component {

  render() {
    return(
      <Dialog
        title={this.props.title}
        modal={this.props.modal}
        open={this.props.open}
        actions={this.props.actions}>
        <p>Jeejee</p>
      </Dialog>
    )
  }
}

LoginModal.propTypes = {
  title: PropTypes.string,
  modal: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  actions: PropTypes.array,
};

export default LoginModal;
