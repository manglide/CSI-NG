import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import green from 'material-ui/colors/green';
import StarRatingComponent from 'react-star-rating-component';
import TrendUp from 'material-ui-icons/TrendingUp';
import TrendDown from 'material-ui-icons/TrendingDown';
import externstyle from './App.css';
// import Comments from 'material-ui-icons/People';
import Button from 'material-ui/Button';
const font = "'Open Sans Condensed', sans-serif";
import { Link } from 'react-router-dom';
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

class CompetitorProductCard extends React.Component {

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
            subtitle={this.props.manufacturer}
            subheader={this.props.manufacturer}
          />
          <CardMedia>
            <img src="https://placeimg.com/281/74/nature" alt="" />
            <div style={{fontSize: 24, padding: 12}}>
              {
                <StarRatingComponent
                  name={this.props.productname + ' Rating'}
                  // starColor="#9C27B0"
                  starColor="#F60437"
                  emptyStarColor="#000"
                  editing={false}
                  starCount={5}
                  value={this.props.rating}
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
              {this.props.description}
            </Typography><hr />
            <Typography component="div" className={externstyle.afterRatingDiv}>
              <Typography component="div" className={externstyle.afterRatingDivPriceCom}>
                <div component="h2" className={externstyle.mainprice}>
                  {'N' + this.props.price}
                </div>
              </Typography>
              <Typography component="div" className={externstyle.ThumbsUp}>
                <Typography component="div" className={externstyle.ThumbsUpChildren}>
                    <a href="#" className="btn btn-success btn-small">
                      <span className="glyphicon glyphicon-thumbs-up"></span>
                    </a>
                    <Typography component="div" className={externstyle.textBelowRatings}>{this.props.likes}</Typography>
                </Typography>
                <Typography component="div" className={externstyle.ThumbsUpChildren}>
                    <a href="#" className="btn btn-danger btn-small">
                      <span className="glyphicon glyphicon-thumbs-down"></span>
                    </a>
                    <Typography component="div" className={externstyle.textBelowRatings}>{this.props.dislikes}</Typography>
                </Typography>
              </Typography>
              <Typography component="div" className={externstyle.cardSentiment}>
                <div className={externstyle.cardTitleInnerExtendedChildren}>
                  {
                    this.props.likes > this.props.dislikes ?
                    <div>
                      <span>
                        <TrendUp />
                      </span>
                      <div className={externstyle.textBelowRatingTrends}>
                        Up
                      </div>
                    </div>
                    :
                    <div>
                      <span>
                        <TrendDown />
                      </span>
                      <div className={externstyle.textBelowRatingTrends}>
                        Down
                      </div>
                    </div>
                  }
                </div>
              </Typography>
              <hr />
              <Typography>
                  <div>
                    <a href={`/product/${this.props.productname}`}>
                      <Button style={{width: '100%', color: '#fff'}} className={classes.button} raised color="primary">
                        View
                      </Button>
                    </a>
                  </div>
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

CompetitorProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompetitorProductCard);
