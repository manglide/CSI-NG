import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import green from 'material-ui/colors/green';
import StarRatingComponent from 'react-star-rating-component';
import externstyle from './App.css';
import Button from 'material-ui/Button';
const font = "'Open Sans Condensed', sans-serif";
const styles = theme => ({
  card: {
    maxWidth: 320,
    fontFamily: font,
    margin: '0 auto'
    // minheight: '30vw'
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  cardRating: {

  },
});

class CompetitorProductCardNoReview extends React.Component {

  constructor() {
    super();

    this.state = {
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
      rating_empty_initial: 0,
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const style = {
      margin: 1,
    };
    return (
      <div className={externstyle.competitorProductCard}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {this.props.avatar}
              </Avatar>
            }
            title={this.props.productname}
          />
          <CardMedia>
            {
              (this.props.image_1 === '' || this.props.image_1 === undefined) ?
              <img src="http://localhost/csi/images/default-product.png" alt={this.props.productname} title={this.props.productname} />
              :
              <img src={`${this.props.image_1}`} alt={this.props.productname} title={this.props.productname} />
            }
            <div style={{fontSize: 24, padding: 12}}>
              {
                <StarRatingComponent
                  name={this.props.productname + ' Rating'}
                  // starColor="#9C27B0"
                  starColor="#F60437"
                  emptyStarColor="#000"
                  editing={false}
                  starCount={5}
                  value={0}
                  renderStarIcon={(index, value) => {
                    return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                  }}
                  renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                />
              }
            </div>
          </CardMedia>
          <CardContent className={externstyle.cardContent}>
            <Typography component="div">
              {this.props.category}
            </Typography>
            <Typography component="div" align="center" color="accent">
              Product is yet to be reviewed.
            </Typography>
            <Typography component="div" className={externstyle.afterRatingDiv}>
              <hr />
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

CompetitorProductCardNoReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompetitorProductCardNoReview);
