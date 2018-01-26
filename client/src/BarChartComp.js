import React, { Component } from 'react';
import Rescuetime from './Rescuetime';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, theme } from 'material-ui/styles';
import Card, {CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import './App.css';
import axios from 'axios';
import d3 from 'd3';
import _ from 'lodash';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Pie, PieChart, Cell, Sector, ResponsiveContainer} from 'recharts';
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
      currentDate: 0,
      activeIndex: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.change = this.change.bind(this);
    this.changeChart = this.changeChart.bind(this);
    this.renderActiveShape = this.renderActiveShape.bind(this);
    this.changeActiveIndex = this.changeActiveIndex.bind(this);
    this.sortHigh = this.sortHigh.bind(this);
    this.sortLow = this.sortLow.bind(this);
  }

  change(e) {
    // console.log("this.state in trail.js parent: ", this.state);
  }

  changeChart(records, index) {
    console.log('index: ', index);
    console.log('records.date: ', records)
    this.setState({
      currentDate: index
    })
  }

  changeActiveIndex() {
    if (this.state.activeIndex === 0) {
      this.setState({
        activeIndex: 1
      })
    } else {
      this.setState({
        activeIndex: 0
      })
    }
  }

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value, key } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const string = key.substring(0, key.length - 2);
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${string}: ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  sortHigh(records) {
    // console.log('sortHigh: ', records);
    const sortedObjs = _.sortBy(records, 'value');
    const string = sortedObjs[9].key.substring(0, sortedObjs[9].key.length - 2);
    return (
      <span>{string} ({sortedObjs[9].value}%)</span>
    )
  }

  sortLow(records) {
    // console.log('sortLow: ', records);
    const sortedObjs = _.sortBy(records, 'value');
    const string = sortedObjs[0].key.substring(0, sortedObjs[0].key.length - 2);
    return (
      <span>{string} ({sortedObjs[0].value}%)</span>
    )
  }

  componentDidMount() {

  }

  render() {
    let user = this.props.user
    let data = this.props.data;
    console.log('data in barChartComp: ', data);
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
        metaData.push(tempData);
        tempData = {};
      }
      for (var q = 38; q < 57; q++) {
        tempFormatedTime.key = key[q];
        tempFormatedTime.value = value[q]
        metaData.push(tempFormatedTime);
        tempFormatedTime = {};
      }
      for (var i = 20; i < keyLength.length; i ++) {
        subData.key = key[i];
        subData.value = value[i];
        info.push(subData);
        if (typeof subData.value === 'string') {
          stringInfo.push(subData);
          delete info[i];
        }
        subData = {};
        dateAndId.stringInfo = stringInfo;
      }
      let originalKeys = [ "productivity_pulse", "very_productive_percentage", "productive_percentage", "neutral_percentage",
      "distracting_percentage", "very_distracting_percentage", "all_productive_percentage", "all_distracting_percentage",
      "uncategorized_percentage", "business_percentage", "communication_and_scheduling_percentage", "social_networking_percentage",
      "design_and_composition_percentage", "entertainment_percentage", "news_percentage", "software_development_percentage",
      "reference_and_learning_percentage", "shopping_percentage", "utilities_percentage", "total_hours", "total_duration_formatted",
      "very_productive_duration_formatted", "productive_duration_formatted", "neutral_duration_formatted",
      "distracting_duration_formatted", "very_distracting_duration_formatted", "all_productive_duration_formatted",
      "all_distracting_duration_formatted", "uncategorized_duration_formatted", "business_duration_formatted",
      "communication_and_scheduling_duration_formatted", "social_networking_duration_formatted",
      "design_and_composition_duration_formatted", "entertainment_duration_formatted", "news_duration_formatted",
      "software_development_duration_formatted", "reference_and_learning_duration_formatted", "shopping_duration_formatted",
      "utilities_duration_formatted" ]

      let newKeys = [ "Productivity Value", "Very Product.", "Productive", "Neutral", "Distract.", "Highly Distract.",
      "Productivity %", "Distracting %", "Uncateg. %", "Business %", "Communication %", "Social Media %", "Design/CSS %",
      "Entertainment %", "News %", "Software Dev %", "Reading %", "Shopping %", "Bills %", "Total Hours", "Total Time",
      "Very Product. Time", "Total Product. Time", "Neutral Time", "Distract. Time", "Very Distract. Time", "Total Product. Time",
      "Total Distract. Time", "Uncateg. Time", "Business Time", "Communicat. Time", "Social Media Time", "Desing/CSS Time",
      "Entertain. Time", "News Time", "Software Dev. Time", "Reading Time", "Shopping Time", "Bills Time" ]

      for (var u in metaData) {
        let key = metaData[u].key
        switch (originalKeys[u] === originalKeys[u]) {
          case originalKeys[u] === originalKeys[u]:
            metaData[u].key = newKeys[u];
          break;
        }
      }
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
      for (var m = 1; m < 6; m ++) {
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
      // console.log('info pre-final: ', info);
      info.splice(10, 27);
      // console.log('info final: ', info);
      for (var s in info) {
        let key = info[s].key
        switch (key === key) {
          case key === 'business_hours':
            info[s].key = 'Business';
          break;
          case key === 'communication_and_scheduling_hours':
            info[s].key = 'Communication';
          break;
          case key === 'social_networking_hours':
            info[s].key = 'Social Media';
          break;
          case key === 'design_and_composition_hours':
            info[s].key = 'Design/CSS';
          break;
          case key === 'entertainment_hours':
            info[s].key = 'Entertainment';
          break;
          case key === 'news_hours':
            info[s].key = 'News';
          break;
          case key === 'software_development_hours':
            info[s].key = 'Software Dev';
          break;
          case key === 'reference_and_learning_hours':
            info[s].key = 'Reading';
          break;
          case key === 'shopping_hours':
            info[s].key = 'Shopping';
          break;
          case key === 'utilities_hours':
            info[s].key = 'Bills';
          break;
        }
      }
      dateAndId.info = info;
      dateAndId.productivity = product;
      // console.log('dateAndId: ', dateAndId);
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
      console.log('currentDate: ', currentDate);
      let myData = dateData[currentDate].info
      // console.log('mydata PRE: ', myData);
      for (var m in myData) {
        if (myData[m].value < 1 || myData[m].value == 0) {
          myData.splice([m], 1)
        }
      }

      //PIE CHART
      const COLORS = ['green', 'red', '#FFBB28', '#FF8042'];

      let map = dateData.map((records, index) => (
        <p
          key={index}
          className={index === this.state.currentDate ? 'IndividDateButtonAction' : 'IndividDateButton'}
          onClick={() => this.changeChart(records.date, index)}>
            {records.date}
        </p>
      ))
      let dataList;
      let tempArr = [];
      if (dateData[currentDate]) {
        tempArr.push(dateData[currentDate]);
        console.log('datData for specific date: ', tempArr);
        dataList = tempArr.map((records, index) => (
          <div>
            <p className='col-xl-12 col-l-12 col-m-12 col-sm-8 col-xs-12'>Over {records.productivity.totalHours[0].value} hours you scored a {records.productivity.productivity[0].key} of {records.productivity.productivity[0].value}. {records.productivity.allProduct[0].value}% of your time was categorized as Productive and {records.productivity.allProduct[1].value} of your time was categorized as Unproductive.</p>
            <p className='col-xl-12 col-l-12 col-m-12 col-sm-8 col-xs-12'>You spent most of your time on {this.sortHigh(records.productivity.subPercent)} and the least amount of time on {this.sortLow(records.productivity.subPercent)}.</p>
            <p className='col-xl-12 col-l-12 col-m-12 col-sm-8 col-xs-12'>However, {records.productivity.uncatProduct[0].value} of your recorded time was Uncategorized. You categorize it by visiting <a href='www.rescuetime.com'>www.rescuetime.com</a></p>
          </div>
        ))
      }

      return (
        <div className='BarChartCompContainer' onClick={this.change}>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={12}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Card className='DataListCard'>
                <div className='row row-datalist DataListCard'>{dataList}</div>
                </Card>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                <Card className='datecontainer'>
                  <h1 className='datepicker'>Date</h1>
                  <div className='row row-datebuttons DateButtons'>{map}</div>
                </Card>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                <Grid item className='row-mainrow' xl={11} lg={11} md={11} sm={11} xs={11}>
                  <ResponsiveContainer width='100%' height={501}>
                    <BarChart className='row-main' width={1000} height={500} marginLeft={15} data={myData}> //dateData[currentDate].info
                      <CartesianGrid strokeDasharray="3" />
                      <Tooltip />
                      <XAxis dataKey="key" />
                      <YAxis dataKey='value'/>
                      <Bar type="monotone" dataKey="value" barSize={10} fill="green"
                        label={data}/>
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid className='row row-subrow' item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <ResponsiveContainer width='100%' height={351}>
                    <div className='row row-subrow'>
                      <BarChart className='smallCharts small-bar' width={500} height={350} data={dateData[currentDate].productivity.totalProduct}>
                        <CartesianGrid strokeDasharray="3" />
                        <Tooltip />
                        <XAxis dataKey="key" />
                        <YAxis dataKey='value'/>
                        <Bar
                          type="monotone"
                          dataKey="value"
                          barSize={10}
                          fill= 'green'
                          label={data}/>
                      </BarChart>
                      <PieChart className='smallCharts small-pie' width={500} height={350}>
                        <Pie
                        	activeIndex={this.state.activeIndex}
                          activeShape={this.renderActiveShape}
                          data={dateData[currentDate].productivity.allProduct}
                          dataKey='value'
                          cx={300}
                          cy={200}
                          innerRadius={60}
                          outerRadius={100}
                          fill="#8884d8"
                          onMouseEnter={this.changeActiveIndex}>
                          {
                          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                          }
                        </Pie>
                      </PieChart>
                    </div>
                  </ResponsiveContainer>
                </Grid>
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default BarChartComp;
