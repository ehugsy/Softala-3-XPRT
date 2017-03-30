import { Component, PropTypes } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
} from 'material-ui/Card';
import styles from './homeCardStyles';

class HomeCard extends Component {
  render() {
    return(
      <Card style={styles.card}>
        <CardMedia
          overlay={
            <CardTitle
              title={ this.props.title }
              subtitle={ this.props.subtitle } />
          }
        >
          <div style={styles.headerBackground} />
        </CardMedia>
        <CardText>
          { this.props.children }
        </CardText>
      </Card>
    );
  }
};

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HomeCard;
