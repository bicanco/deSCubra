import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './Login.js'
import Connection from './connectionFactory.js'
import './App.css';
import M from 'materialize-css';

class App extends Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username, password) {
    //var conn = new Connection.createDBConnection();
    // calling setState will re-render the entire app (efficiently!)
    console.log(username,password);
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginForm onSignIn={this.signIn.bind(this)} />
      </div>
    );
  }
}

export default App;
