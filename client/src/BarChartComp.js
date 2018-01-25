import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import axios from 'axios';
import d3 from 'd3';
// import dataFile from './data';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Pie, PieChart, Cell} from 'recharts';
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
    // console.log('response in barchartcomp.js: ', response);
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
      let metaData = [];
      let productivityPercent = [];
      let product = {};
      let tempData = {};
      let tempFormatedTime = {}
      for (var p = 0; p < 20; p++) {
        tempData.key = key[p];
        tempData.value = value[p]
        // console.log('tempData: ', tempData);
        metaData.push(tempData);
        tempData = {};
      }

      // for (var p = 0; p < 20; p++) {
      //   tempData.key = key[p];
      //   tempData.value = value[p]
      //   // console.log('tempData: ', tempData);
      //   metaData.push(tempData);
      //   tempData = {};
      // }

      for (var q = 38; q < 57; q++) {
        // console.log('key: ', key[q]);
        // console.log('value: ', value[q]);
        tempFormatedTime.key = key[q];
        tempFormatedTime.value = value[q]
        // console.log('tempData: ', tempData);
        metaData.push(tempFormatedTime);
        // console.log('metaData: ', metaData);
        // console.log('tempFormatedTime: ', tempFormatedTime);
        tempFormatedTime = {};
      }
      for (var i = 20; i < keyLength.length; i ++) {
        subData.key = key[i];
        subData.value = value[i];
//         value[i]:  productivity_pulse
// BarChartComp.js:67 value[i]:  very_productive_percentage
// BarChartComp.js:67 value[i]:  productive_percentage
// BarChartComp.js:67 value[i]:  neutral_percentage
// BarChartComp.js:67 value[i]:  distracting_percentage
// BarChartComp.js:67 value[i]:  very_distracting_percentage
// BarChartComp.js:67 value[i]:  all_productive_percentage
// BarChartComp.js:67 value[i]:  all_distracting_percentage
// BarChartComp.js:67 value[i]:  uncategorized_percentage
// BarChartComp.js:67 value[i]:  business_percentage
// BarChartComp.js:67 value[i]:  communication_and_scheduling_percentage
// BarChartComp.js:67 value[i]:  social_networking_percentage
// BarChartComp.js:67 value[i]:  design_and_composition_percentage
// BarChartComp.js:67 value[i]:  entertainment_percentage
// BarChartComp.js:67 value[i]:  news_percentage
// BarChartComp.js:67 value[i]:  software_development_percentage
// BarChartComp.js:67 value[i]:  reference_and_learning_percentage
// BarChartComp.js:67 value[i]:  shopping_percentage
// BarChartComp.js:67 value[i]:  utilities_percentage
// BarChartComp.js:67 value[i]:  total_hours
// BarChartComp.js:67 value[i]:  very_productive_hours
// BarChartComp.js:67 value[i]:  productive_hours
// BarChartComp.js:67 value[i]:  neutral_hours
// BarChartComp.js:67 value[i]:  distracting_hours
// BarChartComp.js:67 value[i]:  very_distracting_hours
// BarChartComp.js:67 value[i]:  all_productive_hours
// BarChartComp.js:67 value[i]:  all_distracting_hours
// BarChartComp.js:67 value[i]:  uncategorized_hours
// BarChartComp.js:67 value[i]:  business_hours
// BarChartComp.js:67 value[i]:  communication_and_scheduling_hours
// BarChartComp.js:67 value[i]:  social_networking_hours
// BarChartComp.js:67 value[i]:  design_and_composition_hours
// BarChartComp.js:67 value[i]:  entertainment_hours
// BarChartComp.js:67 value[i]:  news_hours
// BarChartComp.js:67 value[i]:  software_development_hours
// BarChartComp.js:67 value[i]:  reference_and_learning_hours
// BarChartComp.js:67 value[i]:  shopping_hours
// BarChartComp.js:67 value[i]:  utilities_hours
// BarChartComp.js:67 value[i]:  total_duration_formatted
// BarChartComp.js:67 value[i]:  very_productive_duration_formatted
// BarChartComp.js:67 value[i]:  productive_duration_formatted
// BarChartComp.js:67 value[i]:  neutral_duration_formatted
// BarChartComp.js:67 value[i]:  distracting_duration_formatted
// BarChartComp.js:67 value[i]:  very_distracting_duration_formatted
// BarChartComp.js:67 value[i]:  all_productive_duration_formatted
// BarChartComp.js:67 value[i]:  all_distracting_duration_formatted
// BarChartComp.js:67 value[i]:  uncategorized_duration_formatted
// BarChartComp.js:67 value[i]:  business_duration_formatted
// BarChartComp.js:67 value[i]:  communication_and_scheduling_duration_formatted
// BarChartComp.js:67 value[i]:  social_networking_duration_formatted
// BarChartComp.js:67 value[i]:  design_and_composition_duration_formatted
// BarChartComp.js:67 value[i]:  entertainment_duration_formatted
// BarChartComp.js:67 value[i]:  news_duration_formatted
// BarChartComp.js:67 value[i]:  software_development_duration_formatted
// BarChartComp.js:67 value[i]:  reference_and_learning_duration_formatted
// BarChartComp.js:67 value[i]:  shopping_duration_formatted
// BarChartComp.js:67 value[i]:  utilities_duration_formatted
        info.push(subData);
        // console.log('info: ', info);
        if (typeof subData.value === 'string') {
          // console.log('info: ', info);
          stringInfo.push(subData);
          delete info[i];
        }
        // metaData = info.slice(0, 20)
        // console.log('metaData: ', metaData);
        console.log('subData: ', subData);
        subData = {};
        dateAndId.stringInfo = stringInfo;
      }
      // console.log('metaData: ', metaData);
      // console.log('metaData slicing: ', metaData.splice(9, 27))
      let productivity = [];
      let totalProduct = [];
      let allProduct = [];
      let uncatProduct = [];
      let subPercent = [];
      let totalHours = [];
      let formatedTime = [];
      // console.log('metaData: ', metaData);
      productivity.push(metaData[0])
      for (var m = 1; m < 5; m ++) {
        totalProduct.push(metaData[m])
      }
      for (var o = 9; o < 19; o ++) {
        // console.log('metaData: ', metaData[o])
        subPercent.push(metaData[o])
      }
      for (var r = 20; r < 39; r ++) {
        // console.log('metaData: ', metaData[o])
        formatedTime.push(metaData[r])
      }
      totalHours.push(metaData[19]);
      // console.log('subPercent: ', subPercent);
      allProduct.push(metaData[6])
      allProduct.push(metaData[7])
      uncatProduct.push(metaData[8])
      product.productivity = productivity
      product.totalProduct = totalProduct
      product.allProduct = allProduct
      product.uncatProduct = uncatProduct
      product.subPercent = subPercent;
      product.totalHours = totalHours;
      product.formatedTime = formatedTime;
      productivityPercent.push(productivity, totalProduct, allProduct, uncatProduct);
      info.splice(0, 8);
      console.log('info pre-final: ', info);
      info.splice(10, 27);
      console.log('info final: ', info);
      dateAndId.info = info;
      dateAndId.productivity = product;
      console.log('dateAndId: ', dateAndId);
      dateData.push(dateAndId);
      info = [];
      stringInfo = [];
    }
    // console.log('dateData: ', dateData);
    if (Object.keys(data).length === 0) {
      return (
        <div onClick={this.change}>
          <p>Loading Chart...</p>
        </div>
      )
    } else {
      currentDate = this.state.currentDate;
      let myData = dateData[currentDate].info
      for (var m in myData) {
        if (myData[m].value < 1 || myData[m].value === 0) {
          myData.splice([m], 1)
        }
        // console.log('myData: ', myData);
      }
      //MAIN BAR CHART

      //MINOR BAR CHART
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}
                C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
                C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
                Z`;
      };
      const minorBarColors = ['green', 'lightgreen', 'grey', 'red'];
      const barColor = (fill) => {
        return <path fill={minorBarColors}/>;
      };

      //PIE CHART
      const COLORS = ['green', 'red', '#FFBB28', '#FF8042'];
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x  = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy  + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
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
          <BarChart width={1300} height={600} marginLeft={15} data={myData}> //dateData[currentDate].info
            <CartesianGrid strokeDasharray="3" />
            <Tooltip />
            <XAxis dataKey="key" />
            <YAxis dataKey='value'/>
            <Bar type="monotone" dataKey="value" barSize={10} fill="green"
              label={data}/>
          </BarChart>
          <div className='smallCharts'>
            <BarChart className='smallCharts' width={500} height={400} marginLeft={15} data={dateData[currentDate].productivity.totalProduct}>
              <CartesianGrid strokeDasharray="3" />
              <Tooltip />
              <XAxis dataKey="key" />
              <YAxis dataKey='value'/>
              <Bar
                type="monotone"
                dataKey="value"
                barSize={10}
                fill={barColor}
                label={data}/>
            </BarChart>

            <PieChart className='smallCharts' width={500} height={400} onMouseEnter={this.onPieEnter}>
              <Pie
                data={dateData[currentDate].productivity.allProduct}
                cx={300}
                cy={200}
                labelLine={true}
                dataKey='value'
                label={renderCustomizedLabel}
                outerRadius={150}
              >
              {
              	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <p className='DateButtons'>{map}</p>
        </div>
      );
    }
  }
}

export default BarChartComp;
