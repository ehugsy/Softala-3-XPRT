import theme from '../../utils/theme';

const styles = {
/*
These first element change the outlook
of the page overall
*/
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '30px',
    height: '360px',
    color: theme.palette.textColor,
    backgroundImage:"url('../img/xprt-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'left',
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  secondWrapper: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.textColor,
    background:"#262626",
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    },
    mobileHide: {
      '@media (max-width: 768px)':{
        display: 'none'
      }
    },
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  /*Adds a little space between the end of the page and the last card */
  emptyFooter: {
    paddingBottom:'1px',
    background:"#262626",
  },
  //Green titles for the page
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '16px',
    fontWeight: '300',
  },
  mainDivTextTitleSchool: {
    color: theme.palette.primary1Color,
    fontSize: '16px',
    fontWeight: '300',
    marginTop: "-15px",
    marginBottom: "-5px",
  },
  mainDivTextTitleLecture: {
    color: theme.palette.primary1Color,
    paddingTop: '15px',
    fontSize: '16px',
    fontWeight: '300',
    marginBottom: "-5px",
  },
  mainDivText: {
    color: theme.palette.textColor,
    fontSize: '16px',
    fontWeight: '300',
    marginTop: '-15px'
  },
/*
Next elements change the outlook of the left column.
*/
  leftDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: '-200px',
    paddingLeft: '25px',
    marginRight: 100,
    '@media (max-width: 768px)': {
      marginTop: 0,
      marginRight: 85
    },
  },
  contentCardLeft: {
    width: '100%',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    padding: '30px',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  //My profile -title on the left
  mainDivTitle: {
    fontSize: '18px',
  },
  //Style for experts own subjects on left column
  chip: {
    margin: 4,
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #eab94e',
    padding: '1px',
    borderRadius: '20px',
    lineHeight: '0.4em'
  },
  //This wraps up subjects together next to each other
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
/*
Next elements change the outlook
of the right column.
*/
contentCardRight: {
  width: '100%',
  background: 'rgba(68,68,68,1)',
  marginBottom: '1em',
  padding: '20px',
  boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
},
rightDivTitle: {
  fontSize: '18px',
  marginBottom: '12px',
},
rightDivTitleAccept:{
  color: theme.palette.primary1Color,
  fontSize: '18px',
},
rightDivTitleDecline:{
  opacity: '0.34',
  fontSize: '18px',
},
//White headings
  mainDivTextBold: {
    color: theme.palette.textColor,
    fontSize: '18px',
    fontWeight: '450'
  },
  avatarStyle: {
    marginTop: '-10px',
  },
  //for decline/accept buttons
  buttonStyle: {
    paddingTop: '25px',
    paddingBottom: '27px',
    paddingLeft: '20px',
    paddingRight: '15px',
    borderRadius: '40px',
    lineHeight: '0.4em',
    marginTop: '1em',
    fontSize: '18px',
  },
  //color and border for accept-button
  buttonGold: {
    border: '1px solid #CCCCCC',
    color: theme.palette.primary2Color
  },
  ButtonAlignRight: {
    textAlign: 'right'
  },
//Yellow line for invitations that are not handled yet
  colorIndicatorYellow: {
    borderTop: 'solid',
    borderMargin:'#585858',
    borderOffset:{height: 10},
    color: theme.palette.primary2Color
  },
  //Green line for accpted invitations
  colorIndicatorGreen: {
    borderTop: 'solid',
    color: theme.palette.primary1Color
  },
  rightDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: '-195px',
    marginRight: 25,
    '@media (max-width: 768px)': {
      marginTop: 0,
      marginLeft: 25
    },
  },
  /*
Titlestyle & subtitleStyle are used to stylize
contentcards on the right side of page
*/
  titleStyle: {
    fontSize: '18px',
    color: theme.palette.textColor,
    fontWeight: '450',
  },
  subtitleStyle: {
    fontSize: '18px',
    textDecorationLine: 'underline',
    color: theme.palette.textColor,
    marginTop: '7px',
    fontWeight: '450'
  },
};

module.exports = styles;
