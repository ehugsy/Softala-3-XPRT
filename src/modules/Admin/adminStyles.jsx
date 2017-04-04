import theme from '../../utils/theme';

const styles = {
  headline: {
   fontSize: 24,
   paddingTop: 16,
   marginBottom: 12,
   fontWeight: 400,
  },
  tabStyle: {
    backgroundColor: 'rgba(68,68,68,1)',
  },
  contentContainerStyle: {
    backgroundColor: 'rgba(68,68,68,1)'
  },
  wrapper: {
    color: theme.palette.textColor,


  },

  landingWrapper:{
    minHeight: '100vh',
    paddingLeft:'4%',
    paddingRight:'4%',
    backgroundImage:"url('../img/xprt-background.png')",
      backgroundSize: '2500px',
      backgroundRepeat: 'no-repeat',
    '@media (max-width: 768px)': {
      marginTop: 10
    },
  },
  firstWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse'
    },
  },

  bigHeader: {
    color: theme.palette.primary1Color,
    fontWeight: 300,
    '@media (max-width: 768px)': {
          fontSize: 24,
    },
  },
  // bigText is used in dropdown menu
  bigText: {
    flex: 4,
    fontSize: '18px',
    fontWeight: '300',
    flexBasis: '200px',
    marginLeft: '3em',
    paddingLeft: '3em',
    '@media (max-width: 768px)': {
      margin: 0,
      padding: 0,
      textAlign: 'center'
    },
  },
  leftSpace: {
    flex: 3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  rightSpace: {
    flex:3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  leftText: {
    fontSize: '16px',
    fontWeight: '300',
    textAlign: 'right',
    flex:3,
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
      fontSize: '16px',
    },
  },
  rightText: {
    fontSize: '16px',
    fontWeight: '300',
    borderLeft: '1px solid rgba(204, 204, 204, .34)',
    borderBottom: 0,
    textAlign: 'left',
    flex:4,
    marginLeft: '3em',
    paddingLeft: '3em',
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
      margin: 0,
      padding: 0,
      borderLeft: 0,
      borderBottom: '1px solid rgba(204, 204, 204, .34)',
      display: 'flex',
      flexDirection: 'column-reverse',
      flexBasis: '0px',
      fontSize: '16px',
    },
  },
  buttonStyle: {
    border: '1px solid rgba(204, 204, 204, .34)',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  mobileShow: {
    '@media (min-width: 768px)':{
      display: 'none'
    }
  },
  contentCard: {
    width: '100%',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    padding: '30px',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  /*
  Titlestyle, subtitleStyle & avatarStyle are used to stylize
  contentcards on the right side of page
  */
  titleStyle: {
    fontSize: '16px',
    color: theme.palette.textColor,
    fontWeight: '300',
  },
  subtitleStyle: {
    fontSize: '16px',
    textDecorationLine: 'underline',
    color: theme.palette.textColor,
    marginTop: '7px',
    fontWeight: '300'
  },
  avatarStyle: {
    marginTop: '-5px',
  },
  //Yellow line for invitations that are not handled yet
    colorIndicatorYellow: {
      borderLeft: 'solid',
      borderMargin:'#585858',
      borderOffset:{height: 10},
      color: theme.palette.primary2Color
    },
    //Green line for accpted invitations
    colorIndicatorGreen: {
      borderLeft: 'solid',
      color: theme.palette.primary1Color
    },
    cardMargin: {
      marginBottom: 20
    }
};

module.exports = styles;
