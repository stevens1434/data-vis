import React, { Component } from 'react';
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
      let metaData = [];
      let productivityPercent = [];
      let product = {};
      for (var i = 0; i < keyLength.length; i ++) {
        subData.key = key[i];
        subData.value = value[i];
        info.push(subData);
        if (typeof subData.value === 'string') {
          stringInfo.push(info[i]);
          delete info[i];
        }
        metaData = info.slice(0, 9)
        subData = {};
        dateAndId.stringInfo = stringInfo;
      }
      let productivity = [];
      let totalProduct = [];
      let allProduct = [];
      let uncatProduct = [];
      productivity.push(metaData[0])
      for (var m = 1; m < 5; m ++) {
        totalProduct.push(metaData[m])
      }
      allProduct.push(metaData[6])
      allProduct.push(metaData[7])
      uncatProduct.push(metaData[8])
      product.productivity = productivity
      product.totalProduct = totalProduct
      product.allProduct = allProduct
      product.uncatProduct = uncatProduct
      productivityPercent.push(productivity, totalProduct, allProduct, uncatProduct);
      info.splice(0, 9)
      dateAndId.info = info;
      dateAndId.productivity = product;
      dateData.push(dateAndId);
      info = [];
      stringInfo = [];
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
      const COLORS = ['green', 'red', '#FFBB28', '#FF8042'];
      const minorBarColors = ['green', 'lightgreen', 'grey', 'red'];

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
          <BarChart width={1300} height={600} marginLeft={15} data={dateData[currentDate].info}>
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
              <Bar type="monotone" dataKey="value" barSize={10} fill={minorBarColors}
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
