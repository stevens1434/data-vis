import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import d3 from 'd3';
import {BarChart, Bar, XAxis, YAxis} from 'recharts';
// var unirest = require('unirest');
// var jQuery = require('jquery');
require('dotenv').config();
let rescuetimeApi;
let data;

class BarChartComp extends Component {
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
    console.log("this.state in trail.js parent: ", this.state);
  }

  componentDidMount() {

  }

  render() {
    let user = this.props.user
    let data = this.props.data;
    let response = this.props.response;
    let currentBarData = [response[0]]
    let length = currentBarData[0].key.length;
    console.log('response in barchartcomp.js: ', response);
    console.log('currentBarData in barcartcomp.js: ', currentBarData);
    console.log('data: ', data);
    let barData = [];
    let subData = {};
    for (var i = 0; i < 59; i ++) {
      // console.log('keys in response: ', response[0].key[i])
      subData.key = response[0].key[i];
      subData.value = response[0].value[i];
      barData.push(subData);
      subData = {};
    }
    console.log('barData: ', barData);
    if (Object.keys(data).length === 0) {
      return (
        <div onClick={this.change}>
          <h3>Chart</h3>
          <p>Welcome, {user.name}</p>
          <p>Loading Chart...</p>
        </div>
      )
    } else {
      return (
        <div onClick={this.change}>
          <h3>RescueTime</h3>
          <p>{user.name}</p>
          <p>Bar Chart</p>
          <BarChart width={1300} height={400} marginLeft={15} data={barData}>
            <XAxis dataKey="key" />
            <YAxis />
            <Bar type="monotone" dataKey="value" barSize={10} fill="#8884d8"
              label={barData.value}/>
          </BarChart>
        </div>
      );
    }
  }
}

export default BarChartComp;
