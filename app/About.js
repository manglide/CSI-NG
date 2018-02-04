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
const About = () => {
  return (
              <div className={externstyle.aboutContent}>
                  <div className={externstyle.about}>
                    Nigeria Brands is a data driven, information company with 100% emphasis on Nigeria's Consumer Products.<br />
                    Were a technology company that uses location intelligence to build meaningful consumer experiences and business solutions.
                    Our location intelligence technology helps brands to locate, message and assess their own consumer and competitors's personal finance, strenghts and spending patterns which will help
                    in making purchasing and business centric decisions.<br />
                    For further enquiries, please send a mail to customercare@nigeriabrands.com.ng for customer related issues and enquiries@nigeriabrands.com.ng for enquiries.
                  </div>
              </div>
        );
};

export default withStyles(styles)(About);
