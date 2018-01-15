import React from 'react';
import axios from 'axios';
import NotFound from './NotFound';
import externstyle from './App.css';
const URL = '/locationsNearBy';
class LocationsNearBy extends React.Component {

  constructor() {
    super();
    this.state = {lat: '', lon: '', locationsOfComments: [], dataUnAltered: []};
  }

  componentWillMount() {
    this.setState({lat: this.props.lat, lon: this.props.lon});
  }

  componentDidMount() {
    const self = this;
    axios.post(URL, {
      lat: this.state.lat,
      lon: this.state.lon,
    })
    .then(res => {
      self.setState({ dataUnAltered: res.data });
      const comments = res.data.map(obj => obj);
      self.setState({ locationsOfComments: comments });
    })
    .catch( error => {
      console.log(error);
    });
  }

  render() {
    const block = (this.state.dataUnAltered.length === 0) ?
    <i>No Nearby Locations Found</i>
    :
    this.state.locationsOfComments.map((item, index) => (
      (item.name === '' && item.vicinity === '') ?
      ''
      :
      <div className={externstyle.individualCommentLoc}>
        <div>{item.name}</div>
        <div>{item.vicinity}</div><hr />
      </div>
    ));
    return (
      <div>
        {block}
      </div>
    );
  }
}

export default LocationsNearBy;
