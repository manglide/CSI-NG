import React from 'react';
import axios from 'axios';
import NotFound from './NotFound';
import externstyle from './App.css';
import LocationsNearBy from './LocationsNearBy';
import StarRatingComponent from 'react-star-rating-component';
import Divider from 'material-ui/Divider';
const URL = '/comments';
class Comments extends React.Component {

  constructor() {
    super();
    this.state = {pid: '', comments: []};
  }

  componentWillMount() {
    this.setState({pid: this.props.productid});
  }

  componentDidMount() {
    const self = this;
    axios.post(URL, {
      data: this.state.pid,
    })
    .then(res => {
      const comments = res.data.data.map(obj => obj);
      self.setState({ comments: comments });
    })
    .catch( error => {
      console.log(error);
    });
  }

  render() {
    const block = (this.state.comments.length === 0) ?
    <NotFound />
    :
    this.state.comments.map((item, index) => (
      <div className={externstyle.aboutProductComments} itemprop="review" itemscope itemtype="http://schema.org/Review">
        <span className={externstyle.individualComment} itemprop="name">{item.comment}</span>
          <span className={externstyle.individualComment} itemprop="author"></span><br />
          <meta itemprop="datePublished" content={item.datePublished} />
          <span itemprop="datePublished">{item.datePublished}</span>
            <div className={externstyle.smallRatingDiv} itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
            <div>
              {
                <StarRatingComponent
                  // starColor="#9C27B0"
                  starColor="#F60437"
                  emptyStarColor="#000"
                  editing={false}
                  starCount={5}
                  value={item.rate}
                  renderStarIcon={(index, value) => {
                    return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                  }}
                  renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                />
              }
            </div>
            <div>
              <meta itemprop="worstRating" content={item.rate} />
                <span itemprop="ratingValue">{item.rate}</span>/
                <span itemprop="bestRating">5</span>stars
            </div>
            </div>
          <span itemprop="description">
            <span className={externstyle.individualComment} itemprop="location">
              <div className={externstyle.individualCommentBanner}>Review nearby locations</div><hr /> <LocationsNearBy lat={item.latitude} lon={item.longitude} />
            </span>
          </span>
          <Divider />
      </div>
    ));
    return (
      <div>
        {block}
      </div>
    );
  }
}

export default Comments;
