var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Trail = require('../models/rescutime');
var axios = require('axios');
const fetch = require("isomorphic-fetch");
const rescuetimeApi = process.env.Rescue_Time_API;

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('rescuetimeApi: ', rescuetimeApi);

//DATA
  // axios({
  //   method:'get',
  //   url:'https://www.rescuetime.com/anapi/data?key='+rescuetimeApi,
  //   responseType:'application/json'
  // })
  // .then(function(response) {
  //   console.log('response: ', response.data)
  //   res.send(response.data);
  // });

//DAILY SUMMARY
  axios({
    method:'get',
    url:'https://www.rescuetime.com/anapi/daily_summary_feed?key='+rescuetimeApi,
    responseType:'application/json'
  })
  .then(function(response) {
    // console.log('response: ', response.data)
    console.log('loading api data...');
    res.send(response.data);
  })
  .then(function(error) {
    console.log(error);
  })

  // fetch('https://www.rescuetime.com/anapi/daily_summary_feed?key='+rescuetimeApi)
  // .then(response => response.json())
  // .then(response => res.send(response))

});

module.exports = router;

//SUB-BAR
//very_productive_percentage
//productive_percentage
//neutral_percentage
//distracting_percentage

//PIE
//make labels
