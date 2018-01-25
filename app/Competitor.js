import React from 'react';
import axios from 'axios';
import CompetitorProductCard from './CompetitorProductCard';
import CompetitorProductCardNoReview from './CompetitorProductCardNoReview';
const URL = '/productsAPICompetitor';
class Competitor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: '', products: [], emptyProducts: [], results: ''};
    }

    componentWillMount() {
      this.setState({title: this.props.title});
    }

    componentDidMount() {
      const self = this;
      axios.post(URL, {
        data: this.state.title,
      })
      .then(res => {
        if (res.data.status === 'withresults') {
          self.setState({ results: 'yes' });
          const products = res.data.data.map(obj => obj);
          self.setState({ products: products });
        } else if (res.data.status === 'noresults') {
          self.setState({ results: 'no' });
          const emptyproducts = res.data.data.map(obj => obj);
          self.setState({ emptyProducts: emptyproducts });
        }
      })
      .catch( error => {
        console.log(error);
      });
    }

    render() {
      const block = (this.state.results === 'no') ?
      this.state.emptyProducts.map((item, index) => (
      <CompetitorProductCardNoReview avatar={item.productname.charAt(0).toUpperCase()}
         productname={item.productname}
         category={item.category}
         productid={item.product_ID}
       />
      ))
      :
      this.state.products.map((item, index) => (
        <CompetitorProductCard avatar={item.productname.charAt(0).toUpperCase()}
           productname={item.productname}
           manufacturer={item.manufacturer.toUpperCase()}
           rating={item.rating}
           description={item.description}
           price={item.price}
           likes={item.likes}
           dislikes={item.dislikes}
           usercomments={item.usercomments}
           locationcount={item.locationcount}
           productid={item.product_ID}
           category={item.category}
           image_1={item.productImage_1}
           image_2={item.productImage_2}
         />
      ));
      return (
          <div>
            {block}
          </div>
      );
    }
}

export default Competitor;
