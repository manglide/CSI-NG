import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import ProductCard from './ProductCard';

const URL = '/products';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    width: '100%'
  },
  paper: {
    width: 313,
    padding: 16,
    overflow: 'hidden',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class DataCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  state = {
    spacing: '60',
  };
  componentDidMount() {
    const self = this;
    axios.get(URL)
    .then(res => {
      const products = res.data.data.map(obj => obj);
      self.setState({ products });
    })
    .catch( error => {
      console.log(error);
    });
  }
  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
          <Grid container xs={12} className={classes.root} justify="center">
            {this.state.products.map((item, index) => (
              <Grid key={index} item spacing={Number(spacing)}>
                <Paper className={classes.paper}>
                 <ProductCard avatar={item.productname.charAt(0).toUpperCase()}
                    productname={item.productname}
                    manufacturer={item.manufacturer.toUpperCase()}
                    rating={item.rating}
                    description={item.description}
                    price={item.price}
                    likes={item.likes}
                    dislikes={item.dislikes}
                    usercomments={item.usercomments}
                    locationcount={item.locationcount}
                    ingredients={item.ingredients}
                    productid={item.product_ID}
                    category={item.category}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
    );
  }
}

DataCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataCards);
