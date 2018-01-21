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
    console.log('data: ', data);
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
          <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
              label={data.id}/>
          </BarChart>
        </div>
      );
    }
  }
}

export default BarChartComp;
