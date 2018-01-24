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
    console.log("this.state in Rescutetime.js parent: ", this.state);
  }

  componentDidMount() {
    let user = this.props.user;
    let a = this;
    axios.get('rescuetime', {
      // data: rescuetimeApi
    }).then(function(response) {
      // console.log('api key response: ', response);
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

  // let response = this.state.data;
  // let tempData = [];
  // let subData = {};
  // let length = Object.keys(response).length;
  // for (let i = 0; i < length; i ++) {
  //   let tempDateData = response[i];
  //   let keys = Object.keys(tempDateData);
  //   let values = Object.values(tempDateData);
  //   subData.key = keys;
  //   subData.value = values;
  //   subData.date = tempDateData.date;
  //   tempData.push(subData);
  //   subData = {};
  // }

  render() {
    let user = this.props.user;
    console.log('state: ', this.state.data);
    let data = this.state.data;
    let response = this.state.data;
    let tempData = [];
    let subData = {};
    let temporary = [];
    let arrSplit = [];
    let length = Object.keys(response).length;
    for (let i = 0; i < length; i ++) { //OR for (var i in response)...
      let tempDateData = response[i];
      subData.date = tempDateData.date;
      subData.id = tempDateData.id;
      delete response[i].date;
      delete response[i].id;
      if (typeof tempDateData === 'string') {
        delete response[i];
      }
      let keys = Object.keys(tempDateData); //TO SEPARATE KEY VALUES
      let values = Object.values(tempDateData); //TO SEPARATE KEY VALUES

      subData.key = keys; //TO SEPARATE KEY VALUES
      subData.value = values; //TO SEPARATE KEY VALUES

      subData.data = response[i];
      tempData.push(subData);
      subData = {};
    }
    if (Object.keys(data).length === 0) {
      return (
        <div onClick={this.change}>
          <h1>RescueTime</h1>
          <p>Welcome, {user.name}</p>
          <p>Loading...</p>
        </div>
      )
    } else {
      return (
        <div onClick={this.change}>
          <h1>RescueTime</h1>
          <p>{user.name}</p>
          <BarChartComp
            user={user}
            data={data}
            response={tempData}
          />
        </div>
      );
    }
  }
}

export default Rescuetime;
