import React from 'react';
import externstyle from './App.css';
import { withStyles } from 'material-ui/styles';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import SingleProduct from './SingleProduct';
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

const Product = () => {
  return (
              <div className={externstyle.aboutContent}>
                <Switch>
                  <Route exact path="/product" component={Home}/>
                  <Route path="/product/:title" component={SingleProduct}/>
                </Switch>
              </div>
        );
};

export default withStyles(styles)(Product);
