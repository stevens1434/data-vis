import React, { Component } from 'react';
import './App.css';
import Logout from './Logout';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div className='container'>
        <p className='col'>Hello, {this.props.user.name}!</p>
        <a className='col' onClick={this.props.logout}>Logout</a>
      </div>
    );
  }
}

export default UserProfile;
