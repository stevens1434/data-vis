import React, { Component } from 'react';
import './App.css';
// import App from './App';
import BarChartComp from './BarChartComp';
import axios from 'axios';
// var unirest = require('unirest');
// var jQuery = require('jquery');
require('dotenv').config();
let rescuetimeApi;
let response;

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
    }).then(function(response) {
      a.setState({
        data: response.data
      })
    }).catch(function(err) {
      console.log("err: ", err);
    })
  }

  render() {
    let user = this.props.user;
    console.log('user: ', user);
    console.log('state: ', this.state.data);
    response = this.state.data;
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
    if (Object.keys(response).length === 0 || response === 'undefined') {
      return (
        <div onClick={this.change}>
          <h1>RescueTime</h1>
          <p>Welcome, {user.name}</p>
          <p>Loading...</p>
        </div>
      )
    } else {
      return (
        <div id='rescuetime-parent' onClick={this.change}>
          <h1>RescueTime</h1>
          <BarChartComp
            className='container'
            user={user}
            data={tempData}
            response={tempData}
          />
        </div>
      );
    }
  }
}

export default Rescuetime;
