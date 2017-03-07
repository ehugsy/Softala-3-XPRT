import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


const styles = {
  button: {
    border: '1px solid #555555',
    padding: 15,
    margin: 5,
    borderRadius: 20,
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  iconButton: {
    padding: '6px',
  },
}

class DialogButtons extends Component {

    render() {
      return(
      <div>
        <FlatButton
          label='Cancel'
          onTouchTap={this.props.handleClose}
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
          onTouchTap={this.props.stepIndex === 2 ? this.props.handleClose : this.props.handleNext}
          style={{...styles.button, ...styles.iconButton}}
        />
      </div>
    )
  }
}

DialogButtons.PropTypes = {
  stepIndex: PropTypes.number.isRequired
};

export default DialogButtons;
