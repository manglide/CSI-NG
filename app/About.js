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
                    CSI is a data driven, information company with 100% emphasis on Nigeria's Consumer Products.<br />
                    Were a technology company that uses location intelligence to build meaningful consumer experiences and business solutions.
                    Our location intelligence technology helps brands to locate, message and measure their own consumers.
                    The Data presented is acquired using 1 on 1 non-biased user reviews. We carry out consumer data reviews to help guide Nigerian consumers when making purchasing decisions and also help marketers make business centric decisions.<br />
                    CSI is a wholly owned subsidiary of Ask - Tech Solutions, Nigeria's first Big Data and Analytics Company.<br />
                    For further enquiries, please send a mail to customercare@csi.com.ng for customer related issues and enquiries@csi.com.ng for enquiries.
                  </div>
              </div>
        );
};

export default withStyles(styles)(About);
