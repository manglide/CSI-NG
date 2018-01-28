import React from 'react';
import axios from 'axios';
const URL = '/chartsreviewrating';

class HighChartsReviewRating extends React.Component  {
  constructor() {
    super();
    this.state = {areas: [], title1: '', title2: '', title3: ''};
  }
  componentWillMount() {
    this.setState({title1: this.props.title1});
    this.setState({title2: this.props.title2});
    this.setState({title3: this.props.title3});
  }
  componentDidMount() {
    const self = this;
    axios.post(URL, {
      data1: this.state.title1,
      data2: this.state.title2,
      data3: this.state.title3,
    })
    .then(res => {
      const areas = res.data.data.map(obj => obj);
      self.setState({ areas: areas });
      if (areas.length === 0) {
        window.makeBarChartHighRating(areas);
      } else {
        window.makeBarChartHighRating(areas);
      }
    })
    .catch( error => {
      console.log(error);
    });
  }

render() {
  return (
    <div>
    </div>
    );
}
}

export default HighChartsReviewRating;
