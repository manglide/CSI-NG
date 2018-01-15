import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Comments from 'material-ui-icons/People';
import TrendUp from 'material-ui-icons/TrendingUp';
import TrendDown from 'material-ui-icons/TrendingDown';
import GoodSentiment from 'material-ui-icons/SentimentVerySatisfied';
import BadSentiment from 'material-ui-icons/SentimentVeryDissatisfied';
import More from 'material-ui-icons/More';
import Locations from 'material-ui-icons/Streetview';
// import styles from './App.css';
import { withStyles } from 'material-ui/styles';
// import {blueGrey900, green600, brown500} from 'material-ui/colors';
import { Rating } from 'material-ui-rating';

const mega = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  cardheader: {
    'font-family': 'Open Sans sans-serif',
    'font-weight': 'bolder',
  }
});

class MainCards extends Component {
  render() {
    return (
      <div>
        <div>
        <Card>
          <CardHeader className={mega.cardheader}
            avatar="https://placeimg.com/80/80/animals"
            title={this.props.productname}
            subtitle={this.props.manufacturer}
          />
          <CardMedia
            overlay={
                        <div>
                          <Rating
                            value={this.props.rating}
                            max={5}
                            readOnly
                          />
                        </div>
                      }
            >
            <img src="https://placeimg.com/800/450/nature" alt="" />
          </CardMedia>
          <div className={styles.cardTitleParent}>
            <CardTitle className={styles.cardTitleChild}
              title={<div className={styles.amountprice}>{'N'+ this.props.price}</div>} subtitle={<div className={styles.price}>Price</div>}  />
            <div className={styles.cardTitleChildExtend}>
              <div className={styles.cardTitleInnerExtendedChildren}>
                  <a href="#" className="btn btn-success btn-small">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                  </a>
                  <div className={styles.textBelowRatings}>{this.props.likes}</div>
              </div>
              <div className={styles.cardTitleInnerExtendedChildren}>
                  <a href="#" className="btn btn-danger btn-small">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                  </a>
                  <div className={styles.textBelowRatings}>{this.props.dislikes}</div>
              </div>
              <div className={styles.cardTitleInnerExtendedChildren}>

                {
                  this.props.likes > this.props.dislikes ?
                  <span>
                    <TrendUp />
                  </span>
                  :
                  <span>
                    <TrendDown />
                  </span>
                }
                <div className={styles.textBelowRatingTrends}>Trend</div>
              </div>
              <div className={styles.cardTitleInnerExtendedChildren}>
                {
                  this.props.likes > this.props.dislikes ?
                  <span>
                    <GoodSentiment />
                  </span>
                  :
                  <span>
                    <BadSentiment />
                  </span>
                }
                  <div className={styles.textBelowRatingSentiment}>Sentiment</div>
              </div>
            </div>
          </div>
          <CardText>
            {this.props.description}
          </CardText>
          <CardActions>
            <Button raised fullWidth={true} label={this.props.usercomments + ' Comments'} labelPosition="after" icon={<Comments />} style={style} />
            <Button raised fullWidth={true} label="Coverage Areas" labelPosition="after" icon={<Locations />} secondary={true} style={style} />
            <Button raised fullWidth={true} labelPosition="after" icon={<More />} style={style} label="More" />
          </CardActions>
        </Card>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainCards);
