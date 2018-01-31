import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Paper from 'material-ui/Paper';
const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class GlobalAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = event => {
    this.setState({ anchorEl: null });
    if (event.currentTarget.innerText === 'About') {
      window.location.href = '/about';
    } else if (event.currentTarget.innerText === 'Feedback') {
      window.location.href = '/feedback';
    } else if (event.currentTarget.innerText === 'Home') {
      window.location.href = '/';
    }
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} style={{color: '#fff'}} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" className={classes.flex} style={{color: '#fff'}}>
              Nigeria Brands
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  style={{color: '#fff'}}
                >
                  <MoreVertIcon />
                </IconButton>
                <Paper style={style}>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onChange={ this.handleChange }
                    onRequestClose={this.handleRequestClose}
                  >
                    <MenuItem onClick={this.handleRequestClose}>Home</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>About</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Feedback</MenuItem>
                  </Menu>
                </Paper>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

GlobalAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlobalAppBar);
