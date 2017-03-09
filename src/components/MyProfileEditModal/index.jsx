import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import theme from '../../utils/theme';

const styles = {
  link: {
    ':hover': {
      cursor:'pointer'
    }
  },
  noborder: {
    border: 0,
  },
  //Styling for editing Pen on left column
  editPen: {
    float: 'right',
    width: '24px',
    height: '24px'
  },

  transparentInput: {
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #555555',
    marginBottom: 10,
    color: theme.palette.textColor,
    width: '100%',
    maxWidth: 700,
    padding: '10px 0px 10px 10px',
    borderRadius: 5,
    fontFamily: ('Catamaran' : 'sans-serif'),
    fontSize: '16px',
    fontWeight: '300',
    '@media (max-width: 768px)': {
      maxWidth: 768,
      width: '100%',
      borderRadius: 0
    },
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  contactForm: {
    paddingRight: 10
  },
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '16px',
    fontWeight: '300'
  },

}

@Radium
export default class PrivacyModal extends React.Component {
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
        label="Save"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}><img src={'../../img/edit.png'} style={styles.editPen}/></a>
        <Dialog
          actions={actions}
          modal={false}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.noborder}
          actionsContainerStyle={styles.noborder}
        >
          <div style={styles.contentCard}>
            <form onSubmit={this.handleSubmit}style={styles.contactForm}>
              <p style={styles.mainDivTextTitle}>NAME:</p>
              <input style={styles.transparentInput} type="text" placeholder="Esko Esimerkki" />
              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <input style={styles.transparentInput} type="text" placeholder="+358 45 23423434"/>
              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <input style={styles.transparentInput} type="text" placeholder="esko.esimerkki@example.com"/>
              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <input style={styles.transparentInput} type="text" placeholder="Helsinki, Espoo"/>
              <br />
            </form>
          </div>

        </Dialog>
      </div>
    );
  }
}
