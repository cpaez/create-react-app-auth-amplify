import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              width="1040"
              height="720"
              src="https://g-a1850b9265.grafana-workspace.us-east-1.amazonaws.com/dashboard/snapshot/Zd6Ge2VxhRjVPwNGfiiFavlHgp5mZnOd">
          </iframe>
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

export default withAuthenticator(App, true);
