import React, { Component } from 'react';
import './App.css';
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
    console.log("this.state in trail.js parent: ", this.state);
  }

  componentDidMount() {
    let user = this.props.user;
    let a = this;
    axios.get('rescuetime', {
      // data: rescuetimeApi
    }).then(function(response) {
      console.log('api key response: ', response);
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
        </div>
      );
    }
  }
}

export default Rescuetime;
