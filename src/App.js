import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const authConfig = {
  signUpConfig: {
    hiddenDefaults: ['phone_number','username'],
    signUpFields: [
      {
        label: 'Password',
        key: 'password',
        required: true,
        type: 'password'
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        type: 'string'
      }
    ]
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, authConfig);
