import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {

  state = {
    scores: []
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "data": [10844,8127,6210] })
    };
    fetch('https://a0ouvefenc.execute-api.us-east-1.amazonaws.com/TEST/detectanomaly', requestOptions)
    .then(res => res.json())
    .then((data) => {
      this.setState({ scores: data })
      console.log(data)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <iframe src="https://g-a1850b9265.grafana-workspace.us-east-1.amazonaws.com/d-solo/BXvoh8LGz/test-dashboard?orgId=1&refresh=5s&from=1612456659278&to=1612478259278&panelId=6" width="450" height="200" frameborder="0"></iframe>
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
