import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import d3 from 'd3';
// import dataFile from './data';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';
// var unirest = require('unirest');
// var jQuery = require('jquery');
require('dotenv').config();
let rescuetimeApi;
let data;

const dataFile =
  {
    date: '2018-01-21',
    id: 1516521600,
    info: [
      {key:  'productivity_pulse',
      value:  76},
      {key:  'very_productive_percentage',
      value:  72.6},
      {key:  'productive_percentage',
      value:  3.8},
      {key:  'neutral_percentage',
      value:  3.1},
      {key:  'distracting_percentage',
      value:  0},
      {key:  'very_distracting_percentage',
      value:  20.5},
      {key:  'all_productive_percentage',
      value:  76.4},
      {key:  'all_distracting_percentage',
      value:  20.5},
      {key:  'uncategorized_percentage',
      value:  0.1},
      {key:  'business_percentage',
      value:  0},
      {key:  'communication_and_scheduling_percentage',
      value:  27.1},
      {key:  'social_networking_percentage',
      value:  0.9},
      {key:  'design_and_composition_percentage',
      value:  0},
      {key:  'entertainment_percentage',
      value:  19.6},
      {key:  'news_percentage',
      value:  0},
      {key:  'software_development_percentage',
      value:  40.7},
      {key:  'reference_and_learning_percentage',
      value:  4.8},
      {key:  'shopping_percentage',
      value:  0},
      {key:  'utilities_percentage',
      value:  6.9},
      {key:  'total_hours',
      value:  4.24},
      {key:  'very_productive_hours',
      value:  3.07},
      {key:  'productive_hours',
      value:  0.16},
      {key:  'neutral_hours',
      value:  0.13},
      {key:  'distracting_hours',
      value:  0},
      {key:  'very_distracting_hours',
      value:  0.87},
      {key:  'all_productive_hours',
      value:  3.24},
      {key:  'all_distracting_hours',
      value:  0.87},
      {key:  'uncategorized_hours',
      value:  0},
      {key:  'business_hours',
      value:  0},
      {key:  'communication_and_scheduling_hours',
      value:  1.15},
      {key:  'social_networking_hours',
      value:  0.04},
      {key:  'design_and_composition_hours',
      value:  0},
      {key:  'entertainment_hours',
      value:  0.83},
      {key:  'news_hours',
      value:  0},
      {key:  'software_development_hours',
      value:  1.72},
      {key:  'reference_and_learning_hours',
      value:  0.2},
      {key:  'shopping_hours',
      value:  0},
      {key:  'utilities_hours',
      value:  0.29}
    ],
    otherInfo: [
      {key:  'total_duration_formatted',
      value:  '4h 14m'},
      {key:  'very_productive_duration_formatted',
      value:  '3h 4m'},
      {key:  'productive_duration_formatted',
      value:  '9m 40s'},
      {key:  'neutral_duration_formatted',
      value:  '7m 59s'},
      {key:  'distracting_duration_formatted',
      value:  'no time'},
      {key:  'very_distracting_duration_formatted',
      value:  '52m 8s'},
      {key:  'all_productive_duration_formatted',
      value:  '3h 14m'},
      {key:  'all_distracting_duration_formatted',
      value:  '52m 8s'},
      {key:  'uncategorized_duration_formatted',
      value:  '13s'},
      {key:  'business_duration_formatted',
      value:  '7s'},
      {key:  'communication_and_scheduling_duration_formatted',
      value:  '1h 8m'},
      {key:  'social_networking_duration_formatted',
      value:  '2m 19s'},
      {key:  'design_and_composition_duration_formatted',
      value:  'no time'},
      {key:  'entertainment_duration_formatted',
      value:  '49m 49s'},
      {key:  'news_duration_formatted',
      value:  'no time'},
      {key:  'software_development_duration_formatted',
      value:  '1h 43m'},
      {key:  'reference_and_learning_duration_formatted',
      value:  '12m 6s'},
      {key:  'shopping_duration_formatted',
      value:  'no time'},
      {key:  'utilities_duration_formatted',
      value:  '17m 26s'}
    ]
  }

const infor = dataFile.info;

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
    console.log('response in barchartcomp.js: ', response);
    let subData = {};
    let otherData = {};
    let date;
    let id;
    let info = [];
    let otherInfo = [];
    let allData = []
    for (var j = 0; j < response.length; j++) {
      info = [];
      otherInfo = [];
      for (var i = 0; i < 56; i ++) {
        date = response[j].date;
        id = response[j].id
        otherData.date = date;
        otherData.id = id;
        otherInfo.push(otherData);
        subData.key = response[j].key[i];
        subData.value = response[j].value[i];
        otherData.data = subData;
        otherInfo.push(otherData);
        info.push(subData);
        subData = {};
        if (typeof info[i].value === 'string') {
          // console.log('deleting: ', info[i].value)
          delete info[i];
        }
      }
      console.log('info: ', info);
      console.log('otherInfo: ', otherInfo);
      allData.push(otherInfo);
      console.log('otherInfo: ', otherInfo);
    }
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
          <BarChart width={1300} height={400} marginLeft={15} data={info}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <XAxis dataKey="key" />
            <YAxis />
            <Bar type="monotone" dataKey="value" barSize={10} fill="#8884d8"
              label={data}/>
          </BarChart>
        </div>
      );
    }
  }
}

export default BarChartComp;
