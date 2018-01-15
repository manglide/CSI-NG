import React, { Component } from 'react'
import GlobalAppBar from './GlobalAppBar';
import DataCards from './DataCards';
import Home from './Home';
import About from './About';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, BrowserRouter } from 'react-router';
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

class OldApp extends Component {
  render() {
    return (
          <BrowserRouter>
            <MuiThemeProvider theme={theme}>
              <div>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
              </div>
            </MuiThemeProvider>
          </BrowserRouter>
    );
  }
}

export default OldApp;
