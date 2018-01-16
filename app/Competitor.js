import React from 'react';
import axios from 'axios';
import NoCompetitorFound from './NoCompetitorFound';
import CompetitorProductCard from './CompetitorProductCard';
const URL = '/productsAPI';
class Competitor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: '', products: []};
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
        const products = res.data.data.map(obj => obj);
        self.setState({ products: products });
      })
      .catch( error => {
        console.log(error);
      });
    }

    render() {
      const block = (this.state.products.length === 0) ?
      <NoCompetitorFound />
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
