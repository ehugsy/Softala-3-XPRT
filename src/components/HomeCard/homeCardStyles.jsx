import theme from '../../utils/theme';

const styles = {
  headerBackground: {
    height: 240,
    background: theme.palette.primary1Color,
    background: `linear-gradient(${theme.palette.primary1Color}, ${theme.palette.primary2Color})`
  },
  card: {
    margin: theme.spacing.desktopGutter,
    flex: 1,
    flexBasis: '450px'
  },
}

module.exports = styles;
