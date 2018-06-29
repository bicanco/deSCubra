import React, { Component } from 'react';
import logo from './logo.svg';
import {PerfilParada} from './PerfilParada';
import LoginForm from './Login.js'
import {PerfilPercurso} from './PerfilPercurso';
//import Connection from './connectionFactory.js'
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
        <header >
            <PerfilPercurso />
        </header>
      </div>
    );
  }
}

export default App;
