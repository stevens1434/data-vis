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
let currentDate;

class BarChartComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      data: {},
      currentDate: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.change = this.change.bind(this);
    this.changeChart = this.changeChart.bind(this);
  }

  change(e) {
    // console.log("this.state in trail.js parent: ", this.state);
  }

  changeChart(index) {
    console.log('index: ', index);
    this.setState({
      currentDate: index
    })
  }

  componentDidMount() {

  }

  render() {
    let user = this.props.user
    let data = this.props.data;
    let response = this.props.response;
    console.log('response in barchartcomp.js: ', response);
    let subData = {};
    let info = [];
    let stringInfo = [];
    let keyLength = response[0].key;
    let dateData = [];
    for (var j = 0; j < response.length; j++) {
      let dateAndId = {};
      stringInfo = [];
      let date = response[j].date;
      let id = response[j].id
      dateAndId.date = date;
      dateAndId.id = id;
      let key = response[j].key
      let value = response[j].value
      for (var i = 0; i < keyLength.length; i ++) {
        subData.key = key[i];
        subData.value = value[i];
        info.push(subData);
        if (typeof subData.value === 'string') {
          stringInfo.push(info[i]);
          delete info[i];
        }
        subData = {};
        dateAndId.info = info;
        dateAndId.stringInfo = stringInfo;
      }
      dateData.push(dateAndId);
      info = [];
      stringInfo = [];
      info = [];
    }
    console.log('dateData: ', dateData);
    if (Object.keys(data).length === 0) {
      return (
        <div onClick={this.change}>
          <p>Loading Chart...</p>
        </div>
      )
    } else {
      currentDate = this.state.currentDate;
      let map = dateData.map((records, index) => (
        <p
          className='IndividDateButton'
          onClick={() => this.changeChart(index)}>
            {records.date} {index}
        </p>
      ))
      return (
        <div onClick={this.change}>
          <p>Bar Chart</p>
          <BarChart width={1300} height={600} marginLeft={15} data={dateData[currentDate].info}>
            <CartesianGrid strokeDasharray="3" />
            <Tooltip />
            <XAxis dataKey="key" />
            <YAxis dataKey='value'/>
            <Bar type="monotone" dataKey="value" barSize={10} fill="green"
              label={data}/>
          </BarChart>
          <p className='DateButtons'>{map}</p>
        </div>
      );
    }
  }
}

export default BarChartComp;
