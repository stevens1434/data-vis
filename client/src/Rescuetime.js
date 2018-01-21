import React, { Component } from 'react';
import './App.css';
import BarChartComp from './BarChartComp';
import axios from 'axios';
// var unirest = require('unirest');
// var jQuery = require('jquery');
require('dotenv').config();
let rescuetimeApi;
let data;

class Rescuetime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      data: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    // console.log("this.state in trail.js parent: ", this.state);
    let response = this.state.data;
    let tempData = [];
    let subData = {};
    let length = Object.keys(response).length;
    for (let i = 0; i < length; i ++) {
      // console.log('response[i]: ', response[i])
      let tempDateData = response[i];
      console.log('tempDateData: ', tempDateData);
      let keys = Object.keys(tempDateData);
      // console.log('keys: ', keys);
      let values = Object.values(tempDateData);
      subData.key = keys;
      subData.value = values;
      subData.date = tempDateData.date;
      tempData.push(subData);
      console.log('subdata: ', subData);
      subData = {};
      console.log('tempData: ', tempData);
      // for (var j in tempDateData) {
      //   let subData = {};
      //   let date = {};
      //   // let subDateData = {};
      //   // console.log('tempDateData[j]: ', tempDateData[j])
      //   // let keys = Object.keys(tempDateData);
      //   let values = Object.values(tempDateData);
      //   // console.log('values: ', values)
      //   // subDateData.date = tempDateData.date;
      //   // subDateData.key = keys;
      //   // subDateData.value = values;
      //   // date = tempDateData.date
      //   subData.key = keys;
      //   subData.value = values;
      //   tempData.push(subData);
      //   // console.log('tempDateData: ', tempDateData);
      //   console.log('subdata: ', subData);
      //   // console.log('tempData: ', tempData);
      //   subData = {};
      // }

      // subData[keys[i]] = values[i]; //TO KEEP KEY:VALUE PAIR IN TACT
      // let keys = Object.keys(response[j]);
      // let values = Object.values(response[j]);
      // subData.key = keys[j]; //TO SEPARATE KEY:VALUE PAIRS
      // subData.value = values[j]; //TO SEPARATE KEY:VALUE PAIRS
      // tempData.push(subData);
      // console.log('subdata: ', subData);
      // subData = {};
    }
    console.log('data array: ', tempData);
  }

  componentDidMount() {
    let user = this.props.user;
    let a = this;
    axios.get('rescuetime', {
      // data: rescuetimeApi
    }).then(function(response) {
      console.log('api key response: ', response);
      // let tempData = [];
      // let subData = {};
      // let keys = Object.keys(response.data);
      // let values = Object.values(response.data);
      // let length = Object.keys(response.data).length;
      // console.log('keys: ', keys, 'values: ', values, 'length: ', length);
      // for (let i = 0; i < length; i ++) {
      //   // subData[keys[i]] = values[i]; //TO KEEP KEY:VALUE PAIR IN TACT
      //   subData.key = keys[i]; //TO SEPARATE KEY:VALUE PAIRS
      //   subData.value = values[i]; //TO SEPARATE KEY:VALUE PAIRS
      //   tempData.push(subData);
      //   subData = {};
      // }
      // console.log('subdata: ', subData);
      // console.log('data array: ', data);
      a.setState({
        data: response.data
      })
      // trailKey = response.data;
    }).catch(function(err) {
      console.log("err: ", err);
    })
  }

  render() {
    let user = this.props.user;
    console.log('state: ', this.state.data);
    let data = this.state.data;
    if (Object.keys(data).length === 0) {
      return (
        <div onClick={this.change}>
          <h1>RescueTime</h1>
          <p>Welcome, {user.name}</p>
          <p>Loading...</p>
        </div>
      )
    } else {
      let map = data.map((records, index) => (
        <h3>{records.date}</h3>
      ))
      return (
        <div onClick={this.change}>
          <h1>RescueTime</h1>
          <p>{user.name}</p>
          <p>{map}</p>
          <BarChartComp
            user={user}
            data={data}
          />
        </div>
      );
    }
  }
}

export default Rescuetime;
