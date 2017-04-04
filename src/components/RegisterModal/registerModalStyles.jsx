import theme from '../../utils/theme';

const styles = {
  fieldsStyle: {
    width: '100%',
    minHeight: 450,
  },
  contentStyle: {
    marginLeft: 60,
    width: 708,
  },
  contentStyleResponsive: {
    width: '98%',
  },
  button: {
    border: '1px solid #555555',
    padding: 15,
    margin: 5,
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  dialogFixTop: {
    zIndex: '1302',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'baseline',
  },
  stepLabel: {
    color: theme.palette.primary2Color,
    fontSize: 17,
  },
};

module.exports = styles;
