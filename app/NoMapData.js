import React from 'react';
import externstyle from './App.css';
import { withStyles } from 'material-ui/styles';

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

const NoMapData = () => {
  return (
              <div className={externstyle.aboutContent}>
                  <div className={externstyle.about}>
                    No Map Data found!
                  </div>
              </div>
        );
};

export default withStyles(styles)(NoMapData);
