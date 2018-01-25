import React from 'react';
import externstyle from './App.css';
import { withStyles } from 'material-ui/styles';
import StarRatingComponent from 'react-star-rating-component';
import TrendUp from 'material-ui-icons/TrendingUp';
import TrendDown from 'material-ui-icons/TrendingDown';
import GoodSentiment from 'material-ui-icons/SentimentVerySatisfied';
import BadSentiment from 'material-ui-icons/SentimentVeryDissatisfied';
import Comments from './Comments';
import IconButton from 'material-ui/IconButton';
import ShareIcon from 'material-ui-icons/Share';
import Divider from 'material-ui/Divider';
import AreaAcceptanceMap from './AreaAcceptanceMap';
import AreaRejectionMap from './AreaRejectionMap';
import Competitor from './Competitor';
import CompetitorTwo from './CompetitorTwo';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    width: '100%'
  },
  paper: {
    width: '80%',
    padding: 16,
    overflow: 'hidden',
    margin: 'auto 0',
    marginLeft: '10'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  largeIcon: {
    width: 54,
    height: 54,
  },
});

const ProductDisplay = (props) => {
  return (
    <div className={externstyle.productWrapper}>
      <div className={externstyle.adsenseBanner}>Adsense Banner Here</div>
      <div className={externstyle.aboutProduct}>
          <div className={externstyle.product}>
              <div className={externstyle.productDisplay}>
                <div className={externstyle.productInner} itemscope itemtype="http://schema.org/Product">
                  <div className={externstyle.goback}>
                    <a href="/" title="Go Back">
                      <button type="button" className="btn btn-success navbar-btn">
                          <span className="glyphicon glyphicon-chevron-left"></span>
                      </button>
                    </a>
                  </div>
                  <div>
                    <span className={externstyle.productpageTitle} itemprop="name">
                      {props.productname}
                    </span>
                  </div>
                  <div className={externstyle.productpagebTagCategory} itemprop="category" itemscope itemtype="http://schema.org/manufacturer">
                        {props.category.toUpperCase()}
                  </div>
                  <div className={externstyle.productpagebTag} itemscope itemtype="http://schema.org/manufacturer">
                    BY
                  </div>
                   <div className={externstyle.productpagebTag} itemprop="manufacturer" itemscope itemtype="http://schema.org/manufacturer">
                      {props.manufacturer.toUpperCase()}
                   </div>
                   <div className={externstyle.productImageProductPageWrapper}>
                     <img className={externstyle.productImage} height="224"
                       itemprop="image"
                       // src="https://placeimg.com/750/224/nature"
                       src={`${props.image_1}`}
                       alt={props.productname}
                       title={props.productname}
                     />
                   </div>
                  <div className={externstyle.middleRowStarAndIcons}>
                    <div className={externstyle.mainRatingOnProductPage}>
                      {
                        <StarRatingComponent
                          name={props.productname + ' Rating'}
                          // starColor="#9C27B0"
                          starColor="#F60437"
                          emptyStarColor="#000"
                          editing={false}
                          starCount={5}
                          value={props.rating}
                          renderStarIcon={(index, value) => {
                            return <span className={index <= value ? 'fa fa-star fa-2x' : 'fa fa-star-o fa-2x'} />;
                          }}
                          renderStarIconHalf={() => <span className="fa fa-star-half-full fa-2x" />}
                        />
                      }
                    </div>
                    <div className={externstyle.otherIconsOnProductPage}>
                      <div className={externstyle.cardTitleChildExtendProductPage}>
                        <div className={externstyle.cardTitleInnerExtendedChildrenProductPage}>
                            <a href="#" className="btn btn-success btn-small">
                              <span className="glyphicon glyphicon-thumbs-up fa-2x"></span>
                            </a>
                            <div className={externstyle.textBelowRatingsProductPage}>{props.likes}</div>
                        </div>
                        <div className={externstyle.cardTitleInnerExtendedChildrenProductPage}>
                            <a href="#" className="btn btn-danger btn-small">
                              <span className="glyphicon glyphicon-thumbs-down fa-2x"></span>
                            </a>
                            <div className={externstyle.textBelowRatingsProductPage}>{props.dislikes}</div>
                        </div>
                        <div className={externstyle.cardTitleInnerExtendedChildrenProductPage}>

                          {
                            props.likes > props.dislikes ?
                            <span>
                              <TrendUp className={externstyle.svg_icons} />
                            </span>
                            :
                            <span>
                              <TrendDown className={externstyle.svg_icons} />
                            </span>
                          }
                          <div className={externstyle.textBelowRatingTrendsProductPage}>Trend</div>
                        </div>
                        <div className={externstyle.cardTitleInnerExtendedChildrenProductPage}>
                          {
                            props.likes > props.dislikes ?
                            <span>
                              <GoodSentiment className={externstyle.svg_icons} />
                            </span>
                            :
                            <span>
                              <BadSentiment className={externstyle.svg_icons} />
                            </span>
                          }
                            <div className={externstyle.textBelowRatingSentimentProductPage}>Sentiment</div>
                        </div>
                        <div className={externstyle.cardTitleInnerExtendedChildrenProductPage}>
                          <IconButton className={externstyle.sharebtnProductPage} aria-label="Share">
                            <ShareIcon className={externstyle.shareProductPage} />
                          </IconButton>
                          <div className={externstyle.likebtnTextProductPage}>
                            Share
                          </div>
                        </div>
                      </div>
                     </div>
                     <div className={externstyle.cl}></div>
                      <div className={externstyle.ratingDiv} itemprop="aggregateRating"
                            itemscope itemtype="http://schema.org/AggregateRating">
                              <span className={externstyle.ratingVal} itemprop="ratingValue">
                                {parseFloat(props.rating.toFixed(1))} / 5 stars
                              </span><br />
                              <span className={externstyle.numofCustReviews} itemprop="reviewCount">{props.usercomments} customer reviews</span>
                      </div>
                  </div>
                  <div className={externstyle.offers} itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                    <span itemprop="priceCurrency" content="NGN">N</span>
                    <span itemprop="price" content={props.price}>{props.price}</span>
                    <link itemprop="availability" href="http://schema.org/InStock" />
                  </div><div className={externstyle.cl}></div>
                  <div className={externstyle.productdescriptionProductPage}>
                      <div itemprop="description">{props.description.toUpperCase()}</div>
                  </div>
                  <div className={externstyle.cl}></div>
                  <div className={externstyle.productdescriptionProductPage}>
                      <font className={externstyle.ingredientsFontsTitleProductPage}>Ingredients:-</font>
                      {props.ingredients.toUpperCase()}
                  </div>
                  <div className={externstyle.cl}></div><Divider />
                  <div>
                    <div className={externstyle.customerreviews}>
                      <Comments productid={props.productid} />
                    </div>
                  </div>
                  <div className={externstyle.cl}></div>
                </div>
              </div>
          </div>
      </div>
      <div className={externstyle.aboutCompetitor}>
        <div className="panel panel-primary">
          <div className="panel-heading">Competitors and Markets</div>
          <div className="panel-body">
            <Competitor title={props.firstCompetition} />
            <br />
            <CompetitorTwo title={props.secondCompetition} />
          </div>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">Strength Area Acceptance Map - 2.5 Stars and Above</div>
          <div id="AreaAcceptanceMapElem" className={externstyle.panelBody}>
            <AreaAcceptanceMap productid={props.productid} />
          </div>
        </div>
        <div className="panel panel-danger">
          <div className="panel-heading">Weak Area Rejection Map - 2.5 Stars and Below</div>
          <div id="AreaRejectionMapElem" className={externstyle.panelBody}>
            <AreaRejectionMap productid={props.productid} />
          </div>
        </div>
      </div>
    </div>
        );
};

export default withStyles(styles)(ProductDisplay);
