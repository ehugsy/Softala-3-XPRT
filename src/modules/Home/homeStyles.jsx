import theme from '../../utils/theme';

const styles = {
//color for default text
  wrapper: {
    color: theme.palette.textColor,
  },
  //Wraps teachers|experts -part together
  teacherExpertWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'no-wrap',
    '@media (max-width: 769px)': {
      flexDirection: 'column'
    },
  },
  //Wraps the lower part
  secondWrapper: {
    height: '750px',
    display: 'flex',
    '@media (max-width:769px)': {
      height: '100%',
    },
  },
  // wraps up the part were cellphone pics are located
  secondInnerWrapper: {
    background: '#cccccc',
    height: '700px',
    width: '100%',
    padding: '5%',
    '@media (max-width:769px)': {
      height: '100%',
    },
  },
  //wraps up the carousel
  thirdWrapper: {
    height: '350px',
    '@media (max-width: 769px)': {
      height: '100%'
    }
  },
  headerWrapper:{
    display:'flex'
  },
  //wrapping for whole page
  landingWrapper:{
    minHeight: '100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:'10%',
    paddingRight:'10%',
    paddingTop:'5%',
    backgroundImage: 'url("../../img/xprt-background.png")',
    backgroundSize: 'cover',
  },
  topLogo: {
    '@media (max-width: 769px)': {
      marginTop: '50px',
      marginBottom: '70px'
    },
  },
  //For Hundred & Futurice logos
  secondLogos:{
    display:'flex',
    alignSelf:'flex-end',
    marginTop: '5em',
    '@media (max-width: 769px)': {
      alignSelf: 'center',
      marginBottom: '3em'
    }
  },
  //For Teachers & Experts -logos
  smallHeader: {
    color: theme.palette.primary1Color,
  },
  //Flexes Divs
  empty:{
    flex: 1,
    flexShrink: 0,
    '@media (max-width: 769px)':{
      display:'none'
    },
  },
  //styling for text in the most top div
  bigText: {
    flex: 1,
    fontSize: '18px',
    fontWeight: '300',
    flexGrow: 1,
    flexBasis: 'auto',
    hyphens: 'auto',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottom: '1px solid rgba(204,204,204,0.34)',
    '@media (min-width: 769px)': {
      minWidth: '300px',
      maxWidth: '50%',
      textAlign: 'left',
      border: 'none'
    }
  },
  mobileFont: {
    '@media (max-width: 769px)':{
      fontSize: '16px'
    }
  },
  //For Teachers -div
  leftText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:5,
    flexBasis: '200px',
    hyphens: 'auto',
    height: '242px',
    '@media (max-width: 769px)':{
      textAlign: 'center',
    },
  },
  //for Experts -div
  rightText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'center',
    flex:4,
    flexBasis: '200px',
    hyphens: 'auto',
    height: '242px',
    marginTop: '2em',
    '@media (min-width: 769px)': {
      borderLeft: '1px solid #333333',
      marginLeft: '2em',
      paddingLeft: '2em',
      marginTop: 0,
      textAlign: 'left'
    },
  },
  //For Teachers & Experts -divs
  homeText: {
    minHeight: '130px',
    },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em',
    margin: 5,
    width: '235px',
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',


    '@media (max-width:769px)': {
      flexDirection: 'column',
    },
  },
  //For images in the Carousel
  mockImage: {
    width: '268.4px',
    height: '458.8px'
  },
  emptyImage: {
    flex: 1
  },
  //Next 3 attributes affect The cellphone mockup pictures
  leftImage: {
    flex: 2,
    marginTop: '-12%',
    textAlign: 'center',
    '@media (max-width: 769px)': {
      marginTop: '-5%',
      top: '-5%',
    },
  },
  centerImage: {
    flex: 2,
    marginTop: '-5%',
    textAlign: 'center',
    '@media (max-width: 769px)': {
      marginTop: '0',
    },
  },
  rightImage: {
    flex: 2,
    marginTop: '2%',
    textAlign: 'center',
    '@media (max-width: 769px)': {
      marginTop: '0',
    },
  },
  imageNumber: {
    color: theme.palette.primary2Color,
    margin: '0px',
    fontWeight: '300'
  },
  textColor: {
    color: theme.palette.primary3Color,
    fontSize: '16px',
    fontWeight: '300'
  },
  imageDescription: {
    '@media (max-width:769px)': {
      display: 'none'
    }
  },
  descriptionText: {
    fontSize: '20px',
    fontWeight: '300',
  },
  firstRow: {
    minWidth: 0,
    minHeight: 0,
    margin: '0 auto',
    width: '40%'
  },
  //For Pics in The Carousel
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  //For text in Carousel
  secondRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    '@media (max-width: 769px)': {
      width: '90%'
    }
  },
};

module.exports = styles;
