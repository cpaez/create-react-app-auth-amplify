import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import Anomalies from './components/anomalies';
Amplify.configure(aws_exports);

class App extends Component {

  state = {
    anomalies: []
  }

  getData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('https://a0ouvefenc.execute-api.us-east-1.amazonaws.com/TEST/predictanomaly', requestOptions)
    .then(res => res.json())
    .then((data) => {
      this.setState({ anomalies: data })
      console.log(data)
    })
    .catch(console.log)
  }

  componentDidMount() {
    this.getData();

    setInterval(this.getData, 30000); // runs every 30 seconds.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Anomalies anomalies={this.state.anomalies} />
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
