import theme from '../../utils/theme';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'left',
    padding: 0 // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2
  },
  header: {
    textAlign: 'center',
    padding: 0,
    color: theme.palette.primary1Color,
  },
  button: {
    height: 68
  },
  card: {
    margin: 20, // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2,
    flex: 1,
    flexBasis: '450px',
    maxWidth: '650px'
  },
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    borderColor: theme.palette.primary2Color,
    color: theme.palette.primary2Color

  },
};

module.exports = styles;
