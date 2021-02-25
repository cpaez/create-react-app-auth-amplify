import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import Players from './components/players';
Amplify.configure(aws_exports);

class App extends Component {

  state = {
    players: []
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "data": [10] })
    };
    fetch('https://a0ouvefenc.execute-api.us-east-1.amazonaws.com/TEST/predictanomaly', requestOptions)
    .then(res => res.json())
    .then((data) => {
      this.setState({ players: data })
      console.log(data)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <Players players={this.state.players} />
          </p>
          <p>
          <iframe src="https://g-a1850b9265.grafana-workspace.us-east-1.amazonaws.com/goto/nwVbUhyMk" width="450" height="200" frameborder="0"></iframe>
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
