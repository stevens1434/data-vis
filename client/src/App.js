import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { MuiThemeProvider, theme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import UserProfile from './UserProfile';
import Rescuetime from './Rescuetime';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  liftTokenToState(data) {
    this.setState({token: data.token, user: data.user})
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {}})
  }

  componentDidMount() {
    // If there is a token in localStorage
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token)
        this.setState({
          token: response.data.token,
          user: response.data.user
        })
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log(err)
      })
    }
  }

  render() {
    let user = this.state.user
    console.log('user in App.js: ', user);
    if (typeof this.state.user === 'object' && Object.keys(this.state.user).length !== 0) {
      return (
        <div className='App'>
          <UserProfile id='navbar' user={this.state.user} logout={this.logout} />
          <Rescuetime id='content' user={this.state.user} logout={this.logout} />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={12}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <AppBar position="fixed">
                  <Toolbar>
                    <span className='UserName'>
                      <Button className='UserName' color='inherit'>RescueTime</Button>
                    </span>
                    <Typography type="title" color="inherit" className='MenuTitle'>
                      Log In or Sign Up
                    </Typography>
                  </Toolbar>
                </AppBar>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className='SignupBox'>
                  <Signup lift={this.liftTokenToState} />
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className='LoginBox'>
                  <Login lift={this.liftTokenToState} />
                </div>
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default App;
