import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styles from './buttonStyles';

class DialogButtons extends Component {

    render() {
      return(
      <div>
        <FlatButton
          label='Cancel'
          onTouchTap={this.props.handleCancel}
          style={styles.button}
        />
        <FlatButton
          label='Back'
          onTouchTap={this.props.handlePrev}
          labelPosition='after'
          icon={<ArrowBack />}
          disabled={this.props.stepIndex === 0}
          style={{...styles.button, ...styles.iconButton}}
        />
        <FlatButton
          type='submit'
          label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
          icon={this.props.stepIndex === 2 ? '' : <ArrowForward />}
          labelPosition='before'
          primary={this.props.stepIndex === 2}
          onTouchTap={this.props.handleSubmit}
          style={{...styles.button, ...styles.iconButton}}
        />
      </div>
    )
  }
}

export default DialogButtons;
