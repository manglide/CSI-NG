import React from 'react';
import axios from 'axios';
const URL = '/areasofacceptance';
import externstyle from './App.css';

class AreaAcceptanceMap extends React.Component  {
  constructor() {
    super();
    this.state = {pid: '', areas: []};
  }
  componentWillMount() {
    this.setState({pid: this.props.productid});
  }
  componentDidMount() {
    const self = this;
    axios.post(URL, {
      data: this.state.pid,
    })
    .then(res => {
      const areas = res.data.data.map(obj => obj);
      self.setState({ areas: areas });
      if (areas.length === 0) {
        window.AreaAcceptanceMapFuncNoData();
      } else {
        window.AreaAcceptanceMapFunc(areas, areas[0].latitude, areas[0].longitude);
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

export default AreaAcceptanceMap;
