import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import About from './About';
import Home from './Home';
// import logo from './logo.svg';
import Logo from 'svg-react-loader?name=Logo!./logo.svg';
import Feedback from './Feedback';
import GlobalAppBar from './GlobalAppBar';
import NotFound from './NotFound';
import SingleProduct from './SingleProduct';
import ProductsAPI from './ProductsAPI';
import Comments from './Comments';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import LocationsNearBy from './LocationsNearBy';
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: '"Open Sans Condensed", sans-serif',
    htmlFontSize: 7,
  },
});
class App extends React.Component {

componentDidMount() {
  const ele = document.getElementById('ipl-progress-indicator')
  if (ele) {
    setTimeout(() => {
      ele.classList.add('available')
      setTimeout(() => {
        ele.outerHTML = ''
      }, 2000)
    }, 1000)
  }
}
render() {
  return (
      <Router>
        <MuiThemeProvider theme={theme}>
        <div>
          <GlobalAppBar />
          <hr/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/feedback" component={Feedback}/>
            <Route path="/product/:title" component={SingleProduct}/>
            <Route path="/productsAPI" component={ProductsAPI}/>
            <Route path="/comments" component={Comments}/>
            <Route path="/locationsNearBy" component={LocationsNearBy}/>
            <Route component={NotFound} />
          </Switch>
        </div>
        </MuiThemeProvider>
      </Router>
    );
}
}
export default App;
