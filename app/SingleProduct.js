import React from 'react';
import { withStyles } from 'material-ui/styles';
import ProductsAPI from './ProductsAPI';

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
});

const SingleProduct = (props) => {
  const product = props.match.params.title;
  return (
              <ProductsAPI title={product} />
        );
};

export default withStyles(styles)(SingleProduct);
