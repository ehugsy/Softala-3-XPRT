import theme from '../../utils/theme';

const styles = {
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    color: theme.palette.primary2Color,
    borderColor: theme.palette.primary2Color,
  },
  link: {
    ':hover': {
      cursor:'pointer'
    }
  },
  button: {
    border: '1px solid #555555',
    padding: 15,
    margin: 5,
    borderRadius: 20,
    lineHeight: '0.4em',
    marginTop: '1em',
    float: 'left',
    color: theme.palette.textColor,
  },
  noborder: {
    border: 0,
  },
  editProfilePicture: {
    borderRadius: '50%',
    width: '200px',
    height: '200px'
  },
  editPictureWindow: {
    height: '300px',
    textAlign: 'center',
  },


  //Styling for editing Pen on left column
  editPen: {
    float: 'right',
    width: '24px',
    height: '24px'
  },
  editPenLeft: {
    float: 'left',
    marginLeft: '150px',
    marginTop: '-32px',
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

module.exports = styles;
