import React from 'react';
import axios from 'axios';
import NotFound from './NotFound';
import ProductDisplay from './ProductDisplay';
const URL = '/productsAPI';
class ProductsAPI extends React.Component {
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
      <NotFound />
      :
      this.state.products.map((item, index) => (
           <ProductDisplay
              avatar={item.productname.charAt(0).toUpperCase()}
              productname={item.productname}
              manufacturer={item.manufacturer.toUpperCase()}
              rating={item.rating}
              description={item.description}
              price={item.price}
              likes={item.likes}
              dislikes={item.dislikes}
              usercomments={item.usercomments}
              locationcount={item.locationcount}
              firstCompetition={item.firstCompetition}
              secondCompetition={item.secondCompetition}
              ingredients={item.ingredients}
              productid={item.product_ID}
              category={item.category}
            />
      ));
      return (
          <div>
            {block}
          </div>
      );
    }
}

export default ProductsAPI;
