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
import HighChartsReviewLikes from './HighChartsReviewLikes';
import HighChartsReviewDisLikes from './HighChartsReviewDisLikes';
import HighChartsReviewRating from './HighChartsReviewRating';
import DocumentMeta from 'react-document-meta';
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
  const metaJ = {
    title: props.productname,
    description: props.description,
    canonical: `http://csi.com.ng/product/${props.productname}`,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: `${props.productname} reviews, ${props.description}`,
        description: props.description,
        copyright: 'csi.com.ng',
        language: 'EN',
        category: props.category,
        coverage: 'Nigeria',
        distribution: 'Global',
        rating: props.rating,
        'identifier-URL': 'http://csi.com.ng',
        url: 'http://csi.com.ng',
        designer: props.manufacturer,
        owner: props.manufacturer,
        Classification: props.category,
        summary: props.description,
        topic: props.productname + ' Product Review'
      },
      'http-equiv': {
        Expires: '0',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache'
      }
    }
  };
  return (
    <div className={externstyle.productWrapper}>
      <DocumentMeta {...metaJ} />
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
                     <img className={externstyle.productImage}
                       itemprop="image"
                       // src="https://placeimg.com/750/224/nature"
                       src={`${props.image_2}`}
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
        <div className="panel panel-success">
          <div className="panel-heading"
            toggle="collapse"
            data-target="#productsreviewlikes"
            aria-expanded="true"
            aria-controls="productsreviewlikes">
            <a data-toggle="collapse" href="#productsreviewlikes">
              <i className="glyphicon glyphicon-triangle-right"></i> {props.productname} , {props.firstCompetition} and {props.secondCompetition} Likes Chart
            </a>
          </div>
          <div className="panel-body collapse in" id="productsreviewlikes">
            <HighChartsReviewLikes title1={props.productname} title2={props.firstCompetition} title3={props.secondCompetition} />
          </div>
        </div>
        <div className="panel panel-danger">
          <div className="panel-heading" toggle="collapse"
          data-target="#productsreviewdislikes"
          aria-expanded="true"
          aria-controls="productsreviewdislikes">
          <a data-toggle="collapse" href="#productsreviewdislikes">
            <i className="glyphicon glyphicon-triangle-right"></i> {props.productname} , {props.firstCompetition} and {props.secondCompetition} DisLikes Chart
          </a>
        </div>
          <div className="panel-body collapse in" id="productsreviewdislikes">
            <HighChartsReviewDisLikes title1={props.productname} title2={props.firstCompetition} title3={props.secondCompetition} />
          </div>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading" toggle="collapse"
          data-target="#productsreviewrating"
          aria-expanded="true"
          aria-controls="productsreviewrating">
          <a data-toggle="collapse" href="#productsreviewrating">
            <i className="glyphicon glyphicon-triangle-right"></i> {props.productname} , {props.firstCompetition} and {props.secondCompetition} Rates Chart
          </a>
        </div>
          <div className="panel-body collapse in" id="productsreviewrating">
            <HighChartsReviewRating title1={props.productname} title2={props.firstCompetition} title3={props.secondCompetition} />
          </div>
        </div>
        <div className="panel panel-warning">
          <div className="panel-heading" toggle="collapse"
          data-target="#competitorsview"
          aria-expanded="true"
          aria-controls="competitorsview">
          <a data-toggle="collapse" href="#competitorsview">
            <i className="glyphicon glyphicon-triangle-right"></i> Competitors and Markets
          </a>
        </div>
          <div className="panel-body collapse in" id="competitorsview">
            <Competitor title={props.firstCompetition} />
            <br />
            <CompetitorTwo title={props.secondCompetition} />
          </div>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading" toggle="collapse"
          data-target="#AreaAcceptanceMapElem"
          aria-expanded="true"
          aria-controls="AreaAcceptanceMapElem">
          <a data-toggle="collapse" href="#AreaAcceptanceMapElem">
            <i className="glyphicon glyphicon-triangle-right"></i> Strength Area Acceptance Map - 2.5 Stars and Above
          </a>
        </div>
          <div id="AreaAcceptanceMapElem" className="panel-body collapse in" style={{height: '300px'}}>
            <AreaAcceptanceMap productid={props.productid} />
          </div>
        </div>
        <div className="panel panel-danger">
          <div className="panel-heading" toggle="collapse"
          data-target="#AreaRejectionMapElem"
          aria-expanded="true"
          aria-controls="AreaRejectionMapElem">
          <a data-toggle="collapse" href="#AreaRejectionMapElem">
            <i className="glyphicon glyphicon-triangle-right"></i> Weak Area Rejection Map - 2.5 Stars and Below
          </a>
        </div>
          <div id="AreaRejectionMapElem" className="panel-body collapse in" style={{height: '300px'}}>
            <AreaRejectionMap productid={props.productid} />
          </div>
        </div>
      </div>
    </div>
        );
};

export default withStyles(styles)(ProductDisplay);
/* <MetaTags>
      <title>{props.productname}</title>
      <meta id="meta-description" name="description" content={props.description} />
      <meta id="meta-description" name="description" content={`${props.description} reviews`} />
      <meta id="og:type" property="og:type" content="product" />
      <meta id="og:region" property="og:region" content="NG"/>
      <meta id="og:country-name" property="og:country-name" content="NIGERIA"/>
      <meta id="og-title" property="og:title" content={props.productname} />
      <meta id="og-image" property="og:image" content={`${props.image_1}`} />
</MetaTags>*/
