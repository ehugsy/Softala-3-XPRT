import theme from '../../utils/theme';

const styles = {
  footerWrapper: {
    height: '100px',
    background: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

  },
  footerLeft: {
    marginLeft:'5%',
    flex: 1,
    '@media (max-width: 769px)': {
      margin: 0
    }
  },
  footerRight: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'right',
    marginRight: '5%',
    fontSize: '16px',
    color: theme.palette.primary3Color,
    '@media (max-width: 769px)': {
      textAlign: 'center',
      margin: 0
    }
  },
  footerText: {
    fontSize: '16px',
    color: theme.palette.primary3Color
  },
};

module.exports = styles;
